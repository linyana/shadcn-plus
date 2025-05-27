import { Page } from '@/components';
import { Heading } from 'shadcn-plus';
import { ButtonProps } from './API';
import {
  BasicButtonExample,
  LoadingButtonExample,
  SizeButtonExample,
} from './Examples';
import { PropTable } from '../components';

export const ButtonPage = () => {
  return (
    <Page
      title="Button"
      description="Displays a button or a component that looks like a button."
    >
      <Heading>Examples</Heading>
      <BasicButtonExample />
      <LoadingButtonExample />
      <SizeButtonExample />
      <Heading>API</Heading>
      <Heading level={5}>Props</Heading>
      <PropTable data={ButtonProps} />
    </Page>
  );
};
