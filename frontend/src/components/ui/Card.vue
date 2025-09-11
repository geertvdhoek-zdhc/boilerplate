<template>
  <div :class="classes">
    <div v-if="$slots.header" class="px-6 py-4 border-b border-secondary-200 dark:border-secondary-600">
      <slot name="header" />
    </div>
    
    <div :class="bodyClasses">
      <slot />
    </div>
    
    <div v-if="$slots.footer" class="px-6 py-4 border-t border-secondary-200 dark:border-secondary-600 bg-secondary-50 dark:bg-secondary-700">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'default' | 'bordered' | 'elevated' | 'flat'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  padding: 'md',
  rounded: 'lg'
})

const classes = computed(() => {
  const base = 'bg-white dark:bg-secondary-800 overflow-hidden transition-colors duration-200'
  
  const variants = {
    default: 'border border-secondary-200 dark:border-secondary-600 shadow-sm',
    bordered: 'border-2 border-secondary-300 dark:border-secondary-500',
    elevated: 'shadow-lg border border-secondary-100 dark:border-secondary-700',
    flat: 'border border-secondary-100 dark:border-secondary-700'
  }
  
  const rounded = {
    none: '',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl'
  }
  
  return `${base} ${variants[props.variant]} ${rounded[props.rounded]}`
})

const bodyClasses = computed(() => {
  const padding = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }
  
  return padding[props.padding]
})
</script>
