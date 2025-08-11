import { Component } from '@/components';
import { Heading } from 'shadcn-plus';
import { BasicSkeletonComponent } from './component';

export const BasicSkeletonExample = () => {
  return (
    <>
      <Heading level={5}>Basic</Heading>
      <Component
        previewContent={<BasicSkeletonComponent />}
        codeContent={`import { Skeleton, Flex } from 'shadcn-plus';

export const BasicSkeletonComponent = () => {
  return (
    <Flex flexDirection="column" gap="16px" style={{ width: '300px' }}>
      {/* Avatar and text skeleton */}
      <Flex gap="12px" alignItems="center">
        <Skeleton style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
        <Flex flexDirection="column" gap="4px" style={{ flex: 1 }}>
          <Skeleton style={{ width: '120px', height: '16px' }} />
          <Skeleton style={{ width: '80px', height: '14px' }} />
        </Flex>
      </Flex>
      
      {/* Card skeleton */}
      <Flex flexDirection="column" gap="8px">
        <Skeleton style={{ width: '100%', height: '200px', borderRadius: '8px' }} />
        <Skeleton style={{ width: '100%', height: '20px' }} />
        <Skeleton style={{ width: '80%', height: '16px' }} />
        <Skeleton style={{ width: '60%', height: '16px' }} />
      </Flex>
      
      {/* Button skeletons */}
      <Flex gap="8px">
        <Skeleton style={{ width: '80px', height: '36px', borderRadius: '6px' }} />
        <Skeleton style={{ width: '100px', height: '36px', borderRadius: '6px' }} />
      </Flex>
    </Flex>
  );
};
`}
      />
    </>
  );
};
