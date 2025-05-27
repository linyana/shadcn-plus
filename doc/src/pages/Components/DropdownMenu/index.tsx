import { Page } from '@/components';
import { Heading } from 'shadcn-plus';
import { BasicDropdownMenuExample } from './Examples';

export const DropdownMenuPage = () => {
  return (
    <Page
      title="Dropdoen Menu"
      description="Displays a menu to the user — such as a set of actions or functions — triggered by a button."
    >
      <Heading>Examples</Heading>
      <BasicDropdownMenuExample />
      <Heading>API</Heading>
      <Heading level={5}>Props</Heading>
    </Page>
  );
};
