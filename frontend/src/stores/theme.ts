import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const isDark = ref(false)

  const toggleDarkMode = () => {
    isDark.value = !isDark.value
    if (isDark.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  }

  const initTheme = () => {
    const saved = localStorage.getItem('theme')
    isDark.value = saved === 'dark'
    if (isDark.value) {
      document.documentElement.classList.add('dark')
    }
  }

  return {
    isDark,
    toggleDarkMode,
    initTheme
  }
})
