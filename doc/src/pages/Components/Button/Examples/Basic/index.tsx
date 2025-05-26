import { Component } from "@/components";
import { Button, Flex, Heading } from "shadcn-plus";

export const BasicButtonExample = () => {
  return (
    <>
      <Heading level={5}>Basic</Heading>
      <Component
        previewContent={
          <Flex gap="8px">
            <Button>Button</Button>
            <Button variant="secondary">
              Button
            </Button>
            <Button variant="outline">
              Button
            </Button>
            <Button variant="ghost">
              Button
            </Button>
            <Button variant="link">Button</Button>
            <Button variant="destructive">
              Button
            </Button>
          </Flex>
        }
        codeContent={`import { Button, Flex } from "shadcn-plus";

<Flex gap="8px">
  <Button>Button</Button>
  <Button variant="secondary">
    Button
  </Button>
  <Button variant="outline">
    Button
  </Button>
  <Button variant="ghost">
    Button
  </Button>
  <Button variant="link">Button</Button>
  <Button variant="destructive">
    Button
  </Button>
</Flex>`}
      />
    </>
  );
};
