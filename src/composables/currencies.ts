import { computed, ref } from '@vue/composition-api';
import type { CurrencyCode, ICurrency } from '../types';
import {
  CURRENCIES,
  CURRENCIES_URL,
  fetchJson,
  getLocalStorageItem,
  handleUnknownError,
  setLocalStorageItem,
} from '../popup/utils';
import { createPollingBasedOnMountedComponents } from './composablesHelpers';

const POLLING_INTERVAL = 3600000;
const LOCAL_STORAGE_CURRENCY_KEY = 'currency';
const APP_CURRENCY_CODES = CURRENCIES.map(({ code }) => code).join(',');
const DEFAULT_CURRENCY_CODE: CurrencyCode = 'usd';

const currencyRates = ref<Record<string, number>>({});
const currentCurrencyCode = ref<CurrencyCode>(
  getLocalStorageItem<CurrencyCode>([LOCAL_STORAGE_CURRENCY_KEY]) || DEFAULT_CURRENCY_CODE,
);

const initPollingWatcher = createPollingBasedOnMountedComponents();

export function useCurrencies() {
  const minTipAmount = computed(() => 0.01 / (currencyRates.value.usd || 1));
  const currentCurrencyRate = computed(
    (): number => currencyRates.value[currentCurrencyCode.value] || 0,
  );
  const currentCurrencyInfo = computed(
    (): ICurrency => CURRENCIES.find(({ code }) => code === currentCurrencyCode.value)!,
  );

  function setCurrentCurrency(currency: CurrencyCode) {
    currentCurrencyCode.value = currency;
    setLocalStorageItem([LOCAL_STORAGE_CURRENCY_KEY], currency);
  }

  async function loadCurrencyRates() {
    try {
      const { aeternity } = await fetchJson(`${CURRENCIES_URL}${APP_CURRENCY_CODES}`);
      currencyRates.value = aeternity;
    } catch (e) {
      handleUnknownError(e);
    }
  }

  /**
   * @returns value formatted as a currency according to the user's browser settings
   *   eg.: "23 789,98 £", "$ 25.269,00"
   */
  function formatCurrency(value: number): string {
    return new Intl.NumberFormat(
      navigator.language,
      { style: 'currency', currencyDisplay: 'narrowSymbol', currency: currentCurrencyCode.value },
    ).format(value);
  }

  /**
   * @param value Aeternity coin amount
   * @returns Aeternity coin converted to fiat
   */
  function getFiat(value: number): number {
    return +(currentCurrencyRate.value * value).toFixed(2);
  }

  /**
   * @param value Aeternity coin amount
   * @returns Aeternity coin converted to fiat and formatted as a currency
   *   according to the user's browser settings
   */
  function getFormattedFiat(value: number) {
    return formatCurrency(getFiat(value));
  }

  /**
   * Does the same as `getFormattedFiat` but avoids displaying small fractions
   * by rounding them to 0.01.
   * @param value Aeternity coin amount
   */
  function getFormattedAndRoundedFiat(value: number): string {
    if (value === 0) {
      return formatCurrency(0);
    }
    const converted = getFiat(value);
    return (converted < 0.01) ? `<${formatCurrency(0.01)}` : `≈${formatCurrency(converted)}`;
  }

  initPollingWatcher(() => loadCurrencyRates(), POLLING_INTERVAL);

  return {
    CURRENCIES,
    minTipAmount,
    currencyRates,
    currentCurrencyCode,
    currentCurrencyRate,
    currentCurrencyInfo,
    loadCurrencyRates,
    setCurrentCurrency,
    formatCurrency,
    getFiat,
    getFormattedFiat,
    getFormattedAndRoundedFiat,
  };
}
