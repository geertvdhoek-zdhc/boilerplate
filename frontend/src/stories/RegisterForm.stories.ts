import type { Meta, StoryObj } from '@storybook/vue3'
import RegisterForm from '../components/forms/RegisterForm.vue'

const meta: Meta<typeof RegisterForm> = {
  title: 'Forms/RegisterForm',
  component: RegisterForm,
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
    error: 'An account with this email already exists.'
  }
}
