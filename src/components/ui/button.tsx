import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer select-none active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-main-dark text-main-white hover:bg-main-dark-hover shadow-md hover:shadow-lg shadow-main-dark/20 focus-visible:ring-main-dark",
        primary:
          "bg-main-dark text-main-white hover:bg-main-dark-hover shadow-sm hover:shadow focus-visible:ring-main-dark",
        secondary:
          "bg-main-light text-main-dark hover:bg-main-light/80 border border-main-light focus-visible:ring-main-dark",
        outline:
          "border-2 border-main-dark text-main-dark bg-transparent hover:bg-main-dark hover:text-main-white focus-visible:ring-main-dark",
        ghost:
          "text-main-dark hover:bg-main-light/50 hover:text-main-dark focus-visible:ring-main-dark",
        link: "text-main-dark underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-5 py-2",
        sm: "h-9 rounded-lg px-3 text-xs",
        lg: "h-13 rounded-xl px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
