import { StyledCodeBlock } from '@/components';
import { Heading } from 'shadcn-plus';

const codeTemplate = `
const themeConfig = {
  Sheet: {
    style: {}, //COMMENT: React.CSSProperties
    className: '', //COMMENT: string
    Trigger: {
      style: {}, //COMMENT: React.CSSProperties
      className: '', //COMMENT: string
    },
    Content: {
      style: {}, //COMMENT: React.CSSProperties
      className: '', //COMMENT: string
      Header: {
        style: {}, //COMMENT: React.CSSProperties
        className: '', //COMMENT: string
        Title: {
          style: {}, //COMMENT: React.CSSProperties
          className: '', //COMMENT: string
        },
        Description: {
          style: {}, //COMMENT: React.CSSProperties
          className: '', //COMMENT: string
        },
      },
    },
  },
};
`;

export const SheetTheme = () => {
  return (
    <>
      <Heading level={2}>Theme Configuration</Heading>
      <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '16px' }}>
        The Sheet component supports comprehensive theme customization through
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
          <strong>Sheet styles</strong> - Overall sheet appearance
        </li>
        <li>
          <strong>Trigger styles</strong> - Sheet trigger section
        </li>
        <li>
          <strong>Content styles</strong> - Sheet content section
        </li>
        <li>
          <strong>Content Header styles</strong> - Sheet header section
        </li>
        <li>
          <strong>Content Header Title styles</strong> - Sheet header title section
        </li>
        <li>
          <strong>Content Header Description styles</strong> - Sheet header description
          section
        </li>
      </ul>
      <StyledCodeBlock replaceComment>{codeTemplate}</StyledCodeBlock>
    </>
  );
};
