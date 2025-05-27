import { Button, Flex } from 'shadcn-plus';
import { Menu } from 'shadcn-plus/icons';

export const SizeButtonComponent = () => {
  return (
    <Flex gap="8px">
      <Button size="lg">Button</Button>
      <Button>Button</Button>
      <Button size="sm">Button</Button>
      <Button size="icon">
        <Menu />
      </Button>
    </Flex>
  );
};
