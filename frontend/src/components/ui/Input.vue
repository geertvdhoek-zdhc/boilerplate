<template>
  <div class="w-full">
    <label v-if="label" :for="id" class="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1 transition-colors duration-200">
      {{ label }}
      <span v-if="required" class="text-danger-500">*</span>
    </label>
    
    <div class="relative">
      <input
        :id="id"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :required="required"
        :disabled="disabled"
        :class="inputClasses"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        @blur="$emit('blur', $event)"
        @focus="$emit('focus', $event)"
      />
      
      <div v-if="hasError" class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
        <span class="text-danger-500">⚠</span>
      </div>
    </div>
    
    <p v-if="error" class="mt-1 text-sm text-danger-600 dark:text-danger-400">{{ error }}</p>
    <p v-else-if="hint" class="mt-1 text-sm text-secondary-500 dark:text-secondary-400">{{ hint }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  id?: string
  type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'search'
  modelValue?: string
  label?: string
  placeholder?: string
  hint?: string
  error?: string
  required?: boolean
  disabled?: boolean
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  modelValue: '',
  size: 'md'
})

defineEmits<{
  'update:modelValue': [value: string]
  blur: [event: FocusEvent]
  focus: [event: FocusEvent]
}>()

const hasError = computed(() => !!props.error)

const inputClasses = computed(() => {
  const base = 'block w-full rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-white dark:bg-secondary-700'
  
  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2.5 text-base',
    lg: 'px-4 py-3 text-lg'
  }
  
  const states = hasError.value
    ? 'border-danger-300 dark:border-danger-600 text-danger-900 dark:text-danger-100 placeholder-danger-300 dark:placeholder-danger-400 focus:border-danger-500 focus:ring-danger-500'
    : 'border-secondary-300 dark:border-secondary-500 text-secondary-900 dark:text-white placeholder-secondary-400 dark:placeholder-secondary-500 focus:border-primary-500 focus:ring-primary-500'
  
  const disabled = props.disabled 
    ? 'bg-secondary-50 dark:bg-secondary-600 text-secondary-500 dark:text-secondary-400 cursor-not-allowed'
    : 'hover:border-secondary-400 dark:hover:border-secondary-400'
  
  return `${base} ${sizes[props.size]} ${states} ${disabled}`
})
</script>
