import { shallowMount } from '@vue/test-utils';
import TermsOfService from '../../src/popup/router/pages/TermsOfService.vue';

const text = {
  section1Title: 'section1Title',
  section1Content: 'section1Content',
};

describe('TermsOfService', () => {
  it('opens and closes accordion', async () => {
    const wrapper = shallowMount(TermsOfService, { mocks: { $t: () => text } });
    expect(wrapper.find('[data-cy=accordion-item-content]').isVisible()).toBe(false);
    expect(wrapper.find('[data-cy=accordion-item-open]:nth-child(1)').exists()).toBeTruthy();
    await wrapper.find('[data-cy=accordion-item-open]:nth-child(1)').trigger('click');
    expect(wrapper.find('[data-cy=accordion-item-content]').isVisible()).toBe(true);
    expect(wrapper.find('[data-cy=accordion-item-open]:nth-child(1).rotated').exists()).toBeTruthy();
    await wrapper.find('[data-cy=accordion-item-open]:nth-child(1)').trigger('click');
    expect(wrapper.find('[data-cy=accordion-item-content]').isVisible()).toBe(false);
    expect(wrapper.contains('[data-cy=accordion-item-open]:nth-child(1).rotated')).toBe(false);
  });
});
