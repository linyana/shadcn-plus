import { Flex, Input } from 'shadcn-plus';

export const BasicInputComponent = () => {
  return (
    <Flex flexDirection="column" gap="16px">
      <Input placeholder="Enter your name" />
      <Input placeholder="Enter your email" label="Email" />
      <Input placeholder="Enter password" type="password" label="Password" />
    </Flex>
  );
};
