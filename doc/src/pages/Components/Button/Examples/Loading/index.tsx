import { Component } from '@/components';
import {
  Button,
  Flex,
  Heading,
} from 'shadcn-plus';

export const LoadingButtonExample = () => {
  return (
    <>
      <Heading level={5}>Loading</Heading>
      <Component
        previewContent={
          <Flex gap="8px">
            <Button loading>Button</Button>
            <Button variant="secondary" loading>
              Button
            </Button>
            <Button variant="outline" loading>
              Button
            </Button>
            <Button variant="ghost" loading>
              Button
            </Button>
            <Button variant="link" loading>
              Button
            </Button>
            <Button variant="destructive" loading>
              Button
            </Button>
          </Flex>
        }
        codeContent={`import { Button, Flex } from "shadcn-plus";

<Flex gap="8px">
  <Button loading>Button</Button>
  <Button variant="secondary" loading>
    Button
  </Button>
  <Button variant="outline" loading>
    Button
  </Button>
  <Button variant="ghost" loading>
    Button
  </Button>
  <Button variant="link" loading>
    Button
  </Button>
  <Button variant="destructive" loading>
    Button
  </Button>
</Flex>`}
      />
    </>
  );
};
