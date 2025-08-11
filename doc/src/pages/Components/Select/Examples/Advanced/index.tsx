import { Component } from '@/components';
import { Heading } from 'shadcn-plus';
import { AdvancedSelectComponent } from './component';

export const AdvancedSelectExample = () => {
  return (
    <>
      <Heading level={5}>Advanced Usage</Heading>
      <Component
        previewContent={<AdvancedSelectComponent />}
        codeContent={`import { Select, Flex, Badge } from 'shadcn-plus';
import { useState } from 'react';

export const AdvancedSelectComponent = () => {
  const [selectedUser, setSelectedUser] = useState<string>('');
  const [selectedPriority, setSelectedPriority] = useState<string>('');
  
  const userOptions = [
    {
      label: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ 
            width: '24px', 
            height: '24px', 
            borderRadius: '50%', 
            backgroundColor: '#3b82f6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '12px',
            fontWeight: 'bold'
          }}>
            JD
          </div>
          <div>
            <div style={{ fontWeight: '500' }}>John Doe</div>
            <div style={{ fontSize: '12px', color: '#6b7280' }}>john@example.com</div>
          </div>
        </div>
      ),
      value: 'john-doe',
    },
    // ... more user options
  ];

  const priorityOptions = [
    {
      label: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Badge variant="destructive" style={{ fontSize: '10px' }}>HIGH</Badge>
          <span>High Priority</span>
        </div>
      ),
      value: 'high',
    },
    // ... more priority options
  ];

  return (
    <Flex gap="24px" flexDirection="column" style={{ width: '400px' }}>
      <div>
        <label>Assign User (Custom Labels)</label>
        <Select 
          options={userOptions} 
          placeholder="Select a user"
          value={selectedUser}
          onValueChange={setSelectedUser}
          triggerProps={{ className: 'w-full' }}
        />
      </div>
      
      <div>
        <label>Set Priority (With Badges)</label>
        <Select 
          options={priorityOptions} 
          placeholder="Choose priority level"
          value={selectedPriority}
          onValueChange={setSelectedPriority}
          triggerProps={{ className: 'w-full' }}
        />
      </div>
      
      {/* More examples... */}
    </Flex>
  );
};
`}
      />
    </>
  );
};
