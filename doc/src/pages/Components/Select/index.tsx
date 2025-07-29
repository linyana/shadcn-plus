import { Page } from '@/components';
import { Heading, Flex } from 'shadcn-plus';
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
      
      <Heading>Best Practices</Heading>
      <div style={{ 
        padding: '20px', 
        backgroundColor: '#f8f9fa', 
        borderRadius: '8px', 
        marginBottom: '32px',
        fontSize: '14px',
        lineHeight: '1.6'
      }}>
        <Flex gap="12px" flexDirection="column">
          <div>
            <strong>✅ Use meaningful placeholders:</strong> Help users understand what to select
          </div>
          <div>
            <strong>✅ Provide clear labels:</strong> Always label your select inputs for accessibility
          </div>
          <div>
            <strong>✅ Handle controlled state:</strong> Use value + onValueChange for form integration
          </div>
          <div>
            <strong>✅ Consider accessibility:</strong> Use required, disabled, and name attributes when appropriate
          </div>
          <div>
            <strong>✅ Limit options:</strong> For long lists, consider search functionality or pagination
          </div>
          <div>
            <strong>✅ Group related options:</strong> Use visual separators or grouping for better organization
          </div>
        </Flex>
      </div>
      
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
