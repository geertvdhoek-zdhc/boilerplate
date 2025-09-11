# Vue Boilerplate

A full-stack Vue 3 + TypeScript + Tailwind CSS + Supabase starter with backend API separation, comprehensive testing, and CI/CD.

## 🚀 Features

- **Frontend**: Vue 3 + TypeScript + Tailwind CSS
- **Backend**: Express.js API with Supabase integration
- **Testing**: Vitest (unit) + Playwright (E2E)
- **CI/CD**: GitHub Actions pipeline
- **Architecture**: Clean separation between frontend and backend

## 📁 Project Structure
boilerplate/
├── frontend/          # Vue 3 app
├── backend/           # Express API server
├── shared/            # Shared types
├── docs/             # Documentation
└── .github/workflows/ # CI/CD

## 🛠️ Development Setup

### Prerequisites
- Node.js 18+
- Git

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/geertvdhoek-zdhc/boilerplate.git
   cd boilerplate

Install dependencies
bashnpm install

Set up environment variables
bashcd backend
cp .env.example .env
# Edit .env with your Supabase credentials

Start development servers
bash# From root directory
npm run dev
This starts:

Frontend: http://localhost:5173
Backend: http://localhost:3001



🧪 Testing
Run all tests
bashnpm run test
Individual test suites
bash# Backend unit tests
npm run test:backend

# Frontend unit tests
npm run test:frontend

# E2E tests
npm run test:e2e
🚀 Deployment
Vercel (Frontend)

Connect your GitHub repo to Vercel
Set build command: cd frontend && npm run build
Set output directory: frontend/dist

Railway/Render (Backend)

Connect your GitHub repo
Set build command: cd backend && npm run build
Set start command: cd backend && npm run start

📚 API Documentation
Health Check
GET /health
Authentication
POST /api/auth/register
POST /api/auth/login
POST /api/auth/mock-register  # For testing
🔧 Configuration
Environment Variables
Backend (.env)
PORT=3001
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
JWT_SECRET=your_jwt_secret
Supabase Setup

Go to supabase.com
Create new project
Get URL and anon key from Settings → API
Update backend/.env

🎨 Styling

Uses Tailwind CSS utility classes
Custom components in src/assets/main.css
No component libraries (styled from scratch)

📝 Scripts Reference
Root level:

npm run dev - Start both frontend and backend
npm run build - Build both projects
npm run test - Run all tests

Frontend:

npm run dev - Development server
npm run build - Production build
npm run test:unit - Unit tests
npm run test:e2e - E2E tests

Backend:

npm run dev - Development server with hot reload
npm run build - TypeScript compilation
npm run start - Production server
npm run test - Unit tests

🤝 Contributing

Fork the repository
Create feature branch: git checkout -b feature/new-feature
Commit changes: git commit -m 'Add new feature'
Push to branch: git push origin feature/new-feature
Submit pull request