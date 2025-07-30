import { Tabs, Button, Flex } from 'shadcn-plus';
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
          切换到Tab 1
        </Button>
        <Button 
          size="sm" 
          variant={activeTab === 'tab2' ? 'default' : 'outline'}
          onClick={() => setActiveTab('tab2')}
        >
          切换到Tab 2
        </Button>
        <Button 
          size="sm" 
          variant={activeTab === 'tab3' ? 'default' : 'outline'}
          onClick={() => setActiveTab('tab3')}
        >
          切换到Tab 3
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
                <h4 style={{ marginBottom: '8px' }}>第一个标签页</h4>
                <p>这是第一个标签页的内容，当前活动标签: {activeTab}</p>
              </div>
            ),
          },
          {
            key: 'tab2',
            label: 'Tab 2',
            content: (
              <div style={{ padding: '16px 0' }}>
                <h4 style={{ marginBottom: '8px' }}>第二个标签页</h4>
                <p>这是第二个标签页的内容，当前活动标签: {activeTab}</p>
              </div>
            ),
          },
          {
            key: 'tab3',
            label: 'Tab 3',
            content: (
              <div style={{ padding: '16px 0' }}>
                <h4 style={{ marginBottom: '8px' }}>第三个标签页</h4>
                <p>这是第三个标签页的内容，当前活动标签: {activeTab}</p>
              </div>
            ),
          },
        ]}
      />
    </div>
  );
};