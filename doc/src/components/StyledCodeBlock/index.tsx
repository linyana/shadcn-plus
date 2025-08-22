import React from 'react';

interface StyledCodeBlockProps {
  children: React.ReactNode;
  commentStyle?: React.CSSProperties;
}

export const Comment: React.FC<{ children: React.ReactNode; style?: React.CSSProperties }> = ({ 
  children, 
  style = { color: '#9ca3af', fontSize: '12px' } 
}) => (
  <span style={style}>{children}</span>
);

export const StyledCodeBlock: React.FC<StyledCodeBlockProps> = ({ children }) => {
  return (
    <pre
      style={{
        backgroundColor: '#f1f5f9',
        padding: '16px',
        borderRadius: '6px',
        fontSize: '14px',
        overflowX: 'auto',
        marginBottom: '24px',
      }}
    >
      <code>
        {children}
      </code>
    </pre>
  );
};

export default StyledCodeBlock;