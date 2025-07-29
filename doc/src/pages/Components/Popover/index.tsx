import { Page } from '@/components';
import { Heading } from 'shadcn-plus';
import { 
  BasicPopoverExample,
  PositioningPopoverExample,
  RichContentPopoverExample
} from './Examples';
import { PopoverProps } from './API';
import { PopoverContentProps } from './API/PopoverContentProps';
import { PropTable } from '../components';

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
      <Heading>API</Heading>
      <Heading level={5}>Props</Heading>
      <PropTable data={PopoverProps} />
      <Heading level={5}>PopoverContentProps</Heading>
      <PropTable data={PopoverContentProps} />
    </Page>
  );
};
