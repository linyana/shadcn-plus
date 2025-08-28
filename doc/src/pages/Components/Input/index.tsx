import { Page } from '@/components';
import { Heading } from 'shadcn-plus';
import {
  BasicInputExample,
  SizesInputExample,
  DisabledInputExample,
  StatusInputExample,
  ValidationInputExample,
  RuleInputExample,
} from './Examples';
import { InputProps, IFormControlValidateRuleType } from './API';
import { PropTable } from '../components';
import { InputTheme } from './Theme';

export const InputPage = () => {
  return (
    <Page
      title="Input"
      description="A versatile input component with built-in validation, status indicators, and customizable styling. Supports various input types, validation rules, and accessibility features."
    >
      <Heading level={2}>Examples</Heading>
      <BasicInputExample />
      <SizesInputExample />
      <DisabledInputExample />
      <StatusInputExample />
      <ValidationInputExample />
      <RuleInputExample />

      <InputTheme />

      <Heading level={2}>API</Heading>
      <PropTable title="Input Props" data={InputProps} />
      <PropTable
        title="IFormControlValidateRuleType"
        data={IFormControlValidateRuleType}
      />
    </Page>
  );
};
