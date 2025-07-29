import { Popover, Button } from 'shadcn-plus';

export const BasicPopoverComponent = () => {
  return (
    <Popover trigger={<Button>Open Popover</Button>}>
      <h3 style={{ fontWeight: '600', fontSize: '18px', marginBottom: '8px' }}>
        Popover Title
      </h3>
      <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '16px' }}>
        This is a basic popover example.
      </p>
      <p style={{ marginBottom: '16px' }}>
        This popover demonstrates how to create beautiful, structured content
        within popovers.
      </p>
      <Button size="sm" variant="outline">
        Close
      </Button>
    </Popover>
  );
};
