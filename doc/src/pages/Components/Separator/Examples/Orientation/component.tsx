import { Separator, Flex } from 'shadcn-plus';

export const OrientationSeparatorComponent = () => {
  return (
    <Flex flexDirection="column" gap="32px">
      {/* Horizontal separator */}
      <div>
        <h4 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>Horizontal (Default)</h4>
        <div>
          <div style={{ padding: '16px 0' }}>
            <p style={{ margin: '0', color: '#6b7280', fontSize: '14px' }}>Content above</p>
          </div>
          <Separator />
          <div style={{ padding: '16px 0' }}>
            <p style={{ margin: '0', color: '#6b7280', fontSize: '14px' }}>Content below</p>
          </div>
        </div>
      </div>

      {/* Vertical separator */}
      <div>
        <h4 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>Vertical</h4>
        <Flex alignItems="center" gap="16px" style={{ height: '40px' }}>
          <span style={{ color: '#6b7280', fontSize: '14px' }}>Left content</span>
          <Separator orientation="vertical" />
          <span style={{ color: '#6b7280', fontSize: '14px' }}>Right content</span>
        </Flex>
      </div>
    </Flex>
  );
};