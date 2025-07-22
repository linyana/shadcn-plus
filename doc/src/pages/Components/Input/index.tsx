import { Page } from '@/components';
import { Heading } from 'shadcn-plus';
import {
  BasicInputExample,
  RuleInputExample,
  StatusInputExample,
} from './Examples';
import { InputProps, IFormControlValidateRuleType } from './API';
import { PropTable } from '../components';

export const InputPage = () => {
  return (
    <Page
      title="Input"
      description="Displays a form input field or a component that looks like an input field."
    >
      <Heading>Examples</Heading>
      <BasicInputExample />
      <StatusInputExample />
      <RuleInputExample />
      <Heading>API</Heading>
      <Heading level={5}>Props</Heading>
      <PropTable data={InputProps} />
      <Heading level={5}>IFormControlValidateRuleType</Heading>
      <PropTable data={IFormControlValidateRuleType} />
    </Page>
  );
};
