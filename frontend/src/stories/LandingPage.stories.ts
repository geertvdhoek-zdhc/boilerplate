import type { Meta, StoryObj } from '@storybook/vue3'
import LandingPage from '../pages/LandingPage.vue'

const meta: Meta<typeof LandingPage> = {
  title: 'Pages/LandingPage',
  component: LandingPage,
  parameters: {
    layout: 'fullscreen',
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' }
  },
  decorators: [
    () => ({
      template: `
        <div class="dark">
          <story />
        </div>
      `
    })
  ]
}
