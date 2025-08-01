import { Component } from '@/components';
import { Heading } from 'shadcn-plus';
import { BasicTabsComponent } from './component';

export const BasicTabsExample = () => {
  return (
    <>
      <Heading level={5}>Basic</Heading>
      <Component
        previewContent={<BasicTabsComponent />}
        codeContent={`import { Tabs } from 'shadcn-plus';

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
        key: 'password',
        label: 'Password',
        content: (
          <div style={{ padding: '16px 0' }}>
            <p>Change your password and security settings.</p>
          </div>
        ),
      },
      {
        key: 'notifications',
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
};`}
      />
    </>
  );
};