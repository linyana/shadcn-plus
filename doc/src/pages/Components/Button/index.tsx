import { Page } from '@/components';
import { Heading } from 'shadcn-plus';
import { ButtonProps } from './API';
import {
  BasicButtonExample,
  LoadingButtonExample,
  SizeButtonExample,
  WithIconButtonExample,
  DisabledButtonExample,
  UsageButtonExample,
} from './Examples';
import { PropTable } from '../components';

export const ButtonPage = () => {
  return (
    <Page
      title="Button"
      description="A versatile button component that supports multiple variants, sizes, loading states, and icon integration. Built on top of Radix UI primitives with full accessibility support."
    >
      <Heading>Examples</Heading>
      <BasicButtonExample />
      <WithIconButtonExample />
      <SizeButtonExample />
      <LoadingButtonExample />
      <DisabledButtonExample />
      <UsageButtonExample />
      <Heading>API</Heading>
      <Heading level={5}>Props</Heading>
      <PropTable data={ButtonProps} />
    </Page>
  );
};
