import { Page } from '@/components';
import { Heading } from 'shadcn-plus';
import { 
  BasicPopoverExample,
  PositioningPopoverExample,
  RichContentPopoverExample
} from './Examples';
import { PopoverContentProps, PopoverProps, PopoverTriggerProps } from './API';
import { PropTable } from '../components';
import { PopoverTheme } from './Theme';

export const PopoverPage = () => {
  return (
    <Page
      title="Popover"
      description="A versatile overlay component that displays rich content in a portal, triggered by any element. Perfect for user menus, forms, tooltips, and interactive content. Features flexible positioning, collision detection, and beautiful Card-based styling."
    >
      <Heading>Examples</Heading>
      <BasicPopoverExample />
      <PositioningPopoverExample />
      <RichContentPopoverExample />

      <PopoverTheme />

      <Heading>API</Heading>
      <PropTable title="Popover Props" data={PopoverProps} />
      <PropTable title="Trigger Props" data={PopoverTriggerProps} />
      <PropTable title="Content Props" data={PopoverContentProps} />
    </Page>
  );
};
