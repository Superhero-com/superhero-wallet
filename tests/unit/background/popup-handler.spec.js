import { showPopup, getPopup, removePopup } from '../../../src/background/popupHandler';
import {
  DEX_URL,
  POPUP_TYPE_SIGN,
  POPUP_TYPE_RAW_SIGN,
  POPUP_TYPE_MESSAGE_SIGN,
} from '../../../src/popup/utils';

const mockCreate = jest.fn(() => true);
const mockGetUrl = jest.fn((text) => text);

const tesAeppUrl = 'http://test.com';

global.browser = {
  tabs: {
    query: () => [],
    remove: () => undefined,
  },
  windows: {
    create: mockCreate,
  },
  runtime: {
    getURL: mockGetUrl,
  },
};

const testCases = [{
  name: 'supported transaction',
  params: {
    tx: 'tx_+FEMAaEByqPFadmQk4sGtyDiquosAZyKJNmherKOhheVIEYTLCKhAcqjxWnZkJOLBrcg4qrqLAGciiTZoXqyjoYXlSBGEywiC4YPJvVhyAAAE4ALeFGB',
    txObject: {
      params: {
      },
    },
  },
  type: POPUP_TYPE_SIGN,
  resultType: POPUP_TYPE_SIGN,
  propsField: 'transaction',
}, {
  name: 'supported transaction with a connected aepp',
  params: {
    tx: 'tx_+FEMAaEByqPFadmQk4sGtyDiquosAZyKJNmherKOhheVIEYTLCKhAcqjxWnZkJOLBrcg4qrqLAGciiTZoXqyjoYXlSBGEywiC4YPJvVhyAAAE4ALeFGB',
    txObject: {
      params: {
      },
    },
  },
  type: POPUP_TYPE_SIGN,
  resultType: POPUP_TYPE_SIGN,
  propsField: 'transaction',
  connectedAepp: {
    connection: {
      port: {
        sender: {
          url: DEX_URL,
        },
      },
    },
  },
}, {
  name: 'unsupported transaction',
  // encoded gaAttachTx
  params: { tx: 'tx_+O1QAaEByqPFadmQk4sGtyDiquosAZyKJNmherKOhheVIEYTLCITuIv4iUYDoIMndi6iAoqQltixF/3A6WlN0+rWVAan4LvFLy2pEJlhwLhcuDv+RNZEHwA3ADcAGg6CPwEDP/5s8lcLADcCFwcXdwAIPAIE+wNNTm90IGluIEF1dGggY29udGV4dAEBAJsvAhFE1kQfEWluaXQRbPJXCyVhdXRob3JpemWCLwCFNy4xLjAAoGzyVwsKFZm3CCkeUKo9rxPQx/JIS8M33a0kE6N/1KAJgwcAA4ZIjzqPaAAATIQ7msoAhysRRNZEHz+4yEN3' },
  type: POPUP_TYPE_SIGN,
  resultType: POPUP_TYPE_RAW_SIGN,
  propsField: 'data',
}, {
  name: 'message',
  params: {
    message: '4eae1b1a-0152-4e74-8af1-375ed1e9e75d-3ce9aff199e1aa9018e8cb4f2334eb717cf3799f6dff3f77279e98bf06b4183a-GET_CONSENT-1681222330475-2-0-0',
  },
  type: POPUP_TYPE_MESSAGE_SIGN,
  resultType: POPUP_TYPE_MESSAGE_SIGN,
  propsField: 'message',
}];

describe('popupHanlder', () => {
  testCases.forEach(({
    name, params, type, resultType, propsField, connectedAepp = null,
  }, index) => it(
    `should be able to create, get, remove popup for signing a/an ${name}`,
    async () => {
      showPopup(connectedAepp ?? tesAeppUrl, type, params);
      await new Promise((r) => setTimeout(r, 50));
      const call = mockCreate.mock.calls[index][0];
      const queryParams = Object.fromEntries(new URLSearchParams(call.url.split('?')[1]).entries());
      expect(queryParams.type).toEqual(resultType);
      expect(queryParams.url).toEqual(`${connectedAepp ? DEX_URL : tesAeppUrl}/`);
      expect(getPopup(queryParams.id).props[propsField]).toBeTruthy();
      removePopup(queryParams.id);
      expect(getPopup(queryParams.id)).toBeFalsy();
    },
  ));
});
