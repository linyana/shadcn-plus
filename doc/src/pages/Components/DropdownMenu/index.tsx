import { Page } from '@/components';
import { Heading, Paragraph } from 'shadcn-plus';
import {
  BasicDropdownMenuExample,
  CheckboxDropdownMenuExample,
  RadioDropdownMenuExample,
} from './Examples';
import {
  DropdownMenuProps,
  IDropdownMenuCheckboxItemTypeProps,
  IDropdownMenuCustomItemTypeProps,
  IDropdownMenuDefaultItemTypeProps,
  IDropdownMenuGroupItemTypeProps,
  IDropdownMenuRadioItemTypeProps,
} from './API';
import { Link, PropTable } from '../components';
import { DropdownMenuTheme } from './Theme';

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
      <DropdownMenuTheme />
      <Heading>API</Heading>
      <PropTable title="Props" data={DropdownMenuProps} />
      <Heading level={5}>IDropdownMenuItemType</Heading>
      <Paragraph
        style={{
          marginBottom: 32,
        }}
      >
        {'IDropdownMenuTtem: '}
        <Link>IDropdownMenuDefaultItemType</Link> {' | '}
        <Link>IDropdownMenuCustomItemType</Link> {' | '}
        <Link>IDropdownMenuCheckboxItemType</Link> {' | '}
        <Link>IDropdownMenuRadioItemType</Link> {' | '}
        <Link>IDropdownMenuGroupItemType</Link>
      </Paragraph>
      <PropTable
        title="IDropdownMenuDefaultItemType"
        data={IDropdownMenuDefaultItemTypeProps}
      />
      <PropTable
        title="IDropdownMenuGroupItemType"
        data={IDropdownMenuGroupItemTypeProps}
      />
      <PropTable
        title="IDropdownMenuCustomItemType"
        data={IDropdownMenuCustomItemTypeProps}
      />
      <PropTable
        title="IDropdownMenuCheckboxItemType"
        data={IDropdownMenuCheckboxItemTypeProps}
      />
      <PropTable
        title="IDropdownMenuRadioItemType"
        data={IDropdownMenuRadioItemTypeProps}
      />
    </Page>
  );
};
