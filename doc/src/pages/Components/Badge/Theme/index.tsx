import { StyledCodeBlock } from '@/components';
import { Heading } from 'shadcn-plus';

const codeTemplate = `
const themeConfig = {
  Badge: {
    style: {}, //COMMENT: React.CSSProperties
    className: '', //COMMENT: string
  },
};
`;

export const BadgeTheme = () => {
  return (
    <>
      <Heading level={2}>Theme Configuration</Heading>
      <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '16px' }}>
        The Badge component supports comprehensive theme customization through
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
          <strong>Badge styles</strong> - Overall badge appearance
        </li>
      </ul>
      <StyledCodeBlock replaceComment>{codeTemplate}</StyledCodeBlock>
    </>
  );
};
