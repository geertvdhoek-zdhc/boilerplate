<template>
  <DashboardPage
    logo-title="My App"
    :user-name="authStore.user?.name || 'User'"
    welcome-message="Here's what's happening with your account today."
    footer-description="Building the future of web applications."
    @logout="handleLogout"
    @quick-action="handleQuickAction"
  />
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import DashboardPage from '../pages/DashboardPage.vue'
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const handleLogout = () => {
  authStore.logout()
  router.push('/landing')
}

const handleQuickAction = (actionId: string) => {
  alert(`Quick action: ${actionId}`)
}
</script>
