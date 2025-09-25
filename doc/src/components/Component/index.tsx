import { Card, Flex, Heading, Tabs } from 'shadcn-plus';
import { CodeBlock } from '@/components';

type IPropsType = {
  previewContent: React.ReactNode;
  codeContent: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
};

export const Component = ({
  previewContent,
  codeContent,
  title,
  description,
}: IPropsType) => {
  return (
    <div
      style={{
        marginBottom: 16,
      }}
    >
      <Heading level={3}>{title}</Heading>
      <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '16px' }}>
        {description}
      </p>
      <Tabs
        items={[
          {
            key: 'preview',
            label: 'Preview',
            content: (
              <Card
                header={null}
                style={{
                  margin: '8px 0',
                }}
              >
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  style={{
                    minHeight: 300,
                  }}
                >
                  {previewContent}
                </Flex>
              </Card>
            ),
          },
          {
            key: 'code',
            label: 'Code',
            content: (
              <div
                style={{
                  margin: '8px 0',
                }}
              >
                <CodeBlock code={codeContent} />
              </div>
            ),
          },
        ]}
      />
    </div>
  );
};
