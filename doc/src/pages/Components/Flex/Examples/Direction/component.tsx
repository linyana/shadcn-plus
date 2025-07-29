import { Button, Flex, Card } from 'shadcn-plus';

export const DirectionFlexComponent = () => {
  return (
    <Flex flexDirection="column" gap="16px">
      {/* Row Direction */}
      <Card style={{ padding: '16px' }}>
        <h4 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: '600' }}>Row Direction</h4>
        <Flex gap="8px" style={{ backgroundColor: '#f3f4f6', padding: '12px', borderRadius: '4px' }}>
          <Button size="sm">Item 1</Button>
          <Button size="sm">Item 2</Button>
          <Button size="sm">Item 3</Button>
        </Flex>
      </Card>

      {/* Column Direction */}
      <Card style={{ padding: '16px' }}>
        <h4 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: '600' }}>Column Direction</h4>
        <Flex flexDirection="column" gap="8px" style={{ backgroundColor: '#f3f4f6', padding: '12px', borderRadius: '4px', width: '200px' }}>
          <Button size="sm">Item 1</Button>
          <Button size="sm">Item 2</Button>
          <Button size="sm">Item 3</Button>
        </Flex>
      </Card>

      {/* Wrap */}
      <Card style={{ padding: '16px' }}>
        <h4 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: '600' }}>Flex Wrap</h4>
        <Flex flexWrap="wrap" gap="8px" style={{ backgroundColor: '#f3f4f6', padding: '12px', borderRadius: '4px', width: '300px' }}>
          <Button size="sm">Button 1</Button>
          <Button size="sm">Button 2</Button>
          <Button size="sm">Button 3</Button>
          <Button size="sm">Button 4</Button>
          <Button size="sm">Button 5</Button>
          <Button size="sm">Button 6</Button>
        </Flex>
      </Card>
    </Flex>
  );
};