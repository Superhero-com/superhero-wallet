import '../lib/environment';
import '../lib/initPolyfills';
import initDeeplinkHandler from './deeplink-handler';
import RedirectChainNames from './redirect-chain-names';
import * as wallet from './wallet';
import TipClaimRelay from './tip-claim-relay';
import Logger from '../lib/logger';
import { getState } from '../store/plugins/persistState';
import store from './store';
import { useAccounts } from '../composables';

Logger.init({ background: true });
RedirectChainNames.init();
initDeeplinkHandler();

const openTipPopup = (pageUrl) => browser.windows.create({
  url: browser.extension.getURL(`./index.html#/tips?url=${encodeURIComponent(pageUrl)}`),
  type: 'popup',
  height: 600,
  width: 375,
});

browser.runtime.onMessage.addListener(async (msg, sender) => {
  const {
    method, from, type, data, url: tipUrl,
  } = msg;

  if (method === 'reload') {
    wallet.disconnect();
    window.location.reload();
    return null;
  }

  if (method === 'checkHasAccount') {
    const { isLoggedIn } = useAccounts({ store });
    return isLoggedIn.value;
  }

  if (process.env.UNFINISHED_FEATURES && method === 'paste') {
    let result = '';
    const textarea = document.createElement('textarea');
    document.body.appendChild(textarea);
    textarea.focus();
    if (document.execCommand('paste')) {
      result = textarea.value;
    }
    document.body.removeChild(textarea);
    return result;
  }

  if (from === 'content') {
    const [{ url }] = await browser.tabs.query({ active: true, currentWindow: true });
    if (type === 'readDom' && (data.address || data.chainName)) {
      const {
        current: { network },
      } = await getState();
      if (sender.url === url && network === 'Mainnet') TipClaimRelay.checkUrlHasBalance(url, data);
    }
    if (type === 'openTipPopup') openTipPopup(tipUrl || url);
  }

  return true;
});

wallet.init();
