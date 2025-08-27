import React from 'react';

interface StyledCodeBlockProps {
  children: React.ReactNode;
  replaceComment?: boolean;
}

export const Comment: React.FC<{
  children: React.ReactNode;
  style?: React.CSSProperties;
}> = ({ children, style = { color: '#9ca3af', fontSize: '12px' } }) => (
  <span style={style}>{children}</span>
);

export const renderCodeWithComments = (code: string) => {
  return code.split(/(\/\/COMMENT:[^\n]+)/).map((part, i) => {
    if (part.startsWith('//COMMENT:')) {
      const key = part.replace('//COMMENT:', '').trim();
      return <Comment key={i}>{`//${key}`}</Comment>;
    }
    return part;
  });
};

export const StyledCodeBlock: React.FC<StyledCodeBlockProps> = ({
  children,
  replaceComment = false,
}) => {
  const content =
    typeof children === 'string' && replaceComment
      ? renderCodeWithComments(children)
      : children;

  return (
    <pre
      style={{
        backgroundColor: '#f1f5f9',
        padding: '16px',
        borderRadius: '6px',
        fontSize: '14px',
        overflowX: 'auto',
        marginBottom: '24px',
        lineHeight: '1.6',
      }}
    >
      <code>{content}</code>
    </pre>
  );
};
