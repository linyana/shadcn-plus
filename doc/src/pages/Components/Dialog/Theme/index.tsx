import { StyledCodeBlock } from '@/components';
import { Heading } from 'shadcn-plus';

const codeTemplate = `
const themeConfig = {
  Dialog: {
    Root: {
      style: {}, //COMMENT: React.CSSProperties
      className: '', //COMMENT: string
    },
    Overlay: {
      style: {}, //COMMENT: React.CSSProperties
      className: '', //COMMENT: string
    },
    Content: {
      style: {}, //COMMENT: React.CSSProperties
      className: '', //COMMENT: string
    },
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
    Footer: {
      style: {}, //COMMENT: React.CSSProperties
      className: '', //COMMENT: string
    },
  },
};
`;

export const DialogTheme = () => {
  return (
    <>
      <Heading level={2}>Theme Configuration</Heading>
      <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '16px' }}>
        The Dialog component supports comprehensive theme customization through
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
          <strong>Root styles</strong> - Overall dialog container appearance
        </li>
        <li>
          <strong>Overlay styles</strong> - Background overlay styling
        </li>
        <li>
          <strong>Content styles</strong> - Main dialog content section
        </li>
        <li>
          <strong>Header styles</strong> - Dialog header section
        </li>
        <li>
          <strong>Header Title styles</strong> - Dialog header title element
        </li>
        <li>
          <strong>Header Description styles</strong> - Dialog header description element
        </li>
        <li>
          <strong>Footer styles</strong> - Dialog footer section
        </li>
      </ul>
      <StyledCodeBlock replaceComment>{codeTemplate}</StyledCodeBlock>
    </>
  );
};
