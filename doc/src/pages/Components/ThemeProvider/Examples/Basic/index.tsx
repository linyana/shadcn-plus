import { Component } from '@/components';
import { BasicThemeProviderComponent } from './component';
import { Heading } from 'shadcn-plus';

const codeContent = `import { Button, Input, ThemeProvider, Flex } from 'shadcn-plus';

export const BasicThemeProviderComponent = () => {
  const config = {
    Button: {
      style: { backgroundColor: '#1890ff', borderColor: '#1890ff' },
      className: 'hover:bg-blue-600',
    },
    Input: {
      style: { borderColor: '#1890ff' },
      className: 'focus:border-blue-500',
    },
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h3
          style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}
        >
          Without ThemeProvider
        </h3>
        <Flex gap="16px" flexDirection="column">
          <Button>Default Button</Button>
          <Input placeholder="Default Input" />
        </Flex>
      </div>

      <div>
        <h3
          style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}
        >
          With ThemeProvider
        </h3>
        <ThemeProvider config={config}>
          <Flex gap="16px" flexDirection="column">
            <Button>Themed Button</Button>
            <Input placeholder="Themed Input" />
          </Flex>
        </ThemeProvider>
      </div>
    </div>
  );
};
`;

export const BasicThemeProviderExample = () => {
  return (
    <>
      <Heading level={5}>Basic</Heading>
      <Component
        previewContent={<BasicThemeProviderComponent />}
        codeContent={codeContent}
      />
    </>
  );
};
