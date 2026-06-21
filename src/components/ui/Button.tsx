import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonStyles = cva(
  "inline-flex items-center justify-center gap-2 font-semibold whitespace-nowrap rounded-pill transition-[transform,box-shadow,background-color,border-color,color] duration-DEFAULT ease-out motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-600 text-white shadow-soft hover:bg-brand-700 hover:shadow-lift active:scale-[0.98]",
        secondary:
          "bg-white text-brand-700 border border-brand-200 hover:border-brand-400 hover:bg-brand-50",
        outline:
          "border border-slate-300 bg-transparent text-foreground hover:border-brand-400 hover:text-brand-700",
        ghost: "text-foreground hover:bg-slate-100",
        dark: "bg-slate-900 text-white hover:bg-slate-800",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-base",
        lg: "h-14 px-8 text-lg",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonStyles> & {
    href?: string;
    external?: boolean;
  };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, href, external, children, ...props }, ref) => {
    const cls = cn(buttonStyles({ variant, size }), className);
    if (href) {
      if (external) {
        return (
          <a
            href={href}
            className={cls}
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className={cls}>
          {children}
        </Link>
      );
    }
    return (
      <button ref={ref} className={cls} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
