import { Component } from '@/components';
import { CustomThemeComponent } from './component';
import { Heading } from 'shadcn-plus';

const codeContent = `import { Button, Input, ThemeProvider, Flex, Card } from 'shadcn-plus';

export const CustomThemeComponent = () => {
  const darkTheme = {
    Button: {
      style: { 
        backgroundColor: '#2d3748', 
        borderColor: '#2d3748',
        color: '#ffffff'
      },
      className: 'hover:bg-gray-600 transition-colors'
    },
    Input: {
      style: { 
        backgroundColor: '#1a202c',
        borderColor: '#4a5568',
        color: '#ffffff'
      },
      className: 'placeholder:text-gray-400 focus:border-blue-400'
    },
    Card: {
      style: {
        backgroundColor: '#2d3748',
        borderColor: '#4a5568'
      },
      className: 'text-white'
    }
  };

  const colorfulTheme = {
    Button: {
      style: { 
        background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
        border: 'none',
        color: 'white'
      },
      className: 'hover:scale-105 transition-transform shadow-lg'
    },
    Input: {
      style: { 
        borderColor: '#ff6b6b',
        borderWidth: '2px'
      },
      className: 'focus:border-pink-400 focus:ring-2 focus:ring-pink-200'
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>深色主题</h3>
        <ThemeProvider theme={darkTheme}>
          <Card style={{ padding: '24px' }}>
            <Flex gap="16px" flexDirection="column">
              <Button>深色按钮</Button>
              <Input placeholder="深色输入框" />
              <Button variant="outline">轮廓按钮</Button>
            </Flex>
          </Card>
        </ThemeProvider>
      </div>
      
      <div>
        <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>彩色主题</h3>
        <ThemeProvider theme={colorfulTheme}>
          <Flex gap="16px" flexDirection="column">
            <Button>渐变按钮</Button>
            <Input placeholder="彩色边框输入框" />
            <Button size="lg">大号按钮</Button>
          </Flex>
        </ThemeProvider>
      </div>
    </div>
  );
};`;

export const CustomThemeExample = () => {
  return (
    <>
      <Heading level={5}>Custom</Heading>
      <Component
        previewContent={<CustomThemeComponent />}
        codeContent={codeContent}
      />
    </>
  );
};
