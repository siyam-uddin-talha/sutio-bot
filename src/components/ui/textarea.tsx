import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-2xl border border-[#f4e2c6] dark:border-neutral-800 bg-[#fffefb] dark:bg-neutral-950 px-4 py-3 text-sm text-[#451a03] dark:text-[#fdf9f0] placeholder-amber-900/30 dark:placeholder-amber-200/30 transition-all duration-300 focus:border-[#d97706] focus:ring-4 focus:ring-[#fef3c7] outline-none disabled:cursor-not-allowed disabled:opacity-50 shadow-none",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
