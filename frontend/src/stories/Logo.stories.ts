import type { Meta, StoryObj } from '@storybook/vue3'
import Logo from '../components/ui/Logo.vue'

const meta: Meta<typeof Logo> = {
  title: 'Layout/Logo',
  component: Logo,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl']
    },
    color: {
      control: 'select',
      options: ['primary', 'white', 'dark']
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical']
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'My App',
    subtitle: 'Dashboard'
  }
}

export const Vertical: Story = {
  args: {
    title: 'My App',
    subtitle: 'Dashboard',
    orientation: 'vertical'
  }
}

export const Large: Story = {
  args: {
    title: 'My App',
    size: 'xl'
  }
}

export const IconOnly: Story = {
  args: {
    showText: false,
    size: 'lg'
  }
}
