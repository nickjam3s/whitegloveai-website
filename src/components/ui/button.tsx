
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-black before:via-[#7021EE] before:to-black before:bg-[length:200%_100%] before:animate-[gradient_4s_linear_infinite] before:z-0 after:absolute after:inset-0 after:rounded-md after:border-2 after:border-white/20 after:bg-[length:200%_100%] after:bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.5)_50%,transparent_100%)] after:bg-no-repeat after:animate-[shine_3s_linear_infinite] after:z-[1] [&>span]:relative [&>span]:z-[2] [&>svg]:relative [&>svg]:z-[2] hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200",
  {
    variants: {
      variant: {
        default: "bg-transparent hover:bg-transparent text-white",
        destructive:
          "bg-transparent hover:bg-transparent text-destructive-foreground",
        outline:
          "bg-transparent hover:bg-transparent border-input",
        secondary:
          "bg-transparent hover:bg-transparent text-white",
        ghost: "bg-transparent hover:bg-transparent",
        link: "bg-transparent hover:bg-transparent text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <span>{children}</span>
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
