import { Component } from '@/components';
import { Heading } from 'shadcn-plus';
import { FormSheetComponent } from './component';

export const FormSheetExample = () => {
  return (
    <>
      <Heading level={5}>Form Sheet</Heading>
      <Component
        previewContent={<FormSheetComponent />}
        codeContent={`import { Sheet, Button, Card, Flex, Input } from 'shadcn-plus';
import { UserPlus } from 'lucide-react';
import { useState } from 'react';

export const FormSheetComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', role: '' });
  };

  return (
    <Sheet
      trigger={
        <Button>
          <UserPlus style={{ width: '16px', height: '16px', marginRight: '8px' }} />
          Add User
        </Button>
      }
      title="Add New User"
      description="Fill in the information below to add a new user to your team."
    >
      <Card style={{ padding: '24px', marginTop: '16px' }}>
        <form onSubmit={handleSubmit}>
          <Flex flexDirection="column" gap="20px">
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '8px' }}>
                Full Name
              </label>
              <Input
                placeholder="Enter full name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
              />
            </div>
            
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '8px' }}>
                Email Address
              </label>
              <Input
                type="email"
                placeholder="Enter email address"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
              />
            </div>
            
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '8px' }}>
                Role
              </label>
              <Input
                placeholder="Enter role (e.g., Developer, Designer)"
                value={formData.role}
                onChange={(e) => handleInputChange('role', e.target.value)}
              />
            </div>
            
            <Flex gap="12px" style={{ marginTop: '8px' }}>
              <Button type="submit" style={{ flex: 1 }}>
                Add User
              </Button>
              <Button variant="outline" type="button" style={{ flex: 1 }}>
                Cancel
              </Button>
            </Flex>
          </Flex>
        </form>
      </Card>
    </Sheet>
  );
};
`}
      />
    </>
  );
};
