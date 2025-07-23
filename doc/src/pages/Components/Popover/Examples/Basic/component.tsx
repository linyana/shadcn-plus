import { Popover } from 'shadcn-plus';
import { Button } from 'shadcn-plus';

export const BasicPopoverComponent = () => {
  return (
    <Popover trigger={<Button>Open Popover</Button>}>
      This is the popover content.
    </Popover>
  );
};
