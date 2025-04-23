import {
  Card as ShadcnCard,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ICardType } from "./types"

export const Card = ({ 
  footer,
  description,
  title,
  children,
  ...props
}: ICardType) => { 
  return (
    <ShadcnCard {...props}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
      <CardFooter>
        {footer}
      </CardFooter>
    </ShadcnCard>
  )
}