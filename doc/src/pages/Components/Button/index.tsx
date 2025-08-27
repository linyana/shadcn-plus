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
import { ButtonTheme } from './Theme';

export const ButtonPage = () => {
  return (
    <Page
      title="Button"
      description="A versatile button component that supports multiple variants, sizes, loading states, and icon integration. Built on top of Radix UI primitives with full accessibility support."
    >
      <Heading level={2}>Examples</Heading>
      <BasicButtonExample />
      <WithIconButtonExample />
      <SizeButtonExample />
      <LoadingButtonExample />
      <DisabledButtonExample />
      <UsageButtonExample />
      <ButtonTheme />
      <Heading level={2}>API</Heading>
      <PropTable title="Button Props" data={ButtonProps} />
    </Page>
  );
};
