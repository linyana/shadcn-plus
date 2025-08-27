import { StyledCodeBlock } from '@/components';
import { Heading } from 'shadcn-plus';

const codeTemplate = `
const themeConfig = {
  Card: {
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
    Content: {
      style: {}, //COMMENT: React.CSSProperties
      className: '', //COMMENT: string
    },
    Footer: {
      style: {}, //COMMENT: React.CSSProperties
      className: '', //COMMENT: string
    },
  },
};
`;

export const CardTheme = () => {
  return (
    <>
      <Heading level={2}>Theme Configuration</Heading>
      <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '16px' }}>
        The Card component supports comprehensive theme customization through
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
          <strong>Card styles</strong> - Overall card appearance
        </li>
        <li>
          <strong>Header styles</strong> - Card header section
        </li>
        <li>
          <strong>Header Title styles</strong> - Card header title section
        </li>
        <li>
          <strong>Header Description styles</strong> - Card header description
          section
        </li>
        <li>
          <strong>Content styles</strong> - Card content section
        </li>
        <li>
          <strong>Footer styles</strong> - Card footer section
        </li>
      </ul>
      <StyledCodeBlock replaceComment>{codeTemplate}</StyledCodeBlock>
    </>
  );
};
