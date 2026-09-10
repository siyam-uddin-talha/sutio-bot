"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { ModelSelector } from "@/components/model-selector";
import { SidebarToggle } from "@/components/sidebar-toggle";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "./icons";
import { useSidebar } from "./ui/sidebar";
import { memo } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { VisibilityType } from "./visibility-selector";
import { APP_NAME } from "@/lib/config";

import useSWR from "swr";
import { fetcher } from "@/lib/utils";

function PureChatHeader({
  chatId,
  selectedModelId,
  selectedVisibilityType,
  isReadonly,
}: {
  chatId: string;
  selectedModelId: string;
  selectedVisibilityType: VisibilityType;
  isReadonly: boolean;
}) {
  const router = useRouter();
  const { open, isMobile } = useSidebar();

  const { data: usage } = useSWR<{
    tokensUsed: number;
    remainingTokens: number;
    dailyLimit: number;
  }>("/api/user/usage", fetcher);

  return (
    <header className="sticky top-0 z-10 flex min-w-0 items-center justify-between gap-1 border-b border-sidebar-border/50 bg-background px-2 py-2 sm:gap-2 md:border-b-0 md:px-4">
      <div className="flex min-w-0 flex-1 items-center gap-1.5 sm:gap-2.5">
        <SidebarToggle className="h-8 w-8 shrink-0 p-0 sm:h-9 sm:w-9 md:h-fit md:w-auto md:px-2" />

        <Link
          href="/"
          className="flex min-w-0 shrink items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <Image
            src="/logo.png"
            width={24}
            height={24}
            alt="Sutio Logo"
            className="rounded-md object-contain size-6"
            unoptimized
          />
          {(!open || isMobile) && (
            <span className="hidden truncate font-semibold text-sm sm:inline sm:text-base">
              {APP_NAME}
            </span>
          )}
        </Link>

        {(!open || isMobile) && (
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                className="h-8 shrink-0 px-2.5 text-xs sm:h-[34px] sm:text-sm"
                onClick={() => {
                  router.push("/");
                  router.refresh();
                }}
              >
                <PlusIcon />
                <span className="ml-1 hidden md:inline">New Chat</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Open a new Chat</TooltipContent>
          </Tooltip>
        )}
      </div>

      <div className="flex shrink-0 items-center gap-1 sm:gap-2">
        {usage && typeof usage.remainingTokens === "number" && (
          <div
            className="flex shrink-0 items-center gap-1 rounded-full border border-[#fde68a] bg-[#fef3c7] px-2 py-1 text-xs font-bold text-[#d97706] dark:border-amber-800/50 dark:bg-amber-950/60 dark:text-amber-400 sm:gap-1.5 sm:px-3"
            title={`Used ${usage.tokensUsed} of ${usage.dailyLimit} daily tokens. Resets at midnight UTC.`}
          >
            <span className="sm:hidden">
              {Math.ceil(usage.remainingTokens / 1000)}k
            </span>
            <span className="hidden sm:inline">
              {usage.remainingTokens.toLocaleString()} / {Math.round(usage.dailyLimit / 1000)}k tokens
            </span>
          </div>
        )}

        {!isReadonly && (
          <ModelSelector
            selectedModelId={selectedModelId}
            className="shrink-0"
          />
        )}
      </div>
    </header>
  );
}

export const ChatHeader = memo(PureChatHeader, (prevProps, nextProps) => {
  return prevProps.selectedModelId === nextProps.selectedModelId;
});
