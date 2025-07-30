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
          label: '账户',
          content: (
            <div style={{ padding: '16px 0' }}>
              <p>管理您的账户设置和偏好。</p>
            </div>
          ),
        },
        {
          label: '密码',
          content: (
            <div style={{ padding: '16px 0' }}>
              <p>更改您的密码和安全设置。</p>
            </div>
          ),
        },
        {
          label: '通知',
          content: (
            <div style={{ padding: '16px 0' }}>
              <p>配置您希望接收的通知类型。</p>
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