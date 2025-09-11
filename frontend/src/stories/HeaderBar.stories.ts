import type { Meta, StoryObj } from '@storybook/vue3'
import HeaderBar from '../components/layout/HeaderBar.vue'

const meta: Meta<typeof HeaderBar> = {
  title: 'Layout/HeaderBar',
  component: HeaderBar,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['light', 'dark', 'transparent']
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Guest: Story = {
  args: {
    logoTitle: 'My App',
    showNav: false
  }
}

export const LoggedIn: Story = {
  args: {
    logoTitle: 'My App',
    showNav: true
  }
}

export const Dark: Story = {
  args: {
    logoTitle: 'My App',
    variant: 'dark',
    showNav: true
  }
}
