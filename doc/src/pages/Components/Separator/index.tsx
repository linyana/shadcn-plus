import { Page } from '@/components';
import { Heading } from 'shadcn-plus';
import { SeparatorProps } from './API';
import { 
  BasicSeparatorExample,
  OrientationSeparatorExample,
  ListSeparatorExample 
} from './Examples';
import { PropTable } from '../components';
import { SeparatorTheme } from './Theme';

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

      <SeparatorTheme />

      <Heading>API</Heading>
      <PropTable title="Separator Props" data={SeparatorProps} />
    </Page>
  );
};