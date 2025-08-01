import { Tabs } from 'shadcn-plus';

export const BasicTabsComponent = () => {
  return (
    <Tabs
      items={[
        {
          label: 'Account',
          content: (
            <div style={{ padding: '16px 0' }}>
              <p>Manage your account settings and preferences.</p>
            </div>
          ),
        },
        {
          label: 'Password',
          content: (
            <div style={{ padding: '16px 0' }}>
              <p>Change your password and security settings.</p>
            </div>
          ),
        },
        {
          label: 'Notifications',
          content: (
            <div style={{ padding: '16px 0' }}>
              <p>Configure the types of notifications you want to receive.</p>
            </div>
          ),
        },
      ]}
    />
  );
};