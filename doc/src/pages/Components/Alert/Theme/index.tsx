import { StyledCodeBlock, renderCodeWithComments } from '@/components';
import { Heading } from 'shadcn-plus';

const codeTemplate = `
const themeConfig = {
  Alert: {
    style: {}, //COMMENT: React.CSSProperties
    className: '', //COMMENT: string
    Icon: {
      style: {}, //COMMENT: React.CSSProperties
      className: '', //COMMENT: string
    },
    Header: {
      style: {}, //COMMENT: React.CSSProperties
      className: '', //COMMENT: string
    },
    Description: {
      style: {}, //COMMENT: React.CSSProperties
      className: '', //COMMENT: string
    },
  },
};
`;

export const AlertTheme = () => {
  return (
    <>
      <Heading level={2}>Theme Configuration</Heading>
      <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '16px' }}>
        The Alert component supports comprehensive theme customization
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
          <strong>Alert styles</strong> - Overall alert appearance
        </li>
        <li>
          <strong>Icon styles</strong> - Icon styling
        </li>
        <li>
          <strong>Header styles</strong> - Header styling
        </li>
        <li>
          <strong>Description styles</strong> - Cescription area styling
        </li>
      </ul>
      <StyledCodeBlock replaceComment>{codeTemplate}</StyledCodeBlock>
    </>
  );
};
