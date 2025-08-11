import { Component } from '@/components';
import { Heading } from 'shadcn-plus';
import { AlignmentFlexComponent } from './component';

export const AlignmentFlexExample = () => {
  return (
    <>
      <Heading level={5}>Alignment</Heading>
      <Component
        previewContent={<AlignmentFlexComponent />}
        codeContent={`import { Button, Flex, Card } from 'shadcn-plus';

export const AlignmentFlexComponent = () => {
  return (
    <Flex flexDirection="column" gap="16px">
      {/* Horizontal Alignment */}
      <Card style={{ padding: '16px' }}>
        <h4 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: '600' }}>Horizontal Alignment</h4>
        <Flex flexDirection="column" gap="12px">
          <Flex justifyContent="flex-start" style={{ backgroundColor: '#f3f4f6', padding: '8px', borderRadius: '4px' }}>
            <Button size="sm">Start</Button>
          </Flex>
          <Flex justifyContent="center" style={{ backgroundColor: '#f3f4f6', padding: '8px', borderRadius: '4px' }}>
            <Button size="sm">Center</Button>
          </Flex>
          <Flex justifyContent="flex-end" style={{ backgroundColor: '#f3f4f6', padding: '8px', borderRadius: '4px' }}>
            <Button size="sm">End</Button>
          </Flex>
          <Flex justifyContent="space-between" style={{ backgroundColor: '#f3f4f6', padding: '8px', borderRadius: '4px' }}>
            <Button size="sm">Left</Button>
            <Button size="sm">Right</Button>
          </Flex>
        </Flex>
      </Card>

      {/* Vertical Alignment */}
      <Card style={{ padding: '16px' }}>
        <h4 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: '600' }}>Vertical Alignment</h4>
        <Flex gap="12px">
          <Flex alignItems="flex-start" style={{ backgroundColor: '#f3f4f6', padding: '8px', borderRadius: '4px', height: '80px', width: '120px' }}>
            <Button size="sm">Top</Button>
          </Flex>
          <Flex alignItems="center" style={{ backgroundColor: '#f3f4f6', padding: '8px', borderRadius: '4px', height: '80px', width: '120px' }}>
            <Button size="sm">Middle</Button>
          </Flex>
          <Flex alignItems="flex-end" style={{ backgroundColor: '#f3f4f6', padding: '8px', borderRadius: '4px', height: '80px', width: '120px' }}>
            <Button size="sm">Bottom</Button>
          </Flex>
        </Flex>
      </Card>
    </Flex>
  );
};
`}
      />
    </>
  );
};
