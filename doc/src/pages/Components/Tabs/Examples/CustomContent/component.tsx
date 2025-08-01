import { Tabs, Button, Input, Flex } from 'shadcn-plus';
import { User, Settings, Bell } from 'lucide-react';

export const CustomContentTabsComponent = () => {
  return (
    <Tabs
      items={[
        {
          label: (
            <Flex gap="8px" alignItems="center">
              <User size={16} />
              Profile
            </Flex>
          ),
          content: (
            <div style={{ padding: '16px 0' }}>
              <h4 style={{ marginBottom: '16px', fontWeight: '600' }}>Personal Information</h4>
              <Flex flexDirection="column" gap="12px">
                <div>
                  <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>Name</label>
                  <Input placeholder="Enter your name" />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>Email</label>
                  <Input placeholder="Enter your email" type="email" />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>Bio</label>
                  <textarea 
                    style={{ 
                      width: '100%', 
                      padding: '8px', 
                      border: '1px solid #d1d5db', 
                      borderRadius: '6px', 
                      resize: 'none',
                      minHeight: '80px'
                    }}
                    placeholder="Enter your bio"
                  />
                </div>
                <Button size="sm" style={{ alignSelf: 'flex-start' }}>Save Changes</Button>
              </Flex>
            </div>
          ),
        },
        {
          label: (
            <Flex gap="8px" alignItems="center">
              <Settings size={16} />
              Settings
            </Flex>
          ),
          content: (
            <div style={{ padding: '16px 0' }}>
              <h4 style={{ marginBottom: '16px', fontWeight: '600' }}>Preferences</h4>
              <Flex flexDirection="column" gap="16px">
                <div>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                    <input type="checkbox" defaultChecked />
                    Enable Dark Mode
                  </label>
                </div>
                <div>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                    <input type="checkbox" />
                    Auto Save
                  </label>
                </div>
                <div>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                    <input type="checkbox" defaultChecked />
                    Show Tooltips
                  </label>
                </div>
                <Button size="sm" style={{ alignSelf: 'flex-start' }}>Apply Settings</Button>
              </Flex>
            </div>
          ),
        },
        {
          label: (
            <Flex gap="8px" alignItems="center">
              <Bell size={16} />
              Notifications
            </Flex>
          ),
          content: (
            <div style={{ padding: '16px 0' }}>
              <h4 style={{ marginBottom: '16px', fontWeight: '600' }}>Notification Settings</h4>
              <Flex flexDirection="column" gap="16px">
                <div>
                  <h5 style={{ marginBottom: '8px', fontWeight: '500' }}>Email Notifications</h5>
                  <Flex flexDirection="column" gap="8px">
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                      <input type="checkbox" defaultChecked />
                      New Message Alerts
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                      <input type="checkbox" />
                      System Updates
                    </label>
                  </Flex>
                </div>
                <div>
                  <h5 style={{ marginBottom: '8px', fontWeight: '500' }}>Push Notifications</h5>
                  <Flex flexDirection="column" gap="8px">
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                      <input type="checkbox" defaultChecked />
                      Desktop Notifications
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                      <input type="checkbox" defaultChecked />
                      Sound Alerts
                    </label>
                  </Flex>
                </div>
                <Button size="sm" style={{ alignSelf: 'flex-start' }}>Save Notification Settings</Button>
              </Flex>
            </div>
          ),
        },
      ]}
    />
  );
};