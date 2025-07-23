import { Tooltip } from 'shadcn-plus';
import { Button } from 'shadcn-plus';

export const BasicTooltipComponent = () => {
  return (
    <Tooltip trigger={<Button>Hover me</Button>}>Tooltip content here</Tooltip>
  );
};
