import { toOutputScript } from 'bitcoinjs-lib/src/address';
import { networks } from 'bitcoinjs-lib';
import type { ITransaction } from '@/types';
import { PROTOCOL_BITCOIN } from '@/constants';
import { BTC_COIN_PRECISION } from '../config';

export function satoshiToBtc(amount: number) {
  return amount / 10 ** BTC_COIN_PRECISION;
}

export function isBtcAddressValid(address: string, networkType: string) {
  try {
    const network = networks[networkType as keyof typeof networks];
    toOutputScript(address, network);
    return true;
  } catch (error) {
    return false;
  }
}

export function normalizeTransactionStructure(
  transaction: any,
  transactionOwner?: string,
): ITransaction {
  const {
    fee,
    status,
    txid,
    vin,
    vout,
  } = transaction;

  return {
    protocol: PROTOCOL_BITCOIN,
    transactionOwner: transactionOwner as any,
    hash: txid, // TODO: we can go with additional field
    microTime: status.block_time * 1000,
    pending: !status.confirmed,
    tx: {
      amount: satoshiToBtc(vout[0].value),
      fee,
      senderId: vin[0].prevout.scriptpubkey_address,
      recipientId: vout[0].scriptpubkey_address,
      type: 'SpendTx', // TODO: create own types
      arguments: [],
      callerId: '' as any,
      contractId: '' as any,
    },
  };
}
