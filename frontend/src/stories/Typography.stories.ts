import type { Meta, StoryObj } from '@storybook/vue3'
import Typography from '../components/ui/Typography.vue'

const meta: Meta<typeof Typography> = {
  title: 'UI/Typography',
  component: Typography,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'body', 'caption', 'link']
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl']
    },
    weight: {
      control: 'select',
      options: ['light', 'normal', 'medium', 'semibold', 'bold']
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'muted', 'white', 'danger']
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Heading1: Story = {
  args: {
    variant: 'h1',
    size: '4xl',
    weight: 'bold'
  },
  render: (args) => ({
    components: { Typography },
    setup() {
      return { args }
    },
    template: '<Typography v-bind="args">Welcome to Our Platform</Typography>'
  })
}

export const Heading2: Story = {
  args: {
    variant: 'h2',
    size: '2xl',
    weight: 'semibold'
  },
  render: (args) => ({
    components: { Typography },
    setup() {
      return { args }
    },
    template: '<Typography v-bind="args">Dashboard Overview</Typography>'
  })
}

export const BodyText: Story = {
  args: {
    variant: 'body',
    size: 'md',
    weight: 'normal'
  },
  render: (args) => ({
    components: { Typography },
    setup() {
      return { args }
    },
    template: '<Typography v-bind="args">This is regular body text for your application.</Typography>'
  })
}

export const Link: Story = {
  args: {
    variant: 'link',
    size: 'md',
    weight: 'medium',
    color: 'primary'
  },
  render: (args) => ({
    components: { Typography },
    setup() {
      return { args }
    },
    template: '<Typography v-bind="args">Click here to learn more</Typography>'
  })
}

export const AllVariants: Story = {
  render: () => ({
    components: { Typography },
    template: `
      <div class="space-y-4">
        <Typography variant="h1" size="4xl" weight="bold">Heading 1</Typography>
        <Typography variant="h2" size="3xl" weight="semibold">Heading 2</Typography>
        <Typography variant="h3" size="2xl" weight="semibold">Heading 3</Typography>
        <Typography variant="h4" size="xl" weight="medium">Heading 4</Typography>
        <Typography variant="body" size="md">Regular body text</Typography>
        <Typography variant="caption" size="sm" color="muted">Caption text</Typography>
        <Typography variant="link" size="md" weight="medium">Link text</Typography>
      </div>
    `
  })
}
