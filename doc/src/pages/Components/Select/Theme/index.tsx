import { StyledCodeBlock } from '@/components';
import { Heading } from 'shadcn-plus';

const codeTemplate = `
const themeConfig = {
  Select: {
    Value: {
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

export const SelectTheme = () => {
  return (
    <>
      <Heading level={2}>Theme Configuration</Heading>
      <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '16px' }}>
        The Select component supports comprehensive theme customization through
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
          <strong>Value styles</strong> - Select value section
        </li>
        <li>
          <strong>Trigger styles</strong> - Select trigger section
        </li>
        <li>
          <strong>Content styles</strong> - Select content section
        </li>
      </ul>
      <StyledCodeBlock replaceComment>{codeTemplate}</StyledCodeBlock>
    </>
  );
};
