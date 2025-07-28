import { Page } from '@/components';
import { PropTable } from '../components';
import { Heading } from 'shadcn-plus';
import {
  BasicHoverCardExample,
  CustomDelayHoverCardExample,
  ControlledHoverCardExample,
} from './Examples';
import { HoverCardProps } from './API';

export const HoverCardPage = () => {
  return (
    <Page>
      <Heading level={1}>Hover Card</Heading>
      <p style={{ fontSize: '16px', color: '#6b7280', marginBottom: '32px' }}>
        A popup that displays rich content when hovering over a trigger element. Perfect for showing user profiles, additional information, or contextual details without navigating away from the current page.
      </p>

      <Heading level={2}>Examples</Heading>
      
      <Heading level={3}>Basic</Heading>
      <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '16px' }}>
        A simple hover card that displays user profile information when hovering over a button.
      </p>
      <BasicHoverCardExample />

      <Heading level={3}>Custom Delay</Heading>
      <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '16px' }}>
        Hover cards with different open and close delays to control the timing of appearance and disappearance.
      </p>
      <CustomDelayHoverCardExample />

      <Heading level={3}>Controlled</Heading>
      <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '16px' }}>
        A hover card with controlled open state that can be programmatically opened and closed.
      </p>
      <ControlledHoverCardExample />

      <Heading level={2}>API</Heading>
      <PropTable data={HoverCardProps} />
    </Page>
  );
};