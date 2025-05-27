import { Page } from '@/components';
import { Heading } from 'shadcn-plus';
import {
  BasicDropdownMenuExample,
  CheckboxDropdownMenuExample,
  RadioDropdownMenuExample,
} from './Examples';
import { DropdownMenuProps } from './API';
import { PropTable } from '../components';

export const DropdownMenuPage = () => {
  return (
    <Page
      title="Dropdown Menu"
      description="Displays a menu to the user — such as a set of actions or functions — triggered by a button."
    >
      <Heading>Examples</Heading>
      <BasicDropdownMenuExample />
      <CheckboxDropdownMenuExample />
      <RadioDropdownMenuExample />
      <Heading>API</Heading>
      <Heading level={5}>Props</Heading>
      <PropTable data={DropdownMenuProps} />
    </Page>
  );
};
