import { Select, Flex, Badge } from 'shadcn-plus';
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
    {
      label: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ 
            width: '24px', 
            height: '24px', 
            borderRadius: '50%', 
            backgroundColor: '#10b981',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '12px',
            fontWeight: 'bold'
          }}>
            JS
          </div>
          <div>
            <div style={{ fontWeight: '500' }}>Jane Smith</div>
            <div style={{ fontSize: '12px', color: '#6b7280' }}>jane@example.com</div>
          </div>
        </div>
      ),
      value: 'jane-smith',
    },
    {
      label: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ 
            width: '24px', 
            height: '24px', 
            borderRadius: '50%', 
            backgroundColor: '#f59e0b',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '12px',
            fontWeight: 'bold'
          }}>
            MB
          </div>
          <div>
            <div style={{ fontWeight: '500' }}>Mike Brown</div>
            <div style={{ fontSize: '12px', color: '#6b7280' }}>mike@example.com</div>
          </div>
        </div>
      ),
      value: 'mike-brown',
    },
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
    {
      label: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Badge variant="secondary" style={{ fontSize: '10px', backgroundColor: '#f59e0b', color: 'white' }}>MED</Badge>
          <span>Medium Priority</span>
        </div>
      ),
      value: 'medium',
    },
    {
      label: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Badge variant="outline" style={{ fontSize: '10px' }}>LOW</Badge>
          <span>Low Priority</span>
        </div>
      ),
      value: 'low',
    },
  ];

  const sizeOptions = [
    { label: 'Extra Small (XS)', value: 'xs' },
    { label: 'Small (S)', value: 's' },
    { label: 'Medium (M)', value: 'm' },
    { label: 'Large (L)', value: 'l' },
    { label: 'Extra Large (XL)', value: 'xl' },
    { label: 'Double Extra Large (XXL)', value: 'xxl' },
  ];

  return (
    <Flex gap="24px" flexDirection="column" style={{ width: '400px' }}>
      <div>
        <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>
          Assign User (Custom Labels)
        </label>
        <Select 
          options={userOptions} 
          placeholder="Select a user"
          value={selectedUser}
          onValueChange={setSelectedUser}
          triggerProps={{ className: 'w-full' }}
          contentProps={{ className: 'w-full' }}
        />
      </div>
      
      <div>
        <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>
          Set Priority (With Badges)
        </label>
        <Select 
          options={priorityOptions} 
          placeholder="Choose priority level"
          value={selectedPriority}
          onValueChange={setSelectedPriority}
          triggerProps={{ className: 'w-full' }}
        />
      </div>
      
      <div>
        <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>
          Size Selection (Long List)
        </label>
        <Select 
          options={sizeOptions} 
          placeholder="Select size"
          triggerProps={{ className: 'w-full' }}
          contentProps={{ 
            className: 'max-h-60 overflow-y-auto'
          }}
        />
      </div>
      
      <div>
        <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>
          Custom Styled Select
        </label>
        <Select 
          options={[
            { label: '🎨 Design', value: 'design' },
            { label: '💻 Development', value: 'development' },
            { label: '📊 Analytics', value: 'analytics' },
            { label: '🚀 Marketing', value: 'marketing' },
          ]} 
          placeholder="Choose department"
          triggerProps={{ 
            className: 'w-full border-2 border-dashed border-blue-300 hover:border-blue-500 focus:border-blue-600',
            style: { borderRadius: '12px' }
          }}
        />
      </div>
    </Flex>
  );
};