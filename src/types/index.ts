/*
  eslint-disable
    camelcase,
    no-unused-vars,
*/

import Vue, { ComponentOptions } from 'vue';
import { RouteLocationRaw } from 'vue-router';
import { LocaleMessages, TranslateResult } from 'vue-i18n';
import BigNumber from 'bignumber.js';
import { Store } from 'vuex';
import { ContractMethodsBase, Encoded } from '@aeternity/aepp-sdk-13';
import type { CoinGeckoMarketResponse } from '../lib/CoinGecko';
import {
  POPUP_TYPES,
  INPUT_MESSAGE_STATUSES,
  MULTISIG_CREATION_PHASES,
  TX_FUNCTIONS,
  FUNCTION_TYPE_MULTISIG,
  ALLOWED_ICON_STATUSES,
} from '../popup/utils';

export * from './cordova';
export * from './router';
export * from './filter';
export * from './forms';

export type Dictionary<T = any> = Record<string, T>;

export type Truthy<T> = T extends false | '' | 0 | null | undefined ? never : T;

/**
 * Convert `key: val` objects into union of values.
 */
export type ObjectValues<T> = T[keyof T];

/**
 * Generic that allows to pick only the public properties of a class.
 */
type PublicPart<T> = { [K in keyof T]: T[K] };

/**
 * Allowed options that can be passed to our fetch utility functions
 */
export interface IRequestInitBodyParsed extends Omit<RequestInit, 'body'> {
  body?: object;
}

type GenericApiMethod<T = any> = (...args: any) => Promise<T>;

export type ResolveRejectCallback = (...args: any) => void;

export type VueAnyComponent = typeof Vue | ComponentOptions<Vue> | {
  functional: boolean;
  render: any;
}

/**
 * Replacement for the regular `BigNumber` which was causing some issues
 * because of the private properties of the class.
 */
export type BigNumberPublic = PublicPart<BigNumber> | BigNumber;

export type Balance = BigNumberPublic;
export type BalanceRaw = string;

export interface IPageableResponse<T> {
  data: T[];
  next: string;
}

export interface IAppData {
  name: string;
  url: string;
  host: string;
  protocol?: string;
}

export interface IWallet {
  privateKey: any;
  chainCode: any;
}

export type InputMessageStatus = ObjectValues<typeof INPUT_MESSAGE_STATUSES>;

/**
 * Input fields message prop type
 */
export interface IInputMessage {
  status?: InputMessageStatus
  text?: string
  hideMessage?: boolean
}

export type IInputMessageRaw = string | IInputMessage;

/**
 * Fungible tokens that are available in currently used network.
 */
export interface IToken {
  contractId: string;
  contract_txi?: number;
  convertedBalance?: number; // Amount of the token that is owned
  decimals: number;
  event_supply?: number;
  extensions?: string[];
  holders?: number;
  image?: string;
  initial_supply?: number;
  name: string;
  symbol: string;
  text?: string; // TODO determine if we can remove this
  value?: string; // TODO copy of the contractId, maybe we should remove it
}

export interface ITokenResolved extends Partial<IToken> {
  amount?: number;
  isAe?: boolean;
  isPool?: boolean;
  isReceived?: boolean;
  symbol: string; // Ensure its present in the current interface
}

export type ITokenList = Record<string, IToken>

/**
 * Coins are specific to the network user can connect to. We assume each network
 * can have only one coin and many tokens.
 * TODO: Put the CoinGecko data in a separate property.
 */
export type ICoin = IToken & Omit<CoinGeckoMarketResponse, 'image'>;

/**
 * In general the "Asset" is any form of coin or fungible token we use in the app.
 */
export type IAsset = ICoin | IToken;

export type AccountKind = 'basic'; // TODO establish other possible values

/**
 * Account stored on the application store.
 */
export interface IAccount {
  address: string
  idx?: number
  name: string // .chain
  publicKey: Uint8Array
  secretKey: Uint8Array
  showed: boolean
  type: string
}

/**
 * Account fetched from the node with the use of `sdk.api.getAccountByPubkey`
 */
export interface IAccountFetched {
  balance: string;
  id: string; // ak_* hash
  kind: AccountKind;
  nonce: number;
  payable: boolean;
}

export interface IAccountLabeled extends Partial<IAccount> {
  url?: string
  label?: TranslateResult
}

export interface IMultisigConsensus {
  confirmationsRequired: number;
  confirmedBy: string[];
  expirationHeight: number;
  expired: boolean;
  proposedBy: string;
  txHash?: string;
}

export interface IMultisigAccountResponse {
  contractId: string;
  createdAt: string; // Date
  gaAccountId: string; // Generalized Account used as the Multisig Account
  height: number;
  id: number;
  signerId: string;
  updatedAt: string; // Date
  version: string; // X.X.X
}

/**
 * Our internal account data composed out of data collected from external sources.
 */
export interface IMultisigAccount extends IMultisigConsensus, IMultisigAccountResponse {
  balance: Balance;
  refusedBy?: string[];
  nonce: number;
  signers: string[];
  hasPendingTransaction: boolean;
  pending?: boolean;
}

export interface IRawMultisigAccount {
  multisigAccountCreationEncodedCallData?: string;
  signedAttachTx?: string;
  rawTx?: string;
}

export interface INetworkBase {
  /**
   * Node backend URL
   */
  url: string;
  /**
   * Unique name provided by the user
   */
  name: string;
  middlewareUrl: string;
  /**
   * TODO: Replace with different way of differentiating the networks
   */
  networkId: string;
  compilerUrl: string;
  /**
   * Tipping backend URL
   */
  backendUrl: string;
  index?: number;
}

export interface INetwork extends INetworkBase {
  explorerUrl: string
  tipContractV1: Encoded.ContractAddress
  tipContractV2?: Encoded.ContractAddress
  multisigBackendUrl: string
}

export interface IPermission {
  address: boolean
  host: string
  messageSign: boolean
  name: string
  dailySpendLimit: boolean
  transactionSignFirstAskedOn: any
  transactionSignLimit: number
  transactionSignLimitLeft: number
}

export type NotificationStatus = 'CREATED' | 'PEEKED' | 'READ';

export interface INotification {
  wallet?: boolean
  senderName?: string
  receiverName?: string
  createdAt: string
  entityId?: string
  entityType?: string
  id?: number
  path?: RouteLocationRaw
  receiver?: string
  sender?: string
  sourceId?: string
  sourceType?: string
  status: NotificationStatus
  text?: string | TranslateResult
  type: string
  updatedAt?: string
  isSeedBackup?: boolean
  buttonLabel?: TranslateResult,
  title?: TranslateResult,
}

export interface INotificationSetting {
  text: TranslateResult
  checked: boolean
  type: string
}

export type CurrencyCode = 'usd' | 'eur' | 'aud' | 'brl' | 'cad' | 'chf' | 'cny' | 'czk' | 'dkk' | 'gbp' | 'hkd' | 'huf' | 'idr' | 'ils' | 'inr' | 'jpy' | 'krw' | 'mxn' | 'myr' | 'nok' | 'nzd' | 'php' | 'pln' | 'rub' | 'sek' | 'sgd' | 'thb' | 'try' | 'zar' | 'xau';

export interface ICurrency {
  name: string;
  code: CurrencyCode;
  symbol: string;
}

export type CurrencyRates = Record<CurrencyCode, number>;

export interface ITxArguments {
  type: 'tuple' | 'list'
  value: any // TODO find type, this was not correct: (string | number | any[])
}

/**
 * TxFunction names coming directly from the API or ready to be sent.
 */
export type TxFunctionRaw = ObjectValues<typeof TX_FUNCTIONS>;

/**
 * TxFunctions used internally by the app.
 */
export type TxFunctionParsed = keyof typeof TX_FUNCTIONS;

export type TxFunction = TxFunctionRaw | TxFunctionParsed;

export type TxType =
  | 'SpendTx'
  | 'ContractCreateTx'
  | 'ContractCallTx'
  | 'NameBidTx'
  | 'NamePreclaimTx'
  | 'NameClaimTx'
  | 'NameUpdateTx'
  | 'NameTransferTx'
  | 'NameRevokeTx'
  | 'OracleRegisterTx'
  | 'OracleExtendTx'
  | 'OraclePostQueryTx'
  | 'OracleRespondTx'
  | 'ChannelCloseSoloTx'
  | 'ChannelSlashTx'
  | 'ChannelSettleTx'
  | 'ChannelSnapshotSoloTx'
  | 'PayingForTx'
  | 'GAAttachTx'
  | 'GAMetaTx';

export interface IGAAttachTx {
  contractId: string;
  fee: number;
  gas: number;
  gasPrice: number;
  gasUsed: number;
  nonce: number;
  ownerId: string;
  returnType: string;
  type: string;
  version: number;
}
export interface IGAMetaTx {
  amount: string;
  fee: number;
  nonce: number;
  payload: string;
  recipientId: string;
  senderId: string;
  type: string;
  version: number;
}

export interface ITx {
  abiVersion: number
  accountId?: string
  amount: number
  arguments: ITxArguments[]
  callData?: string // TODO find source
  call_data?: string // TODO incoming data is parsed with the use of camelcaseDeep, but not always
  callerId: string
  code: string
  commitmentId: any
  contractId: string
  fee: number
  function?: TxFunction
  gaId?: string; // Generalized Account ID
  gas: number
  gasPrice: number
  gasUsed: number
  log?: any[] // TODO find source
  name: any
  nameFee: number
  nameId: any
  nameSalt: string
  nonce: number
  payerId?: string
  payload?: string
  pointers: any
  result: string;
  return: ITxArguments
  returnType: string
  recipientId?: string
  senderId?: string
  selectedTokenContractId?: string
  tag?: string; // Allows to establish the transaction type
  type: TxType; // Custom property we add after unpacking the Tx
  tx?: {
    signatures: string[];
    tx: ITx | IGAAttachTx | IGAMetaTx;
  }
  VSN: string;
}

export interface ITransaction {
  blockHeight: number;
  claim: any; // TODO find type
  hash: string;
  incomplete?: boolean;
  microIndex: number;
  microTime: number;
  pending: boolean; // There are cases that not only the IPendingTransaction can be pending
  rawTx?: any; // TODO find type
  tipUrl?: string;
  transactionOwner?: string;
  tx: ITx;
  url?: string;
}

export interface IStoreTransactions {
  loaded: ITransaction[];
  nextPageUrl?: string;
}

export interface IDashboardTransaction extends ITransaction {
  direction?: 'received' | 'send'
}

export type PendingTransactionType = 'spend' | 'spendToken';

export interface IPendingTransaction {
  hash: string;
  type?: PendingTransactionType;
  recipient?: string;
  incomplete?: boolean;
  pending: true;
  pendingTokenTx?: boolean;
  tipUrl?: string;
  tx: Partial<ITx>;
}

export interface IAccountOverView extends Partial<IAccount> {
  url?: string;
  contractCreate?: boolean;
  aens?: boolean;
  label: TranslateResult;
}

export interface IActiveMultisigTransaction extends IMultisigAccount {
  totalConfirmations: number;
  hash?: string;
  tx?: ITx;
  isMultisigTransaction: boolean;
  microTime?: number;
}

export interface ITransactionOverview {
  sender: IAccountOverView | IAccount;
  recipient: IAccountOverView | IAccount;
  title: TranslateResult;
  function?: any;
}

export interface IDexContracts {
  router: string[];
  wae: string[];
}

export type ICommonTransaction = ITransaction | IActiveMultisigTransaction

export type ITransactionsState = {
  loaded: ITransaction[];
  nextPageUrl?: string;
  pending: ITransaction[];
  tipWithdrawnTransactions: ITransaction[];
}

/**
 * Browser popup window names
 */
export type IPopupType = typeof POPUP_TYPES[number];

export interface ITopHeader {
  hash: string
  height: number
  pofHash: string
  prevHash: string
  prevKeyHash: string
  signature: string
  stateHash: string
  time: number
  txsHash: string
  version: number
}

export type ISignMessage = (m: any) => Promise<any>

export interface IName {
  autoExtend: boolean;
  createdAtHeight: number;
  expiresAt: number;
  hash: string;
  name: string;
  owner: string;
  pointers: Dictionary;
}

/**
 * Data fetched with the use of `sdk.api.getNameEntryByName` method.
 */
export interface INameEntryFetched {
  id: string;
  owner: string;
  pointers: { id: string; key: string }[];
  ttl: number;
}

/**
 * Temporary typing for the SDK used in the app.
 * TODO remove after migrating to SDK v12
 */
export interface ISdk {
  addNode: (name: string, node: any, select: boolean) => void;
  addRpcClient: (connection: any) => any;
  Ae: Dictionary;
  aensClaim: (name: string, salt: string, options?: any) => Promise<any>;
  aensPreclaim: (name: string) => Promise<any>;
  aensQuery: (name: string) => Promise<any>;
  api: Record<string, GenericApiMethod>;
  balance: (address: string, options?: any) => Promise<number>;
  compilerApi: Record<string, (...args: any[]) => Promise<any>>;
  getAccount: (publicKey: any) => Promise<any>
  gaAttachTx: (options: {
    ownerId: any
    code: any
    callData: any
    authFun: any
    gas: any
    options: { innerTx: boolean }
  }) => Promise<any>
  getContractInstance: (o: any) => Promise<any>
  getContractByteCode: (contractId: string) => Promise<{ bytecode: any }>
  getNetworkId: () => string
  payForTransaction: (
    rawTx: string,
    options: {
      waitMined: boolean;
      modal: boolean;
      innerTx?: boolean;
    }
  ) => Promise<{ hash: string, rawTx: string }>;
  payingForTx(arg0: any): any;
  poll: (txHash: string, options?: any) => any;
  pool: Map<string, any>;
  rpcClients: any[];
  shareWalletInfo: (c: any) => any;
  signTransaction: (t: any, o: any) => Promise<any>;
  signMessage: ISignMessage;
  send: (
    tx: any,
    options?: {
      innerTx?: boolean;
      onAccount: string;
      authData?: any;
    }
  ) => Promise<ITransaction>;
  sendTransaction: (t: any, o: any) => Promise<any>;
  selectedNode: {
    consensusProtocolVersion: number;
    instance: any; // Node instance
    internalUrl?: any;
    name: string; // Testnet / Mainnet
    networkId: string; // ae_uat / ae_mainnet
    url: string;
    version: string;
  };
  spend: (a: any, r: any, o: any) => Promise<any>;
  spendTx: (a: any) => Promise<any>;
  address: () => Promise<string>;
  aensBid: (name: string, aettos: any) => Promise<any>;
}

/**
 * Middleware v1 autogenerated endpoints.
 * TODO: Update the list after migrating to v2.
 */
export interface IMiddleware {
  getActiveNames: GenericApiMethod;
  getActiveOracles: GenericApiMethod;
  getAllAuctions: GenericApiMethod;
  getAllNames: GenericApiMethod;
  getBlockByHash: GenericApiMethod;
  getBlockByKbi: GenericApiMethod;
  getBlockByKbiAndMbi: GenericApiMethod;
  getBlocks: GenericApiMethod;
  getCurrentTxCount: GenericApiMethod;
  getInactiveOracles: GenericApiMethod;
  getName: GenericApiMethod;
  getNamePointees: GenericApiMethod;
  getNamePointers: GenericApiMethod;
  getNames: (address: string) => Promise<any>;
  getOracle: GenericApiMethod;
  getOracles: GenericApiMethod;
  getStatus: GenericApiMethod;
  getTxs: GenericApiMethod;
  getTx: (hash: string) => Promise<any>;
  getTxByIndex: GenericApiMethod;
  getTxCountById: GenericApiMethod;
  getTxsByDirection: GenericApiMethod;
  getTxsByScope: GenericApiMethod;
}

export interface IMiddlewareStatus {
  mdwAsyncTasks: Record<string, number>
  mdwGensPerMinute: number
  mdwHeight: number
  mdwRevision: string
  mdwSynced: boolean
  mdwSyncing: boolean
  mdwTxIndex: number
  mdwVersion: string
  nodeHeight: number
  nodeProgress: number
  nodeRevision: string
  nodeSyncing: boolean
  nodeVersion: string
}

export interface IPopupConfig {
  type: string;
  app: IAppData;
  action?: any;
  data?: string;
  message?: string;
  transaction?: Partial<ITx>;
  resolve?: any;
  reject?: any;
}

export interface IResponseChallenge {
  challenge: string
  payload: string
}

export interface IRespondChallenge {
  challenge: string
  signature: string
}

export interface IAuctionBid {
  accountId: string
  nameFee: BigNumber
}

export interface IAuction {
  bids: IAuctionBid[]
  expiration: number
}

export interface IActiveAuctionBid {
  accountId: string
  fee: number
  name: string
  nameFee: string
  nameId: string
  nameSalt: number
  nonce: number
  ttl: number
  type: string
  version: number
}

export interface IActiveAuction {
  expiration: number
  lastBid: IActiveAuctionBid
  name: string
}

export type IMultisigCreationPhase = keyof typeof MULTISIG_CREATION_PHASES | null;

export type IMultisigFunctionTypes = keyof typeof FUNCTION_TYPE_MULTISIG;

export interface ICreateMultisigAccount {
  address: string;
}

export interface IRawMultisigTx {
  id: number
  hash: string
  tx: string
  createdAt: Date
  updatedAt: Date
}

export interface IKeyPair {
  publicKey: string;
  secretKey: string;
}

export interface ILabel {
  text: string | LocaleMessages | TranslateResult,
  customPending?: string | LocaleMessages | TranslateResult
  hasComma?: boolean;
}

export interface IDefaultComposableOptions {
  /**
   * TODO: Temporary solution to avoid dependency circle
   */
  store: Store<any>
}

export type StatusIconType = typeof ALLOWED_ICON_STATUSES[number];

export interface TippingV1ContractApi extends ContractMethodsBase {
  unclaimed_for_url: (url: string) => string;
  tip: (recipientId: Encoded.AccountAddress, note: string) => void;
  retip: (tipId: number) => void;
}

export interface TippingV2ContractApi extends TippingV1ContractApi {
  tip_token: (
    recipientId: Encoded.AccountAddress,
    note: string,
    contacttId: Encoded.ContractAddress,
    amount: string
  ) => Encoded.TxHash;
  retip_token: (
    id: number,
    contactId: Encoded.ContractAddress,
    amount: number
  ) => Encoded.TxHash;
}
