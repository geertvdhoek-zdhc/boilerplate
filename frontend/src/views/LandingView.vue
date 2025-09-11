<template>
  <LandingPage
    logo-title="My App"
    hero-title="Build Something Amazing"
    hero-subtitle="The all-in-one platform for modern web applications. Fast, secure, and built for scale."
    footer-description="Building the future of web applications."
    :login-loading="authStore.isLoading"
    :login-error="authStore.error"
    :register-loading="authStore.isLoading"
    :register-error="authStore.error"
    :reset-loading="authStore.isLoading"
    :reset-error="authStore.error"
    @login="handleLogin"
    @register="handleRegister"
    @reset-password="handlePasswordReset"
    @learn-more="handleLearnMore"
  />
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import LandingPage from '../pages/LandingPage.vue'
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const handleLogin = async (credentials: { email: string; password: string; rememberMe: boolean }) => {
  const success = await authStore.login(credentials)
  if (success) {
    router.push('/dashboard')
  }
}

const handleRegister = async (data: { name: string; email: string; password: string }) => {
  const success = await authStore.register(data)
  if (success) {
    router.push('/dashboard')
  }
}

const handlePasswordReset = async (email: string) => {
  const success = await authStore.resetPassword(email)
  if (success) {
    // Success message is shown in the form
    console.log('Password reset email sent')
  }
}

const handleLearnMore = () => {
  router.push('/about')
}
</script>
