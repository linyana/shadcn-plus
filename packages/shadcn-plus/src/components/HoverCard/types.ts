import * as React from "react"
import * as HoverCardPrimitive from "@radix-ui/react-hover-card"

export type IHoverCardType = React.ComponentProps<typeof HoverCardPrimitive.Root> & {
  children: React.ReactNode;
  trigger: React.ReactNode;
}