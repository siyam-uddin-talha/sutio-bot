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

## Deploy Your Own

Deploy to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fai-SutioBotbot&env=AUTH_SECRET,OPENAI_API_KEY&envDescription=Learn%20more%20about%20how%20to%20get%20the%20API%20Keys%20for%20the%20application&envLink=https%3A%2F%2Fgithub.com%2Fvercel%2Fai-SutioBotbot%2Fblob%2Fmain%2F.env.example&demo-title=AI%20SutioBotbot&demo-description=An%20Open-Source%20AI%20SutioBotbot%20Template%20Built%20With%20Next.js%20and%20the%20AI%20SDK%20by%20Vercel.&demo-url=https%3A%2F%2FSutioBot-bot.SutioBot.co&stores=[{%22type%22:%22postgres%22},{%22type%22:%22blob%22}])

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
