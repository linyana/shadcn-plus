import { Flex, Input } from 'shadcn-plus';

export const DisabledInputComponent = () => {
  return (
    <Flex flexDirection="column" gap="16px">
      <Input placeholder="Disabled input" disabled label="Disabled" />
      <Input
        placeholder="Disabled with value"
        disabled
        value="This field is disabled"
        label="Disabled with Value"
      />
    </Flex>
  );
};
