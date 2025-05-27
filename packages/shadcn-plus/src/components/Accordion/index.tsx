import { useMemo } from 'react';
import {
  Accordion as ShadcnAccordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { IAccordionType } from './types';
import { nanoid } from 'nanoid';

export const Accordion = ({
  items,
  type,
  collapsible = true,
  ...props
}: IAccordionType) => {
  const initItems = useMemo(
    () =>
      items.map((item) => ({
        ...item,
        key: item.key || nanoid(),
      })),
    [items],
  );

  return (
    <ShadcnAccordion type={type as any} collapsible={collapsible} {...props}>
      {initItems.map((item) => (
        <AccordionItem key={item.key} value={item.key}>
          <AccordionTrigger>{item.trigger}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </ShadcnAccordion>
  );
};
