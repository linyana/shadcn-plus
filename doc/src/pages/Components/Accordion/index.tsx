import { Page } from '@/components';
import { PropTable } from '../components';
import { StyledCodeBlock, Comment } from '@/components/StyledCodeBlock';
import { Heading } from 'shadcn-plus';
import {
  BasicAccordionExample,
  MultipleAccordionExample,
  AccordionThemeProviderExample,
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
      
      <Heading level={3}>Theme Customization</Heading>
      <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '16px' }}>
        Use ThemeProvider to customize the appearance of Accordion components globally. You can configure styles for the container, triggers, and content areas.
      </p>
      <AccordionThemeProviderExample />
      
      <Heading level={2}>Theme Configuration</Heading>
      <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '16px' }}>
        The Accordion component supports comprehensive theme customization through ThemeProvider. You can configure:
      </p>
      <ul style={{ fontSize: '14px', color: '#6b7280', marginBottom: '16px', paddingLeft: '20px' }}>
        <li><strong>Container styles</strong> - Overall accordion appearance</li>
        <li><strong>Trigger styles</strong> - Clickable header styling</li>
        <li><strong>Content styles</strong> - Collapsible content area styling</li>
      </ul>
      
      <StyledCodeBlock>
        {`import { ThemeProvider, Accordion } from 'shadcn-plus';

const themeConfig = {
  Accordion: {
    style: {}, `}<Comment>// React.CSSProperties</Comment>{`
    className: '', `}<Comment>// string</Comment>{`
    Trigger: {
      style: {}, `}<Comment>// React.CSSProperties</Comment>{`
      className: '', `}<Comment>// string</Comment>{`
    },
    Content: {
      style: {}, `}<Comment>// React.CSSProperties</Comment>{`
      className: '', `}<Comment>// string</Comment>{`
    },
  },
};

<ThemeProvider config={themeConfig}>
  <Accordion type="single" collapsible items={items} />
</ThemeProvider>`}
      </StyledCodeBlock>
      
      <Heading level={2}>API</Heading>
      
      <Heading level={3}>Accordion Props</Heading>
      <PropTable data={AccordionProps} />
      
      <Heading level={3}>AccordionItemData Props</Heading>
      <PropTable data={AccordionItemDataProps} />
    </Page>
  );
};