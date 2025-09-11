# Development Guide

## Project Architecture

This is a full-stack Vue.js application with complete separation between frontend and backend.

### Stack
- **Frontend**: Vue 3 + TypeScript + Tailwind CSS + Storybook
- **Backend**: Express.js + TypeScript + Supabase
- **Testing**: Vitest (unit) + Playwright (E2E)
- **CI/CD**: GitHub Actions

### Directory Structure
boilerplate/
├── frontend/                 # Vue 3 application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   │   ├── ui/         # Basic UI elements (Button, Input, etc.)
│   │   │   ├── layout/     # Layout components (Header, Footer)
│   │   │   └── forms/      # Form components (LoginForm, etc.)
│   │   ├── pages/          # Full page templates
│   │   ├── views/          # Vue router views (wrappers for pages)
│   │   ├── stores/         # Pinia state management
│   │   └── services/       # API communication
│   ├── stories/            # Storybook stories
│   └── e2e/               # Playwright tests
├── backend/                # Express API server
│   ├── src/
│   │   ├── routes/        # API routes
│   │   ├── services/      # External service integrations
│   │   └── middleware/    # Express middleware
│   └── tests/         # Backend tests
└── shared/                # Shared TypeScript types

## Development Rules & Best Practices

### Component Architecture
1. **UI Components** (`src/components/ui/`): Pure, reusable components
   - No business logic
   - Accept props and emit events
   - Include TypeScript interfaces
   - Must have Storybook stories

2. **Layout Components** (`src/components/layout/`): Page structure
   - Header, Footer, Navigation
   - Compose UI components
   - Handle layout-specific logic

3. **Form Components** (`src/components/forms/`): Complete forms
   - Validation logic
   - API integration
   - Compose UI components

4. **Pages** (`src/pages/`): Full page templates
   - Compose layout and form components
   - Accept props for customization
   - No router dependencies

5. **Views** (`src/views/`): Router-connected wrappers
   - Handle routing logic
   - Manage state with stores
   - Pass data to page components

### Styling Rules
- **Tailwind only** - No component libraries (Daisy, etc.)
- **Custom color system** - Use defined primary/secondary/danger colors
- **Responsive design** - Mobile-first approach
- **Consistent spacing** - Use Tailwind spacing scale

### API Architecture Rules
- **No direct Supabase calls from frontend**
- **All database operations through backend API**
- **Backend handles authentication, validation, business logic**
- **Frontend only calls `http://localhost:3001/api/*`**

### Component Development Workflow

#### Creating New Components
```bash
# 1. Create component
src/components/ui/MyComponent.vue

# 2. Create story
src/stories/MyComponent.stories.ts

# 3. Test in Storybook
npm run storybook

# 4. Use in pages/views
import MyComponent from '../components/ui/MyComponent.vue'
Component Template
vue<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md'
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const classes = computed(() => {
  // Tailwind classes based on props
})
</script>
Story Template
typescriptimport type { Meta, StoryObj } from '@storybook/vue3'
import MyComponent from '../components/ui/MyComponent.vue'

const meta: Meta<typeof MyComponent> = {
  title: 'UI/MyComponent',
  component: MyComponent,
  parameters: {
    layout: 'padded',
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
Testing Strategy

Unit Tests: Component logic and utilities
Integration Tests: API endpoints and database operations
E2E Tests: Complete user workflows
Storybook: Visual component testing

State Management

Pinia stores for global state (auth, user data)
Local state for component-specific data
Props/Events for parent-child communication

API Communication
typescript// Always use the API service
import { api, authAPI } from '../services/api'

// Never import Supabase directly in frontend
// ❌ import { supabase } from '@supabase/supabase-js'
// ✅ const response = await authAPI.login(credentials)
Environment Setup
bash# Frontend environment variables (.env)
VITE_API_URL=http://localhost:3001

# Backend environment variables (backend/.env)
PORT=3001
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_key
JWT_SECRET=your_jwt_secret
Development Commands
Root Level
bashnpm run dev          # Start both frontend and backend
npm run build        # Build both projects
npm run test         # Run all tests
npm run storybook    # Start Storybook
Frontend
bashcd frontend
npm run dev          # Development server (http://localhost:5173)
npm run build        # Production build
npm run test:unit    # Unit tests
npm run test:e2e     # E2E tests
npm run storybook    # Storybook (http://localhost:6006)
Backend
bashcd backend
npm run dev          # Development server (http://localhost:3001)
npm run build        # TypeScript compilation
npm run test         # Backend tests
Deployment
Frontend (Vercel)

Build command: cd frontend && npm run build
Output directory: frontend/dist
Environment variables: VITE_API_URL

Backend (Railway/Render)

Build command: cd backend && npm run build
Start command: cd backend && npm run start
Environment variables: All backend .env variables

Troubleshooting
Common Issues

Storybook not showing styles: Check .storybook/preview.ts imports CSS
API calls failing: Verify backend is running on port 3001
TypeScript errors: Ensure shared types are properly exported
Authentication not working: Check Supabase credentials in backend

Debug Commands
bash# Check running processes
lsof -i :3001  # Backend
lsof -i :5173  # Frontend
lsof -i :6006  # Storybook

# Test API endpoints
curl http://localhost:3001/health
curl http://localhost:3001/api/auth/test