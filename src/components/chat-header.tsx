"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useWindowSize } from "usehooks-ts";

import { ModelSelector } from "@/components/model-selector";
import { SidebarToggle } from "@/components/sidebar-toggle";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "./icons";
import { useSidebar } from "./ui/sidebar";
import { memo } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { VisibilityType } from "./visibility-selector";
import { APP_NAME } from "@/lib/config";

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
  const { open } = useSidebar();

  const { width: windowWidth } = useWindowSize();

  return (
    <header className="flex sticky top-0 bg-background py-2 items-center px-2 md:px-4 gap-2 justify-between z-10 border-b md:border-b-0 border-sidebar-border/50">
      <div className="flex items-center gap-2.5 min-w-0">
        <SidebarToggle />

        <Link
          href="/"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <Image
            src="/sutio.png"
            width={24}
            height={24}
            alt="Sutio Logo"
            className="rounded-md object-contain size-6"
            unoptimized
          />
          {(!open || windowWidth < 768) && (
            <span className="font-semibold text-sm sm:text-base truncate">
              {APP_NAME}
            </span>
          )}
        </Link>

        {(!open || windowWidth < 768) && (
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                className="px-2.5 h-8 md:h-[34px] text-xs sm:text-sm"
                onClick={() => {
                  router.push("/");
                  router.refresh();
                }}
              >
                <PlusIcon />
                <span className="hidden sm:inline ml-1">New Chat</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Open a new Chat</TooltipContent>
          </Tooltip>
        )}
      </div>

      {!isReadonly && (
        <ModelSelector
          selectedModelId={selectedModelId}
          className="shrink-0"
        />
      )}
    </header>
  );
}

export const ChatHeader = memo(PureChatHeader, (prevProps, nextProps) => {
  return prevProps.selectedModelId === nextProps.selectedModelId;
});
