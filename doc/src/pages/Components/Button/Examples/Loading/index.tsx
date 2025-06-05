import { Component } from '@/components';
import { Heading } from 'shadcn-plus';
import { LoadingButtonComponent } from './component';

export const LoadingButtonExample = () => {
  return (
    <>
      <Heading level={5}>Loading</Heading>
      <Component
        previewContent={<LoadingButtonComponent />}
        codeContent={`import { Button, Flex } from 'shadcn-plus';

export const LoadingButtonComponent = () => {
  return (
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
  );
};
`}
      />
    </>
  );
};
