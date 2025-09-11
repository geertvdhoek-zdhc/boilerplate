<template>
  <Button
    variant="ghost"
    size="sm"
    @click="themeStore.toggleDarkMode()"
  >
    {{ themeStore.isDark ? '☀️' : '🌙' }}
  </Button>
</template>

<script setup lang="ts">
import Button from './Button.vue'
import { useThemeStore } from '../../stores/theme'

const themeStore = useThemeStore()
</script>
