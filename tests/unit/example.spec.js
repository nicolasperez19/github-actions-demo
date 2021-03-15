import { shallowMount } from '@vue/test-utils'
import App from '../../src/components/App.vue'

describe('App.vue', () => {
  it('mounts and renders', () => {
    const wrapper = shallowMount(App)
    expect(wrapper.html()).toMatch('Hello World!')
  })
})
