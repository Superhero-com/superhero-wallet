import { mount, RouterLinkStub, config } from '@vue/test-utils';
import Index from '../../src/popup/pages/Index.vue';
import About from '../../src/popup/pages/About.vue';
import TermsOfService from '../../src/popup/pages/TermsOfService.vue';
import PrivacyPolicy from '../../src/popup/pages/PrivacyPolicy.vue';

config.global = {
  provide: {
    store: {
      getters: jest.fn(),
    },
  },
  mocks: {
    $t: () => 'locale-specific-text',
  },
  stubs: {
    RouterLink: RouterLinkStub,
    'i18n-t': {
      template: '<span />',
    },
  },
};

jest.mock('detect-browser', () => ({
  detect: () => ({}),
}));

describe.skip('Pages', () => {
  [{
    name: 'Index',
    page: Index,
    data: [{
      termsAgreed: true,
      IS_WEB: true,
    },
    {
      IS_WEB: false,
    },
    {
      IN_FRAME: true,
    }],
  },
  {
    name: 'About',
    page: About,
    data: [{
      extensionVersion: 'version-specific-text',
    }],
  },
  {
    name: 'TermsOfService',
    page: TermsOfService,
  },
  {
    name: 'PrivacyPolicy',
    page: PrivacyPolicy,
  }].forEach((test) => it(test.name, async () => {
    const wrapper = mount(test.page);
    // eslint-disable-next-line no-restricted-syntax
    for (const data of test.data ?? [{}]) {
      // eslint-disable-next-line no-await-in-loop
      await wrapper.setData(data);
      expect(wrapper.element).toMatchSnapshot();
    }
  }));
});
