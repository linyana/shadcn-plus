import { StyledCodeBlock } from '@/components';
import { Heading } from 'shadcn-plus';

const codeTemplate = `
const themeConfig = {
  HoverCard: {
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

export const HoverCardTheme = () => {
  return (
    <>
      <Heading level={2}>Theme Configuration</Heading>
      <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '16px' }}>
        The Hover Card component supports comprehensive theme customization
        through ThemeProvider. You can configure:
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
          <strong>Trigger styles</strong> - Hover card trigger section
        </li>
        <li>
          <strong>Content styles</strong> - Hover card content section
        </li>
      </ul>
      <StyledCodeBlock replaceComment>{codeTemplate}</StyledCodeBlock>
    </>
  );
};
