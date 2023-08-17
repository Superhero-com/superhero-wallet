import type { IHdWalletAccount } from '@/types';

/**
 *  Represents common attributes and behavior of a protocol
 */
export abstract class BaseProtocolAdapter {
  abstract getCoingeckoCoinId(): string;

  abstract getCoinSymbol(getShort: boolean): string;

  abstract getBalance(address: string): Promise<string>;

  /**
   * Check whether the network has encountered this account.
   * @param address Account address
   */
  abstract isAccountUsed(address: string): Promise<boolean>;

  /**
   * Generate account from Mnemonic
   * @param seed 12 word seed array buffer
   * @param accountIndex Account Index in derivation path
   */
  abstract getHdWalletAccountFromMnemonicSeed(
    seed: Uint8Array,
    accountIndex: number
  ): IHdWalletAccount;

  /**
   * Discover accounts that have been used in the past
   * @param seed 12 word seed array buffer
   * @returns Array of used accounts
   */
  abstract discoverAccounts(seed: Uint8Array): Promise<number>;
}
