import { mount } from '@vue/test-utils'
import { BButton } from 'bootstrap-vue'

describe('Component', () => {
  it('is a Vue instance', () => {
    // const wrapper = mount(Component)
    // expect(wrapper.isVueInstance()).toBeTruthy()
    let subject = mount(BButton);
    expect(subject.exists()).to.equal(true)
  })
})