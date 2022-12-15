import { computed } from '@vue/composition-api';
import store from '../store';

export const useGetter = <T = any>(name: string) => computed<T>(() => store.getters[name]);

export const useState = <T = any>(nameOrModule: string, subName?: string) => computed<T>(
  () => (subName)
    ? (store.state as any)[nameOrModule][subName]
    : (store.state as any)[nameOrModule],
);
