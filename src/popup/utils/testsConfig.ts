import { SCHEMA } from '@aeternity/aepp-sdk';
import type { IPopupConfig } from '../../types';
import {
  AETERNITY_CONTRACT_ID,
  MAX_UINT256,
  NETWORK_TESTNET,
  POPUP_TYPE_CONNECT,
  POPUP_TYPE_SIGN,
  POPUP_TYPE_MESSAGE_SIGN,
  POPUP_TYPE_RAW_SIGN,
  STUB_ADDRESS,
  STUB_CONTRACT_ADDRESS,
  STUB_TOKEN_CONTRACT_ADDRESS,
} from './constants';

export const testAccount = {
  mnemonic: 'media view gym mystery all fault truck target envelope kit drop fade',
  address: 'ak_2fxchiLvnj9VADMAXHBiKPsaCEsTFehAspcmWJ3ZzF3pFK1hB5',
};

export const recipientId = 'ak_2ELPCWzcTdiyYuumjaV4D7kE843d1Ts27zH1Y2LBMKDbNtfq1Q';
export const contractCallAddress = 'ct_ym8eXWR2YfQZcMaXA8GFid9aarfCozGkeMcRHYVCVoBdVMzio';

export const STUB_CURRENCY = [{
  id: 'aeternity', symbol: 'ae', name: 'Aeternity', image: 'https://assets.coingecko.com/coins/images/1091/large/aeternity.png?1547035060', current_price: 0.076783, market_cap: 31487891, market_cap_rank: 523, fully_diluted_valuation: null, total_volume: 217034, high_24h: 0.078539, low_24h: 0.076793, price_change_24h: -0.001092194951687525, price_change_percentage_24h: -1.4025, market_cap_change_24h: -429134.39267925173, market_cap_change_percentage_24h: -1.34453, circulating_supply: 409885828.49932, total_supply: 536306702.0, max_supply: null, ath: 5.69, ath_change_percentage: -98.65091, ath_date: '2018-04-29T03:50:39.593Z', atl: 0.059135, atl_change_percentage: 29.84246, atl_date: '2020-03-13T02:29:11.856Z', roi: { times: -0.725775445642378, currency: 'usd', percentage: -72.57754456423778 }, last_updated: '2023-01-17T11:38:23.610Z',
}];

export const popupProps: Record<string, IPopupConfig> = {
  [POPUP_TYPE_CONNECT]: {
    type: POPUP_TYPE_CONNECT,
    app: {
      url: 'http://localhost:5000/aepp/aepp',
      name: 'AEPP',
      protocol: 'http:',
      host: 'localhost',
    },
  },
  [POPUP_TYPE_MESSAGE_SIGN]: {
    type: POPUP_TYPE_MESSAGE_SIGN,
    app: {
      url: 'http://localhost:5000/aepp/aepp',
      name: 'AEPP',
      protocol: 'http:',
      host: 'localhost',
    },
    message: 'test',
  },
  [POPUP_TYPE_RAW_SIGN]: {
    type: POPUP_TYPE_RAW_SIGN,
    app: {
      url: 'http://localhost:5000/aepp/aepp',
      name: 'AEPP',
      protocol: 'http:',
      host: 'localhost',
    },
    data: 'test',
  },
  [POPUP_TYPE_SIGN]: {
    type: POPUP_TYPE_SIGN,
    app: {
      url: 'http://localhost:5000/aepp/aepp',
      name: 'AEPP',
      protocol: 'http:',
      host: 'localhost',
    },
    transaction: {
      tag: '12',
      VSN: '1',
      senderId: testAccount.address,
      recipientId,
      amount: 1000000000000000,
      fee: 16820000000000,
      nonce: 190,
      payload: 'ba_Xfbg4g==',
    },
  },
  base: {
    type: 'sign',
    action: { params: { returnSigned: false }, method: 'transaction.sign' },
    app: {
      url: 'http://localhost:5000/aepp/aepp',
      name: 'AEPP',
      protocol: 'http:',
      host: 'localhost',
    },
  },
};

const commonParams = {
  amount: 100000000000000000,
  ttl: MAX_UINT256,
  nonce: MAX_UINT256,
  fee: 10000000000000000,
  gas: 1579000,
  gasPrice: 1000000000,
  waitMined: true,
  denomination: 'aettos',
  clientTtl: 84600,
  nameTtl: 50000,
  nameFee: 0,
  deposit: 0,
  options: '',
  dryRunAccount: {
    pub: 'ak_11111111111111111111111111111111273Yts',
    amount: 100000000000000000000000000000000000,
  },
  queryFee: 30000,
  oracleTtl: {
    type: 'delta',
    value: 500,
  },
  queryTtl: {
    type: 'delta',
    value: 10,
  },
  responseTtl: {
    type: 'delta',
    value: 10,
  },
  ctVersion: { abiVersion: SCHEMA.ABI_VERSIONS.SOPHIA, vmVersion: SCHEMA.VM_VERSIONS.SOPHIA },
  abiVersion: SCHEMA.ABI_VERSIONS.SOPHIA,
  callData:
    'cb_AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACDJfUrsdAtW6IZtMvhp0+eVDUiQivrquyBwXrl/ujPLcgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJQQwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACUEMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJvjRF',
};
export const txParams = {
  [SCHEMA.TX_TYPE.contractCreate]: {
    ownerId: testAccount.address,
    code:
      'cb_+LBGA6DK15BWhAK4E5OWH1kkfhQIx/qEDTVv8hrfY/bk13cN88C4g7hT/iiALJYANwGXQDcAGgaCAAEDP/5E1kQfADcANwAaDoKfAYEKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqgEDP/6LoCthADcAl0ABAoKqLwMRKIAsliVzZXRfYnl0ZXMRRNZEHxFpbml0EYugK2ElZ2V0X2J5dGVzgi8AhTQuMi4wABHX/Rk=',
    ...commonParams,
  },
  [SCHEMA.TX_TYPE.contractCall]: {
    contractId: contractCallAddress,
    callerId: testAccount.address,
    ...commonParams,
  },
  [SCHEMA.TX_TYPE.spend]: {
    senderId: testAccount.address,
    recipientId,
    ...commonParams,
  },
};

export const transactions = {
  spend: {
    tx: {
      amount: 10000000000000,
      fee: 16780000000000,
      type: 'SpendTx',
      senderId: STUB_ADDRESS,
      recipientId: testAccount.address,
    },
  },
  tip: {
    tx: {
      amount: 10000000000000000,
      arguments: [
        {
          type: 'string',
          value: 'https://example.com',
        },
        {
          type: 'string',
          value: '',
        },
      ],
      callerId: STUB_ADDRESS,
      contractId: NETWORK_TESTNET.tipContractV1,
      fee: 183820000000000,
      function: 'tip',
      type: 'ContractCallTx',
    },
  },
  retip: {
    tx: {
      amount: 200000000000000000,
      arguments: [
        {
          type: 'int',
          value: 3,
        },
      ],
      callerId: STUB_ADDRESS,
      contractId: NETWORK_TESTNET.tipContractV1,
      fee: 182200000000000,
      function: 'retip',
      type: 'ContractCallTx',
    },
  },
  tipToken: {
    tx: {
      amount: 0,
      arguments: [
        {
          type: 'string',
          value: 'https://github.com/thepiwo',
        },
        {
          type: 'string',
          value: 'great work!',
        },
        {
          type: 'contract',
          value: STUB_TOKEN_CONTRACT_ADDRESS,
        },
        {
          type: 'int',
          value: 10000000000000000,
        },
      ],
      callerId: STUB_ADDRESS,
      contractId: NETWORK_TESTNET.tipContractV2,
      fee: 183720000000000,
      function: 'tip_token',
      type: 'ContractCallTx',
    },
  },
  retipToken: {
    tx: {
      amount: 0,
      arguments: [
        {
          type: 'int',
          value: 3263,
        },
        {
          type: 'contract',
          value: STUB_TOKEN_CONTRACT_ADDRESS,
        },
        {
          type: 'int',
          value: 10000000000000000,
        },
      ],
      callerId: STUB_ADDRESS,
      contractId: NETWORK_TESTNET.tipContractV2,
      fee: 183000000000000,
      function: 'retip_token',
      type: 'ContractCallTx',
    },
  },
  claim: {
    claim: true,
    tx: {
      amount: 0,
      arguments: [
        {
          type: 'string',
          value: 'https://example.com',
        },
        {
          type: 'address',
          value: STUB_ADDRESS,
        },
        {
          type: 'bool',
          value: 'false',
        },
      ],
      callerId: STUB_ADDRESS,
      contractId: STUB_CONTRACT_ADDRESS,
      fee: 183640000000000,
      function: 'claim',
      type: 'ContractCallTx',
    },
  },
  transfer: {
    tx: {
      arguments: [
        {
          type: 'address',
          value: testAccount.address,
        },
        {
          type: 'int',
          value: 1000000000000000000,
        },
      ],
      fee: 16780000000000,
      callerId: STUB_ADDRESS,
      contractId: STUB_TOKEN_CONTRACT_ADDRESS,
      function: 'transfer',
      type: 'ContractCallTx',
    },
  },
  createAllowance: {
    tx: {
      amount: 0,
      arguments: [
        {
          type: 'address',
          value: STUB_ADDRESS,
        },
        {
          type: 'int',
          value: 1050000000000000000,
        },
      ],
      callerId: STUB_ADDRESS,
      contractId: STUB_TOKEN_CONTRACT_ADDRESS,
      fee: 182920000000000,
      function: 'create_allowance',
      type: 'ContractCallTx',
    },
  },
  changeAllowance: {
    tx: {
      amount: 0,
      fee: 16780000000000,
      arguments: [
        {
          type: 'address',
          value: STUB_ADDRESS,
        },
        {
          type: 'int',
          value: 99900000000000000,
        },
      ],
      contractId: STUB_TOKEN_CONTRACT_ADDRESS,
      function: 'change_allowance',
      type: 'ContractCallTx',
    },
  },
  namePreclaim: {
    tx: {
      accountId: STUB_ADDRESS,
      commitmentId: 'cm_21m1rLtN2fNT3ovBbWBQo88rPUhbmWWv6L96Z8KH2YGiEkabtZ',
      fee: 16620000000000,
      type: 'NamePreclaimTx',
    },
  },
  nameClaim: {
    tx: {
      accountId: STUB_ADDRESS,
      fee: 16560000000000,
      name: 'test.chain',
      nameFee: 51422900000000000000,
      nameId: 'nm_cVjoMBVH5UAthDx8hEijr5dF21yex6itrxbZZUMaftL941g9G',
      type: 'NameClaimTx',
    },
  },
  nameTransfer: {
    tx: {
      accountId: STUB_ADDRESS,
      fee: 17340000000000,
      name: 'test.chain',
      nameId: 'nm_cVjoMBVH5UAthDx8hEijr5dF21yex6itrxbZZUMaftL941g9G',
      recipientId: STUB_ADDRESS,
      type: 'NameTransferTx',
    },
  },
  incompleteTransfer: {
    incomplete: true,
    tx: {
      amount: 195697771897021980,
      callerId: STUB_ADDRESS,
      contractId: STUB_TOKEN_CONTRACT_ADDRESS,
      recipientId: testAccount.address,
      senderId: STUB_ADDRESS,
      function: 'transfer',
      type: 'ContractCallTx',
    },
  },
  pendingSpend: {
    pending: true,
    tx: {
      amount: 743000000000000000,
      senderId: STUB_ADDRESS,
      recipientId: testAccount.address,
      type: 'SpendTx',
    },
  },
  pendingTransfer: {
    pending: true,
    type: 'spendToken',
    tx: {
      amount: 195697771897021980,
      callerId: STUB_ADDRESS,
      contractId: STUB_TOKEN_CONTRACT_ADDRESS,
      recipientId: testAccount.address,
      function: 'transfer',
      type: 'ContractCallTx',
    },
  },
  pendingTipAe: {
    pending: true,
    tx: {
      amount: 195697771897021980,
      callerId: STUB_ADDRESS,
      contractId: NETWORK_TESTNET.tipContractV1,
      function: 'tip',
      type: 'ContractCallTx',
      selectedTokenContractId: AETERNITY_CONTRACT_ID,
    },
  },
  pendingTipToken: {
    pending: true,
    tipUrl: 'http://superhero.com',
    tx: {
      amount: 195697771897021980,
      callerId: STUB_ADDRESS,
      contractId: NETWORK_TESTNET.tipContractV2,
      function: 'tip',
      type: 'ContractCallTx',
      selectedTokenContractId: STUB_TOKEN_CONTRACT_ADDRESS,
    },
  },
  payForGaAttach: {
    tx: {
      fee: 5560000000000,
      tx: {
        tx: {
          fee: 163660000000000,
          type: 'GAAttachTx',
        },
      },
      type: 'PayingForTx',
      version: 1,
    },
  },
  gaMetaSpend: {
    tx: {
      fee: 76440000000000,
      gaiId: STUB_ADDRESS,
      tx: {
        tx: {
          amount: 2341200000000000,
          fee: 16800000000000,
          recipientId: STUB_ADDRESS,
          senderId: STUB_ADDRESS,
          type: 'SpendTx',
        },
      },
      type: 'GAMetaTx',
    },
  },
};
