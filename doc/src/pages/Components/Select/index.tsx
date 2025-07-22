import { Page } from '@/components';
import { Heading } from 'shadcn-plus';
import {
  BasicSelectExample,
} from './Examples';
import { SelectProps } from './API';
import { PropTable } from '../components';

export const SelectPage = () => {
  return (
    <Page
      title="Input"
      description="Displays a form input field or a component that looks like an input field."
    >
      <Heading>Examples</Heading>
      <BasicSelectExample />
      <Heading>API</Heading>
      <Heading level={5}>Props</Heading>
      <PropTable data={SelectProps} />
    </Page>
  );
};
