import { mount } from '@vue/test-utils'
import store from '../src/store/index.js'
import Checkout from '../src/components/Checkout.vue'

test('Display checkout message', () => {
  const wrapper = mount(Checkout, {
    global: {
      plugins: [store]
    },
    data() {
        return {
            title: 'Checkout'
        }
    }
  })

  // Assert the rendered text of the component
  expect(wrapper.text()).toContain('Checkout')
})