import { Component } from '@/components';
import { Heading } from 'shadcn-plus';
import { PositioningPopoverComponent } from './component';

export const PositioningPopoverExample = () => {
  return (
    <>
      <Heading level={5}>Positioning</Heading>
      <Component
        previewContent={<PositioningPopoverComponent />}
        codeContent={`import { Popover, Button, Flex } from 'shadcn-plus';

export const PositioningPopoverComponent = () => {
  return (
    <Flex gap="8px" wrap="wrap">
      <Popover
        trigger={<Button variant="outline">Top</Button>}
        contentProps={{ side: 'top' }}
      >
        <h4 style={{ fontWeight: '500', marginBottom: '8px' }}>Top Position</h4>
        <p>This popover appears above the trigger button.</p>
      </Popover>

      <Popover
        trigger={<Button variant="outline">Right</Button>}
        contentProps={{ side: 'right' }}
      >
        <h4 style={{ fontWeight: '500', marginBottom: '8px' }}>
          Right Position
        </h4>
        <p>This popover appears to the right of the trigger button.</p>
      </Popover>

      <Popover
        trigger={<Button variant="outline">Bottom</Button>}
        contentProps={{ side: 'bottom' }}
      >
        <h4 style={{ fontWeight: '500', marginBottom: '8px' }}>
          Bottom Position
        </h4>
        <p>This popover appears below the trigger button.</p>
      </Popover>

      <Popover
        trigger={<Button variant="outline">Left</Button>}
        contentProps={{ side: 'left' }}
      >
        <h4 style={{ fontWeight: '500', marginBottom: '8px' }}>
          Left Position
        </h4>
        <p>This popover appears to the left of the trigger button.</p>
      </Popover>
    </Flex>
  );
};
`}
      />
    </>
  );
};
