import { Component } from '@/components';
import { Heading } from 'shadcn-plus';
import { CustomTriggerCollapsibleComponent } from './component';

export const CustomTriggerCollapsibleExample = () => {
  return (
    <>
      <Heading level={5}>Custom Trigger</Heading>
      <Component
        previewContent={<CustomTriggerCollapsibleComponent />}
        codeContent={`import { Collapsible, Card, Flex, Badge } from 'shadcn-plus';
import { Settings, User, Bell, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

export const CustomTriggerCollapsibleComponent = () => {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  return (
    <Flex flexDirection="column" gap="16px">
      <Collapsible
        open={settingsOpen}
        onOpenChange={setSettingsOpen}
        trigger={
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'background-color 0.2s'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Settings style={{ width: '16px', height: '16px' }} />
              <span style={{ fontWeight: '500' }}>Settings</span>
              <Badge variant="secondary">3</Badge>
            </div>
            {settingsOpen ? (
              <Minus style={{ width: '16px', height: '16px' }} />
            ) : (
              <Plus style={{ width: '16px', height: '16px' }} />
            )}
          </div>
        }
      >
        <Card style={{ padding: '16px', marginTop: '8px', marginLeft: '24px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '14px' }}>Dark Mode</span>
              <Badge variant="outline">Enabled</Badge>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '14px' }}>Notifications</span>
              <Badge variant="outline">On</Badge>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '14px' }}>Auto-save</span>
              <Badge variant="outline">Off</Badge>
            </div>
          </div>
        </Card>
      </Collapsible>

      <Collapsible
        open={profileOpen}
        onOpenChange={setProfileOpen}
        trigger={
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'background-color 0.2s'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <User style={{ width: '16px', height: '16px' }} />
              <span style={{ fontWeight: '500' }}>Profile Information</span>
            </div>
            {profileOpen ? (
              <Minus style={{ width: '16px', height: '16px' }} />
            ) : (
              <Plus style={{ width: '16px', height: '16px' }} />
            )}
          </div>
        }
      >
        <Card style={{ padding: '16px', marginTop: '8px', marginLeft: '24px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ fontSize: '14px' }}>
              <strong>Name:</strong> John Doe
            </div>
            <div style={{ fontSize: '14px' }}>
              <strong>Email:</strong> john.doe@example.com
            </div>
            <div style={{ fontSize: '14px' }}>
              <strong>Role:</strong> Administrator
            </div>
          </div>
        </Card>
      </Collapsible>

      <Collapsible
        open={notificationsOpen}
        onOpenChange={setNotificationsOpen}
        trigger={
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'background-color 0.2s'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Bell style={{ width: '16px', height: '16px' }} />
              <span style={{ fontWeight: '500' }}>Recent Notifications</span>
              <Badge variant="destructive">2</Badge>
            </div>
            {notificationsOpen ? (
              <Minus style={{ width: '16px', height: '16px' }} />
            ) : (
              <Plus style={{ width: '16px', height: '16px' }} />
            )}
          </div>
        }
      >
        <Card style={{ padding: '16px', marginTop: '8px', marginLeft: '24px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
              <div style={{ width: '8px', height: '8px', backgroundColor: '#3b82f6', borderRadius: '50%', marginTop: '8px' }}></div>
              <div>
                <p style={{ fontSize: '14px', fontWeight: '500' }}>System Update Available</p>
                <p style={{ fontSize: '12px', color: '#6b7280' }}>2 hours ago</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
              <div style={{ width: '8px', height: '8px', backgroundColor: '#10b981', borderRadius: '50%', marginTop: '8px' }}></div>
              <div>
                <p style={{ fontSize: '14px', fontWeight: '500' }}>Backup Completed Successfully</p>
                <p style={{ fontSize: '12px', color: '#6b7280' }}>5 hours ago</p>
              </div>
            </div>
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