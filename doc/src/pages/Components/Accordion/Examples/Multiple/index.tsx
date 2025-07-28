import { Component } from '@/components';
import { MultipleAccordionComponent } from './component';

const codeContent = `import { Accordion } from 'shadcn-plus';
import { Settings, User, Bell, Shield } from 'lucide-react';

export const MultipleAccordionComponent = () => {
  const items = [
    {
      trigger: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <User style={{ width: '16px', height: '16px' }} />
          <span>Account Settings</span>
        </div>
      ),
      content: (
        <div style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.6' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div>
              <h4 style={{ margin: '0 0 4px 0', fontSize: '14px', fontWeight: '600', color: '#374151' }}>
                Profile Information
              </h4>
              <p style={{ margin: '0' }}>Update your personal information and profile settings.</p>
            </div>
            <div>
              <h4 style={{ margin: '0 0 4px 0', fontSize: '14px', fontWeight: '600', color: '#374151' }}>
                Email Preferences
              </h4>
              <p style={{ margin: '0' }}>Manage your email notifications and communication preferences.</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      trigger: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Shield style={{ width: '16px', height: '16px' }} />
          <span>Privacy & Security</span>
        </div>
      ),
      content: (
        <div style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.6' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div>
              <h4 style={{ margin: '0 0 4px 0', fontSize: '14px', fontWeight: '600', color: '#374151' }}>
                Two-Factor Authentication
              </h4>
              <p style={{ margin: '0' }}>Add an extra layer of security to your account.</p>
            </div>
            <div>
              <h4 style={{ margin: '0 0 4px 0', fontSize: '14px', fontWeight: '600', color: '#374151' }}>
                Data Privacy
              </h4>
              <p style={{ margin: '0' }}>Control how your data is collected and used.</p>
            </div>
          </div>
        </div>
      ),
    },
    // ... more items
  ];

  return (
    <div style={{ maxWidth: '600px' }}>
      <Accordion type="multiple" items={items} />
    </div>
  );
};`;

export const MultipleAccordionExample = () => {
  return (
    <Component
      previewContent={<MultipleAccordionComponent />}
      codeContent={codeContent}
    />
  );
};