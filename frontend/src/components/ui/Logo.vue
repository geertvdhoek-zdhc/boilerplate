<template>
  <div :class="classes">
    <div :class="iconClasses">
      <!-- Simple geometric logo -->
      <svg viewBox="0 0 40 40" fill="currentColor" class="w-full h-full">
        <rect x="4" y="4" width="32" height="32" rx="8" fill="currentColor" opacity="0.1"/>
        <rect x="8" y="8" width="24" height="24" rx="6" fill="currentColor" opacity="0.3"/>
        <rect x="12" y="12" width="16" height="16" rx="4" fill="currentColor"/>
      </svg>
    </div>
    
    <div v-if="showText" :class="textClasses">
      <span class="font-bold">{{ title }}</span>
      <span v-if="subtitle" class="font-normal opacity-75">{{ subtitle }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  title?: string
  subtitle?: string
  showText?: boolean
  color?: 'primary' | 'white' | 'dark'
  orientation?: 'horizontal' | 'vertical'
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  title: 'Your App',
  subtitle: '',
  showText: true,
  color: 'primary',
  orientation: 'horizontal'
})

const classes = computed(() => {
  const base = 'flex items-center transition-colors duration-200'
  const orientation = props.orientation === 'vertical' ? 'flex-col' : 'flex-row'
  const spacing = props.orientation === 'vertical' ? 'space-y-2' : 'space-x-3'
  
  return `${base} ${orientation} ${spacing}`
})

const iconClasses = computed(() => {
  const sizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
    xl: 'w-12 h-12'
  }
  
  const colors = {
    primary: 'text-primary-600 dark:text-primary-400',
    white: 'text-white',
    dark: 'text-secondary-900 dark:text-white'
  }
  
  return `${sizes[props.size]} ${colors[props.color]} flex-shrink-0`
})

const textClasses = computed(() => {
  const sizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  }
  
  const colors = {
    primary: 'text-secondary-900 dark:text-white',
    white: 'text-white',
    dark: 'text-secondary-900 dark:text-white'
  }
  
  const orientation = props.orientation === 'vertical' ? 'text-center' : 'text-left'
  
  return `${sizes[props.size]} ${colors[props.color]} ${orientation} flex flex-col leading-tight`
})
</script>
