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
        v-model="form.name"
        label="Full Name"
        type="text"
        placeholder="Enter your full name"
        :error="errors.name"
      />

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
        hint="Must be at least 6 characters"
      />

      <Input
        v-model="form.confirmPassword"
        label="Confirm Password"
        type="password"
        placeholder="Confirm your password"
        required
        :error="errors.confirmPassword"
      />

      <div v-if="error" class="text-danger-600 text-sm text-center">
        {{ error }}
      </div>

      <Button
        type="submit"
        variant="primary"
        :loading="loading"
        fullWidth
      >
        {{ loading ? 'Creating Account...' : 'Create Account' }}
      </Button>

      <div class="text-center">
        <Typography color="secondary" size="sm">
          Already have an account?
        </Typography>
        <Typography variant="link" size="sm" @click="$emit('switchToLogin')">
          Sign in here
        </Typography>
      </div>
    </form>
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
  maxWidth?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Create Account',
  subtitle: 'Sign up to get started',
  loading: false,
  error: '',
  maxWidth: 'max-w-md'
})

const emit = defineEmits<{
  submit: [data: { name: string; email: string; password: string }]
  switchToLogin: []
}>()

const form = reactive({
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
})

const errors = reactive({
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
})

const cardClasses = `${props.maxWidth} mx-auto`

const handleSubmit = () => {
  // Reset errors
  Object.keys(errors).forEach(key => {
    errors[key as keyof typeof errors] = ''
  })

  // Validation
  if (!form.email) {
    errors.email = 'Email is required'
    return
  }
  if (!form.password) {
    errors.password = 'Password is required'
    return
  }
  if (form.password.length < 6) {
    errors.password = 'Password must be at least 6 characters'
    return
  }
  if (form.password !== form.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match'
    return
  }

  emit('submit', {
    name: form.name,
    email: form.email,
    password: form.password
  })
}
</script>
