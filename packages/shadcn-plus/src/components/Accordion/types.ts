import * as AccordionPrimitive from '@radix-ui/react-accordion';

export interface AccordionItemData {
  key?: string;
  trigger: React.ReactNode;
  content: React.ReactNode;
}

export type IAccordionType = Omit<
  React.ComponentProps<typeof AccordionPrimitive.Root>,
  'type' | 'value' | 'defaultValue' | 'onValueChange'
> & {
  type: 'single' | 'multiple';
  collapsible?: boolean;
  items: AccordionItemData[];
  triggerProps?: React.ComponentProps<typeof AccordionPrimitive.Trigger> & {
    className?: string;
    style?: React.CSSProperties;
  };
  contentProps?: React.ComponentProps<typeof AccordionPrimitive.Content> & {
    className?: string;
    style?: React.CSSProperties;
  };
};
