import { Component } from '@/components';
import { Heading } from 'shadcn-plus';
import { DisabledInputComponent } from './component';

export const DisabledInputExample = () => {
  return (
    <>
      <Heading level={5}>Disabled</Heading>
      <Component
        previewContent={<DisabledInputComponent />}
        codeContent={`import { Flex, Input } from 'shadcn-plus';

export const DisabledInputComponent = () => {
  return (
    <Flex flexDirection="column" gap="16px">
      <Input placeholder="Disabled input" disabled label="Disabled" />
      <Input 
        placeholder="Disabled with value" 
        disabled 
        value="This field is disabled" 
        label="Disabled with Value" 
      />
    </Flex>
  );
};
`}
      />
    </>
  );
};