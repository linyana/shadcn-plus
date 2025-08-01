import { Component } from '@/components';
import { Heading } from 'shadcn-plus';
import { ControlledTabsComponent } from './component';

export const ControlledTabsExample = () => {
  return (
    <>
      <Heading level={5}>Controlled</Heading>
      <Component
        previewContent={<ControlledTabsComponent />}
        codeContent={`import { Tabs, Button, Flex } from 'shadcn-plus';
import { useState } from 'react';

export const ControlledTabsComponent = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <div>
      <Flex gap="8px" style={{ marginBottom: '16px' }}>
        <Button 
          size="sm" 
          variant={activeTab === 'tab1' ? 'default' : 'outline'}
          onClick={() => setActiveTab('tab1')}
        >
          Switch to Tab 1
        </Button>
        <Button 
          size="sm" 
          variant={activeTab === 'tab2' ? 'default' : 'outline'}
          onClick={() => setActiveTab('tab2')}
        >
          Switch to Tab 2
        </Button>
        <Button 
          size="sm" 
          variant={activeTab === 'tab3' ? 'default' : 'outline'}
          onClick={() => setActiveTab('tab3')}
        >
          Switch to Tab 3
        </Button>
      </Flex>
      
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        items={[
          {
            key: 'tab1',
            label: 'Tab 1',
            content: (
              <div style={{ padding: '16px 0' }}>
                <h4 style={{ marginBottom: '8px' }}>First Tab</h4>
                <p>This is the content of the first tab, current active tab: {activeTab}</p>
              </div>
            ),
          },
          {
            key: 'tab2',
            label: 'Tab 2',
            content: (
              <div style={{ padding: '16px 0' }}>
                <h4 style={{ marginBottom: '8px' }}>Second Tab</h4>
                <p>This is the content of the second tab, current active tab: {activeTab}</p>
              </div>
            ),
          },
          {
            key: 'tab3',
            label: 'Tab 3',
            content: (
              <div style={{ padding: '16px 0' }}>
                <h4 style={{ marginBottom: '8px' }}>Third Tab</h4>
                <p>This is the content of the third tab, current active tab: {activeTab}</p>
              </div>
            ),
          },
        ]}
      />
    </div>
  );
};`}
      />
    </>
  );
};