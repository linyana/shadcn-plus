import React, { useState } from "react";
import { Highlight, Language, themes } from "prism-react-renderer";
import { Button, Card, Flex } from "shadcn-plus";
import { Copy as CopyIcon, Check as CheckIcon } from "shadcn-plus/icons";

export interface CodeBlockProps {
  code: string;
  language?: Language;
  className?: string;
  filename?: string;
  icon?: React.ReactNode;
  showCopyButton?: boolean;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = "tsx",
  className,
  filename = "code.tsx",
  icon,
  showCopyButton = true,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <Card className={className}
      style={{
        padding: 0,
      }}
      headerProps={{
        style: {
          padding: 0,
          backgroundColor: '#F5F5F5'
        }
      }}
      contentProps={{
        style: {
          padding: 0,
        }
      }}
      header={(
        <Flex justifyContent="space-between" alignItems="center" style={{
          padding: '8px 16px',
        }}>
          <div>
            {icon}
            <span>{filename}</span>
          </div>
          {showCopyButton && (
            <Button
              size="sm"
              variant="ghost"
              onClick={handleCopy}
            >
              {copied ? <CheckIcon size={16} /> : <CopyIcon size={16} />}
            </Button>
          )}
        </Flex>
        )}
      >
      <Highlight theme={themes.github} code={code} language={language}>
        {({ className: highlightClassName, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={highlightClassName} style={{
            padding: 16,
            ...style,
          }}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </Card>
  );
};
