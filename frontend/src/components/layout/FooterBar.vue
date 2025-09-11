<template>
  <footer :class="classes">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="py-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <!-- Logo and description -->
          <div class="mb-4 md:mb-0">
            <Logo 
              :title="logoTitle"
              :color="logoColor"
              size="sm"
            />
            <Typography 
              v-if="description" 
              :color="textColor" 
              size="sm" 
              class="mt-2"
            >
              {{ description }}
            </Typography>
          </div>

          <!-- Links -->
          <div v-if="links.length" class="flex space-x-6 mb-4 md:mb-0">
            <a 
              v-for="link in links"
              :key="link.name"
              :href="link.href"
              :class="linkClasses"
            >
              {{ link.name }}
            </a>
          </div>

          <!-- Copyright -->
          <div>
            <Typography :color="textColor" size="sm">
              {{ copyrightText }}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Logo from '../ui/Logo.vue'
import Typography from '../ui/Typography.vue'

interface FooterLink {
  name: string
  href: string
}

interface Props {
  logoTitle?: string
  description?: string
  variant?: 'light' | 'dark'
  copyrightText?: string
  links?: FooterLink[]
}

const props = withDefaults(defineProps<Props>(), {
  logoTitle: 'Your App',
  description: '',
  variant: 'light',
  copyrightText: `© ${new Date().getFullYear()} Your Company. All rights reserved.`,
  links: () => [
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
    { name: 'Contact', href: '/contact' }
  ]
})

const classes = computed(() => {
  const variants = {
    light: 'bg-secondary-50 dark:bg-secondary-800 border-t border-secondary-200 dark:border-secondary-700',
    dark: 'bg-secondary-900 border-t border-secondary-700'
  }
  
  return `${variants[props.variant]} transition-colors duration-200`
})

const logoColor = computed<'white' | 'primary'>(() => {
  return props.variant === 'dark' ? 'white' : 'primary'
})

const textColor = computed<'muted'>(() => {
  return 'muted'
})

const linkClasses = computed(() => {
  const base = 'text-sm transition-colors duration-200'
  
  const colors = 'text-secondary-600 dark:text-secondary-400 hover:text-secondary-900 dark:hover:text-white'
  
  return `${base} ${colors}`
})
</script>
