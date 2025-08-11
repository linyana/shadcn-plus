import { Component } from '@/components';
import { Heading } from 'shadcn-plus';
import { SizesInputComponent } from './component';

export const SizesInputExample = () => {
  return (
    <>
      <Heading level={5}>Sizes</Heading>
      <Component
        previewContent={<SizesInputComponent />}
        codeContent={`import { Flex, Input } from 'shadcn-plus';

export const SizesInputComponent = () => {
  return (
    <Flex flexDirection="column" gap="16px">
      <Input placeholder="Small input" className="h-8 text-sm" label="Small" />
      <Input placeholder="Default input" label="Default" />
      <Input placeholder="Large input" className="h-12 text-lg" label="Large" />
    </Flex>
  );
};
`}
      />
    </>
  );
};
