import { StyledCodeBlock } from '@/components';
import { Heading } from 'shadcn-plus';

const codeTemplate = `
const themeConfig = {
  Accordion: {
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

export const AccordionTheme = () => {
  return (
    <>
      <Heading level={2}>Theme Configuration</Heading>
      <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '16px' }}>
        The Accordion component supports comprehensive theme customization
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
          <strong>Container styles</strong> - Overall accordion appearance
        </li>
        <li>
          <strong>Trigger styles</strong> - Clickable header styling
        </li>
        <li>
          <strong>Content styles</strong> - Collapsible content area styling
        </li>
      </ul>
      <StyledCodeBlock replaceComment>{codeTemplate}</StyledCodeBlock>
    </>
  );
};
