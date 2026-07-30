import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-3.5 py-1 text-xs font-bold transition-all focus:outline-none focus:ring-4 focus:ring-[#fef3c7]',
  {
    variants: {
      variant: {
        default:
          'bg-[#fef3c7] text-[#d97706] border-[#fde68a]',
        secondary:
          'bg-[#fffefb] text-[#451a03] border-[#f4e2c6]',
        destructive:
          'bg-rose-100 text-rose-700 border-rose-200',
        outline:
          'border-[#d97706] text-[#d97706] bg-transparent',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
