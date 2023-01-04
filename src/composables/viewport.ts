import { debounce } from 'lodash-es';
import { onBeforeUnmount, onMounted, ref } from '@vue/composition-api';
import { MOBILE_WIDTH } from '../popup/utils';

export interface IScrollCallbackParams {
  isOutsideOfViewport: boolean
}

// eslint-disable-next-line no-unused-vars
export type OnViewportScrollCallback = (p: IScrollCallbackParams) => any;

const viewportElement = ref<Element | undefined>();

export const useViewport = () => {
  const viewportScroll = debounce((callback: OnViewportScrollCallback) => {
    const isDesktop = (
      document.documentElement.clientWidth > MOBILE_WIDTH
      || process.env.IS_EXTENSION
    );

    const element = isDesktop ? viewportElement.value : document.documentElement;

    if (element) {
      const { scrollHeight, scrollTop, clientHeight } = element;
      const isOutsideOfViewport = scrollHeight - scrollTop <= clientHeight + 100;

      callback({ isOutsideOfViewport });
    }
  }, 50);

  function initViewport(scrollableElement: Element | undefined) {
    viewportElement.value = scrollableElement;
  }

  function onViewportScroll(onScrollMethod: OnViewportScrollCallback) {
    onMounted(() => {
      if (viewportElement.value) {
        viewportElement.value.addEventListener('scroll', () => viewportScroll(onScrollMethod));
      }
      window.addEventListener('scroll', () => viewportScroll(onScrollMethod));
    });
    onBeforeUnmount(() => {
      if (viewportElement.value) {
        viewportElement.value.removeEventListener('scroll', () => viewportScroll(onScrollMethod));
      }
      window.removeEventListener('scroll', () => viewportScroll(onScrollMethod));
    });
  }

  return {
    viewportElement,
    onViewportScroll,
    initViewport,
  };
};
