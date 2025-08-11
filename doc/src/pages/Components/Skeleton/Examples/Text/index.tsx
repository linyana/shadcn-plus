import { Component } from '@/components';
import { Heading } from 'shadcn-plus';
import { TextSkeletonComponent } from './component';

export const TextSkeletonExample = () => {
  return (
    <>
      <Heading level={5}>Text</Heading>
      <Component
        previewContent={<TextSkeletonComponent />}
        codeContent={`import { Skeleton, Flex } from 'shadcn-plus';

export const TextSkeletonComponent = () => {
  return (
    <Flex flexDirection="column" gap="24px" style={{ width: '400px' }}>
      {/* Paragraph skeleton */}
      <Flex flexDirection="column" gap="8px">
        <Skeleton style={{ width: '100%', height: '16px' }} />
        <Skeleton style={{ width: '95%', height: '16px' }} />
        <Skeleton style={{ width: '88%', height: '16px' }} />
        <Skeleton style={{ width: '75%', height: '16px' }} />
      </Flex>
      
      {/* Title and subtitle skeleton */}
      <Flex flexDirection="column" gap="12px">
        <Skeleton style={{ width: '60%', height: '24px' }} />
        <Skeleton style={{ width: '40%', height: '18px' }} />
      </Flex>
      
      {/* List skeleton */}
      <Flex flexDirection="column" gap="8px">
        {Array.from({ length: 4 }).map((_, index) => (
          <Flex key={index} gap="8px" alignItems="center">
            <Skeleton style={{ width: '8px', height: '8px', borderRadius: '50%' }} />
            <Skeleton style={{ width: \`\${Math.random() * 40 + 60}%\`, height: '16px' }} />
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};
`}
      />
    </>
  );
};
