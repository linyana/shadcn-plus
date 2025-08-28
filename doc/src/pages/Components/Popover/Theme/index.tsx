import { StyledCodeBlock } from '@/components';
import { Heading } from 'shadcn-plus';

const codeTemplate = `
const themeConfig = {
  Popover: {
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

export const PopoverTheme = () => {
  return (
    <>
      <Heading level={2}>Theme Configuration</Heading>
      <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '16px' }}>
        The Popover component supports comprehensive theme customization through
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
          <strong>Trigger styles</strong> - Popover trigger section
        </li>
        <li>
          <strong>Content styles</strong> - Popover content section
        </li>
      </ul>
      <StyledCodeBlock replaceComment>{codeTemplate}</StyledCodeBlock>
    </>
  );
};
