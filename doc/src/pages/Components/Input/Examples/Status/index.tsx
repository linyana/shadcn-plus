import { Component } from '@/components';
import { Heading } from 'shadcn-plus';
import { StatusInputComponent } from './components';

export const StatusInputExample = () => {
  return (
    <>
      <Heading level={5}>Status</Heading>
      <Component
        previewContent={<StatusInputComponent />}
        codeContent={`<Flex flexDirection="column" gap="16px">
  <Flex gap="16px">
    <Input placeholder="Name" />
    <Input placeholder="Name" message="normal" />
  </Flex>
  <Flex gap="16px">
    <Input placeholder="Name" status="error" />
    <Input placeholder="Name" status="error" message="error" />
  </Flex>
  <Flex gap="16px">
    <Input placeholder="Name" status="warning" />
    <Input placeholder="Name" status="warning" message="warning" />
  </Flex>
</Flex>
`}
      />
    </>
  );
};
