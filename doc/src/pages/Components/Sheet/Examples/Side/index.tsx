import { Component } from '@/components';
import { Heading } from 'shadcn-plus';
import { SideSheetComponent } from './component';

export const SideSheetExample = () => {
  return (
    <>
      <Heading level={5}>Side Variations</Heading>
      <Component
        previewContent={<SideSheetComponent />}
        codeContent={`import { Sheet, Button, Card, Flex } from 'shadcn-plus';
import { ArrowLeft, ArrowRight, ArrowUp, ArrowDown } from 'lucide-react';

export const SideSheetComponent = () => {
  return (
    <Flex gap="16px" flexWrap="wrap">
      <Sheet
        trigger={
          <Button variant="outline">
            <ArrowLeft style={{ width: '16px', height: '16px', marginRight: '8px' }} />
            Left
          </Button>
        }
        side="left"
        title="Left Sheet"
        description="This sheet slides in from the left side."
      >
        <Card style={{ padding: '16px', marginTop: '16px' }}>
          <p style={{ fontSize: '14px', color: '#6b7280' }}>
            This is a sheet that slides in from the left side of the screen.
            It's perfect for navigation menus or secondary content.
          </p>
        </Card>
      </Sheet>

      <Sheet
        trigger={
          <Button variant="outline">
            <ArrowRight style={{ width: '16px', height: '16px', marginRight: '8px' }} />
            Right
          </Button>
        }
        side="right"
        title="Right Sheet"
        description="This sheet slides in from the right side."
      >
        <Card style={{ padding: '16px', marginTop: '16px' }}>
          <p style={{ fontSize: '14px', color: '#6b7280' }}>
            This is a sheet that slides in from the right side of the screen.
            This is the default behavior and is commonly used for settings or details.
          </p>
        </Card>
      </Sheet>

      <Sheet
        trigger={
          <Button variant="outline">
            <ArrowUp style={{ width: '16px', height: '16px', marginRight: '8px' }} />
            Top
          </Button>
        }
        side="top"
        title="Top Sheet"
        description="This sheet slides in from the top."
      >
        <Card style={{ padding: '16px', marginTop: '16px' }}>
          <p style={{ fontSize: '14px', color: '#6b7280' }}>
            This is a sheet that slides in from the top of the screen.
            Great for notifications or quick actions.
          </p>
        </Card>
      </Sheet>

      <Sheet
        trigger={
          <Button variant="outline">
            <ArrowDown style={{ width: '16px', height: '16px', marginRight: '8px' }} />
            Bottom
          </Button>
        }
        side="bottom"
        title="Bottom Sheet"
        description="This sheet slides in from the bottom."
      >
        <Card style={{ padding: '16px', marginTop: '16px' }}>
          <p style={{ fontSize: '14px', color: '#6b7280' }}>
            This is a sheet that slides in from the bottom of the screen.
            Commonly used on mobile devices for action sheets.
          </p>
        </Card>
      </Sheet>
    </Flex>
  );
};
`}
      />
    </>
  );
};