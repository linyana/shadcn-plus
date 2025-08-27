import { Page } from '@/components';
import { PropTable } from '../components';
import { StyledCodeBlock, Comment } from '@/components/StyledCodeBlock';
import { Heading } from 'shadcn-plus';
import {
  BasicAccordionExample,
  MultipleAccordionExample,
  AccordionThemeProviderExample,
} from './Examples';
import { AccordionProps, AccordionItemDataProps, AccordionTriggerProps, AccordionContentProps } from './API';
import { AccordionTheme } from './Theme';

export const AccordionPage = () => {
  return (
    <Page
      title="Accordion"
      description=" A vertically stacked set of interactive headings that each reveal a
        section of content. Perfect for FAQs, settings panels, and organizing
        large amounts of information in a compact, accessible way."
    >
      <Heading level={2}>Examples</Heading>
      <BasicAccordionExample />
      <MultipleAccordionExample />
      <AccordionThemeProviderExample />

      <AccordionTheme />

      <Heading level={2}>API</Heading>
      <PropTable title="Accordion Props" data={AccordionProps} />
      <PropTable title="Item Props" data={AccordionItemDataProps} />
      <PropTable title="Trigger Props" data={AccordionTriggerProps} />
      <PropTable title="Content Props" data={AccordionContentProps} />
    </Page>
  );
};
