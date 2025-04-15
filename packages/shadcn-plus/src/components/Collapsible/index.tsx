import {
  Collapsible as ShadcnCollapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ICollapsiblePropsType } from "./types"

export const Collapsible = ({
  children,
  trigger,
  ...props
}: ICollapsiblePropsType) => { 
  return (
    <ShadcnCollapsible {...props}>
      <CollapsibleTrigger>{trigger}</CollapsibleTrigger>
      <CollapsibleContent>
        {children}
      </CollapsibleContent>
    </ShadcnCollapsible>
  )
}