<template>
  <div class="min-h-screen bg-secondary-50 flex flex-col">
    <HeaderBar 
      :logo-title="logoTitle"
      :show-nav="true"
      variant="light"
      @logout="$emit('logout')"
    />

    <main class="flex-1">
      <!-- Welcome Section -->
      <section class="bg-white border-b border-secondary-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Typography variant="h1" size="3xl" weight="bold" class="mb-2">
            Welcome back, {{ userName }}!
          </Typography>
          <Typography color="secondary" size="lg">
            {{ welcomeMessage }}
          </Typography>
        </div>
      </section>

      <!-- Dashboard Content -->
      <section class="py-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Stats Cards -->
            <Card v-for="stat in stats" :key="stat.title" variant="default">
              <div class="flex items-center">
                <div class="flex-1">
                  <Typography variant="h3" size="lg" weight="semibold" class="mb-1">
                    {{ stat.value }}
                  </Typography>
                  <Typography color="secondary" size="sm">
                    {{ stat.title }}
                  </Typography>
                </div>
                <div class="text-2xl">{{ stat.icon }}</div>
              </div>
            </Card>

            <!-- Quick Actions -->
            <Card variant="elevated" class="md:col-span-2 lg:col-span-3">
              <template #header>
                <Typography variant="h2" size="xl" weight="semibold">
                  Quick Actions
                </Typography>
              </template>
              
              <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Button 
                  v-for="action in quickActions" 
                  :key="action.name"
                  variant="outline" 
                  class="h-20 flex flex-col items-center justify-center"
                  @click="$emit('quickAction', action.id)"
                >
                  <span class="text-2xl mb-1">{{ action.icon }}</span>
                  <span class="text-sm">{{ action.name }}</span>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </main>

    <FooterBar 
      :logo-title="logoTitle"
      :description="footerDescription"
    />
  </div>
</template>

<script setup lang="ts">
import HeaderBar from '../components/layout/HeaderBar.vue'
import FooterBar from '../components/layout/FooterBar.vue'
import Typography from '../components/ui/Typography.vue'
import Card from '../components/ui/Card.vue'
import Button from '../components/ui/Button.vue'

interface Stat {
  title: string
  value: string
  icon: string
}

interface QuickAction {
  id: string
  name: string
  icon: string
}

interface Props {
  logoTitle?: string
  userName?: string
  welcomeMessage?: string
  footerDescription?: string
  stats?: Stat[]
  quickActions?: QuickAction[]
}

withDefaults(defineProps<Props>(), {
  logoTitle: 'My App',
  userName: 'User',
  welcomeMessage: 'Here\'s what\'s happening with your account today.',
  footerDescription: 'Building the future of web applications.',
  stats: () => [
    { title: 'Total Projects', value: '12', icon: '📊' },
    { title: 'Active Users', value: '1,234', icon: '👥' },
    { title: 'Revenue', value: '$12,345', icon: '💰' }
  ],
  quickActions: () => [
    { id: 'new-project', name: 'New Project', icon: '➕' },
    { id: 'analytics', name: 'Analytics', icon: '📈' },
    { id: 'settings', name: 'Settings', icon: '⚙️' },
    { id: 'support', name: 'Support', icon: '❓' }
  ]
})

defineEmits<{
  logout: []
  quickAction: [actionId: string]
}>()
</script>
