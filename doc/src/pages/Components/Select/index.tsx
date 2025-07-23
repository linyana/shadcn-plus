import { Page } from '@/components';
import { Heading } from 'shadcn-plus';
import { BasicSelectExample } from './Examples';
import {
  ISelectContentPropsType,
  ISelectOptionType,
  ISelectTriggerPropsType,
  ISelectValuePropsType,
  SelectProps,
} from './API';
import { PropTable } from '../components';

export const SelectPage = () => {
  return (
    <Page
      title="Select"
      description="Displays a list of options for the user to pick from—triggered by a button."
    >
      <Heading>Examples</Heading>
      <BasicSelectExample />
      <Heading>API</Heading>
      <Heading level={5}>Props</Heading>
      <PropTable data={SelectProps} />
      <Heading level={5}>ISelectOptionType</Heading>
      <PropTable data={ISelectOptionType} />
      <Heading level={5}>ISelectTriggerPropsType</Heading>
      <PropTable data={ISelectTriggerPropsType} />
      <Heading level={5}>ISelectContentPropsType</Heading>
      <PropTable data={ISelectContentPropsType} />
      <Heading level={5}>ISelectValuePropsType</Heading>
      <PropTable data={ISelectValuePropsType} />
    </Page>
  );
};
