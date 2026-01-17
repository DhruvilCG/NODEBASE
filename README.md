# 🚀 AutoFlow

> **A powerful no-code workflow automation platform for building complex automations visually**

[![Node Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org)
[![TypeScript](https://img.shields.io/badge/typescript-5.0+-blue)](https://www.typescriptlang.org)
[![Next.js](https://img.shields.io/badge/nextjs-15.0-black)](https://nextjs.org)

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Quick Start](#-quick-start)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Environment Setup](#-environment-setup)
- [Database](#-database)
- [Commands](#-commands)
- [API](#-api)
- [Nodes](#-nodes)
- [Troubleshooting](#-troubleshooting)

---

## 📌 Overview

AutoFlow is a visual workflow automation platform built with modern web technologies. It allows users to create complex automation workflows without writing code using an intuitive node-based editor.

### What It Does
- Create visual workflows using a drag-and-drop editor
- Integrate with multiple third-party services (Google Forms, Stripe, Discord, Slack, etc.)
- Execute workflows in real-time with live monitoring
- Trigger workflows via webhooks or schedules
- Store and manage credentials securely
- Track execution history and logs

---

## 🎬 Quick Start

Get up and running in 3 minutes:

```bash
# 1. Install dependencies
npm install

# 2. Set up environment
cp .env.example .env.local

# 3. Initialize database
npx prisma migrate dev

# 4. Start development
npm run dev:all
```

**Access the app**: [http://localhost:3000/workflows](http://localhost:3000/workflows)

---

## ✨ Features

### Core Functionality
- ✅ **Visual Editor** - Drag-and-drop node-based workflow builder powered by React Flow
- ✅ **Pre-built Nodes** - Trigger, action, transformation, and utility nodes ready to use
- ✅ **Real-time Execution** - Execute workflows and watch logs in real-time
- ✅ **Multi-Provider Integrations** - Google Forms, Stripe, Discord, Slack, and more
- ✅ **Webhook Support** - Trigger workflows from external services
- ✅ **Secure Credentials** - Encrypted storage for API keys and tokens
- ✅ **Execution Tracking** - Full history of workflow r    uns with detailed logs
- ✅ **AI Integration** - OpenAI, Anthropic, and Google AI support

### Advanced Features
- 🔐 Authentication with BetterAuth
- 📊 Real-time monitoring and analytics
- 🔄 Background job processing with Inngest
- 💰 Subscription management integration
- 🎯 Advanced filtering and routing
- 🔔 Real-time notifications via WebSocket
- 🛡️ Enterprise-grade security

---

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router & Turbopack
- **React Flow** - Visual workflow editor
- **Radix UI** - Accessible component library
- **Tailwind CSS** - Utility-first styling
- **React Hook Form** - Form state management
- **TanStack Query** - Data fetching and caching

### Backend
- **Node.js** - Runtime environment
- **Prisma** - ORM for database management
- **PostgreSQL** - Primary database
- **tRPC** - Type-safe API framework
- **Inngest** - Background job queue
- **Sentry** - Error tracking and monitoring

### Services & Integrations
- **OpenAI / Anthropic / Google AI** - AI capabilities
- **BetterAuth** - Authentication
- **Polar.sh** - Payments & subscriptions
- **ngrok** - Local webhook development
- **Vercel** - Deployment & cron jobs

---

## 📁 Project Structure

```
autoflow/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── (auth)/              # Auth pages (login, signup)
│   │   ├── (dashboard)/         # Dashboard pages
│   │   ├── (editor)/            # Workflow editor
│   │   ├── api/                 # API routes
│   │   │   ├── auth/            # Authentication endpoints
│   │   │   ├── inngest/         # Background job handlers
│   │   │   ├── trpc/            # tRPC API
│   │   │   └── webhooks/        # External webhooks
│   │   └── layout.tsx           # Root layout
│   │
│   ├── components/              # React components
│   │   ├── react-flow/          # Workflow editor components
│   │   ├── ui/                  # UI components (buttons, forms, etc.)
│   │   ├── entity-components/   # Entity management UI
│   │   └── providers/           # Context providers
│   │
│   ├── features/                # Feature modules
│   │   ├── auth/                # Authentication logic
│   │   ├── credentials/         # Credential management
│   │   ├── editor/              # Editor functionality
│   │   ├── executions/          # Workflow execution
│   │   ├── subscriptions/       # Subscription management
│   │   ├── triggers/            # Trigger nodes
│   │   └── workflows/           # Workflow management
│   │
│   ├── lib/                     # Utilities
│   │   ├── auth.ts              # Auth utilities
│   │   ├── db.ts                # Database client
│   │   ├── encryption.ts        # Encryption helpers
│   │   └── utils.ts             # General utilities
│   │
│   ├── trpc/                    # tRPC setup
│   │   ├── routers/             # API routers
│   │   └── init.ts              # tRPC configuration
│   │
│   ├── inngest/                 # Background jobs
│   │   ├── functions.ts         # Job definitions
│   │   └── channels/            # Event channels
│   │
│   ├── hooks/                   # Custom React hooks
│   ├── config/                  # App configuration
│   └── generated/               # Generated files (Prisma)
│
├── prisma/
│   ├── schema.prisma            # Database schema
│   └── migrations/              # Migration files
│
├── public/                      # Static assets
├── docs/                        # Documentation
│   └── videos/                  # Demo videos location
│
├── .env.example                 # Environment template
├── next.config.ts               # Next.js config
├── tsconfig.json                # TypeScript config
├── tailwind.config.ts           # Tailwind config
└── package.json                 # Dependencies

```

---

## 🚀 Installation

### Prerequisites
- Node.js >= 18.0.0
- npm, yarn, or pnpm
- PostgreSQL database
- Git

### Setup Steps

#### 1. Clone & Install
```bash
git clone https://github.com/DhruvilCG/AutoFlow.git
cd autoflow
npm install
```

#### 2. Environment Variables
```bash
cp .env.example .env.local
```

**Required variables in `.env.local`:**
```env
DATABASE_URL="postgresql://user:password@localhost:5432/autoflow"
BETTER_AUTH_SECRET="your-secret-key"
BETTER_AUTH_URL="http://localhost:3000"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

#### 3. Database Setup
```bash
npx prisma migrate dev --name init
npm run prisma:dev  # View database
```

#### 4. Start Development
```bash
npm run dev:all     # Recommended: starts all services
# OR
npm run dev         # Just Next.js
```

---

## 🔧 Environment Configuration

### Essential Variables

```env
# Database Connection
DATABASE_URL="postgresql://user:password@localhost:5432/autoflow"

# Authentication (BetterAuth)
BETTER_AUTH_SECRET="generate-a-random-secret"
BETTER_AUTH_URL="http://localhost:3000"
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# AI Providers (choose at least one)
OPENAI_API_KEY="sk-..."
ANTHROPIC_API_KEY="sk-ant-..."
GOOGLE_GENERATIVE_AI_API_KEY="AIza..."

# External Services
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_PUBLISHABLE_KEY="pk_test_..."
DISCORD_BOT_TOKEN="..."
SLACK_BOT_TOKEN="xoxb-..."

# Background Jobs
INNGEST_EVENT_KEY="..."
INNGEST_SIGNING_KEY="..."

# Webhooks (Development)
NGROK_URL="https://your-ngrok-url.ngrok-free.app"

# Error Tracking (Optional)
SENTRY_AUTH_TOKEN="..."
SENTRY_PROJECT_ID="..."

# Payments (Optional)
POLAR_API_KEY="..."
```

---

## 💾 Database

### Schema Highlights

Key database tables:
- **User** - User accounts and profiles
- **workflow** - Workflow definitions and configuration
- **Node** - Individual workflow nodes
- **Edge** - Connections between nodes
- **Execution** - Workflow run history and logs
- **Credential** - Encrypted API credentials
- **Trigger** - Workflow trigger configurations

### Useful Commands

```bash
# Create a new migration
npx prisma migrate dev --name your_migration_name

# View database in GUI
npm run prisma:dev

# Reset database (dev only - deletes all data)
npx prisma migrate reset

# Check migration status
npx prisma migrate status
```

---

## ⚡ Commands

```bash
# Development
npm run dev              # Start Next.js dev server with Turbopack
npm run dev:all         # Start all services (recommended)
npm run inngest:dev     # Start Inngest background jobs
npm run prisma:dev      # Open Prisma Studio
npm run ngrok:dev       # Start ngrok tunnel for webhooks

# Building & Production
npm run build           # Build for production
npm run start           # Start production server
npm run lint            # Run ESLint

# Database
npm run migrate:dev     # Run migrations
```

---

## 📡 API

### tRPC Endpoints

All API endpoints are type-safe and documented:

#### Workflows
```typescript
// List workflows
const workflows = await trpc.workflow.getAll.query();

// Create workflow
const workflow = await trpc.workflow.create.mutate({
  name: "My Automation",
  description: "Does something cool"
});

// Update workflow
await trpc.workflow.update.mutate({
  id: "workflow-id",
  nodes: [...nodes],
  edges: [...edges]
});
```

#### Credentials
```typescript
// Add credential
await trpc.credentials.create.mutate({
  provider: "stripe",
  name: "Production Stripe",
  data: { apiKey: "sk_..." }
});

// Get credential (decrypted)
const cred = await trpc.credentials.get.query("credential-id");
```

#### Executions
```typescript
// Get execution history
const executions = await trpc.executions.getHistory.query("workflow-id");

// Get execution logs
const logs = await trpc.executions.getLogs.query("execution-id");
```

### Webhooks

```
POST /api/webhooks/google-forms
POST /api/webhooks/stripe
POST /api/webhooks/discord
POST /api/webhooks/slack
```

---

## 🔗 Nodes

### Trigger Nodes
- **Google Forms** - Trigger on form submission
- **Stripe** - Trigger on payment events
- **Webhook** - Custom HTTP webhooks
- **Schedule** - Cron-based scheduling

### Action Nodes
- **Send Discord Message** - Post to Discord channels
- **Send Slack Message** - Post to Slack channels
- **Process Payment** - Handle Stripe payments
- **Send Email** - Send email notifications

### AI Nodes
- **OpenAI** - GPT models for text generation
- **Anthropic Claude** - Claude AI models
- **Google Gemini** - Google's AI models
- **AI Transform** - Transform data with AI

### Utility Nodes
- **Condition** - If/then branching logic
- **Loop** - Iterate over data arrays
- **Transform** - Map and filter data
- **HTTP Request** - Make API calls
- **Logger** - Debug and log data

---

## 🐛 Troubleshooting

### Common Issues

#### Port Already in Use
```bash
# Windows: Find and kill process on port 3000
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux
lsof -i :3000
kill -9 <PID>
```

#### Database Connection Error
```bash
# Check .env.local DATABASE_URL is correct
# Verify PostgreSQL is running
# Test connection:
psql $DATABASE_URL -c "SELECT 1"
```

#### Prisma Migration Issues
```bash
# Reset database and migrations (dev only!)
npx prisma migrate reset

# Or manually handle:
npx prisma db push --skip-generate
```

#### Inngest Connection Error
```bash
# Ensure Inngest dev server is running
npm run inngest:dev

# Check INNGEST_EVENT_KEY in .env.local
```

#### ngrok Issues (Webhooks)
```bash
# Restart ngrok tunnel
npm run ngrok:dev

# Update NGROK_URL in .env.local
```

### Getting Help

- 📚 Check [docs/](docs/) directory for documentation
- 🐛 Review logs in console
- 💻 Check database with Prisma Studio: `npm run prisma:dev`
- 🔍 Enable debug mode: `ENABLE_DEBUG_MODE=true`

---

## 🤝 Contributing

This is a personal project, but improvements are welcome!

**To contribute:**
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

**Guidelines:**
- Follow TypeScript conventions
- Add tests for new features
- Update documentation
- Keep commits atomic and descriptive
- Run linter: `npm run lint`

---



## 🔗 Quick Links

- 🌐 **Website**: Coming Soon
- 📖 **Documentation**: Coming Soon
- 💬 **Discord**: Coming Soon
- 🐦 **Twitter**: Coming Soon
- 📧 **Email**: Coming Soon

---

## 🎯 Roadmap

- [ ] Mobile app (React Native)
- [ ] Team collaboration features
- [ ] Workflow templates library
- [ ] Custom node builder UI
- [ ] Advanced workflow scheduling
- [ ] Node marketplace/extensions
- [ ] GraphQL API option
- [ ] Workflow versioning & rollback
- [ ] Advanced analytics dashboard
- [ ] Multi-language support

---

## 📚 Resources

- **Next.js**: https://nextjs.org/docs
- **Prisma**: https://www.prisma.io/docs
- **React Flow**: https://reactflow.dev
- **tRPC**: https://trpc.io
- **Inngest**: https://www.inngest.com/docs

---

<div align="center">

**Built by an individual developer with a passion for automation**

*AutoFlow - Making workflow automation accessible to everyone*

</div>
