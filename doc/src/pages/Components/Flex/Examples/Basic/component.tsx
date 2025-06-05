import { Button, Flex } from 'shadcn-plus';

export const BasicFlexComponent = () => {
  return (
    <>
      <Flex
        justifyContent="space-between"
        width="50%"
        style={{
          backgroundColor: '#f3f4f6',
        }}
      >
        <Button variant="outline">Cancel</Button>
        <Button>Confirm</Button>
      </Flex>
    </>
  );
};
