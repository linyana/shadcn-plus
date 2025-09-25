import { Heading } from 'shadcn-plus';
import {
  DialogProps
} from './API';
import { Page } from '@/components';
import { PropTable } from '../components';
import { BasicDialogExample, FormDialogExample } from './Example';
import { DialogTheme } from './Theme';

export const DialogPage = () => {
  return (
    <Page title="Dialog" description="A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.">
      <Heading level={2}>Examples</Heading>
      <BasicDialogExample />
      <FormDialogExample />
      <DialogTheme />
      <Heading level={2}>API</Heading>
      <PropTable title="Dialog Props" data={DialogProps} />
    </Page>
  );
};
