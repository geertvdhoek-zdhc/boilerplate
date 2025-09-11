import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth_token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Handle auth errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('auth_token')
      window.location.href = '/landing'
    }
    return Promise.reject(error)
  }
)

export interface AuthCredentials {
  email: string
  password: string
}

export interface RegisterData extends AuthCredentials {
  name?: string
}

export interface AuthResponse {
  user: {
    id: string
    email: string
    name?: string
  }
  session?: {
    access_token: string
    refresh_token: string
  }
}

// Auth API calls
export const authAPI = {
  async register(data: RegisterData): Promise<AuthResponse> {
    const response = await api.post('/api/auth/register', data)
    return response.data
  },

  async login(credentials: AuthCredentials): Promise<AuthResponse> {
    const response = await api.post('/api/auth/login', credentials)
    return response.data
  },

  async resetPassword(email: string): Promise<{ message: string }> {
    const response = await api.post('/api/auth/reset-password', { email })
    return response.data
  },

  async logout(): Promise<void> {
    await api.post('/api/auth/logout')
  }
}
