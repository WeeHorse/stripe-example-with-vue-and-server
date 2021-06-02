import { mount } from '@vue/test-utils'
import store from '../src/store/index.js'
import App from '../src/App.vue'

test('displays message', () => {
  const wrapper = mount(App, {
    global: {
        plugins: [store]
    },
    data() {
        return {
            title: 'Ye Olde English Shoppe'
        }
    }
  })

  // Assert the rendered text of the component
  expect(wrapper.text()).toContain('English Shoppe')
})