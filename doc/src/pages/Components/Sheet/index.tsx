import { Page } from '@/components';
import { Heading } from 'shadcn-plus';
import { SheetProps } from './API';
import {
  BasicSheetExample,
  SideSheetExample,
  FormSheetExample,
} from './Examples';
import { PropTable } from '../components';
import {
  SheetContentProps,
  SheetDescriptionProps,
  SheetHeaderProps,
  SheetTitleProps,
  SheetTriggerProps,
} from './API';
import { SheetTheme } from './Theme';

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

      <SheetTheme />

      <Heading>API</Heading>
      <PropTable title="Sheet Props" data={SheetProps} />
      <PropTable title="Trigger Props" data={SheetTriggerProps} />
      <PropTable title="Content Props" data={SheetContentProps} />
      <PropTable title="Header Props" data={SheetHeaderProps} />
      <PropTable title="Title Props" data={SheetTitleProps} />
      <PropTable title="Description Props" data={SheetDescriptionProps} />
    </Page>
  );
};
