import {
  Card as ShadcnCard,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ICardType } from "./types"
import { Show } from "../Show"

export const Card = ({ 
  footer,
  description,
  title,
  children,
  ...props
}: ICardType) => { 
  return (
    <ShadcnCard {...props}>
      <Show rule={title || description}>
        <CardHeader>
          <Show rule={title}>
            <CardTitle>{title}</CardTitle>
          </Show>
          <Show rule={description}>
          <CardDescription>{description}</CardDescription>
          </Show>
        </CardHeader>
      </Show>  
      <CardContent>
        {children}
      </CardContent>
      <Show rule={footer}>
        <CardFooter>
          {footer}
        </CardFooter>
      </Show>
    </ShadcnCard>
  )
}