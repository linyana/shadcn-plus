import { Button, Flex, Card } from 'shadcn-plus';
import { Save, X, Trash2, Edit, Plus, Download, Share } from 'shadcn-plus/icons';
import { useState } from 'react';

export const UsageButtonComponent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleSave = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  const handleDelete = () => {
    setIsDeleting(true);
    setTimeout(() => setIsDeleting(false), 1500);
  };

  return (
    <Flex gap="24px" flexDirection="column">
      {/* Form Actions */}
      <Card style={{ padding: '16px' }}>
        <h4
          style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}
        >
          Form Actions
        </h4>
        <Flex gap="8px">
          <Button onClick={handleSave} loading={isLoading}>
            <Save />
            Save Changes
          </Button>
          <Button variant="outline">
            <X />
            Cancel
          </Button>
          <Button
            variant="destructive"
            onClick={handleDelete}
            loading={isDeleting}
          >
            <Trash2 />
            Delete
          </Button>
        </Flex>
      </Card>

      {/* Toolbar Actions */}
      <Card style={{ padding: '16px' }}>
        <h4
          style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}
        >
          Toolbar Actions
        </h4>
        <Flex gap="8px">
          <Button size="sm" variant="outline">
            <Plus />
            New
          </Button>
          <Button size="sm" variant="outline">
            <Edit />
            Edit
          </Button>
          <Button size="sm" variant="outline">
            <Download />
            Export
          </Button>
          <Button size="sm" variant="outline">
            <Share />
            Share
          </Button>
        </Flex>
      </Card>

      {/* Call to Action */}
      <Card style={{ padding: '24px', textAlign: 'center' }}>
        <h4
          style={{ marginBottom: '8px', fontSize: '18px', fontWeight: '600' }}
        >
          Ready to get started?
        </h4>
        <p style={{ marginBottom: '16px', color: '#6b7280' }}>
          Join thousands of users who trust our platform.
        </p>
        <Flex gap="12px" justifyContent="center">
          <Button size="lg">Get Started</Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </Flex>
      </Card>

      {/* Icon Button Group */}
      <Card style={{ padding: '16px' }}>
        <h4
          style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}
        >
          Quick Actions
        </h4>
        <Flex gap="8px">
          <Button size="icon" variant="outline">
            <Edit />
          </Button>
          <Button size="icon" variant="outline">
            <Download />
          </Button>
          <Button size="icon" variant="outline">
            <Share />
          </Button>
          <Button size="icon" variant="destructive">
            <Trash2 />
          </Button>
        </Flex>
      </Card>
    </Flex>
  );
};
