import { Accordion } from 'shadcn-plus';
import { Settings, User, Bell, Shield } from 'shadcn-plus/icons';

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
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
          >
            <div>
              <h4
                style={{
                  margin: '0 0 4px 0',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#374151',
                }}
              >
                Profile Information
              </h4>
              <p style={{ margin: '0' }}>
                Update your personal information and profile settings.
              </p>
            </div>
            <div>
              <h4
                style={{
                  margin: '0 0 4px 0',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#374151',
                }}
              >
                Email Preferences
              </h4>
              <p style={{ margin: '0' }}>
                Manage your email notifications and communication preferences.
              </p>
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
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
          >
            <div>
              <h4
                style={{
                  margin: '0 0 4px 0',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#374151',
                }}
              >
                Two-Factor Authentication
              </h4>
              <p style={{ margin: '0' }}>
                Add an extra layer of security to your account.
              </p>
            </div>
            <div>
              <h4
                style={{
                  margin: '0 0 4px 0',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#374151',
                }}
              >
                Data Privacy
              </h4>
              <p style={{ margin: '0' }}>
                Control how your data is collected and used.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      trigger: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Bell style={{ width: '16px', height: '16px' }} />
          <span>Notifications</span>
        </div>
      ),
      content: (
        <div style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.6' }}>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
          >
            <div>
              <h4
                style={{
                  margin: '0 0 4px 0',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#374151',
                }}
              >
                Push Notifications
              </h4>
              <p style={{ margin: '0' }}>
                Receive real-time updates on your device.
              </p>
            </div>
            <div>
              <h4
                style={{
                  margin: '0 0 4px 0',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#374151',
                }}
              >
                Email Notifications
              </h4>
              <p style={{ margin: '0' }}>
                Get important updates delivered to your inbox.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      trigger: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Settings style={{ width: '16px', height: '16px' }} />
          <span>Advanced Settings</span>
        </div>
      ),
      content: (
        <div style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.6' }}>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
          >
            <div>
              <h4
                style={{
                  margin: '0 0 4px 0',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#374151',
                }}
              >
                API Access
              </h4>
              <p style={{ margin: '0' }}>
                Manage your API keys and access tokens.
              </p>
            </div>
            <div>
              <h4
                style={{
                  margin: '0 0 4px 0',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#374151',
                }}
              >
                Developer Tools
              </h4>
              <p style={{ margin: '0' }}>
                Access advanced developer features and debugging tools.
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div style={{ width: '400px' }}>
      <Accordion type="multiple" items={items} />
    </div>
  );
};
