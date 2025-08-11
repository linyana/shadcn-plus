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
          <Flex alignItems="center" gap="8px">
            <User style={{ width: '16px', height: '16px' }} />
            Profile
          </Flex>
        ),
        content: (
          <div style={{ padding: '16px 0' }}>
            <h4 style={{ marginBottom: '16px', fontWeight: '600' }}>Personal Information</h4>
            <Flex flexDirection="column" gap="16px">
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
                    minHeight: '80px',
                    padding: '8px 12px',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    fontSize: '14px',
                    resize: 'vertical'
                  }}
                  placeholder="Enter your bio"
                />
              </div>
              <Button size="sm" style={{ alignSelf: 'flex-start' }}>Save Changes</Button>
            </Flex>
          </div>
        ),
        },
        // ... other tab configurations
      ]}
    />
  );
};`}
      />
    </>
  );
};
