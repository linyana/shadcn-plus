import { Component } from '@/components';
import { BasicHoverCardComponent } from './component';

const codeContent = `import { HoverCard, Button } from 'shadcn-plus';
import { User } from 'lucide-react';

export const BasicHoverCardComponent = () => {
  return (
    <HoverCard
      trigger={
        <Button variant="outline">
          <User style={{ width: '16px', height: '16px', marginRight: '8px' }} />
          Hover me
        </Button>
      }
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: '#3b82f6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '16px',
              fontWeight: '600',
            }}
          >
            JD
          </div>
          <div>
            <h4 style={{ fontSize: '14px', fontWeight: '600', margin: '0' }}>
              John Doe
            </h4>
            <p style={{ fontSize: '12px', color: '#6b7280', margin: '0' }}>
              @johndoe
            </p>
          </div>
        </div>
        <p style={{ fontSize: '14px', color: '#374151', margin: '0' }}>
          Software engineer passionate about creating beautiful user interfaces
          and seamless user experiences.
        </p>
        <div
          style={{
            display: 'flex',
            gap: '16px',
            fontSize: '12px',
            color: '#6b7280',
          }}
        >
          <span>
            <strong>1,234</strong> Following
          </span>
          <span>
            <strong>5,678</strong> Followers
          </span>
        </div>
      </div>
    </HoverCard>
  );
};
`;

export const BasicHoverCardExample = () => {
  return (
    <Component
      title="Basic"
      description="A simple hover card that displays user profile information when hovering over a button."
      previewContent={<BasicHoverCardComponent />}
      codeContent={codeContent}
    />
  );
};
