# Sutio Bot

An intelligent, full-stack AI Assistant chatbot platform built by **Sutio**. Powered by Next.js, Vercel AI SDK, React, Tailwind CSS, NextAuth, and Postgres.

## Features

- **Next.js App Router & React**
  - High-performance architecture leveraging Server Components and interactive client UI.
- **Vercel AI SDK Integration**
  - Streaming LLM completions, multimodal input support, dynamic artifact generation, and code execution previews.
- **Modern Design System**
  - Custom UI built with Tailwind CSS, Radix UI primitives, and dark mode support via `next-themes`.
- **Data Persistence & Management**
  - PostgreSQL database powered by Drizzle ORM for user chats, document versions, and metadata.
  - Vercel Blob for secure file storage and upload handling.
- **Authentication & Security**
  - Secure user authentication powered by NextAuth.js.

## Tech Stack

- **Framework:** Next.js (App Router, `src/` directory layout)
- **UI & Styling:** React, Tailwind CSS, Radix UI, Lucide Icons
- **AI / LLM:** Vercel AI SDK (`ai`, `@ai-sdk/openai`)
- **Database & ORM:** PostgreSQL, Drizzle ORM
- **Auth:** NextAuth.js (`next-auth`)
- **Code & Content:** CodeMirror, ProseMirror

## Project Structure

```text
sutio-bot/
├── src/
│   ├── app/           # App Router pages, API routes, and layouts
│   ├── components/    # Reusable UI components & chat widgets
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utility functions, AI configs, and DB schemas
│   └── middleware.ts  # NextAuth authentication middleware
├── public/            # Static assets
├── drizzle.config.ts  # Drizzle ORM configuration
├── next.config.ts     # Next.js configuration
├── tailwind.config.ts # Tailwind CSS configuration
└── tsconfig.json      # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js (v18+)
- pnpm package manager
- PostgreSQL Database instance

### Environment Setup

Create a `.env.local` file in the root directory following `.env.example`:

```bash
cp .env.example .env.local
```

Fill in required credentials:
- `AUTH_SECRET`
- `POSTGRES_URL`
- `OPENAI_API_KEY`

### Database Setup

Run database migrations:

```bash
pnpm db:migrate
```

Verify connection:

```bash
pnpm db:ping
```

### Development Server

Start the local development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view Sutio Bot.

## Scripts

- `pnpm dev` - Start development server with Turbo
- `pnpm build` - Build production bundle
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint and Biome linter
- `pnpm format` - Format code with Biome
- `pnpm db:migrate` - Execute database migrations
- `pnpm db:studio` - Open Drizzle Studio database GUI

---

&copy; **Sutio**. All rights reserved.
