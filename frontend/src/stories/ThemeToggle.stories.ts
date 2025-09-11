import type { Meta, StoryObj } from '@storybook/vue3'
import ThemeToggle from '../components/ui/ThemeToggle.vue'
import { useThemeStore } from '../stores/theme'

const meta: Meta<typeof ThemeToggle> = {
  title: 'UI/ThemeToggle',
  component: ThemeToggle,
  parameters: {
    layout: 'padded',
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { ThemeToggle },
    setup() {
      const themeStore = useThemeStore()
      return { themeStore }
    },
    template: `
      <div class="space-y-4">
        <p class="text-sm text-secondary-600 dark:text-secondary-400">
          Current theme: {{ themeStore.isDark ? 'Dark' : 'Light' }}
        </p>
        <ThemeToggle />
        <p class="text-xs text-secondary-500">
          Click the button to toggle between light and dark themes
        </p>
      </div>
    `
  })
}
