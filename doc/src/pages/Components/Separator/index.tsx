import { Page } from '@/components';
import { Heading } from 'shadcn-plus';
import { SeparatorProps } from './API';
import { 
  BasicSeparatorExample,
  OrientationSeparatorExample,
  ListSeparatorExample 
} from './Examples';
import { PropTable } from '../components';

export const SeparatorPage = () => {
  return (
    <Page
      title="Separator"
      description="Visually or semantically separates content."
    >
      <Heading>Examples</Heading>
      <BasicSeparatorExample />
      <OrientationSeparatorExample />
      <ListSeparatorExample />
      <Heading>API</Heading>
      <Heading level={5}>Props</Heading>
      <PropTable data={SeparatorProps} />
    </Page>
  );
};