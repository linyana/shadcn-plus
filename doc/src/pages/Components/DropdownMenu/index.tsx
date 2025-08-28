import { Page } from '@/components';
import { Heading, Paragraph } from 'shadcn-plus';
import {
  BasicDropdownMenuExample,
  CheckboxDropdownMenuExample,
  RadioDropdownMenuExample,
} from './Examples';
import {
  DropdownMenuContentProps,
  DropdownMenuProps,
  DropdownMenuTriggerProps,
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
      <Heading level={2}>Examples</Heading>
      <BasicDropdownMenuExample />
      <CheckboxDropdownMenuExample />
      <RadioDropdownMenuExample />

      <DropdownMenuTheme />

      <Heading level={2}>API</Heading>
      <PropTable title="Props" data={DropdownMenuProps} />
      <PropTable
        title="DropdownMenuTriggerProps"
        data={DropdownMenuTriggerProps}
      />
      <PropTable
        title="DropdownMenuContentProps"
        data={DropdownMenuContentProps}
      />

      <Heading level={2}>IDropdownMenuItemType</Heading>
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
