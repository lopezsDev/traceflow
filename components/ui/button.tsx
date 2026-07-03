import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-full text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 duration-200",
          {
            // Variants
            "bg-primary text-on-primary hover:bg-primary-container shadow-sm":
              variant === "default",
            "bg-error text-on-error hover:bg-error/90":
              variant === "destructive",
            "border border-outline text-primary hover:bg-surface-container-low":
              variant === "outline",
            "bg-secondary-container text-on-secondary-fixed hover:bg-secondary-container/90":
              variant === "secondary",
            "hover:bg-surface-container-low text-primary":
              variant === "ghost",
            "text-primary underline-offset-4 hover:underline":
              variant === "link",
            // Sizes
            "h-10 px-6 py-2": size === "default",
            "h-9 px-4": size === "sm",
            "h-12 px-8 py-3 text-base": size === "lg",
            "h-10 w-10": size === "icon",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
