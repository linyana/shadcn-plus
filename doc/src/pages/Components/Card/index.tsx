import { Page } from '@/components';
import { PropTable } from '../components';
import { Heading } from 'shadcn-plus';
import {
  BasicCardExample,
  WithFooterCardExample,
  SimpleContentCardExample,
} from './Examples';
import { CardProps } from './API';
import {
  CardContentProps,
  CardFooterProps,
  CardHeaderProps,
} from './API/Props';
import { CardTheme } from './Theme';

export const CardPage = () => {
  return (
    <Page
      title="Card"
      description="A flexible container component that displays content in a structured format with optional header, description, and footer sections."
    >
      <Heading level={2}>Examples</Heading>
      <BasicCardExample />
      <WithFooterCardExample />
      <SimpleContentCardExample />

      <CardTheme />

      <Heading level={2}>API</Heading>
      <PropTable title="Card Props" data={CardProps} />
      <PropTable title="Header Props" data={CardHeaderProps} />
      <PropTable title="Content Props" data={CardContentProps} />
      <PropTable title="Footer Props" data={CardFooterProps} />
    </Page>
  );
};
