import { Metadata } from "next";
import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import { Chat } from "@/components/chat";
import { DataStreamHandler } from "@/components/data-stream-handler";
import { DEFAULT_MODEL_NAME, models } from "@/lib/ai/models";
import { generateUUID } from "@/lib/utils";
import { SEO_PAGES, getSEOPageConfig } from "@/lib/seo-pages";
import { SITE, absoluteUrl, ogImageUrl } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(SEO_PAGES).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const config = getSEOPageConfig(slug);

  if (!config) {
    return {};
  }

  const pageUrl = absoluteUrl(`/${slug}`);

  return {
    title: config.title,
    description: config.description,
    keywords: [...config.keywords, ...SITE.keywords],
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      type: "website",
      url: pageUrl,
      title: config.title,
      description: config.description,
      siteName: `${SITE.name} · ${SITE.host}`,
      images: [
        {
          url: SITE.ogImage.path,
          secureUrl: ogImageUrl(),
          width: SITE.ogImage.width,
          height: SITE.ogImage.height,
          alt: config.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: config.title,
      description: config.description,
      images: [SITE.ogImage.path],
    },
  };
}

export default async function DynamicSEOPage({ params }: Props) {
  const { slug } = await params;
  const config = getSEOPageConfig(slug);

  if (!config) {
    notFound();
  }

  const id = generateUUID();
  const cookieStore = await cookies();
  const modelIdFromCookie = cookieStore.get("model-id")?.value;

  const selectedModelId =
    models.find((model) => model.id === modelIdFromCookie)?.id ||
    DEFAULT_MODEL_NAME;

  return (
    <>
      <div className="bg-muted/40 border-b border-border/40 py-2.5 px-4 text-center text-xs sm:text-sm">
        <span className="font-semibold text-primary">{config.h1Title}:</span>{" "}
        <span className="text-muted-foreground">{config.heroDescription}</span>
      </div>
      <Chat
        key={id}
        id={id}
        initialMessages={
          config.suggestedPrompt
            ? []
            : []
        }
        selectedModelId={selectedModelId}
        selectedVisibilityType="private"
        isReadonly={false}
      />
      <DataStreamHandler id={id} />
    </>
  );
}
