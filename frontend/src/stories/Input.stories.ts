import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Input from '../components/ui/Input.vue'

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'tel', 'url', 'search']
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Email Address',
    type: 'email',
    placeholder: 'Enter your email'
  },
  render: (args) => ({
    components: { Input },
    setup() {
      const value = ref('')
      return { args, value }
    },
    template: '<Input v-bind="args" v-model="value" />'
  })
}

export const WithError: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
    error: 'Password must be at least 8 characters'
  },
  render: (args) => ({
    components: { Input },
    setup() {
      const value = ref('')
      return { args, value }
    },
    template: '<Input v-bind="args" v-model="value" />'
  })
}

export const WithHint: Story = {
  args: {
    label: 'Username',
    type: 'text',
    placeholder: 'Choose a username',
    hint: 'Must be 3-20 characters long'
  },
  render: (args) => ({
    components: { Input },
    setup() {
      const value = ref('')
      return { args, value }
    },
    template: '<Input v-bind="args" v-model="value" />'
  })
}

export const AllSizes: Story = {
  render: () => ({
    components: { Input },
    setup() {
      const small = ref('')
      const medium = ref('')
      const large = ref('')
      return { small, medium, large }
    },
    template: `
      <div class="space-y-4 max-w-md">
        <Input v-model="small" label="Small Input" size="sm" placeholder="Small size" />
        <Input v-model="medium" label="Medium Input" size="md" placeholder="Medium size" />
        <Input v-model="large" label="Large Input" size="lg" placeholder="Large size" />
      </div>
    `
  })
}

export const LoginForm: Story = {
  render: () => ({
    components: { Input },
    setup() {
      const email = ref('')
      const password = ref('')
      return { email, password }
    },
    template: `
      <div class="space-y-4 max-w-md">
        <Input 
          v-model="email" 
          label="Email Address" 
          type="email" 
          placeholder="Enter your email"
          required
        />
        <Input 
          v-model="password" 
          label="Password" 
          type="password" 
          placeholder="Enter your password"
          required
        />
      </div>
    `
  })
}
