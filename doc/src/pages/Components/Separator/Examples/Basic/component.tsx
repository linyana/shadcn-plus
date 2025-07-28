import { Separator } from 'shadcn-plus';

export const BasicSeparatorComponent = () => {
  return (
    <div>
      <div style={{ padding: '16px 0' }}>
        <p style={{ margin: '0', color: '#6b7280', fontSize: '14px' }}>This is some content above the separator.</p>
      </div>
      <Separator />
      <div style={{ padding: '16px 0' }}>
        <p style={{ margin: '0', color: '#6b7280', fontSize: '14px' }}>This is some content below the separator.</p>
      </div>
    </div>
  );
};