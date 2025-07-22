import { Flex, Input } from 'shadcn-plus';

export const StatusInputComponent = () => {
  return (
    <Flex flexDirection="column" gap="16px">
      <Flex gap="16px">
        <Input placeholder="Name" />
        <Input placeholder="Name" message="normal" />
      </Flex>
      <Flex gap="16px">
        <Input placeholder="Name" status="error" />
        <Input placeholder="Name" status="error" message="error" />
      </Flex>
      <Flex gap="16px">
        <Input placeholder="Name" status="warning" />
        <Input placeholder="Name" status="warning" message="warning" />
      </Flex>
    </Flex>
  );
};
