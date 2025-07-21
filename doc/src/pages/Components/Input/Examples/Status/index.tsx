import { Component } from '@/components';
import { Heading } from 'shadcn-plus';
import { StatusInputComponent } from './components';

export const StatusInputExample = () => {
  return (
    <>
      <Heading level={5}>Basic</Heading>
      <Component
        previewContent={<StatusInputComponent />}
        codeContent={`<Flex flexDirection="column" gap="16px">
  <Flex gap="16px">
    <Input placeholder="Email" />
    <Input placeholder="Email" message="normal" />
  </Flex>
  <Flex gap="16px">
    <Input placeholder="Email" status="error" />
    <Input placeholder="Email" status="error" message="error" />
  </Flex>
  <Flex gap="16px">
    <Input placeholder="Email" status="warning" />
    <Input placeholder="Email" status="warning" message="warning" />
  </Flex>
</Flex>
`}
      />
    </>
  );
};
