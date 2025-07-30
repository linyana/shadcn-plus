import { Page } from '@/components';
import { Heading } from 'shadcn-plus';
import { TabsProps } from './API';
import {
  BasicTabsExample,
  ControlledTabsExample,
  CustomContentTabsExample,
} from './Examples';
import { PropTable } from '../components';

export const TabsPage = () => {
  return (
    <Page
      title="Tabs"
      description="A set of layered sections of content—known as tab panels—that are displayed one at a time. Built with smooth animations and transitions."
    >
      <Heading>Examples</Heading>
      <BasicTabsExample />
      <ControlledTabsExample />
      <CustomContentTabsExample />
      <Heading>API</Heading>
      <Heading level={5}>Props</Heading>
      <PropTable data={TabsProps} />
    </Page>
  );
};