import { Flex, Heading } from 'shadcn-plus';
import { SkeletonProps } from './API';
import { BasicSkeletonExample, TextSkeletonExample, CardSkeletonExample } from './Examples';

export const SkeletonPage = () => {
  return (
    <Flex flexDirection="column" gap="32px">
      <Flex flexDirection="column" gap="16px">
        <Heading level={2}>Skeleton</Heading>
        <p>Use to show a placeholder while content is loading.</p>
      </Flex>
      
      <Flex flexDirection="column" gap="24px">
        <Heading level={3}>Examples</Heading>
        <BasicSkeletonExample />
        <TextSkeletonExample />
        <CardSkeletonExample />
      </Flex>
      
      <Flex flexDirection="column" gap="16px">
        <Heading level={3}>API</Heading>
        <SkeletonProps />
      </Flex>
    </Flex>
  );
};