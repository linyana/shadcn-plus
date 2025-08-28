import { Flex, Heading } from 'shadcn-plus';
import { SkeletonProps } from './API';
import {
  BasicSkeletonExample,
  TextSkeletonExample,
  CardSkeletonExample,
} from './Examples';
import { Page } from '@/components';
import { SkeletonTheme } from './Theme';

export const SkeletonPage = () => {
  return (
    <Page
      title="Skeleton"
      description="Use to show a placeholder while content is loading."
    >
      <Heading level={2}>Examples</Heading>
      <BasicSkeletonExample />
      <TextSkeletonExample />
      <CardSkeletonExample />

      <SkeletonTheme />

      <Heading level={2}>API</Heading>
      <SkeletonProps />
    </Page>
  );
};
