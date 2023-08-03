/**
 * All utility helper functions.
*/

/* eslint-disable no-use-before-define */

import { WatchSource, watch } from 'vue';
import { defer } from 'lodash-es';
import BigNumber from 'bignumber.js';
import { useI18n } from 'vue-i18n';
import type {
  BigNumberPublic,
  IAccount,
  ICommonTransaction,
  IDashboardTransaction,
  IPageableResponse,
  IRequestInitBodyParsed,
  Truthy,
} from '@/types';
import { LOCAL_STORAGE_PREFIX, TX_DIRECTION } from '@/constants';
import { tg } from '@/store/plugins/languages';

export function amountRounded(rawAmount: number | BigNumberPublic): string {
  let amount = rawAmount;
  if (typeof rawAmount !== 'object') {
    amount = new BigNumber(rawAmount);
  }

  if (new BigNumber(amount).lt(0.01) && amount.toString().length < 9 + 2) {
    return amount.toFixed();
  }
  return amount.toFixed(new BigNumber(amount).lt(0.01) ? 9 : 2);
}

export function blocksToRelativeTime(blocks: number) {
  return secondsToRelativeTime(blocks * 3 * 60);
}

export function calculateFontSize(amountValue: BigNumber | number) {
  const amountLength = amountRounded(amountValue).replace(/\D/g, '').length;

  if (amountLength <= 8) {
    return '18px';
  }
  if (amountLength <= 11) {
    return '16px';
  }
  if (amountLength <= 14) {
    return '14px';
  }
  return '12px';
}

/**
 * Check if the image is available by making a HEAD request.
 * Needed for Cordova because when using <img /> tag and the image is not available
 * the DOM ready event is not fired.
 */
export function checkImageAvailability(url: string): Promise<boolean> {
  // TODO: use { method: 'HEAD'} when backend will introduce a proper response in such case
  return fetch(url)
    .then((response) => !!response.ok)
    .catch(() => false);
}

export function compareCaseInsensitive(str1?: string, str2?: string) {
  return str1?.toLocaleLowerCase() === str2?.toLocaleLowerCase();
}

export function errorHasValidationKey(error: any, expectedKey: string): boolean {
  return error.validation?.some(({ key }: any) => expectedKey === key);
}

/**
 * Following function exists mostly to satisfy TypeScript engine and is a replacement for:
 * `.filter(Boolean)` => `.filter(excludeFalsy)`
 */
export function excludeFalsy<T>(value: T): value is Truthy<T> {
  return !!value;
}

export function executeAndSetInterval(handler: () => any, timeout: number) {
  handler();
  return setInterval(handler, timeout);
}

export async function fetchAllPages<T = any>(
  getFunction: () => Promise<IPageableResponse<T>>,
  getNextPage: (url: string) => Promise<IPageableResponse<T>>,
) {
  const result = [];
  let nextPageUrl: string | null = '';

  while (nextPageUrl !== null) {
    // eslint-disable-next-line no-await-in-loop
    const { data, next } = (await (nextPageUrl
      ? getNextPage(nextPageUrl)
      : getFunction())) as IPageableResponse<T>;

    if (data?.length) {
      result.push(...data);
    }

    nextPageUrl = next || null;
  }
  return result;
}

export async function fetchJson<T = any>(
  url: string,
  options?: RequestInit,
): Promise<T | null> {
  const response = await fetch(url, options);
  if (response.status === 204) {
    return null;
  }
  return response.json();
}

/**
 * Prepare human-readable name from the user account object.
 * Eg.: `somehuman.chain`, `Account 2`
 */
export function getAccountNameToDisplay(acc: IAccount | undefined) {
  return acc?.name || `${tg('pages.account.heading')} ${(acc?.idx || 0) + 1}`;
}

export function getLocalStorageItem<T = object>(keys: string[]): T | undefined {
  const result = window.localStorage.getItem(
    [LOCAL_STORAGE_PREFIX, ...keys].join('_'),
  );
  return result ? JSON.parse(result) : undefined;
}

/**
 * TODO: Probably we need to replace this with Logger.write
 */
export function handleUnknownError(error: any) {
  // eslint-disable-next-line no-console
  return console.warn('Unknown rejection', error);
}

/**
 * Replacement for `Array.includes` which has some TypeScript issues.
 * @link https://github.com/microsoft/TypeScript/issues/26255
 */
export function includes<T, U extends T>(
  arr: readonly U[],
  elem: T,
): elem is U {
  return arr.includes(elem as any);
}

export function includesCaseInsensitive(baseString: string, searchString: string) {
  return baseString?.toLocaleLowerCase().includes(searchString?.toLocaleLowerCase());
}

export function isNotFoundError(error: any) {
  return error?.statusCode === 404;
}

export function openInNewWindow(url: string) {
  window.open(url, '_blank');
}

export function pipe<T = any[]>(fns: ((data: T) => T)[]) {
  return (data: T) => fns.reduce((currData, func) => func(currData), data);
}

export function postJson(url: string, options?: IRequestInitBodyParsed) {
  return fetchJson(url, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    ...options,
    body: options?.body && JSON.stringify(options.body),
  });
}

export function secondsToRelativeTime(seconds: number) {
  const { t } = useI18n();
  const secondsPerMinute = 60;
  const secondsPerHour = secondsPerMinute * 60;
  const secondsPerDay = secondsPerHour * 24;
  if (seconds < secondsPerMinute) {
    return t('common.seconds', Math.round(seconds));
  }
  if (seconds < secondsPerHour) {
    return t('common.minutes', Math.round(seconds / secondsPerMinute));
  }
  if (seconds < secondsPerDay) {
    return t('common.hours', Math.round(seconds / secondsPerHour));
  }
  return t('common.days', Math.round(seconds / secondsPerDay));
}

export function setLocalStorageItem(keys: string[], value: any): void {
  return window.localStorage.setItem(
    [LOCAL_STORAGE_PREFIX, ...keys].join('_'),
    JSON.stringify(value),
  );
}

export function sortTransactionsByDate(transactions: ICommonTransaction[]) {
  return transactions.sort((a, b) => {
    const [aMicroTime, bMicroTime] = [a, b].map(
      (transaction) => (
        new Date(transaction.microTime!).getTime()
      ),
    );

    const pending = (a.pending && !b.pending && -1) || (b.pending && !a.pending && 1);
    const compareMicroTime = () => {
      const withoutTimeIndex = [aMicroTime, bMicroTime].findIndex((time) => Number.isNaN(time));
      if (withoutTimeIndex === 0) {
        return -1;
      }
      if (withoutTimeIndex === 1) {
        return 1;
      }
      const sortDirection = bMicroTime - aMicroTime;
      // Workaround to display received transaction after send (they have the same time)
      if (sortDirection === 0) {
        const { direction = TX_DIRECTION.received } = a as IDashboardTransaction;
        return direction === TX_DIRECTION.received ? -1 : 1;
      }

      return sortDirection;
    };
    return pending || compareMicroTime();
  });
}

export function splitAddress(address: string | null): string {
  return address
    ? address.match(/.{1,3}/g)!.reduce((acc, current) => `${acc} ${current}`)
    : '';
}

export function toShiftedBigNumber(value: number | string, precision: number): BigNumberPublic {
  return new BigNumber(value).shiftedBy(precision);
}

export function truncateAddress(address: string | null): [string, string] {
  if (!address) {
    return ['', ''];
  }
  const addressLength = address.length;
  const firstPart = address.slice(0, 6).match(/.{3}/g) as string[];
  const secondPart = address
    .slice(addressLength - 3, addressLength)
    .match(/.{3}/g) as string[];
  return [
    firstPart?.slice(0, 2).reduce((acc, current) => `${acc}${current}`),
    secondPart.slice(-1).reduce((acc, current) => `${acc}${current}`),
  ];
}

export function truncateString(text: string, maxLength: number) {
  return (text?.length)
    ? `${String(text).substring(0, maxLength)}${text.length > maxLength ? '...' : ''}`
    : '';
}

/**
 * Watch for the getter to be truthy with the use of the compositionApi.
 */
export function watchUntilTruthy<T>(getter: WatchSource<T>): Promise<NonNullable<T>> {
  return new Promise((resolve) => {
    const unwatch = watch(
      getter,
      (value) => {
        if (value) {
          resolve(value as NonNullable<T>);
          defer(() => unwatch());
        }
      },
      { immediate: true },
    );
  });
}
