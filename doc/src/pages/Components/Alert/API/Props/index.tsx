import { Heading, Text } from 'shadcn-plus';

export const AlertProps = () => {
  return (
    <>
      <Heading level={4}>Alert Props</Heading>
      <Text>
        The Alert component accepts all standard HTML div attributes plus the following props:
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
              <td style={{ padding: '8px', fontFamily: 'monospace', fontSize: '14px' }}>title</td>
              <td style={{ padding: '8px', fontSize: '14px' }}>React.ReactNode</td>
              <td style={{ padding: '8px', fontSize: '14px' }}>-</td>
              <td style={{ padding: '8px', fontSize: '14px' }}>The title content of the alert</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #f3f4f6' }}>
              <td style={{ padding: '8px', fontFamily: 'monospace', fontSize: '14px' }}>description</td>
              <td style={{ padding: '8px', fontSize: '14px' }}>React.ReactNode</td>
              <td style={{ padding: '8px', fontSize: '14px' }}>-</td>
              <td style={{ padding: '8px', fontSize: '14px' }}>The description content of the alert</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #f3f4f6' }}>
              <td style={{ padding: '8px', fontFamily: 'monospace', fontSize: '14px' }}>icon</td>
              <td style={{ padding: '8px', fontSize: '14px' }}>React.ElementType</td>
              <td style={{ padding: '8px', fontSize: '14px' }}>Terminal</td>
              <td style={{ padding: '8px', fontSize: '14px' }}>Icon component to display in the alert</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #f3f4f6' }}>
              <td style={{ padding: '8px', fontFamily: 'monospace', fontSize: '14px' }}>className</td>
              <td style={{ padding: '8px', fontSize: '14px' }}>string</td>
              <td style={{ padding: '8px', fontSize: '14px' }}>-</td>
              <td style={{ padding: '8px', fontSize: '14px' }}>Additional CSS classes to apply to the alert</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #f3f4f6' }}>
              <td style={{ padding: '8px', fontFamily: 'monospace', fontSize: '14px' }}>style</td>
              <td style={{ padding: '8px', fontSize: '14px' }}>React.CSSProperties</td>
              <td style={{ padding: '8px', fontSize: '14px' }}>-</td>
              <td style={{ padding: '8px', fontSize: '14px' }}>Inline styles to apply to the alert</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};