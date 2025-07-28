import { Page } from '@/components';
import { PropTable } from '../components';
import { Heading } from 'shadcn-plus';
import {
  BasicCardExample,
  WithFooterCardExample,
  SimpleContentCardExample,
} from './Examples';
import { CardProps } from './API';

export const CardPage = () => {
  return (
    <Page>
      <Heading level={1}>Card</Heading>
      <p style={{ fontSize: '16px', color: '#6b7280', marginBottom: '32px' }}>
        A flexible container component that displays content in a structured format with optional header, description, and footer sections.
      </p>

      <Heading level={2}>Examples</Heading>
      
      <Heading level={3}>Basic</Heading>
      <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '16px' }}>
        A simple card with header, description, and content.
      </p>
      <BasicCardExample />

      <Heading level={3}>With Footer</Heading>
      <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '16px' }}>
        A card with footer section containing action buttons.
      </p>
      <WithFooterCardExample />

      <Heading level={3}>Simple Content</Heading>
      <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '16px' }}>
        Cards with custom content layouts without predefined header or footer.
      </p>
      <SimpleContentCardExample />

      <Heading level={2}>API</Heading>
      <PropTable data={CardProps} />
    </Page>
  );
};