/** Shared site SEO + ownership constants for SutioBot */

export const OWNER = {
  name: "Sutio",
  legalName: "Sutio",
  url: "https://www.sutio.co/",
  email: "siyam.uddin.talha@gmail.com",
  description:
    "Sutio builds web apps, mobile and desktop software, LLM products, and bespoke systems for startups and enterprises.",
} as const;

/** Canonical product domain. Override with NEXT_PUBLIC_SITE_URL if needed. */
export const DEFAULT_SITE_URL = "https://bot.sutio.co";

export const SITE = {
  name: "SutioBot",
  host: "bot.sutio.co",
  tagline: "Free & Intelligent AI Assistant",
  description:
    "SutioBot is a fast, free, and intelligent AI assistant. Generate code, write content, search the web, and solve complex tasks online for free with 100% privacy.",
  keywords: [
    "sutio bot",
    "sutiobot",
    "free ai chat",
    "free ai bot",
    "free chatgpt alternative",
    "free ai assistant",
    "free code generator",
    "free ai writer",
    "free ai search",
    "free ai agent",
    "free ai tools",
    "free online ai",
    "ai bot free",
    "Sutio",
    "bot.sutio.co",
  ],
  get url() {
    return (process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL).replace(
      /\/$/,
      "",
    );
  },
  /** Social / link preview image (Open Graph + Twitter) */
  ogImage: {
    path: "/og.png",
    width: 1200,
    height: 630,
    alt: "SutioBot — Free Intelligent AI Assistant",
    type: "image/png",
  },
  googleVerificationCode: "googlef57f464e597e6551",
} as const;

export function absoluteUrl(path = "/") {
  const base = SITE.url;
  if (!path || path === "/") return `${base}/`;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function ogImageUrl() {
  return absoluteUrl(SITE.ogImage.path);
}
