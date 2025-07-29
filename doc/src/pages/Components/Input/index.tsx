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

export const InputPage = () => {
  return (
    <Page
      title="Input"
      description="A versatile input component with built-in validation, status indicators, and customizable styling. Supports various input types, validation rules, and accessibility features."
    >
      <Heading>Examples</Heading>
      <BasicInputExample />
      <SizesInputExample />
      <DisabledInputExample />
      <StatusInputExample />
      <ValidationInputExample />
      <RuleInputExample />
      <Heading>API</Heading>
      <Heading level={5}>Props</Heading>
      <PropTable data={InputProps} />
      <Heading level={5}>IFormControlValidateRuleType</Heading>
      <PropTable data={IFormControlValidateRuleType} />
    </Page>
  );
};
