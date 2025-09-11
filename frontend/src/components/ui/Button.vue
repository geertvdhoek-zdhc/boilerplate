<template>
  <button :type="type" :disabled="disabled || loading" :class="classes" @click="$emit('click', $event)">
    <span v-if="loading" class="animate-spin mr-2">⟳</span>
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success' | 'warning'
  size?: 'sm' | 'md' | 'lg'
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  loading?: boolean
  fullWidth?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  type: 'button',
  disabled: false,
  loading: false,
  fullWidth: false
})

defineEmits<{
  click: [event: MouseEvent]
}>()

const classes = computed(() => {
  const base = 'inline-flex items-center justify-center font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'

  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  }

  const variants = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600',
    secondary: 'bg-secondary-200 text-secondary-900 dark:bg-dark-surface dark:text-white dark:hover:bg-secondary-700',
    outline: 'border border-secondary-300 bg-white text-secondary-700 hover:bg-secondary-50 focus:ring-secondary-500 disabled:bg-secondary-50',
    ghost: 'bg-transparent text-secondary-700 hover:bg-secondary-100 focus:ring-secondary-500 disabled:text-secondary-400',
    danger: 'bg-danger-600 text-white hover:bg-danger-700 focus:ring-danger-500 disabled:bg-secondary-300',
    success: 'bg-success-600 text-white hover:bg-success-700 focus:ring-success-500 disabled:bg-secondary-300',
    warning: 'bg-warning-600 text-white hover:bg-warning-700 focus:ring-warning-500 disabled:bg-secondary-300'
  }

  const width = props.fullWidth ? 'w-full' : ''
  const disabled = props.disabled || props.loading ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'

  return `${base} ${sizes[props.size]} ${variants[props.variant]} ${width} ${disabled}`
})
</script>
