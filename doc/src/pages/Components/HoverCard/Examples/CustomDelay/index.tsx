import { Component } from '@/components';
import { CustomDelayHoverCardComponent } from './component';

const codeContent = `import { HoverCard, Button, Flex, Card } from 'shadcn-plus';
import { Clock, Zap } from 'lucide-react';

export const CustomDelayHoverCardComponent = () => {
  return (
    <Flex gap="16px" alignItems="center">
      <HoverCard
        trigger={
          <Button variant="outline">
            <Clock
              style={{ width: '16px', height: '16px', marginRight: '8px' }}
            />
            Slow (1000ms)
          </Button>
        }
        openDelay={1000}
        closeDelay={500}
      >
        <Card>
          <div style={{ padding: '8px' }}>
            <h4
              style={{
                fontSize: '14px',
                fontWeight: '600',
                margin: '0 0 8px 0',
              }}
            >
              Slow Hover Card
            </h4>
            <p style={{ fontSize: '12px', color: '#6b7280', margin: '0' }}>
              This hover card has a 1000ms open delay and 500ms close delay. It
              takes longer to appear but also stays open longer when you move
              your mouse away.
            </p>
          </div>
        </Card>
      </HoverCard>

      <HoverCard
        trigger={
          <Button variant="outline">
            <Zap
              style={{ width: '16px', height: '16px', marginRight: '8px' }}
            />
            Fast (100ms)
          </Button>
        }
        openDelay={100}
        closeDelay={100}
      >
        <Card>
          <div style={{ padding: '8px' }}>
            <h4
              style={{
                fontSize: '14px',
                fontWeight: '600',
                margin: '0 0 8px 0',
              }}
            >
              Fast Hover Card
            </h4>
            <p style={{ fontSize: '12px', color: '#6b7280', margin: '0' }}>
              This hover card has a 100ms open delay and 100ms close delay. It
              appears and disappears quickly for instant feedback.
            </p>
          </div>
        </Card>
      </HoverCard>
    </Flex>
  );
};
`;

export const CustomDelayHoverCardExample = () => {
  return (
    <Component
      title="Custom Delay"
      description="Hover cards with different open and close delays to control the timing of appearance and disappearance."
      previewContent={<CustomDelayHoverCardComponent />}
      codeContent={codeContent}
    />
  );
};
