import { Component } from '@/components';
import { AccordionThemeProviderComponent } from './component';

const codeContent = `import { Accordion, ThemeProvider } from 'shadcn-plus';

export const AccordionThemeProviderComponent = () => {
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
      trigger: 'How do I customize the theme?',
      content: (
        <div style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.6' }}>
          <p style={{ margin: '0 0 12px 0' }}>
            You can use ThemeProvider to customize the appearance of all components globally.
            This includes styling for triggers, content, and the accordion container itself.
          </p>
          <p style={{ margin: '0' }}>
            The theme configuration supports both style objects and CSS class names.
          </p>
        </div>
      ),
    },
    {
      trigger: 'Can I override individual components?',
      content: (
        <div style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.6' }}>
          <p style={{ margin: '0' }}>
            Yes! Component-level props will always override theme provider settings,
            giving you fine-grained control when needed.
          </p>
        </div>
      ),
    },
  ];

  // Custom theme configuration for Accordion
  const customTheme = {
    Accordion: {
      style: {
        borderRadius: '12px',
        border: '2px solid #e2e8f0',
        backgroundColor: '#f8fafc',
        padding: '8px',
      },
      className: 'shadow-lg',
      Trigger: {
        style: {
          backgroundColor: '#3b82f6',
          color: 'white',
          padding: '16px 20px',
          borderRadius: '8px',
          margin: '4px',
        },
        className: 'hover:bg-blue-600 transition-colors font-semibold',
      },
      Content: {
        style: {
          backgroundColor: 'white',
          padding: '20px',
          margin: '4px 4px 8px 4px',
          borderRadius: '8px',
          border: '1px solid #e2e8f0',
        },
        className: 'shadow-sm',
      },
    },
  };

  const darkTheme = {
    Accordion: {
      style: {
        borderRadius: '12px',
        backgroundColor: '#1f2937',
        border: '1px solid #374151',
        padding: '8px',
        color: '#f9fafb',
      },
      Trigger: {
        style: {
          backgroundColor: '#374151',
          color: '#f9fafb',
          borderBottom: '1px solid #4b5563',
          padding: '12px 16px',
        },
        className: 'hover:bg-gray-600',
      },
      Content: {
        style: {
          backgroundColor: '#111827',
          color: '#f9fafb',
          padding: '16px',
        },
      },
    },
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h3
          style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}
        >
          Default Accordion
        </h3>
        <div style={{ width: '600px' }}>
          <Accordion type="single" collapsible items={items} />
        </div>
      </div>

      <div>
        <h3
          style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}
        >
          Custom Themed Accordion
        </h3>
        <ThemeProvider config={customTheme}>
          <div style={{ width: '600px' }}>
            <Accordion type="single" collapsible items={items} />
          </div>
        </ThemeProvider>
      </div>

      <div>
        <h3
          style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}
        >
          Dark Themed Accordion
        </h3>
        <ThemeProvider config={darkTheme}>
          <div style={{ width: '600px' }}>
            <Accordion type="single" collapsible items={items} />
          </div>
        </ThemeProvider>
      </div>
    </div>
  );
};`;

export const AccordionThemeProviderExample = () => {
  return (
    <>
      <Component
        previewContent={<AccordionThemeProviderComponent />}
        codeContent={codeContent}
        title="Theme Customization"
        description="Use ThemeProvider to customize the appearance of Accordion components globally."
      />
    </>
  );
};
