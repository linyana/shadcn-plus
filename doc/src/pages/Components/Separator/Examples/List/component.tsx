import { Separator } from 'shadcn-plus';

export const ListSeparatorComponent = () => {
  return (
    <div style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '0', maxWidth: '300px' }}>
      <div style={{ padding: '12px 16px' }}>
        <span style={{ fontSize: '14px', fontWeight: '500' }}>Profile Settings</span>
      </div>
      <Separator />
      <div style={{ padding: '12px 16px' }}>
        <span style={{ fontSize: '14px', fontWeight: '500' }}>Account Settings</span>
      </div>
      <Separator />
      <div style={{ padding: '12px 16px' }}>
        <span style={{ fontSize: '14px', fontWeight: '500' }}>Privacy Settings</span>
      </div>
      <Separator />
      <div style={{ padding: '12px 16px' }}>
        <span style={{ fontSize: '14px', fontWeight: '500' }}>Notification Settings</span>
      </div>
    </div>
  );
};