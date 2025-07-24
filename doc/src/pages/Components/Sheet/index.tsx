import { Page } from '@/components';
import { Heading } from 'shadcn-plus';
import { SheetProps } from './API';
import { BasicSheetExample, SideSheetExample, FormSheetExample } from './Examples';
import { PropTable } from '../components';

export const SheetPage = () => {
  return (
    <Page
      title="Sheet"
      description="Extends the Dialog component to display content that complements the main content of the screen. Can slide in from any side of the screen."
    >
      <Heading>Examples</Heading>
      <BasicSheetExample />
      <SideSheetExample />
      <FormSheetExample />
      <Heading>API</Heading>
      <Heading level={5}>Props</Heading>
      <PropTable data={SheetProps} />
    </Page>
  );
};