import { Page } from '@/components';
import { PropTable } from '../components';
import { Heading } from 'shadcn-plus';
import {
  BasicAccordionExample,
  MultipleAccordionExample,
} from './Examples';
import { AccordionProps, AccordionItemDataProps } from './API';

export const AccordionPage = () => {
  return (
    <Page>
      <Heading level={1}>Accordion</Heading>
      <p style={{ fontSize: '16px', color: '#6b7280', marginBottom: '32px' }}>
        A vertically stacked set of interactive headings that each reveal a section of content. Perfect for FAQs, settings panels, and organizing large amounts of information in a compact, accessible way.
      </p>

      <Heading level={2}>Examples</Heading>
      
      <Heading level={3}>Basic</Heading>
      <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '16px' }}>
        A simple accordion with single selection mode. Only one item can be open at a time.
      </p>
      <BasicAccordionExample />

      <Heading level={3}>Multiple Selection</Heading>
      <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '16px' }}>
        An accordion that allows multiple items to be open simultaneously.
      </p>
      <MultipleAccordionExample />
      <Heading level={2}>API</Heading>
      
      <Heading level={3}>Accordion Props</Heading>
      <PropTable data={AccordionProps} />
      
      <Heading level={3}>AccordionItemData Props</Heading>
      <PropTable data={AccordionItemDataProps} />
    </Page>
  );
};