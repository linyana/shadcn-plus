import { Page } from '@/components';
import { Heading } from 'shadcn-plus';
import { BasicPopoverExample } from './Examples';
import { PopoverProps } from './API';
import { PopoverContentProps } from './API/PopoverContentProps';
import { PropTable } from '../components';

export const PopoverPage = () => {
  return (
    <Page
      title="Popover"
      description="Displays rich content in a portal, triggered by a button or custom element. Useful for tooltips, dropdowns, and more. Highly customizable."
    >
      <Heading>Examples</Heading>
      <BasicPopoverExample />
      <Heading>API</Heading>
      <Heading level={5}>Props</Heading>
      <PropTable data={PopoverProps} />
      <Heading level={5}>PopoverContentProps</Heading>
      <PropTable data={PopoverContentProps} />
    </Page>
  );
};
