import { Page } from '@/components';
import { PropTable } from '../components';
import { Heading } from 'shadcn-plus';
import {
  BasicHoverCardExample,
  CustomDelayHoverCardExample,
  ControlledHoverCardExample,
} from './Examples';
import { HoverCardProps } from './API';
import { HoverCardTheme } from './Theme';
import { HoverCardContentProps, HoverCardTriggerProps } from './API/Props';

export const HoverCardPage = () => {
  return (
    <Page
      title="Hover Card"
      description="A popup that displays rich content when hovering over a trigger element. Perfect for showing user profiles, additional information, or contextual details without navigating away from the current page."
    >
      <Heading level={2}>Examples</Heading>
      <BasicHoverCardExample />
      <CustomDelayHoverCardExample />
      <ControlledHoverCardExample />

      <HoverCardTheme />

      <Heading level={2}>API</Heading>
      <PropTable title="Hover Card Props" data={HoverCardProps} />
      <PropTable title="Hover Card Trigger Props" data={HoverCardTriggerProps} />
      <PropTable title="Hover Card Content Props" data={HoverCardContentProps} />
    </Page>
  );
};
