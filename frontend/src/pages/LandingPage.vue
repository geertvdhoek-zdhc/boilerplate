<template>
  <div class="min-h-screen bg-secondary-50 dark:bg-secondary-900 flex flex-col transition-colors duration-200">
    <HeaderBar 
      :logo-title="logoTitle"
      @login="scrollToAuth"
    />

    <main class="flex-1">
      <!-- Hero Section -->
      <HeroSection
        :title="heroTitle"
        :subtitle="heroSubtitle"
        variant="gradient"
        primary-button-text="Get Started"
        secondary-button-text="Learn More"
        @primary-action="scrollToAuth"
        @secondary-action="$emit('learnMore')"
      />

      <!-- Auth Section -->
      <section id="auth" class="py-16 bg-white dark:bg-secondary-800 transition-colors duration-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <!-- Login Form -->
          <LoginForm
            v-if="authMode === 'login'"
            :loading="loginLoading"
            :error="loginError"
            @submit="handleLogin"
            @forgot-password="handleForgotPassword"
          >
            <template #footer>
              <div class="text-center mt-4">
                <Typography color="secondary" size="sm">
                  Don't have an account?
                </Typography>
                <Typography variant="link" size="sm" @click="authMode = 'register'">
                  Sign up here
                </Typography>
              </div>
            </template>
          </LoginForm>

          <!-- Register Form -->
          <RegisterForm
            v-else-if="authMode === 'register'"
            :loading="registerLoading"
            :error="registerError"
            @submit="handleRegister"
            @switch-to-login="authMode = 'login'"
          />

          <!-- Password Reset Form -->
          <PasswordResetForm
            v-else-if="authMode === 'reset'"
            :loading="resetLoading"
            :error="resetError"
            @submit="handlePasswordReset"
            @back-to-login="authMode = 'login'"
          />
        </div>
      </section>
    </main>

    <FooterBar 
      :logo-title="logoTitle"
      :description="footerDescription"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import HeaderBar from '../components/layout/HeaderBar.vue'
import FooterBar from '../components/layout/FooterBar.vue'
import HeroSection from '../components/layout/HeroSection.vue'
import LoginForm from '../components/forms/LoginForm.vue'
import RegisterForm from '../components/forms/RegisterForm.vue'
import PasswordResetForm from '../components/forms/PasswordResetForm.vue'
import Typography from '../components/ui/Typography.vue'

interface Props {
  logoTitle?: string
  heroTitle?: string
  heroSubtitle?: string
  footerDescription?: string
  loginLoading?: boolean
  loginError?: string
  registerLoading?: boolean
  registerError?: string
  resetLoading?: boolean
  resetError?: string
}

withDefaults(defineProps<Props>(), {
  logoTitle: 'My App',
  heroTitle: 'Build Something Amazing',
  heroSubtitle: 'The all-in-one platform for modern web applications. Fast, secure, and built for scale.',
  footerDescription: 'Building the future of web applications.',
  loginLoading: false,
  loginError: '',
  registerLoading: false,
  registerError: '',
  resetLoading: false,
  resetError: ''
})

const emit = defineEmits<{
  login: [credentials: { email: string; password: string; rememberMe: boolean }]
  register: [data: { name: string; email: string; password: string }]
  resetPassword: [email: string]
  learnMore: []
}>()

const authMode = ref<'login' | 'register' | 'reset'>('login')

const scrollToAuth = () => {
  document.getElementById('auth')?.scrollIntoView({ behavior: 'smooth' })
}

const handleLogin = (credentials: { email: string; password: string; rememberMe: boolean }) => {
  emit('login', credentials)
}

const handleRegister = (data: { name: string; email: string; password: string }) => {
  emit('register', data)
}

const handlePasswordReset = (email: string) => {
  emit('resetPassword', email)
}

const handleForgotPassword = () => {
  authMode.value = 'reset'
}
</script>
