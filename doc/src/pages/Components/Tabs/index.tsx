import { Page } from '@/components';
import { Heading } from 'shadcn-plus';
import { TabsContentProps, TabsListProps, TabsProps, TabsTriggerProps } from './API';
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
      <Heading level={2}>Examples</Heading>
      <BasicTabsExample />
      <ControlledTabsExample />
      <CustomContentTabsExample />

      <Heading level={2}>API</Heading>
      <PropTable title="Tabs Props" data={TabsProps} />
      <PropTable title="TabsTrigger Props" data={TabsTriggerProps} />
      <PropTable title="TabsContent Props" data={TabsContentProps} />
      <PropTable title="TabsList Props" data={TabsListProps} />
    </Page>
  );
};
