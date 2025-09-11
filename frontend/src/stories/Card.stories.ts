import type { Meta, StoryObj } from '@storybook/vue3'
import Card from '../components/ui/Card.vue'
import Typography from '../components/ui/Typography.vue'
import Button from '../components/ui/Button.vue'

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'bordered', 'elevated', 'flat']
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg']
    },
    rounded: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl']
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { Card, Typography },
    setup() {
      return { args }
    },
    template: `
      <Card v-bind="args" class="max-w-md">
        <Typography variant="h3" class="mb-2">Card Title</Typography>
        <Typography color="secondary">
          This is a basic card component that can contain any content. Notice how it adapts to dark mode.
        </Typography>
      </Card>
    `
  })
}

export const AllVariants: Story = {
  render: () => ({
    components: { Card, Typography },
    template: `
      <div class="grid grid-cols-2 gap-4 max-w-4xl">
        <Card variant="default" class="p-4">
          <Typography variant="h4" class="mb-2">Default</Typography>
          <Typography color="secondary" size="sm">Standard card with border and light shadow</Typography>
        </Card>
        
        <Card variant="bordered" class="p-4">
          <Typography variant="h4" class="mb-2">Bordered</Typography>
          <Typography color="secondary" size="sm">Card with prominent border</Typography>
        </Card>
        
        <Card variant="elevated" class="p-4">
          <Typography variant="h4" class="mb-2">Elevated</Typography>
          <Typography color="secondary" size="sm">Card with strong shadow</Typography>
        </Card>
        
        <Card variant="flat" class="p-4">
          <Typography variant="h4" class="mb-2">Flat</Typography>
          <Typography color="secondary" size="sm">Minimal card with subtle border</Typography>
        </Card>
      </div>
    `
  })
}
