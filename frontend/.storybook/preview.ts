import type { Preview } from '@storybook/vue3'
import { setup } from '@storybook/vue3'
import { createPinia } from 'pinia'
import '../src/assets/main.css'

const pinia = createPinia()
setup((app) => {
  app.use(pinia)
})

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#0f172a',
        },
      ],
    },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
  },
}

export default preview

// Global decorator to apply theme class
export const decorators = [
  (story, context) => {
    const theme = context.globals.theme || 'light'
    
    return {
      components: { story },
      setup() {
        // Apply theme class to document
        if (typeof document !== 'undefined') {
          document.documentElement.className = theme
        }
        return {}
      },
      template: `
        <div class="${theme === 'dark' ? 'dark' : ''}">
          <div class="bg-white dark:bg-secondary-900 text-secondary-900 dark:text-white min-h-screen transition-colors duration-200 p-4">
            <story />
          </div>
        </div>
      `,
    }
  },
]
