import { Component } from '@/components';
import { Heading } from 'shadcn-plus';
import { BasicCollapsibleComponent } from './component';

export const BasicCollapsibleExample = () => {
  return (
    <>
      <Heading level={5}>Basic</Heading>
      <Component
        previewContent={<BasicCollapsibleComponent />}
        codeContent={`import { Collapsible, Button, Card, Flex } from 'shadcn-plus';
import { ChevronDown } from 'shadcn-plus/icons';

export const BasicCollapsibleComponent = () => {
  return (
    <Flex flexDirection="column" gap="16px">
      <Collapsible
        trigger={
          <Button 
            variant="outline" 
            style={{
              width: '100%',
              justifyContent: 'space-between',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            Show More Information
            <ChevronDown style={{ width: '16px', height: '16px' }} />
          </Button>
        }
      >
        <Card style={{ padding: '16px', marginTop: '8px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <p style={{ fontSize: '14px', color: '#6b7280' }}>
              This is additional content that can be shown or hidden using the collapsible component.
            </p>
            <p style={{ fontSize: '14px', color: '#6b7280' }}>
              The collapsible provides smooth animations and is fully accessible.
            </p>
            <p style={{ fontSize: '14px', color: '#6b7280' }}>
              You can put any content here - text, images, forms, or other components.
            </p>
          </div>
        </Card>
      </Collapsible>
    </Flex>
  );
};
`}
      />
    </>
  );
};
