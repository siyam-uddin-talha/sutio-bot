<p align="center">
  Open-Source AI SutioBotbot Template Built With Next.js and the AI SDK by Vercel.
</p>

<p align="center">
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#model-providers"><strong>Model Providers</strong></a> ·
  <a href="#deploy-your-own"><strong>Deploy Your Own</strong></a> ·
  <a href="#running-locally"><strong>Running Locally</strong></a>
</p>
<br/>

## Features

- **Next.js App Router**
  - Advanced routing and React Server Components for high performance.
- **AI SDK**
  - Unified API for LLMs and dynamic chat interfaces.
- **shadcn/ui**
  - Tailwind CSS and accessible UI components.
- **Data Persistence**
  - Vercel Postgres for chat history and Vercel Blob for file storage.
- **NextAuth.js**
  - Simple and secure authentication.

## Model Providers

Default: OpenAI `gpt-4o`. Easily switch to other providers like Anthropic or Cohere with AI SDK.


## Running Locally

1. Set up environment variables as defined in `.env.example`.
2. Install Vercel CLI: `npm i -g vercel`
3. Link project: `vercel link`
4. Pull environment variables: `vercel env pull`

```bash
pnpm install
pnpm dev
```

Your app should now run on [localhost:3000](http://localhost:3000/).
