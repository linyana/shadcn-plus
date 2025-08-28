import { CollapsibleProps } from '@radix-ui/react-collapsible';
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';

export type ICollapsiblePropsType = CollapsibleProps & {
  children: React.ReactNode;
  trigger: React.ReactNode;
  triggerProps?: React.ComponentProps<
    typeof CollapsiblePrimitive.CollapsibleTrigger
  >;
  contentProps?: React.ComponentProps<
    typeof CollapsiblePrimitive.CollapsibleContent
  >;
};
