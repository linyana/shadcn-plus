import { Page } from '@/components';
import { Heading } from 'shadcn-plus';
import {
  BasicSelectExample,
  GroupedSelectExample,
  StatesSelectExample,
  AdvancedSelectExample,
  UsageSelectExample,
} from './Examples';
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
      description="A flexible and customizable select component built on top of Radix UI. Supports custom options, grouping, different states, and advanced styling. Perfect for forms, filters, and user input scenarios."
    >
      <Heading>Examples</Heading>
      <BasicSelectExample />
      <GroupedSelectExample />
      <StatesSelectExample />
      <AdvancedSelectExample />
      <UsageSelectExample />
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
