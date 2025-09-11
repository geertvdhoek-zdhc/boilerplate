<template>
  <Card variant="elevated" :class="cardClasses">
    <template #header>
      <Typography variant="h2" class="text-center">
        {{ title }}
      </Typography>
      <Typography v-if="subtitle" color="secondary" class="text-center mt-1">
        {{ subtitle }}
      </Typography>
    </template>

    <form @submit.prevent="handleSubmit" class="space-y-4">
      <Input
        v-model="form.email"
        label="Email Address"
        type="email"
        placeholder="Enter your email"
        required
        :error="errors.email"
      />

      <Input
        v-model="form.password"
        label="Password"
        type="password"
        placeholder="Enter your password"
        required
        :error="errors.password"
      />

      <div v-if="rememberMe" class="flex items-center">
        <input
          id="remember-me"
          v-model="form.rememberMe"
          type="checkbox"
          class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-secondary-300 rounded"
        />
        <label for="remember-me" class="ml-2 block text-sm text-secondary-700">
          Remember me
        </label>
      </div>

      <div v-if="error" class="text-danger-600 text-sm text-center">
        {{ error }}
      </div>

      <Button
        type="submit"
        variant="primary"
        :loading="loading"
        fullWidth
      >
        {{ loading ? 'Signing In...' : 'Sign In' }}
      </Button>

      <div v-if="showForgotPassword" class="text-center">
        <Typography variant="link" size="sm" @click="$emit('forgotPassword')">
          Forgot your password?
        </Typography>
      </div>
    </form>

    <!-- Footer slot for additional content -->
    <div v-if="$slots.footer" class="mt-4">
      <slot name="footer" />
    </div>
  </Card>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import Card from '../ui/Card.vue'
import Typography from '../ui/Typography.vue'
import Input from '../ui/Input.vue'
import Button from '../ui/Button.vue'

interface Props {
  title?: string
  subtitle?: string
  loading?: boolean
  error?: string
  rememberMe?: boolean
  showForgotPassword?: boolean
  maxWidth?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Welcome Back',
  subtitle: 'Sign in to your account',
  loading: false,
  error: '',
  rememberMe: true,
  showForgotPassword: true,
  maxWidth: 'max-w-md'
})

const emit = defineEmits<{
  submit: [credentials: { email: string; password: string; rememberMe: boolean }]
  forgotPassword: []
}>()

const form = reactive({
  email: '',
  password: '',
  rememberMe: false
})

const errors = reactive({
  email: '',
  password: ''
})

const cardClasses = `${props.maxWidth} mx-auto`

const handleSubmit = () => {
  errors.email = ''
  errors.password = ''

  if (!form.email) {
    errors.email = 'Email is required'
    return
  }
  if (!form.password) {
    errors.password = 'Password is required'
    return
  }

  emit('submit', { ...form })
}
</script>
