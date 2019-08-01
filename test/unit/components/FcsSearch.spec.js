import { mount } from '@vue/test-utils'
import FcsSearch from 'components/FcsSearch.vue'

describe('FcsSearch', () => {
  it('Exists!', () => {
    // const wrapper = mount(Component)
    // expect(wrapper.isVueInstance()).toBeTruthy()
    let subject = mount(FcsSearch);
    expect(subject.exists()).to.equal(true)
  })
})