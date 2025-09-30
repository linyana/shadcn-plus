import { Card, Button, Flex } from 'shadcn-plus';

export const WithFooterCardComponent = () => {
  return (
    <Card
      title="Project Settings"
      description="Manage your project configuration and preferences."
      footer={
        <Flex gap="8px" justifyContent="flex-end" width="100%">
          <Button variant="outline" size="sm">
            Cancel
          </Button>
          <Button size="sm">Save Changes</Button>
        </Flex>
      }
      style={{ width: '400px' }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <label
            style={{
              fontSize: '14px',
              fontWeight: '500',
              marginBottom: '4px',
              display: 'block',
            }}
          >
            Project Name
          </label>
          <input
            type="text"
            defaultValue="My Awesome Project"
            style={{
              width: '100%',
              padding: '8px 12px',
              border: '1px solid #e5e7eb',
              borderRadius: '6px',
              fontSize: '14px',
            }}
          />
        </div>
        <div>
          <label
            style={{
              fontSize: '14px',
              fontWeight: '500',
              marginBottom: '4px',
              display: 'block',
            }}
          >
            Description
          </label>
          <textarea
            defaultValue="A brief description of the project"
            rows={3}
            style={{
              width: '100%',
              padding: '8px 12px',
              border: '1px solid #e5e7eb',
              borderRadius: '6px',
              fontSize: '14px',
              resize: 'vertical',
            }}
          />
        </div>
      </div>
    </Card>
  );
};
