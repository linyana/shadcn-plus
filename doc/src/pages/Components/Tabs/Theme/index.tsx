import { StyledCodeBlock } from '@/components';
import { Heading } from 'shadcn-plus';

const codeTemplate = `
const themeConfig = {
  Tabs: {
    style: {}, //COMMENT: React.CSSProperties
    className: '', //COMMENT: string
    List: {
      style: {}, //COMMENT: React.CSSProperties
      className: '', //COMMENT: string
    },
    Trigger: {
      style: {}, //COMMENT: React.CSSProperties
      className: '', //COMMENT: string
    },
    Content: {
      style: {}, //COMMENT: React.CSSProperties
      className: '', //COMMENT: string
    },
  },
};
`;

export const TabsTheme = () => {
  return (
    <>
      <Heading level={2}>Theme Configuration</Heading>
      <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '16px' }}>
        The Tabs component supports comprehensive theme customization through
        ThemeProvider. You can configure:
      </p>
      <ul
        style={{
          fontSize: '14px',
          color: '#6b7280',
          marginBottom: '16px',
          paddingLeft: '20px',
        }}
      >
        <li>
          <strong>Tabs container styles</strong> - Overall tabs container appearance
        </li>
        <li>
          <strong>Tabs list styles</strong> - Overall tabs list appearance
        </li>
        <li>
          <strong>Tabs trigger styles</strong> - Overall tabs trigger appearance
        </li>
        <li>
          <strong>Tabs content styles</strong> - Overall tabs content appearance
        </li>
      </ul>
      <StyledCodeBlock replaceComment>{codeTemplate}</StyledCodeBlock>
    </>
  );
};
