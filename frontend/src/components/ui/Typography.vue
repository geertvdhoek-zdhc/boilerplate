<template>
  <component :is="tag" :class="classes">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'caption' | 'link'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold'
  color?: 'primary' | 'secondary' | 'muted' | 'white' | 'danger' | 'success' | 'warning'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'body',
  size: 'md',
  weight: 'normal',
  color: 'primary'
})

const tag = computed(() => {
  switch (props.variant) {
    case 'h1': return 'h1'
    case 'h2': return 'h2'
    case 'h3': return 'h3'
    case 'h4': return 'h4'
    case 'link': return 'a'
    default: return 'p'
  }
})

const classes = computed(() => {
  const base = 'font-family-inherit transition-colors duration-200'
  
  const sizes = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl'
  }
  
  const weights = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold'
  }
  
  const colors = {
    primary: 'text-secondary-900 dark:text-white',
    secondary: 'text-secondary-700 dark:text-secondary-300',
    muted: 'text-secondary-500 dark:text-secondary-400',
    white: 'text-white',
    danger: 'text-danger-600 dark:text-danger-400',
    success: 'text-success-600 dark:text-success-400',
    warning: 'text-warning-600 dark:text-warning-400'
  }
  
  const linkStyles = props.variant === 'link' ? 'hover:underline cursor-pointer text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300' : ''
  
  return `${base} ${sizes[props.size]} ${weights[props.weight]} ${colors[props.color]} ${linkStyles}`
})
</script>
