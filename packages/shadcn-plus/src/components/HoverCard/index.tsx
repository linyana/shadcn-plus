import { HoverCardContent, HoverCardTrigger } from "@radix-ui/react-hover-card"
import { HoverCard as ShadcnHoverCard } from "../ui/hover-card"
import { IHoverCardType } from "./types"

export const HoverCard = ({ 
  trigger,
  children,
  ...props
}: IHoverCardType) => { 
  return (
    <ShadcnHoverCard {...props}>
      <HoverCardTrigger asChild>{trigger}</HoverCardTrigger>
      <HoverCardContent>
        {children}
      </HoverCardContent>
    </ShadcnHoverCard>
  )
}