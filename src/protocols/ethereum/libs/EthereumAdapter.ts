/* eslint-disable class-methods-use-this */

import * as ecc from '@bitcoin-js/tiny-secp256k1-asmjs';
import { isAddress } from 'web3-validator';
import { toChecksumAddress, fromWei, toWei } from 'web3-utils';
import {
  privateKeyToAddress,
  FeeMarketEIP1559Transaction,
  FeeMarketEIP1559TxData,
  bigIntToHex,
} from 'web3-eth-accounts';
import Web3Eth, {
  NUMBER_DATA_FORMAT,
  getBalance,
  getTransactionCount,
  getTransaction,
  sendSignedTransaction,
  getBlock,
} from 'web3-eth';
import { DEFAULT_RETURN_FORMAT } from 'web3-types';
import { BIP32Factory } from 'bip32';

import type {
  AdapterNetworkSettingList,
  AssetContractId,
  IAccount,
  ICoin,
  IFetchTransactionResult,
  IHdWalletAccount,
  INetworkProtocolSettings,
  IToken,
  ITokenBalance,
  MarketData,
  NetworkTypeDefault,
} from '@/types';
import { PROTOCOLS } from '@/constants';
import { getLastNotEmptyAccountIndex } from '@/utils';
import Logger from '@/lib/logger';
import { BaseProtocolAdapter } from '@/protocols/BaseProtocolAdapter';
import { tg } from '@/popup/plugins/i18n';
import {
  ETH_COIN_NAME,
  ETH_COIN_PRECISION,
  ETH_COINGECKO_COIN_ID,
  ETH_CONTRACT_ID,
  ETH_GAS_LIMIT,
  ETH_NETWORK_DEFAULT_SETTINGS,
  ETH_NETWORK_DEFAULT_ENV_SETTINGS,
  ETH_PROTOCOL_NAME,
  ETH_SYMBOL,
} from '@/protocols/ethereum/config';
import { useEthNetworkSettings } from '../composables/ethNetworkSettings';
import { EtherscanExplorer } from './EtherscanExplorer';
import { EtherscanService } from './EtherscanService';
import { normalizeWeb3EthTransactionStructure } from '../helpers';
import { EthplorerService } from './EthplorerService';

export class EthereumAdapter extends BaseProtocolAdapter {
  override protocol = PROTOCOLS.ethereum;

  override protocolName = ETH_PROTOCOL_NAME;

  private bip32 = BIP32Factory(ecc);

  private networkSettings: AdapterNetworkSettingList = [
    {
      key: 'nodeUrl',
      testId: 'url',
      defaultValue: ETH_NETWORK_DEFAULT_ENV_SETTINGS.nodeUrl,
      getPlaceholder: () => tg('pages.network.networkUrlPlaceholder'),
      getLabel: () => tg('pages.network.networkUrlLabel'),
    },
    {
      key: 'chainId',
      defaultValue: ETH_NETWORK_DEFAULT_ENV_SETTINGS.chainId,
      validationRules: {
        url: false,
        is_hex_format: true,
      },
      getPlaceholder: () => tg('pages.network.chainIdPlaceholder'),
      getLabel: () => tg('pages.network.chainIdLabel'),
    },
  ];

  coinName = ETH_COIN_NAME;

  coinSymbol = ETH_SYMBOL;

  protocolSymbol = ETH_SYMBOL;

  async getTransactionCount(address: string): Promise<number> {
    const web3Eth = this.getWeb3EthInstance();
    const txCount = await getTransactionCount(web3Eth, address, 'pending', NUMBER_DATA_FORMAT);
    return txCount;
  }

  override getAccountPrefix() {
    return '0x';
  }

  override getAmountPrecision(): number {
    return ETH_COIN_PRECISION;
  }

  override getCoinGeckoCoinId() {
    return ETH_COINGECKO_COIN_ID;
  }

  override getExplorer() {
    const { ethActiveNetworkPredefinedSettings } = useEthNetworkSettings();
    return new EtherscanExplorer(ethActiveNetworkPredefinedSettings.value.explorerUrl!);
  }

  override getUrlTokenKey(): string {
    return ETH_CONTRACT_ID;
  }

  override getCoinContractId(): AssetContractId {
    return ETH_CONTRACT_ID;
  }

  override getDefaultCoin(
    marketData: MarketData,
    convertedBalance?: number,
  ): ICoin {
    return {
      ...(marketData?.[PROTOCOLS.ethereum] || {}),
      protocol: PROTOCOLS.ethereum,
      contractId: this.getCoinContractId(),
      symbol: this.coinSymbol,
      decimals: this.getAmountPrecision(),
      name: ETH_COIN_NAME,
      convertedBalance,
    };
  }

  override getNetworkSettings() {
    return this.networkSettings;
  }

  override getNetworkTypeDefaultValues(networkType: NetworkTypeDefault): INetworkProtocolSettings {
    return ETH_NETWORK_DEFAULT_SETTINGS[networkType];
  }

  override async fetchBalance(address: string): Promise<string> {
    const web3Eth = this.getWeb3EthInstance();
    const balanceInWei = await getBalance(web3Eth, address, 'latest', NUMBER_DATA_FORMAT);
    return fromWei(balanceInWei, 'ether').toString();
  }

  override isAccountAddressValid(address: string) {
    return isAddress(address);
  }

  override async isAccountUsed(address: string): Promise<boolean> {
    const [balance, txCount] = await Promise.all([
      await this.fetchBalance(address),
      this.getTransactionCount(address),
    ]);

    return (parseFloat(balance) > 0 || txCount > 0);
  }

  override getHdWalletAccountFromMnemonicSeed(
    seed: Uint8Array,
    accountIndex: number,
  ): IHdWalletAccount {
    const hdNodeWallet = this.bip32.fromSeed(Buffer.from(seed));
    const path = `m/44'/60'/${accountIndex}'/0/0`;
    const childWallet = hdNodeWallet.derivePath(path);

    const address = toChecksumAddress(privateKeyToAddress(childWallet.privateKey!).toString());

    return {
      secretKey: childWallet.privateKey!,
      publicKey: childWallet.publicKey,
      address,
    };
  }

  override async discoverLastUsedAccountIndex(seed: Uint8Array): Promise<number> {
    return getLastNotEmptyAccountIndex(
      this.isAccountUsed.bind(this),
      this.getHdWalletAccountFromMnemonicSeed.bind(this),
      seed,
    );
  }

  override async constructAndSignTx() {
    // TODO if needed
    return {} as any;
  }

  override async fetchAvailableTokens(): Promise<IToken[] | null> {
    const { ethActiveNetworkPredefinedSettings } = useEthNetworkSettings();
    const apiUrl = ethActiveNetworkPredefinedSettings.value.tokenMiddlewareUrl;
    try {
      // Temporary solution for fetching the ERC-20 tokens.
      // TODO Replace with our own node API
      return new EthplorerService(apiUrl).fetchTopTokens();
    } catch (error: any) {
      Logger.write(error);
      return null;
    }
  }

  override async fetchAccountTokenBalances(address: string): Promise<ITokenBalance[] | null> {
    const { ethActiveNetworkPredefinedSettings } = useEthNetworkSettings();
    const apiUrl = ethActiveNetworkPredefinedSettings.value.tokenMiddlewareUrl;
    try {
      // Temporary solution for fetching the ERC-20 token balances.
      // TODO Replace with our own node API
      return new EthplorerService(apiUrl).fetchAccountTokenBalances(address);
    } catch (error: any) {
      Logger.write(error);
      return null;
    }
  }

  override async fetchPendingTransactions() {
    // TODO if needed
    return [];
  }

  override async fetchTransactionByHash(hash: string) {
    const web3Eth = this.getWeb3EthInstance();
    const transaction = await getTransaction(web3Eth, hash, DEFAULT_RETURN_FORMAT);
    const block = await getBlock(web3Eth, transaction?.blockHash, true, DEFAULT_RETURN_FORMAT);
    const normalized = normalizeWeb3EthTransactionStructure(transaction, block);
    return normalized;
  }

  override async fetchTransactions(
    address: string,
    nextPageParams?: string | null,
  ): Promise<IFetchTransactionResult> {
    const { ethActiveNetworkPredefinedSettings } = useEthNetworkSettings();
    const apiUrl = ethActiveNetworkPredefinedSettings.value.middlewareUrl;
    const regularTransactions = await new EtherscanService(apiUrl)
      .fetchAccountTransactions(address, nextPageParams || undefined);

    return {
      regularTransactions,
      nextPageParams: nextPageParams ? String(Number(nextPageParams) + 1) : null,
    };
  }

  override async spend(
    amount: number,
    recipient: string,
    options: {
      fromAccount: IAccount;
      maxPriorityFeePerGas: string;
      maxFeePerGas: string;
    },
  ): Promise<{ hash: string }> {
    const { ethActiveNetworkSettings } = useEthNetworkSettings();
    const { chainId } = ethActiveNetworkSettings.value;
    const web3Eth = this.getWeb3EthInstance();
    const nonce = await this.getTransactionCount(options.fromAccount.address!);

    const hexAmount = bigIntToHex(BigInt(toWei(amount.toFixed(ETH_COIN_PRECISION), 'ether')));
    const maxPriorityFeePerGas = bigIntToHex(BigInt(toWei(options.maxPriorityFeePerGas, 'ether')));
    const maxFeePerGas = bigIntToHex(BigInt(toWei(options.maxFeePerGas, 'ether')));

    // All values are in wei
    const txData: FeeMarketEIP1559TxData = {
      chainId,
      nonce,
      to: recipient,
      value: hexAmount,
      data: '0x',
      maxPriorityFeePerGas,
      maxFeePerGas,
      gasLimit: `0x${ETH_GAS_LIMIT.toString(16)}`,
      type: '0x02',
    };

    const tx = FeeMarketEIP1559Transaction.fromTxData(txData);

    const signedTx = tx.sign(options.fromAccount.secretKey);

    const serializedTx = signedTx.serialize();
    const hash = `0x${Buffer.from(signedTx.hash()).toString('hex')}`;
    sendSignedTransaction(web3Eth, serializedTx, DEFAULT_RETURN_FORMAT);

    return { hash };
  }

  private getWeb3EthInstance(): Web3Eth {
    const { ethActiveNetworkSettings } = useEthNetworkSettings();
    const { nodeUrl } = ethActiveNetworkSettings.value;
    return new Web3Eth(nodeUrl);
  }
}
