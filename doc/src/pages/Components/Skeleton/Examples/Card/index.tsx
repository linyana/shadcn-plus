import { Component } from '@/components';
import { Heading } from 'shadcn-plus';
import { CardSkeletonComponent } from './component';

export const CardSkeletonExample = () => {
  return (
    <>
      <Heading level={5}>Card</Heading>
      <Component
        previewContent={<CardSkeletonComponent />}
        codeContent={`import { Skeleton, Flex, Card } from 'shadcn-plus';

export const CardSkeletonComponent = () => {
  return (
    <Flex gap="16px" wrap="wrap">
      {/* Product card skeleton */}
      <Card style={{ padding: '16px', width: '280px' }}>
        <Flex flexDirection="column" gap="12px">
          <Skeleton style={{ width: '100%', height: '160px', borderRadius: '8px' }} />
          <Skeleton style={{ width: '80%', height: '20px' }} />
          <Skeleton style={{ width: '60%', height: '16px' }} />
          <Flex justifyContent="space-between" alignItems="center">
            <Skeleton style={{ width: '60px', height: '24px' }} />
            <Skeleton style={{ width: '80px', height: '32px', borderRadius: '6px' }} />
          </Flex>
        </Flex>
      </Card>
      
      {/* Profile card skeleton */}
      <Card style={{ padding: '20px', width: '280px' }}>
        <Flex flexDirection="column" gap="16px" alignItems="center">
          <Skeleton style={{ width: '80px', height: '80px', borderRadius: '50%' }} />
          <Flex flexDirection="column" gap="8px" alignItems="center" style={{ width: '100%' }}>
            <Skeleton style={{ width: '120px', height: '20px' }} />
            <Skeleton style={{ width: '100px', height: '16px' }} />
            <Skeleton style={{ width: '80px', height: '14px' }} />
          </Flex>
          <Flex gap="8px" style={{ width: '100%' }}>
            <Skeleton style={{ flex: 1, height: '36px', borderRadius: '6px' }} />
            <Skeleton style={{ flex: 1, height: '36px', borderRadius: '6px' }} />
          </Flex>
        </Flex>
      </Card>
      
      {/* Article card skeleton */}
      <Card style={{ padding: '16px', width: '280px' }}>
        <Flex flexDirection="column" gap="12px">
          <Flex gap="8px" alignItems="center">
            <Skeleton style={{ width: '32px', height: '32px', borderRadius: '50%' }} />
            <Flex flexDirection="column" gap="4px" style={{ flex: 1 }}>
              <Skeleton style={{ width: '80px', height: '14px' }} />
              <Skeleton style={{ width: '60px', height: '12px' }} />
            </Flex>
          </Flex>
          <Skeleton style={{ width: '100%', height: '18px' }} />
          <Skeleton style={{ width: '90%', height: '14px' }} />
          <Skeleton style={{ width: '95%', height: '14px' }} />
          <Skeleton style={{ width: '70%', height: '14px' }} />
          <Flex gap="8px" style={{ marginTop: '8px' }}>
            <Skeleton style={{ width: '50px', height: '20px', borderRadius: '10px' }} />
            <Skeleton style={{ width: '60px', height: '20px', borderRadius: '10px' }} />
            <Skeleton style={{ width: '40px', height: '20px', borderRadius: '10px' }} />
          </Flex>
        </Flex>
      </Card>
    </Flex>
  );
};
`}
      />
    </>
  );
};
