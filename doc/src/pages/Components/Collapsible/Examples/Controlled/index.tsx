import { Component } from '@/components';
import { Heading } from 'shadcn-plus';
import { ControlledCollapsibleComponent } from './component';

export const ControlledCollapsibleExample = () => {
  return (
    <>
      <Heading level={5}>Controlled</Heading>
      <Component
        previewContent={<ControlledCollapsibleComponent />}
        codeContent={`import { Collapsible, Button, Card, Flex } from 'shadcn-plus';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export const ControlledCollapsibleComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Flex flexDirection="column" gap="16px">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <p style={{ fontSize: '14px', color: '#6b7280' }}>
          Current state: <strong>{isOpen ? 'Open' : 'Closed'}</strong>
        </p>
        <Flex gap="8px">
          <Button size="sm" onClick={() => setIsOpen(true)} disabled={isOpen}>
            Open
          </Button>
          <Button size="sm" onClick={() => setIsOpen(false)} disabled={!isOpen}>
            Close
          </Button>
          <Button size="sm" onClick={() => setIsOpen(!isOpen)}>
            Toggle
          </Button>
        </Flex>
      </div>
      
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
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
            Controlled Collapsible
            {isOpen ? (
              <ChevronUp style={{ width: '16px', height: '16px' }} />
            ) : (
              <ChevronDown style={{ width: '16px', height: '16px' }} />
            )}
          </Button>
        }
      >
        <Card style={{ padding: '16px', marginTop: '8px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <p style={{ fontSize: '14px', color: '#6b7280' }}>
              This collapsible is controlled by external state. You can programmatically control its open/close state.
            </p>
            <p style={{ fontSize: '14px', color: '#6b7280' }}>
              The buttons above demonstrate how you can control the collapsible from outside components.
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
