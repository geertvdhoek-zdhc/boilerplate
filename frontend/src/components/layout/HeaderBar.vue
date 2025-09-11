<template>
  <header :class="classes">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <Logo 
            :title="logoTitle"
            :color="logoColor"
            size="md"
          />
        </div>

        <!-- Navigation (when logged in) -->
        <nav v-if="showNav" class="hidden md:flex space-x-8">
          <a 
            v-for="item in navItems" 
            :key="item.name"
            :href="item.href"
            :class="navLinkClasses"
          >
            {{ item.name }}
          </a>
        </nav>

        <!-- Actions -->
        <div class="flex items-center space-x-4">
          <ThemeToggle />
          <slot name="actions">
            <Button 
              v-if="!showNav" 
              variant="outline" 
              size="sm"
              @click="$emit('login')"
            >
              Sign In
            </Button>
            <Button 
              v-else 
              variant="ghost" 
              size="sm"
              @click="$emit('logout')"
            >
              Sign Out
            </Button>
          </slot>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Logo from '../ui/Logo.vue'
import Button from '../ui/Button.vue'
import ThemeToggle from '../ui/ThemeToggle.vue'

interface NavItem {
  name: string
  href: string
}

interface Props {
  logoTitle?: string
  variant?: 'light' | 'dark' | 'transparent'
  showNav?: boolean
  navItems?: NavItem[]
}

const props = withDefaults(defineProps<Props>(), {
  logoTitle: 'Your App',
  variant: 'light',
  showNav: false,
  navItems: () => [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Profile', href: '/profile' },
    { name: 'Settings', href: '/settings' }
  ]
})

defineEmits<{
  login: []
  logout: []
}>()

const classes = computed(() => {
  const variants = {
    light: 'bg-white dark:bg-secondary-900 border-b border-secondary-200 dark:border-secondary-700 shadow-sm',
    dark: 'bg-secondary-900 border-b border-secondary-700',
    transparent: 'bg-transparent'
  }
  
  return variants[props.variant]
})

const logoColor = computed<'white' | 'primary'>(() => {
  return props.variant === 'dark' ? 'white' : 'primary'
})

const navLinkClasses = computed(() => {
  const base = 'text-sm font-medium transition-colors duration-200'
  
  const colors = props.variant === 'dark' 
    ? 'text-secondary-300 hover:text-white' 
    : 'text-secondary-700 dark:text-secondary-300 hover:text-secondary-900 dark:hover:text-white'
  
  return `${base} ${colors}`
})
</script>
