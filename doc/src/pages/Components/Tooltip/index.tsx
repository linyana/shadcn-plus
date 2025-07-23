import { Page } from '@/components';
import { Heading } from 'shadcn-plus';
import { BasicTooltipExample } from './Examples';
import { TooltipProps } from './API';
import { TooltipContentProps } from './API/TooltipContentProps';
import { PropTable } from '../components';

export const TooltipPage = () => {
  return (
    <Page
      title="Tooltip"
      description="Displays informative text when users hover over, focus on, or tap an element. Highly customizable and accessible."
    >
      <Heading>Examples</Heading>
      <BasicTooltipExample />
      <Heading>API</Heading>
      <Heading level={5}>Props</Heading>
      <PropTable data={TooltipProps} />
      <Heading level={5}>TooltipContentProps</Heading>
      <PropTable data={TooltipContentProps} />
    </Page>
  );
};
