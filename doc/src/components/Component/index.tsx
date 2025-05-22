import { Card, Flex, Tabs } from "shadcn-plus";
import { CodeBlock } from "@/components";

type IPropsType = {
  previewContent: React.ReactNode;
  codeContent: string;
}

export const Component = ({ 
  previewContent,
  codeContent,
}: IPropsType) => {

  return (
    <div style={{
      maxWidth: 800,
    }}>
      <Tabs
        items={[
          {
            key: "preview",
            label: "Preview",
            content: (
              <Card style={{
                margin: '8px 0'
              }}>
                <Flex justifyContent="center" alignItems="center" style={{
                  minHeight: 300,
                }}>
                  {previewContent}
                </Flex>
              </Card>
            ),
          },
          {
            key: "code",
            label: "Code",
            content: (
              <div style={{
                margin: '8px 0'
              }}>
                <CodeBlock code={codeContent}></CodeBlock>
              </div>
            ),
          },
        ]}
        />
    </div>
  );
};
