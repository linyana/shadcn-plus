import { Page } from '@/components';
import { Heading } from 'shadcn-plus';
import { CollapsibleProps } from './API';
import {
  BasicCollapsibleExample,
  ControlledCollapsibleExample,
  CustomTriggerCollapsibleExample,
} from './Examples';
import { PropTable } from '../components';
import { CollapsibleTheme } from './Theme';

export const CollapsiblePage = () => {
  return (
    <Page
      title="Collapsible"
      description="An interactive component which expands/collapses a panel. Provides smooth animations and flexible trigger customization."
    >
      <Heading>Examples</Heading>
      <BasicCollapsibleExample />
      <ControlledCollapsibleExample />
      <CustomTriggerCollapsibleExample />
      
      <CollapsibleTheme />

      <Heading>API</Heading>
      <Heading level={5}>Props</Heading>
      <PropTable data={CollapsibleProps} />
    </Page>
  );
};