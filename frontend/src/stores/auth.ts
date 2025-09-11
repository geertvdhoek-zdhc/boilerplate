import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { authAPI, type AuthCredentials, type RegisterData } from '../services/api'

interface User {
  id: string
  email: string
  name?: string
}

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)
  const isLoading = ref(false)
  const error = ref('')

  const isAuthenticated = computed(() => !!user.value)

  // Initialize from localStorage
  const initAuth = () => {
    const token = localStorage.getItem('auth_token')
    const userData = localStorage.getItem('user_data')
    
    if (token && userData) {
      try {
        user.value = JSON.parse(userData)
      } catch {
        localStorage.removeItem('auth_token')
        localStorage.removeItem('user_data')
      }
    }
  }

  const login = async (credentials: AuthCredentials & { rememberMe?: boolean }) => {
    isLoading.value = true
    error.value = ''

    try {
      const response = await authAPI.login(credentials)
      
      user.value = response.user
      
      if (response.session?.access_token) {
        localStorage.setItem('auth_token', response.session.access_token)
        localStorage.setItem('user_data', JSON.stringify(response.user))
      }
      
      return true
    } catch (err: any) {
      error.value = err.response?.data?.error || 'Login failed'
      return false
    } finally {
      isLoading.value = false
    }
  }

  const register = async (data: RegisterData) => {
    isLoading.value = true
    error.value = ''

    try {
      const response = await authAPI.register(data)
      
      user.value = response.user
      
      if (response.session?.access_token) {
        localStorage.setItem('auth_token', response.session.access_token)
        localStorage.setItem('user_data', JSON.stringify(response.user))
      }
      
      return true
    } catch (err: any) {
      error.value = err.response?.data?.error || 'Registration failed'
      return false
    } finally {
      isLoading.value = false
    }
  }

  const resetPassword = async (email: string) => {
    isLoading.value = true
    error.value = ''

    try {
      await authAPI.resetPassword(email)
      return true
    } catch (err: any) {
      error.value = err.response?.data?.error || 'Password reset failed'
      return false
    } finally {
      isLoading.value = false
    }
  }

  const logout = async () => {
    try {
      await authAPI.logout()
    } catch {
      // Continue with logout even if API call fails
    }
    
    user.value = null
    error.value = ''
    localStorage.removeItem('auth_token')
    localStorage.removeItem('user_data')
  }

  // Initialize on store creation
  initAuth()

  return {
    user,
    isLoading,
    error,
    isAuthenticated,
    login,
    register,
    resetPassword,
    logout,
    initAuth
  }
})
