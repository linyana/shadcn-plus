import {
  Collapsible as ShadcnCollapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ICollapsiblePropsType } from "./types"

export const Collapsible = ({
  children,
  content,
  contentProps,
  ...props
}: ICollapsiblePropsType) => { 
  return (
    <ShadcnCollapsible {...props}>
      <CollapsibleTrigger>{children}</CollapsibleTrigger>
      <CollapsibleContent {...contentProps}>
        {content}
      </CollapsibleContent>
    </ShadcnCollapsible>
  )
}