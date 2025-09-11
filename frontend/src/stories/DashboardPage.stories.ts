import type { Meta, StoryObj } from '@storybook/vue3'
import DashboardPage from '../pages/DashboardPage.vue'

const meta: Meta<typeof DashboardPage> = {
  title: 'Pages/DashboardPage',
  component: DashboardPage,
  parameters: {
    layout: 'fullscreen',
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    userName: 'John Doe'
  }
}

export const CustomStats: Story = {
  args: {
    userName: 'Jane Smith',
    welcomeMessage: 'Your projects are performing well today!',
    stats: [
      { title: 'Active Projects', value: '8', icon: '🚀' },
      { title: 'Team Members', value: '24', icon: '👥' },
      { title: 'Tasks Completed', value: '156', icon: '✅' },
      { title: 'Monthly Revenue', value: '$45,678', icon: '💰' }
    ]
  }
}
