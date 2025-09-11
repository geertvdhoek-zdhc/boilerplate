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
        placeholder="Enter your email address"
        required
        :error="errors.email"
        hint="We'll send you a link to reset your password"
      />

      <div v-if="error" class="text-danger-600 text-sm text-center">
        {{ error }}
      </div>

      <div v-if="success" class="text-success-600 text-sm text-center">
        Password reset email sent! Check your inbox.
      </div>

      <Button
        type="submit"
        variant="primary"
        :loading="loading"
        fullWidth
      >
        {{ loading ? 'Sending...' : 'Send Reset Link' }}
      </Button>

      <div class="text-center">
        <Typography variant="link" size="sm" @click="$emit('backToLogin')">
          Back to Sign In
        </Typography>
      </div>
    </form>
  </Card>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
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
  title: 'Reset Password',
  subtitle: 'Enter your email to receive a reset link',
  loading: false,
  error: '',
  maxWidth: 'max-w-md'
})

const emit = defineEmits<{
  submit: [email: string]
  backToLogin: []
}>()

const form = reactive({
  email: ''
})

const errors = reactive({
  email: ''
})

const success = ref(false)
const cardClasses = `${props.maxWidth} mx-auto`

const handleSubmit = () => {
  errors.email = ''
  success.value = false

  if (!form.email) {
    errors.email = 'Email is required'
    return
  }

  emit('submit', form.email)
  success.value = true
}
</script>
