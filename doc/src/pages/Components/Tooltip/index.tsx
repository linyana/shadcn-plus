import { Page } from '@/components';
import { Heading } from 'shadcn-plus';
import { BasicTooltipExample } from './Examples';
import { TooltipProps, TooltipTriggerProps } from './API';
import { TooltipContentProps } from './API/TooltipContentProps';
import { PropTable } from '../components';
import { TooltipTheme } from './Theme';

export const TooltipPage = () => {
  return (
    <Page
      title="Tooltip"
      description="Displays informative text when users hover over, focus on, or tap an element. Highly customizable and accessible."
    >
      <Heading level={2}>Examples</Heading>
      <BasicTooltipExample />

      <TooltipTheme />

      <Heading level={2}>API</Heading>
      <PropTable title="Tooltip Props" data={TooltipProps} />
      <PropTable title="Trigger Props" data={TooltipTriggerProps} />
      <PropTable title="Content Props" data={TooltipContentProps} />
    </Page>
  );
};
