import { Heading, Text } from 'shadcn-plus';

export const SkeletonProps = () => {
  return (
    <>
      <Heading level={4}>Skeleton Props</Heading>
      <Text>
        The Skeleton component accepts all standard HTML div attributes.
      </Text>
      
      <div style={{ marginTop: '16px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
              <th style={{ textAlign: 'left', padding: '8px', fontWeight: '600' }}>Prop</th>
              <th style={{ textAlign: 'left', padding: '8px', fontWeight: '600' }}>Type</th>
              <th style={{ textAlign: 'left', padding: '8px', fontWeight: '600' }}>Default</th>
              <th style={{ textAlign: 'left', padding: '8px', fontWeight: '600' }}>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #f3f4f6' }}>
              <td style={{ padding: '8px', fontFamily: 'monospace', fontSize: '14px' }}>className</td>
              <td style={{ padding: '8px', fontSize: '14px' }}>string</td>
              <td style={{ padding: '8px', fontSize: '14px' }}>-</td>
              <td style={{ padding: '8px', fontSize: '14px' }}>Additional CSS classes to apply to the skeleton</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #f3f4f6' }}>
              <td style={{ padding: '8px', fontFamily: 'monospace', fontSize: '14px' }}>style</td>
              <td style={{ padding: '8px', fontSize: '14px' }}>React.CSSProperties</td>
              <td style={{ padding: '8px', fontSize: '14px' }}>-</td>
              <td style={{ padding: '8px', fontSize: '14px' }}>Inline styles to apply to the skeleton</td>
            </tr>
            <tr>
              <td style={{ padding: '8px', fontFamily: 'monospace', fontSize: '14px' }}>...props</td>
              <td style={{ padding: '8px', fontSize: '14px' }}>React.HTMLAttributes&lt;HTMLDivElement&gt;</td>
              <td style={{ padding: '8px', fontSize: '14px' }}>-</td>
              <td style={{ padding: '8px', fontSize: '14px' }}>All standard HTML div attributes</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};