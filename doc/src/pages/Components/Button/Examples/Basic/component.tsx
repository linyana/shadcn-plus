import { Button, Flex } from 'shadcn-plus';

export const BasicButtonComponent = () => {
  return (
    <Flex gap="8px">
      <Button>Button</Button>
      <Button variant="secondary">Button</Button>
      <Button variant="outline">Button</Button>
      <Button variant="ghost">Button</Button>
      <Button variant="link">Button</Button>
      <Button variant="destructive">Button</Button>
    </Flex>
  );
};
