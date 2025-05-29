import { Page } from '@/components';
import { Heading } from 'shadcn-plus';
import { BasicButtonExample } from './Examples';
import { FlexProps } from './API';
import { PropTable } from '../components';

export const FlexPage = () => {
  return (
    <Page
      title="Flex"
      description="A flex layout container for alignment."
    >
      <Heading>Examples</Heading>
      <BasicButtonExample />
      <Heading>API</Heading>
      <Heading level={5}>Props</Heading>
      <PropTable data={FlexProps} />
    </Page>
  );
};
