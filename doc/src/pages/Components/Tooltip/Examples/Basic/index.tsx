import { Component } from '@/components';
import { Heading } from 'shadcn-plus';
import { BasicTooltipComponent } from './component';

export const BasicTooltipExample = () => {
  return (
    <>
      <Heading level={5}>Basic</Heading>
      <Component
        previewContent={<BasicTooltipComponent />}
        codeContent={`import { Tooltip } from 'shadcn-plus';
import { Button } from 'shadcn-plus';

export const BasicTooltipComponent = () => {
  return (
    <Tooltip trigger={<Button>Hover me</Button>}>
      Tooltip content here
    </Tooltip>
  );
};
`}
      />
    </>
  );
};
