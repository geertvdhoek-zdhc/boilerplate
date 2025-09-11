import type { Meta, StoryObj } from '@storybook/vue3'
import Button from '../components/ui/Button.vue'

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'danger', 'success', 'warning']
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset']
    },
    onClick: { action: 'clicked' }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary'
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Sign In</Button>'
  })
}

export const AllVariants: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div class="space-y-4">
        <div class="flex gap-4 flex-wrap">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="success">Success</Button>
          <Button variant="warning">Warning</Button>
        </div>
        <div class="flex gap-4">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
        <div>
          <Button fullWidth>Full Width Button</Button>
        </div>
      </div>
    `
  })
}

export const DarkModeShowcase: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div class="grid grid-cols-2 gap-8">
        <div class="space-y-4">
          <h3 class="text-lg font-semibold mb-4">Light Mode</h3>
          <div class="bg-white p-4 rounded-lg border space-y-3">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
          </div>
        </div>
        <div class="space-y-4">
          <h3 class="text-lg font-semibold mb-4">Dark Mode</h3>
          <div class="dark bg-secondary-900 p-4 rounded-lg border border-secondary-600 space-y-3">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
          </div>
        </div>
      </div>
    `
  })
}
