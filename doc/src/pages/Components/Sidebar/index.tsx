import { Page } from '@/components';
import { Heading, Paragraph } from 'shadcn-plus';
import {
  BasicSidebarExample,
} from './Examples';
import {
  SidebarProps,
  ISidebarCustomItemTypeProps,
  ISidebarDefaultItemTypeProps,
  ISidebarGroupItemTypeProps,
} from './API';
import { Link, PropTable } from '../components';

export const SidebarPage = () => {
  return (
    <Page
      title="Sidebar"
      description="Displays a vertical navigation panel containing related sections or actions."
    >
      <Heading>Examples</Heading>
      <BasicSidebarExample />
      <Heading>API</Heading>
      <PropTable title="Props" data={SidebarProps} />
      <Heading level={5}>ISidebarItemType</Heading>
      <Paragraph
        style={{
          marginBottom: 32,
        }}
      >
        {'ISidebarTtem: '}
        <Link>ISidebarDefaultItemType</Link> {' | '}
        <Link>ISidebarCustomItemType</Link> {' | '}
        <Link>ISidebarGroupItemType</Link>
      </Paragraph>
      <PropTable
        title="ISidebarDefaultItemType"
        data={ISidebarDefaultItemTypeProps}
      />
      <PropTable
        title="ISidebarGroupItemType"
        data={ISidebarGroupItemTypeProps}
      />
      <PropTable
        title="ISidebarCustomItemType"
        data={ISidebarCustomItemTypeProps}
      />
    </Page>
  );
};
