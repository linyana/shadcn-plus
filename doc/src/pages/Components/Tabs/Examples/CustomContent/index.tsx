import { Component } from '@/components';
import { Heading } from 'shadcn-plus';
import { CustomContentTabsComponent } from './component';

export const CustomContentTabsExample = () => {
  return (
    <>
      <Heading level={5}>Custom Content</Heading>
      <Component
        previewContent={<CustomContentTabsComponent />}
        codeContent={`import { Tabs, Button, Input, Flex } from 'shadcn-plus';
import { User, Settings, Bell } from 'lucide-react';

export const CustomContentTabsComponent = () => {
  return (
    <Tabs
      items={[
        {
          label: (
            <Flex gap="8px" alignItems="center">
              <User size={16} />
              个人资料
            </Flex>
          ),
          content: (
            <div style={{ padding: '16px 0' }}>
              <h4 style={{ marginBottom: '16px', fontWeight: '600' }}>个人信息</h4>
              <Flex flexDirection="column" gap="12px">
                <div>
                  <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>姓名</label>
                  <Input placeholder="请输入您的姓名" />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>邮箱</label>
                  <Input placeholder="请输入您的邮箱" type="email" />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>简介</label>
                  <textarea 
                    style={{ 
                      width: '100%', 
                      padding: '8px', 
                      border: '1px solid #d1d5db', 
                      borderRadius: '6px', 
                      resize: 'none',
                      minHeight: '80px'
                    }}
                    placeholder="请输入您的简介"
                  />
                </div>
                <Button size="sm" style={{ alignSelf: 'flex-start' }}>保存更改</Button>
              </Flex>
            </div>
          ),
        },
        // ... 其他标签页配置
      ]}
    />
  );
};`}
      />
    </>
  );
};