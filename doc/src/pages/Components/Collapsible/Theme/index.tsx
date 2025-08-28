import { StyledCodeBlock } from '@/components';
import { Heading } from 'shadcn-plus';

const codeTemplate = `
const themeConfig = {
  Collapsible: {
    style: {}, //COMMENT: React.CSSProperties
    className: '', //COMMENT: string
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

export const CollapsibleTheme = () => {
  return (
    <>
      <Heading level={2}>Theme Configuration</Heading>
      <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '16px' }}>
        The Collapsible component supports comprehensive theme customization through
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
          <strong>Collapsible styles</strong> - Overall collapsible appearance
        </li>
        <li>
          <strong>Trigger styles</strong> - Collapsible trigger section
        </li>
        <li>
          <strong>Content styles</strong> - Collapsible content section
        </li>
      </ul>
      <StyledCodeBlock replaceComment>{codeTemplate}</StyledCodeBlock>
    </>
  );
};
