import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import App from '../../App.vue'

const TestComponent = {
  template: '<div>Test Route</div>'
}

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: TestComponent }
  ]
})

const pinia = createPinia()

describe('App', () => {
  it('renders router view', async () => {
    const wrapper = mount(App, {
      global: {
        plugins: [router, pinia]
      }
    })
    
    await router.push('/')
    await router.isReady()
    
    expect(wrapper.exists()).toBe(true)
  })
})
