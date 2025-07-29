import { Component } from '@/components';
import { Heading } from 'shadcn-plus';
import { UsageSelectComponent } from './component';

export const UsageSelectExample = () => {
  return (
    <>
      <Heading level={5}>Form Integration</Heading>
      <Component
        previewContent={<UsageSelectComponent />}
        codeContent={`import { Select, Flex, Card, Text } from 'shadcn-plus';
import { useState } from 'react';

export const UsageSelectComponent = () => {
  const [formData, setFormData] = useState({
    country: '',
    language: '',
    theme: 'light',
  });

  const countries = [
    { label: '🇺🇸 United States', value: 'us' },
    { label: '🇨🇳 China', value: 'cn' },
    // ... more countries
  ];

  const handleChange = (field: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card style={{ padding: '24px' }}>
      <Text style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>
        User Preferences Form
      </Text>
      
      <Flex gap="16px" flexDirection="column">
        <div>
          <label>Country *</label>
          <Select 
            options={countries}
            placeholder="Select your country"
            value={formData.country}
            onValueChange={handleChange('country')}
            required
            triggerProps={{ className: 'w-full' }}
          />
        </div>
        
        {/* More form fields... */}
      </Flex>
      
      {/* Display current values */}
      <div style={{ marginTop: '20px', padding: '12px', backgroundColor: '#f8f9fa' }}>
        <strong>Current Values:</strong>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>
    </Card>
  );
};
`}
      />
    </>
  );
};