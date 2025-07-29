import { CodeBlock } from '@/components';
import { SpacingFlexComponent } from './component';

const code = `import { Flex, Card } from 'shadcn-plus';

export const SpacingFlexComponent = () => {
  return (
    <Flex flexDirection="column" gap="24px">
      {/* Gap - 统一间距 */}
      <Card style={{ padding: '16px' }}>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: '600' }}>Gap (统一间距)</h4>
        <Flex gap="16px" flexWrap="wrap">
          <div style={{ width: '80px', height: '60px', backgroundColor: '#3b82f6', borderRadius: '4px' }} />
          <div style={{ width: '80px', height: '60px', backgroundColor: '#10b981', borderRadius: '4px' }} />
          <div style={{ width: '80px', height: '60px', backgroundColor: '#f59e0b', borderRadius: '4px' }} />
          <div style={{ width: '80px', height: '60px', backgroundColor: '#ef4444', borderRadius: '4px' }} />
        </Flex>
      </Card>

      {/* Row Gap - 行间距 */}
      <Card style={{ padding: '16px' }}>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: '600' }}>Row Gap (行间距)</h4>
        <Flex rowGap="20px" columnGap="8px" flexWrap="wrap" style={{ width: '200px' }}>
          <div style={{ width: '80px', height: '40px', backgroundColor: '#8b5cf6', borderRadius: '4px' }} />
          <div style={{ width: '80px', height: '40px', backgroundColor: '#06b6d4', borderRadius: '4px' }} />
          <div style={{ width: '80px', height: '40px', backgroundColor: '#84cc16', borderRadius: '4px' }} />
          <div style={{ width: '80px', height: '40px', backgroundColor: '#f97316', borderRadius: '4px' }} />
        </Flex>
      </Card>

      {/* Column Gap - 列间距 */}
      <Card style={{ padding: '16px' }}>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: '600' }}>Column Gap (列间距)</h4>
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
    <CodeBlock
      preview={<SpacingFlexComponent />}
      code={code}
      title="间距控制"
      description="使用 gap、rowGap 和 columnGap 属性精确控制 Flex 容器中元素的间距。"
    />
  );
};