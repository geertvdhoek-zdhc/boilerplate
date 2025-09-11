import type { Meta, StoryObj } from '@storybook/vue3'
import FooterBar from '../components/layout/FooterBar.vue'

const meta: Meta<typeof FooterBar> = {
  title: 'Layout/FooterBar',
  component: FooterBar,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['light', 'dark']
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {
    logoTitle: 'My App',
    description: 'Building the future of web apps'
  }
}

export const Dark: Story = {
  args: {
    logoTitle: 'My App',
    description: 'Building the future of web apps',
    variant: 'dark'
  }
}
