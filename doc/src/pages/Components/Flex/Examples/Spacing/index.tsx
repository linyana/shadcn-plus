import { Component } from '@/components';
import { SpacingFlexComponent } from './component';
import { Heading } from 'shadcn-plus';

const code = `import { Flex, Card } from 'shadcn-plus';

export const SpacingFlexComponent = () => {
  return (
    <Flex flexDirection="column" gap="24px">
      {/* Gap - Uniform spacing */}
      <Card style={{ padding: '16px' }}>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: '600' }}>Gap (Uniform spacing)</h4>
        <Flex gap="16px" flexWrap="wrap">
          <div style={{ width: '80px', height: '60px', backgroundColor: '#3b82f6', borderRadius: '4px' }} />
          <div style={{ width: '80px', height: '60px', backgroundColor: '#10b981', borderRadius: '4px' }} />
          <div style={{ width: '80px', height: '60px', backgroundColor: '#f59e0b', borderRadius: '4px' }} />
          <div style={{ width: '80px', height: '60px', backgroundColor: '#ef4444', borderRadius: '4px' }} />
        </Flex>
      </Card>

      {/* Row Gap - Row spacing */}
      <Card style={{ padding: '16px' }}>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: '600' }}>Row Gap (Row spacing)</h4>
        <Flex rowGap="20px" columnGap="8px" flexWrap="wrap" style={{ width: '200px' }}>
          <div style={{ width: '80px', height: '40px', backgroundColor: '#8b5cf6', borderRadius: '4px' }} />
          <div style={{ width: '80px', height: '40px', backgroundColor: '#06b6d4', borderRadius: '4px' }} />
          <div style={{ width: '80px', height: '40px', backgroundColor: '#84cc16', borderRadius: '4px' }} />
          <div style={{ width: '80px', height: '40px', backgroundColor: '#f97316', borderRadius: '4px' }} />
        </Flex>
      </Card>

      {/* Column Gap - Column spacing */}
      <Card style={{ padding: '16px' }}>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: '600' }}>Column Gap (Column spacing)</h4>
        <Flex columnGap="24px">
          <div style={{ width: '60px', height: '80px', backgroundColor: '#ec4899', borderRadius: '4px' }} />
          <div style={{ width: '60px', height: '80px', backgroundColor: '#14b8a6', borderRadius: '4px' }} />
          <div style={{ width: '60px', height: '80px', backgroundColor: '#f59e0b', borderRadius: '4px' }} />
        </Flex>
      </Card>
    </Flex>
  );
};`;

export const SpacingFlexExample = () => {
  return (
    <>
      <Heading level={5}>Spacing Control</Heading>
      <Component previewContent={<SpacingFlexComponent />} codeContent={code} />
    </>
  );
};
