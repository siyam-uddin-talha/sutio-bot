import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-bold transition-all duration-300 focus-visible:outline-none focus:ring-4 focus:ring-[#fef3c7] focus:border-[#d97706] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow-sm active:scale-[0.98]',
  {
    variants: {
      variant: {
        default:
          'bg-[#d97706] text-white hover:bg-[#b45309] hover:scale-[1.02] shadow-[0_4px_14px_0_rgba(217,119,6,0.2)]',
        destructive:
          'bg-rose-600 text-white hover:bg-rose-700 hover:scale-[1.02]',
        outline:
          'border border-[#f4e2c6] dark:border-neutral-800 bg-[#fffefb] dark:bg-neutral-900 text-[#451a03] dark:text-[#fdf9f0] hover:bg-[#fef3c7] hover:border-[#d97706] hover:text-[#d97706]',
        secondary:
          'bg-[#fef3c7] text-[#d97706] border border-[#fde68a] hover:bg-[#fde68a]',
        ghost:
          'hover:bg-[#fef3c7]/60 text-[#451a03] dark:text-[#fdf9f0] hover:text-[#d97706]',
        link: 'text-[#d97706] underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-5 py-2.5 text-sm',
        sm: 'h-8.5 rounded-xl px-3.5 text-xs',
        lg: 'h-11 rounded-2xl px-6 text-base',
        icon: 'h-9.5 w-9.5 rounded-xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
