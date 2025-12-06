import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ED4716] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[#ED4716] text-white hover:bg-[#ff5d32] shadow-lg hover:shadow-xl",

        hero: "bg-[#ED4716] text-white hover:bg-[#ff5d32] shadow-lg hover:scale-[1.02]",

        "hero-outline":
          "border border-[#ED4716] text-[#ED4716] bg-transparent hover:bg-[#ED4716] hover:text-white",

        outline: "border border-zinc-700 text-white hover:bg-zinc-800",

        ghost: "hover:bg-zinc-800 text-white",

        link: "text-[#ED4716] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 text-sm",
        sm: "h-9 px-3",
        lg: "h-11 px-6",
        xl: "h-14 px-8 text-lg rounded-xl",
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
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
