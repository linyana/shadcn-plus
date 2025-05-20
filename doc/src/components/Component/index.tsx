import { Card, Flex, Tabs } from "shadcn-plus";
import { useState } from "react";
import { CodeBlock, Transition } from "@/components";

type IPropsType = {
  previewContent: React.ReactNode;
  codeContent: string;
}

export const Component = ({ 
  previewContent,
  codeContent,
}: IPropsType) => {
  const [activeKey, setActiveKey] = useState("preview");

  return (
    <div style={{
      maxWidth: 800,
    }}>
      <Tabs
        defaultValue="preview"
        onValueChange={(key) => setActiveKey(key)}
        items={[
          {
            key: "preview",
            label: "Preview",
            content: (
              <Transition tabKey={activeKey}>
                <Card>
                  <Flex justifyContent="center" alignItems="center" style={{
                  minHeight: 300,
                }}>
                    {previewContent}
                  </Flex>
                </Card>
              </Transition>
            ),
          },
          {
            key: "code",
            label: "Code",
            content: (
              <Transition tabKey={activeKey}>
                <CodeBlock code={codeContent}></CodeBlock>
              </Transition>
            ),
          },
        ]}
      />
    </div>
  );
};
