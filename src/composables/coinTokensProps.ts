import { computed, ref } from 'vue';
import type { TokenProps } from '@/types';

type ITokenProps = Partial<TokenProps>;

type ITokenDetail = Omit<TokenProps, 'isMultisig'>
type ITokenTransaction = Pick<TokenProps, 'contractId' | 'isMultisig'>

const tokenProps = ref<ITokenProps | null>(null);

/**
 *  Data coming from a coin that will be passed to the tab components
 *  TokenDetails and TokenTransaction when the user clicks in particular token asset.
 */
export function useTokenProps() {
  function setTokenProps(props: ITokenProps | null) {
    tokenProps.value = props;
  }

  const tokenDetails = computed<ITokenDetail>(() => ({
    contractId: tokenProps.value?.contractId ?? '',
    tokenPairs: tokenProps.value?.tokenPairs ?? {},
    tokenData: tokenProps.value?.tokenData ?? {},
    tokens: tokenProps.value?.tokens ?? [],
  }));
  const tokenTransactions = computed<ITokenTransaction>(() => ({
    contractId: tokenProps.value?.contractId ?? '',
    isMultisig: tokenProps.value?.isMultisig ?? false,
  }));

  return {
    tokenTransactions,
    tokenDetails,
    tokenProps,
    setTokenProps,
  };
}
