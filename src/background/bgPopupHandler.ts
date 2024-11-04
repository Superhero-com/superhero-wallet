import { v4 as uuid } from 'uuid';
import type {
  Dictionary,
  IPopupProps,
  PopupType,
} from '@/types';

interface IPopupConfigNoActions {
  id: string;
  props: Omit<IPopupProps, 'resolve' | 'reject'>;
}

/**
 * We need to duplicate these constants here because
 * importing from constants.ts causes error in background script
 * due to undefined window object
 * (it cannot be present in background script & will throw an error when installing the extension)
 */
const PLATFORM = process.env.PLATFORM as 'web' | 'extension' | 'ionic';
const RUNNING_IN_TESTS = !!process.env.RUNNING_IN_TESTS;
const IS_EXTENSION = PLATFORM === 'extension' && !RUNNING_IN_TESTS;

const SESSION_STORAGE_KEYS = {
  exportedEncryptionKey: 'exportedEncryptionKey',
};

const POPUP_TYPE_CONNECT = 'connectConfirm';

const popups: Dictionary<IPopupConfigNoActions> = {};

const storageSession = (browser.storage as any)?.session;

export const openPopup = async (
  popupType: PopupType,
  aepp: string | Record<string, any>, // TODO establish correct type for the object
  popupProps: Partial<IPopupProps> = {},
) => {
  const id = uuid();
  const url = (typeof aepp === 'object') ? aepp.connection.port.sender.url : aepp;
  const { href, protocol, host } = new URL(url);

  // TODO fix the name resolving issue happening in `onSubscription` of aeSdk
  const name = (typeof aepp === 'object') ? aepp.name : undefined;

  const tabs = await browser.tabs.query({ active: true });

  tabs.forEach(({ url: tabURL, id: tabId }) => {
    const tabUrl = new URL(tabURL as string);
    if (
      tabUrl.searchParams.get('type') === POPUP_TYPE_CONNECT
      && decodeURIComponent(tabUrl.searchParams.get('url') || '') === href
    ) {
      browser.tabs.remove(tabId as number);
    }
  });

  const extUrl = browser.runtime.getURL('./index.html');
  const popupUrl = `${extUrl}?id=${id}&type=${popupType}&url=${encodeURIComponent(href)}`;
  const isMacOsExtension = IS_EXTENSION && browser.runtime.getPlatformInfo().then(({ os }) => os === 'mac');

  const popupWindow = await browser.windows.create({
    url: popupUrl,
    type: 'popup',
    height: 630,
    width: await isMacOsExtension ? 360 : 375,
  });

  if (!popupWindow) {
    return null;
  }

  popups[id] = {
    id,
    props: {
      ...popupProps,
      app: {
        url: href,
        name,
        protocol,
        host,
      },
    },
  };
  return popups[id];
};

export const removePopup = (id: string) => delete popups[id];

export const getPopup = (id: string): IPopupConfigNoActions => popups[id];

let expirationTimeout: NodeJS.Timeout;
let keepAliveInterval: NodeJS.Timeout;

export const setSessionTimeout = async (sessionTimeout: number) => {
  if (expirationTimeout) {
    clearTimeout(expirationTimeout);
  }
  if (keepAliveInterval) {
    clearInterval(keepAliveInterval);
  }

  /**
   * This interval is set in order to keep service worker alive.
   * By default service worker would be terminated in 30 seconds of inactivity.
   * https://stackoverflow.com/a/66618269
   */
  keepAliveInterval = setInterval(browser.runtime.getPlatformInfo, 20000);
  expirationTimeout = setTimeout(
    async () => {
      await storageSession.remove(SESSION_STORAGE_KEYS.exportedEncryptionKey);
      clearInterval(keepAliveInterval);
    },
    sessionTimeout,
  );
};

export const getSessionEncryptionKey = async (): Promise<string | null> => {
  try {
    const { exportedEncryptionKey } = await storageSession.get(
      SESSION_STORAGE_KEYS.exportedEncryptionKey,
    );
    if (exportedEncryptionKey) {
      return Buffer.from(exportedEncryptionKey).toString('base64');
    }
  } catch (error) { /** NOOP */ }

  return null;
};
