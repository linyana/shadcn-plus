import { Heading } from 'shadcn-plus';
import {
  AlertDescriptionProps,
  AlertHeaderProps,
  AlertIconProps,
  AlertProps,
} from './API';
import {
  BasicAlertExample,
  VariantsAlertExample,
  CustomAlertExample,
} from './Examples';
import { Page } from '@/components';
import { PropTable } from '../components';
import { AlertTheme } from './Theme';

export const AlertPage = () => {
  return (
    <Page title="Alert" description="Displays a callout for user attention.">
      <Heading level={2}>Examples</Heading>
      <BasicAlertExample />
      <VariantsAlertExample />
      <CustomAlertExample />
      <AlertTheme />
      <Heading level={2}>API</Heading>
      <PropTable title="AlertProps" data={AlertProps} />
      <PropTable title="Icon Props" data={AlertIconProps} />
      <PropTable title="Header Props" data={AlertHeaderProps} />
      <PropTable title="Description Props" data={AlertDescriptionProps} />
    </Page>
  );
};
