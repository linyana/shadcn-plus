import { Component } from '@/components';
import { ControlledHoverCardComponent } from './component';

const codeContent = `import { HoverCard, Button, Flex } from 'shadcn-plus';
import { Settings } from 'lucide-react';
import { useState } from 'react';

export const ControlledHoverCardComponent = () => {
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

      <HoverCard
        open={isOpen}
        onOpenChange={setIsOpen}
        trigger={
          <Button variant="outline">
            <Settings
              style={{ width: '16px', height: '16px', marginRight: '8px' }}
            />
            Controlled Hover Card
          </Button>
        }
      >
        <div style={{ padding: '8px' }}>
          <h4
            style={{
              fontSize: '14px',
              fontWeight: '600',
              margin: '0 0 8px 0',
            }}
          >
            Controlled State
          </h4>
          <p style={{ fontSize: '12px', color: '#6b7280', margin: '0' }}>
            This hover card's open state is controlled by external buttons. You
            can programmatically open, close, or toggle the hover card.
          </p>
        </div>
      </HoverCard>
    </Flex>
  );
};
`;

export const ControlledHoverCardExample = () => {
  return (
    <Component
      previewContent={<ControlledHoverCardComponent />}
      codeContent={codeContent}
    />
  );
};
