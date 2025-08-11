import { Page } from '@/components';
import { Flex, Heading, Paragraph } from 'shadcn-plus';
import { BasicThemeProviderExample, CustomThemeExample } from './Examples';
import { PropTable } from '../components';
import { ThemeProviderProps } from './API';

export const ThemeProviderPage = () => {
  return (
    <Page>
      <Flex flexDirection="column" gap="24px">
        <div>
          <Heading level={1}>ThemeProvider</Heading>
          <Paragraph>
            ThemeProvider is a global theme configuration component, similar to
            Ant Design's ConfigProvider, allowing you to set unified style and
            className configurations for all shadcn-plus components.
          </Paragraph>
        </div>

        <div>
          <Heading level={2}>Features</Heading>
          <ul
            style={{
              listStyleType: 'disc',
              listStylePosition: 'inside',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              fontSize: '14px',
              color: '#6b7280',
            }}
          >
            <li>Global theme configuration</li>
            <li>Component-level style customization</li>
            <li>Support for style and className configuration</li>
            <li>Automatic style merging</li>
            <li>TypeScript type support</li>
          </ul>
        </div>

        <div>
          <Heading level={2}>Basic Usage</Heading>
          <BasicThemeProviderExample />
        </div>

        <div>
          <Heading level={2}>Custom Themes</Heading>
          <CustomThemeExample />
        </div>

        <div>
          <Heading level={2}>API</Heading>
          <PropTable data={ThemeProviderProps} />

          <Heading level={2}>Theme Configuration Structure</Heading>
          <Paragraph>
            The structure of the theme configuration object is as follows:
          </Paragraph>
          <pre
            style={{
              backgroundColor: '#f1f5f9',
              padding: '16px',
              borderRadius: '6px',
              fontSize: '14px',
              overflowX: 'auto',
            }}
          >
            <code>{`{
  Button: {
    style: { backgroundColor: '#1890ff' },
    className: 'custom-button'
  },
  Input: {
    style: { borderColor: '#d9d9d9' },
    className: 'custom-input'
  },
  // ... other component configurations
}`}</code>
          </pre>
        </div>

        <div>
          <Heading level={2}>Usage Notes</Heading>
          <ul
            style={{
              listStyleType: 'disc',
              listStylePosition: 'inside',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              fontSize: '14px',
              color: '#6b7280',
            }}
          >
            <li>
              ThemeProvider should be flexWrapped around the root component of
              your application
            </li>
            <li>
              Component's own style and className will override theme
              configuration
            </li>
            <li>
              If ThemeProvider is not used, components will use default styles
            </li>
            <li>
              Theme configuration supports nesting, allowing different styles
              for different components
            </li>
          </ul>
        </div>
      </Flex>
    </Page>
  );
};
