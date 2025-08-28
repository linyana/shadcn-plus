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
import { SelectTheme } from './Theme';

export const SelectPage = () => {
  return (
    <Page
      title="Select"
      description="A flexible and customizable select component built on top of Radix UI. Supports custom options, grouping, different states, and advanced styling. Perfect for forms, filters, and user input scenarios."
    >
      <Heading level={2}>Examples</Heading>
      <BasicSelectExample />
      <GroupedSelectExample />
      <StatesSelectExample />
      <AdvancedSelectExample />
      <UsageSelectExample />

      <SelectTheme />

      <Heading level={2}>API</Heading>
      <PropTable title="Select Props" data={SelectProps} />
      <PropTable title="ISelectOptionType" data={ISelectOptionType} />
      <PropTable
        title="ISelectTriggerPropsType"
        data={ISelectTriggerPropsType}
      />
      <PropTable
        title="ISelectContentPropsType"
        data={ISelectContentPropsType}
      />
      <PropTable title="ISelectValuePropsType" data={ISelectValuePropsType} />
    </Page>
  );
};
