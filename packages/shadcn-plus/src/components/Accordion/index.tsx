import { useMemo } from 'react';
import {
  Accordion as ShadcnAccordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { IAccordionType } from './types';
import { nanoid } from 'nanoid';
import { useComponentTheme } from '@/hooks';
import { cn, sn } from '@/lib/utils';

export const Accordion = ({
  items,
  type,
  collapsible = true,
  ...props
}: IAccordionType) => {
  const theme = useComponentTheme('Accordion');

  const initItems = useMemo(
    () =>
      items.map((item) => ({
        ...item,
        key: item.key || nanoid(),
      })),
    [items],
  );

  return (
    <ShadcnAccordion
      type={type as any}
      {...(type === 'single' ? { collapsible } : {})}
      {...props}
      style={sn(theme.style, props.style)}
      className={cn(theme.className, props.className)}
    >
      {initItems.map((item) => (
        <AccordionItem key={item.key} value={item.key}>
          <AccordionTrigger
            {...props.triggerProps}
            style={sn(theme.Trigger?.style, props.triggerProps?.style)}
            className={cn(
              theme.Trigger?.className,
              props.triggerProps?.className,
            )}
          >
            {item.trigger}
          </AccordionTrigger>
          <AccordionContent
            {...props.contentProps}
            style={sn(theme.Content?.style, props.contentProps?.style)}
            className={cn(
              theme.Content?.className,
              props.contentProps?.className,
            )}
          >
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </ShadcnAccordion>
  );
};
