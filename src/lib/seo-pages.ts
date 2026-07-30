import { SITE } from "./seo";

export interface SEOPageConfig {
  slug: string;
  title: string;
  description: string;
  h1Title: string;
  heroDescription: string;
  keywords: string[];
  suggestedPrompt?: string;
}

export const SEO_PAGES: Record<string, SEOPageConfig> = {
  // --- FREE AI CHAT & BOT ROUTES ---
  "free-ai-chat": {
    slug: "free-ai-chat",
    title: "Free AI Chat Online - Unlimited AI Assistant | SutioBot",
    description: "Start chatting with a free, intelligent AI assistant. No hidden paywalls or subscription fees. Fast, private, and powered by modern LLMs.",
    h1Title: "Free Online AI Chat",
    heroDescription: "Experience fast and intelligent conversational AI for free. Ask questions, analyze data, generate ideas, and complete tasks instantly.",
    keywords: ["free ai chat", "free ai chat online", "chat ai free", "unlimited free ai chat", "online free ai assistant"],
    suggestedPrompt: "Help me brainstorm 5 innovative product ideas for a tech startup."
  },
  "free-ai-bot": {
    slug: "free-ai-bot",
    title: "Free AI Bot - Smart Conversational AI Assistant | SutioBot",
    description: "Interact with a free AI bot for coding, content writing, problem solving, and research. 100% free and easy to use.",
    h1Title: "Free Smart AI Bot",
    heroDescription: "Your personal free AI bot ready to answer questions, debug code, draft emails, and automate daily tasks.",
    keywords: ["free ai bot", "smart ai bot free", "best free ai bot", "ai chatbot free online", "free conversational bot"],
    suggestedPrompt: "Write a polite follow-up email after a job interview."
  },
  "free-chatgpt-alternative": {
    slug: "free-chatgpt-alternative",
    title: "Free ChatGPT Alternative - Private & Unlimited AI Chat | SutioBot",
    description: "Looking for a fast, free ChatGPT alternative? SutioBot provides intelligent AI responses, code generation, and web research with zero cost.",
    h1Title: "Free ChatGPT Alternative",
    heroDescription: "A powerful free alternative to ChatGPT. Enjoy instant answers, web search integration, and coding assistance without limits.",
    keywords: ["free chatgpt alternative", "best free chatgpt alternative", "chatgpt free online", "alternative to chatgpt free", "open source chatgpt alternative"],
    suggestedPrompt: "Explain quantum computing in simple terms for a high school student."
  },
  "free-ai-assistant": {
    slug: "free-ai-assistant",
    title: "Free AI Assistant - Personal Smart Helper Online | SutioBot",
    description: "Boost your productivity with a free AI assistant. Get help with writing, code, research, math, and daily planning.",
    h1Title: "Free Personal AI Assistant",
    heroDescription: "Organize your workflow, write code, compose essays, and summarize documents with your free AI helper.",
    keywords: ["free ai assistant", "personal ai assistant free", "ai helper free", "free ai productivity tool", "ai virtual assistant free"],
    suggestedPrompt: "Create a 7-day study schedule for preparing for a final exam."
  },
  "free-ai-writer": {
    slug: "free-ai-writer",
    title: "Free AI Writer - Content Generator & Writing Assistant | SutioBot",
    description: "Generate blog posts, emails, stories, essays, and marketing copy for free with SutioBot's AI writer tool.",
    h1Title: "Free AI Writing Assistant",
    heroDescription: "Draft high-quality articles, persuasive emails, creative stories, and social media copy effortlessly for free.",
    keywords: ["free ai writer", "free ai writing tool", "free essay writer ai", "free content generator", "ai article writer free"],
    suggestedPrompt: "Write a compelling introduction paragraph for a blog post about artificial intelligence trends."
  },
  "free-code-generator": {
    slug: "free-code-generator",
    title: "Free Code Generator & AI Coding Assistant | SutioBot",
    description: "Write, debug, and explain code in Python, JavaScript, TypeScript, React, HTML/CSS, and SQL for free using AI.",
    h1Title: "Free AI Code Generator",
    heroDescription: "Accelerate development with instant code generation, refactoring suggestions, and bug diagnosis at zero cost.",
    keywords: ["free code generator", "free ai coding assistant", "free python code generator", "free react code generator", "ai code generator free"],
    suggestedPrompt: "Write a React component with state to handle a responsive dark mode toggle."
  },
  "free-ai-search": {
    slug: "free-ai-search",
    title: "Free AI Search & Information Assistant | SutioBot",
    description: "Search the web and extract accurate answers instantly with a free AI-powered search tool.",
    h1Title: "Free AI Search & Discovery",
    heroDescription: "Find verified insights, technical explanations, and up-to-date answers across web sources.",
    keywords: ["free ai search", "ai search engine free", "free perplexity alternative", "smart web search ai free"],
    suggestedPrompt: "What are the latest updates and best practices in Next.js App Router?"
  },
  "free-ai-agent": {
    slug: "free-ai-agent",
    title: "Free AI Agent - Autonomous Problem Solving Assistant | SutioBot",
    description: "Execute multi-step workflows, code analysis, and document summaries with a free AI agent.",
    h1Title: "Free Autonomous AI Agent",
    heroDescription: "Let an intelligent AI agent reason through complex queries and generate comprehensive solutions.",
    keywords: ["free ai agent", "autonomous ai agent free", "free ai workflow agent", "ai task solver free"],
    suggestedPrompt: "Break down the steps required to build and deploy a modern web application."
  },
  "free-ai-tools": {
    slug: "free-ai-tools",
    title: "Free AI Tools Suite - Suite of Smart Assistants | SutioBot",
    description: "Access a comprehensive set of free AI tools for writing, coding, search, and document editing.",
    h1Title: "Free AI Tools Suite",
    heroDescription: "Everything you need from an AI assistant in one clean, fast, and free web interface.",
    keywords: ["free ai tools", "best free ai tools", "free online ai tools", "all in one free ai"],
    suggestedPrompt: "List 5 ways AI tools can improve daily workplace efficiency."
  },
  "free-ai-chat-online": {
    slug: "free-ai-chat-online",
    title: "Free AI Chat Online - Fast, Private & Unlimited | SutioBot",
    description: "Chat with an advanced AI online for free. No credit card required, instant response, and clean interface.",
    h1Title: "Free AI Chat Online",
    heroDescription: "Connect with a high-performance AI assistant directly in your browser.",
    keywords: ["free ai chat online", "chat online free ai", "instant free ai chat", "browser ai chat free"],
    suggestedPrompt: "What are key principles for designing modern user interfaces?"
  },

  // --- GENERAL SEO BRAND & CATEGORY ROUTES ---
  "sutio-bot": {
    slug: "sutio-bot",
    title: "SutioBot - Official Next-Gen AI Assistant by Sutio | SutioBot",
    description: "Discover SutioBot by Sutio: a high-speed, intuitive, and private AI assistant built for creators and developers.",
    h1Title: "Welcome to SutioBot",
    heroDescription: "The official intelligent assistant by Sutio. Crafted for modern web workflows, content generation, and code development.",
    keywords: ["sutio bot", "sutiobot", "sutio ai", "sutio.co bot", "sutio AI chat"],
    suggestedPrompt: "Tell me about Sutio and what tools are available here."
  },
  "ai-bot": {
    slug: "ai-bot",
    title: "AI Bot Online - Smart Assistant for Developers & Writers | SutioBot",
    description: "Utilize an advanced AI bot for everyday problem solving, technical code generation, and content creation.",
    h1Title: "Advanced AI Bot",
    heroDescription: "Interact with a versatile AI bot designed to assist software engineers, students, and professionals.",
    keywords: ["ai bot", "online ai bot", "smart ai bot", "ai chatbot online"],
    suggestedPrompt: "Draft a concise project README file template."
  },
  "ai-chat": {
    slug: "ai-chat",
    title: "AI Chat - Interactive Conversational Intelligence | SutioBot",
    description: "Engage in intelligent AI conversations. Instant answers, context-aware reasoning, and high performance.",
    h1Title: "Interactive AI Chat",
    heroDescription: "Experience real-time AI conversation with low latency and clean user interface.",
    keywords: ["ai chat", "ai conversation", "chat with ai", "ai chat assistant"],
    suggestedPrompt: "Explain how REST APIs work compared to GraphQL."
  },
  "ai-assistant": {
    slug: "ai-assistant",
    title: "AI Assistant - Smart Digital Helper for Work & Study | SutioBot",
    description: "Your digital AI assistant for drafting documents, solving complex equations, and generating code.",
    h1Title: "Smart AI Assistant",
    heroDescription: "Supercharge your productivity with a versatile digital companion.",
    keywords: ["ai assistant", "digital assistant ai", "ai work assistant", "ai assistant online"],
    suggestedPrompt: "Help me write a concise summary of key principles in software architecture."
  },
  "ai-coding-assistant": {
    slug: "ai-coding-assistant",
    title: "Free AI Coding Assistant - Write & Debug Code Fast | SutioBot",
    description: "Free AI coding assistant to help software developers write clean code, catch bugs, and learn new frameworks.",
    h1Title: "AI Coding Assistant",
    heroDescription: "Get instant code suggestions, refactoring tips, and bug fixes across all major programming languages.",
    keywords: ["ai coding assistant", "free ai code helper", "coding assistant online", "ai developer tool free"],
    suggestedPrompt: "How do I optimize database queries in Node.js and SQL?"
  }
};

/** Get configuration for a specific SEO slug, or null if invalid */
export function getSEOPageConfig(slug: string): SEOPageConfig | null {
  return SEO_PAGES[slug] || null;
}

/** Get primary navigation/SEO links for footer */
export const SEO_NAV_LINKS = [
  { slug: "free-ai-chat", label: "Free AI Chat" },
  { slug: "free-ai-bot", label: "Free AI Bot" },
  { slug: "free-chatgpt-alternative", label: "Free ChatGPT Alternative" },
  { slug: "free-ai-assistant", label: "Free AI Assistant" },
  { slug: "free-code-generator", label: "Free Code Generator" },
  { slug: "free-ai-writer", label: "Free AI Writer" },
  { slug: "free-ai-search", label: "Free AI Search" },
  { slug: "free-ai-agent", label: "Free AI Agent" },
  { slug: "free-ai-tools", label: "Free AI Tools" },
  { slug: "sutio-bot", label: "SutioBot" },
] as const;
