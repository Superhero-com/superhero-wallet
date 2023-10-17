import {
  computed,
  ref,
} from 'vue';
import {
  AeSdk,
  Node,
  WALLET_TYPE,
  RpcRejectedByUserError,
  METHODS,
} from '@aeternity/aepp-sdk';
import type {
  INetwork,
  IResponseChallenge,
  IRespondChallenge,
  NetworkId,
} from '@/types';
import { AeSdkSuperhero } from '@/protocols/aeternity/libs/AeSdkSuperhero';
import { FramesConnection } from '@/lib/FramesConnection';
import { watchUntilTruthy } from '@/utils';
import {
  IN_FRAME,
  IS_EXTENSION,
  IS_EXTENSION_BACKGROUND,
  RUNNING_IN_TESTS,
  PROTOCOL_AETERNITY,
} from '@/constants';
import {
  AE_NETWORK_MAINNET_ID,
  AE_NETWORK_TESTNET_ID,
  DEX_CONTRACTS,
} from '@/protocols/aeternity/config';
import { useAeNetworkSettings } from '@/protocols/aeternity/composables';
import { useAccounts } from './accounts';
import { usePermissions } from './permissions';

let aeSdk: AeSdkSuperhero;
let aeSdkBlocked = false;
let storedNetworkName: string;

const nodeNetworkId = ref<NetworkId>();

const isAeSdkReady = ref(false);
const isAeNodeReady = ref(false);
const isAeNodeConnecting = ref(false);
const isAeNodeError = ref(false);

const aeppInfo: Record<string, any> = {};

let dryAeSdk: AeSdk;
let dryAeSdkCurrentNodeNetworkId: string;

export function useAeSdk() {
  const { aeActiveNetworkSettings, activeNetworkName } = useAeNetworkSettings();
  const {
    accountsAddressList,
    isLoggedIn,
    getLastActiveProtocolAccount,
  } = useAccounts();
  const { checkOrAskPermission } = usePermissions();

  const isNodeMainnet = computed(() => nodeNetworkId.value === AE_NETWORK_MAINNET_ID);
  const isNodeTestnet = computed(() => nodeNetworkId.value === AE_NETWORK_TESTNET_ID);
  const isNodeCustomNetwork = computed(() => !isNodeMainnet.value && !isNodeTestnet.value);

  const isTippingSupported = computed(() => (RUNNING_IN_TESTS || !isNodeCustomNetwork.value));

  const dexContracts = computed(
    () => nodeNetworkId.value ? DEX_CONTRACTS[nodeNetworkId.value] : undefined,
  );

  /**
   * Create Node instance and get connection status
   */
  async function createNodeInstance(url: string) {
    let nodeInstance;
    isAeNodeReady.value = false;
    isAeNodeError.value = false;
    isAeNodeConnecting.value = true;
    try {
      nodeInstance = new Node(url);
      nodeNetworkId.value = (await nodeInstance.getStatus()).networkId;
      isAeNodeReady.value = true;
    } catch (error) {
      nodeNetworkId.value = undefined;
      isAeNodeError.value = true;
      return null;
    }
    isAeNodeConnecting.value = false;
    return nodeInstance;
  }

  async function initAeSdk() {
    aeSdkBlocked = true;
    isAeSdkReady.value = false;

    await watchUntilTruthy(isLoggedIn);

    storedNetworkName = activeNetworkName.value;
    const nodeInstance = await createNodeInstance(aeActiveNetworkSettings.value.nodeUrl);

    aeSdk = new AeSdkSuperhero(
      {
        name: 'Superhero',
        nodes: [{
          name: activeNetworkName.value,
          instance: nodeInstance!,
        }],
        id: 'Superhero Wallet',
        type: IS_EXTENSION ? WALLET_TYPE.extension : WALLET_TYPE.window,
        onConnection(aeppId: string, params: any, origin: string) {
          aeppInfo[aeppId] = { ...params, origin };
        },
        onDisconnect(aeppId: string) {
          delete aeppInfo[aeppId];
        },
        async onSubscription(aeppId: string, params: any, origin: string) {
          const aepp = aeppInfo[aeppId];
          const host = IS_EXTENSION_BACKGROUND ? aepp.origin : origin;
          if (await checkOrAskPermission(host, METHODS.subscribeAddress)) {
            return getLastActiveProtocolAccount(PROTOCOL_AETERNITY)!.address;
          }
          return Promise.reject(new RpcRejectedByUserError('Rejected by user'));
        },
        async onAskAccounts(aeppId: string, params: any, origin: string) {
          const aepp = aeppInfo[aeppId];
          const host = IS_EXTENSION_BACKGROUND ? aepp.origin : origin;
          if (await checkOrAskPermission(host, METHODS.address)) {
            return accountsAddressList.value;
          }
          return Promise.reject(new RpcRejectedByUserError('Rejected by user'));
        },
      },
      nodeNetworkId,
    );

    if (IN_FRAME && !FramesConnection.initialized) {
      FramesConnection.init(aeSdk);
    }

    aeSdkBlocked = false;
    isAeSdkReady.value = true;
  }

  /**
   * Get the aeSdk instance. For now the SDK state is asynchronous.
   * TODO: this probably could be replaced with a computed prop.
   */
  async function getAeSdk(): Promise<AeSdkSuperhero> {
    if (aeSdkBlocked) {
      await watchUntilTruthy(isAeSdkReady);
    } else if (!aeSdk) {
      await initAeSdk();
    }
    return aeSdk;
  }

  /**
   * dryAeSdk is the aeSdk instance with no accounts attached.
   * To use for multisig operations.
   */
  async function getDryAeSdk(): Promise<AeSdk> {
    if (!dryAeSdk) {
      const nodeInstance = new Node(aeActiveNetworkSettings.value.nodeUrl, { ignoreVersion: true });
      dryAeSdk = new AeSdk({
        nodes: [{
          name: activeNetworkName.value,
          instance: nodeInstance,
        }],
      });
      dryAeSdkCurrentNodeNetworkId = await nodeInstance.getNetworkId();
      return dryAeSdk;
    }
    const networkId = await dryAeSdk.api.getNetworkId();
    if (dryAeSdkCurrentNodeNetworkId !== networkId) {
      dryAeSdk.pool.delete(storedNetworkName);
      const nodeInstance = new Node(aeActiveNetworkSettings.value.nodeUrl, { ignoreVersion: true });
      dryAeSdk.addNode(activeNetworkName.value, nodeInstance!, true);
      dryAeSdkCurrentNodeNetworkId = networkId;
    }
    return dryAeSdk;
  }

  async function fetchRespondChallenge(
    responseChallenge: IResponseChallenge,
  ): Promise<IRespondChallenge> {
    const aeSdkLocal = await getAeSdk();
    const signedChallenge = Buffer.from(
      await aeSdkLocal.signMessage(responseChallenge.challenge),
    ).toString('hex');

    return {
      challenge: responseChallenge.challenge,
      signature: signedChallenge,
    };
  }

  async function resetNode(oldNetwork: INetwork, newNetwork: INetwork) {
    aeSdk.pool.delete(oldNetwork.name);
    aeSdk.addNode(
      newNetwork.name,
      (await createNodeInstance(newNetwork.protocols.aeternity.nodeUrl))!,
      true,
    );
  }

  return {
    isAeNodeReady,
    isAeNodeConnecting,
    isAeNodeError,
    isNodeMainnet,
    isNodeTestnet,
    isAeSdkReady,
    nodeNetworkId,
    isTippingSupported,
    dexContracts,
    getAeSdk,
    getDryAeSdk,
    resetNode,
    fetchRespondChallenge,
    createNodeInstance,
  };
}
