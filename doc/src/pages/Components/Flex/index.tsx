import { Page } from '@/components';
import { Heading } from 'shadcn-plus';
import { 
  BasicFlexExample, 
  AlignmentFlexExample, 
  DirectionFlexExample, 
  LayoutFlexExample,
  SpacingFlexExample 
} from './Examples';
import { FlexProps } from './API';
import { PropTable } from '../components';

export const FlexPage = () => {
  return (
    <Page
      title="Flex"
      description="A powerful and flexible layout container component that provides easy-to-use flexbox functionality with comprehensive alignment, direction, and spacing options."
    >
      <Heading>Examples</Heading>
      <BasicFlexExample />
      <AlignmentFlexExample />
      <DirectionFlexExample />
      <SpacingFlexExample />
      <LayoutFlexExample />
      
      <Heading>API</Heading>
      <Heading level={5}>Props</Heading>
      <PropTable data={FlexProps} />
    </Page>
  );
};
