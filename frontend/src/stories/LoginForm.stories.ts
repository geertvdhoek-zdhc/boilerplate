import type { Meta, StoryObj } from '@storybook/vue3'
import LoginForm from '../components/forms/LoginForm.vue'

const meta: Meta<typeof LoginForm> = {
  title: 'Forms/LoginForm',
  component: LoginForm,
  parameters: {
    layout: 'padded',
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Loading: Story = {
  args: {
    loading: true
  }
}

export const WithError: Story = {
  args: {
    error: 'Invalid email or password. Please try again.'
  }
}
