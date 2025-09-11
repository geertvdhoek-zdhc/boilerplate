import type { Meta, StoryObj } from '@storybook/vue3'
import PasswordResetForm from '../components/forms/PasswordResetForm.vue'

const meta: Meta<typeof PasswordResetForm> = {
  title: 'Forms/PasswordResetForm',
  component: PasswordResetForm,
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
    error: 'No account found with this email address.'
  }
}
