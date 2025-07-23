import { Component } from '@/components';
import { Heading } from 'shadcn-plus';
import { BasicPopoverComponent } from './component';

export const BasicPopoverExample = () => {
  return (
    <>
      <Heading level={5}>Basic</Heading>
      <Component
        previewContent={<BasicPopoverComponent />}
        codeContent={`import { Popover } from 'shadcn-plus';
import { Button } from 'shadcn-plus';

export const BasicPopoverComponent = () => {
  return (
    <Popover trigger={<Button>Open Popover</Button>}>
      This is the popover content.
    </Popover>
  );
};
`}
      />
    </>
  );
};
