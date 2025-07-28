import { Component } from '@/components';
import { BasicCardComponent } from './component';

const codeContent = `import { Card } from 'shadcn-plus';

export const BasicCardComponent = () => {
  return (
    <Card
      header="Card Title"
      description="This is a simple card with header, description, and content."
      style={{ width: '300px' }}
    >
      <p style={{ fontSize: '14px', color: '#6b7280' }}>
        This is the main content of the card. You can put any content here,
        including text, images, forms, or other components.
      </p>
    </Card>
  );
};`;

export const BasicCardExample = () => {
  return (
    <Component
      previewContent={<BasicCardComponent />}
      codeContent={codeContent}
    />
  );
};