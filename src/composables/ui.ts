import { onBeforeUnmount, onMounted, ref } from '@vue/composition-api';
import { ROUTE_ACCOUNT } from '../popup/router/routeNames';

const homeRouteName = ref(ROUTE_ACCOUNT);
const isAppActive = ref(false);

export function useUi() {
  function setHomeRouteName(routeName: string, onChangeCallback: () => any) {
    if (homeRouteName.value !== routeName) {
      homeRouteName.value = routeName;
      onChangeCallback();
    }
  }

  function handleVisibilityChange(event: Event) {
    isAppActive.value = !(event.target as Document).hidden;
  }

  function initVisibilityListeners() {
    onMounted(() => {
      document.addEventListener('visibilitychange', handleVisibilityChange);
    });

    onBeforeUnmount(() => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    });
  }

  return {
    homeRouteName,
    isAppActive,
    initVisibilityListeners,
    setHomeRouteName,
  };
}
