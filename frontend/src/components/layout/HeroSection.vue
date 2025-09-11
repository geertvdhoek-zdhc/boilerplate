<template>
  <section :class="classes">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="py-20 text-center">
        <Typography variant="h1" size="4xl" weight="bold" class="mb-6">
          {{ title }}
        </Typography>
        
        <Typography size="xl" color="secondary" class="mb-8 max-w-3xl mx-auto">
          {{ subtitle }}
        </Typography>

        <div v-if="showCTA" class="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="primary" 
            size="lg"
            @click="$emit('primaryAction')"
          >
            {{ primaryButtonText }}
          </Button>
          <Button 
            v-if="secondaryButtonText"
            variant="outline" 
            size="lg"
            @click="$emit('secondaryAction')"
          >
            {{ secondaryButtonText }}
          </Button>
        </div>

        <slot name="extra" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Typography from '../ui/Typography.vue'
import Button from '../ui/Button.vue'

interface Props {
  title?: string
  subtitle?: string
  variant?: 'default' | 'gradient' | 'image'
  showCTA?: boolean
  primaryButtonText?: string
  secondaryButtonText?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Welcome to Our Platform',
  subtitle: 'Build amazing things with our powerful tools and intuitive interface.',
  variant: 'default',
  showCTA: true,
  primaryButtonText: 'Get Started',
  secondaryButtonText: 'Learn More'
})

defineEmits<{
  primaryAction: []
  secondaryAction: []
}>()

const classes = computed(() => {
  const variants = {
    default: 'bg-white dark:bg-secondary-900 transition-colors duration-200',
    gradient: 'bg-gradient-to-br from-primary-50 to-primary-100 dark:from-secondary-900 dark:to-secondary-800 transition-colors duration-200',
    image: 'bg-secondary-50 dark:bg-secondary-800 transition-colors duration-200'
  }
  
  return variants[props.variant]
})
</script>
