import * as React from "react"
import * as preslyComp from "@radix-ui/react-avatar"

const Avatar2 = React.forwardRef<
  React.ElementRef<typeof preslyComp.Root>,
  React.ComponentPropsWithoutRef<typeof preslyComp.Root>
>(({ className = "", ...props }, ref) => (
  <preslyComp.Root
    ref={ref}
    className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${className}`}
    {...props}
  />
))
Avatar2.displayName = preslyComp.Root.displayName

const AvatarImage2 = React.forwardRef<
  React.ElementRef<typeof preslyComp.Image>,
  React.ComponentPropsWithoutRef<typeof preslyComp.Image>
>(({ className = "", ...props }, ref) => (
  <preslyComp.Image
    ref={ref}
    className={`aspect-square h-full w-full ${className}`}
    {...props}
  />
))
AvatarImage2.displayName = preslyComp.Image.displayName

const AvatarFallback2 = React.forwardRef<
  React.ElementRef<typeof preslyComp.Fallback>,
  React.ComponentPropsWithoutRef<typeof preslyComp.Fallback>
>(({ className = "", ...props }, ref) => (
  <preslyComp.Fallback
    ref={ref}
    className={`flex h-full w-full items-center justify-center rounded-full bg-muted ${className}`}
    {...props}
  />
))
AvatarFallback2.displayName = preslyComp.Fallback.displayName

export { Avatar2, AvatarImage2, AvatarFallback2 }