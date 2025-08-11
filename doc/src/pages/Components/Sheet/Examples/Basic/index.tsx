import { Component } from '@/components';
import { Heading } from 'shadcn-plus';
import { BasicSheetComponent } from './component';

export const BasicSheetExample = () => {
  return (
    <>
      <Heading level={5}>Basic</Heading>
      <Component
        previewContent={<BasicSheetComponent />}
        codeContent={`import { Sheet, Button, Card, Flex } from 'shadcn-plus';
import { Settings } from 'lucide-react';

export const BasicSheetComponent = () => {
  return (
    <Sheet
      trigger={
        <Button variant="outline">
          <Settings style={{ width: '16px', height: '16px', marginRight: '8px' }} />
          Open Sheet
        </Button>
      }
      title="Settings"
      description="Manage your account settings and preferences."
    >
      <Card style={{ padding: '16px', marginTop: '16px' }}>
        <Flex flexDirection="column" gap="16px">
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Profile</h4>
            <p style={{ fontSize: '14px', color: '#6b7280' }}>
              Update your personal information and profile settings.
            </p>
          </div>
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Notifications</h4>
            <p style={{ fontSize: '14px', color: '#6b7280' }}>
              Configure how you receive notifications and alerts.
            </p>
          </div>
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Privacy</h4>
            <p style={{ fontSize: '14px', color: '#6b7280' }}>
              Manage your privacy settings and data preferences.
            </p>
          </div>
        </Flex>
      </Card>
    </Sheet>
  );
};
`}
      />
    </>
  );
};
