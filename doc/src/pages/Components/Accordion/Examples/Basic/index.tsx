import { Component } from '@/components';
import { BasicAccordionComponent } from './component';

const codeContent = `import { Accordion } from 'shadcn-plus';

export const BasicAccordionComponent = () => {
  const items = [
    {
      trigger: 'What is shadcn-plus?',
      content: (
        <div style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.6' }}>
          <p style={{ margin: '0 0 12px 0' }}>
            shadcn-plus is a collection of high-quality React components built on top of shadcn/ui.
            It provides additional functionality and enhanced user experience while maintaining
            the same design principles and accessibility standards.
          </p>
          <p style={{ margin: '0' }}>
            All components are fully customizable and work seamlessly with your existing
            shadcn/ui setup.
          </p>
        </div>
      ),
    },
    {
      trigger: 'How do I install it?',
      content: (
        <div style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.6' }}>
          <p style={{ margin: '0 0 12px 0' }}>You can install shadcn-plus using npm or yarn:</p>
          <div
            style={{
              backgroundColor: '#f3f4f6',
              padding: '12px',
              borderRadius: '6px',
              fontFamily: 'monospace',
              fontSize: '13px',
              margin: '0 0 12px 0',
            }}
          >
            npm install shadcn-plus
          </div>
          <p style={{ margin: '0' }}>
            Then import the components you need in your React application.
          </p>
        </div>
      ),
    },
    {
      trigger: 'Is it compatible with TypeScript?',
      content: (
        <div style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.6' }}>
          <p style={{ margin: '0 0 12px 0' }}>
            Yes! shadcn-plus is built with TypeScript and provides full type definitions
            for all components and their props.
          </p>
          <p style={{ margin: '0' }}>
            You'll get excellent IntelliSense support and type checking out of the box.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div style={{ maxWidth: '600px' }}>
      <Accordion type="single" collapsible items={items} />
    </div>
  );
};`;

export const BasicAccordionExample = () => {
  return (
    <Component
      previewContent={<BasicAccordionComponent />}
      codeContent={codeContent}
    />
  );
};