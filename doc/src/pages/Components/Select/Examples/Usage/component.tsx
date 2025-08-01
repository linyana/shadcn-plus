import { Select, Flex, Card, Text } from 'shadcn-plus';
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
    { label: '🇯🇵 Japan', value: 'jp' },
    { label: '🇬🇧 United Kingdom', value: 'uk' },
    { label: '🇩🇪 Germany', value: 'de' },
    { label: '🇫🇷 France', value: 'fr' },
  ];

  const languages = [
    { label: 'English', value: 'en' },
    { label: 'Chinese', value: 'zh' },
    { label: 'Japanese', value: 'ja' },
    { label: 'Deutsch', value: 'de' },
    { label: 'Français', value: 'fr' },
  ];

  const themes = [
    { label: '☀️ Light', value: 'light' },
    { label: '🌙 Dark', value: 'dark' },
    { label: '🎨 Auto', value: 'auto' },
  ];

  const handleChange = (field: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Flex gap="24px" flexDirection="column" style={{ maxWidth: '500px' }}>
      {/* Form Example */}
      <Card style={{ padding: '24px' }}>
        <Text style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>
          User Preferences Form
        </Text>
        
        <Flex gap="16px" flexDirection="column">
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>
              Country *
            </label>
            <Select 
              options={countries}
              placeholder="Select your country"
              value={formData.country}
              onValueChange={handleChange('country')}
              required
              triggerProps={{ className: 'w-full' }}
            />
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>
              Preferred Language
            </label>
            <Select 
              options={languages}
              placeholder="Choose language"
              value={formData.language}
              onValueChange={handleChange('language')}
              triggerProps={{ className: 'w-full' }}
            />
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>
              Theme
            </label>
            <Select 
              options={themes}
              value={formData.theme}
              onValueChange={handleChange('theme')}
              triggerProps={{ className: 'w-full' }}
            />
          </div>
        </Flex>
        
        {/* Display current values */}
        <div style={{ 
          marginTop: '20px', 
          padding: '12px', 
          backgroundColor: '#f8f9fa', 
          borderRadius: '8px',
          fontSize: '14px'
        }}>
          <strong>Current Values:</strong>
          <pre style={{ margin: '8px 0 0 0', fontFamily: 'monospace' }}>
            {JSON.stringify(formData, null, 2)}
          </pre>
        </div>
      </Card>
      

    </Flex>
  );
};