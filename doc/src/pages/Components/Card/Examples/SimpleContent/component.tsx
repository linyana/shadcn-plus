import { Button, Card, Flex } from 'shadcn-plus';
import { Heart, MessageCircle, Share } from 'lucide-react';

export const SimpleContentCardComponent = () => {
  return (
    <Flex gap="16px" flexWrap="wrap">
      <Card style={{ width: 280, padding: '0' }}>
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop"
          alt="Mountain landscape"
          style={{
            width: '100%',
            height: '160px',
            objectFit: 'cover',
            borderRadius: '8px',
            marginBottom: '12px',
          }}
        />
        <h3
          style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}
        >
          Beautiful Mountain View
        </h3>
        <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '12px' }}>
          Discover the breathtaking beauty of mountain landscapes and enjoy the
          serenity of nature.
        </p>
        <Flex gap="16px" alignItems="center" width='100%'>
          <Flex gap="4px" alignItems="center" style={{ cursor: 'pointer' }}>
            <Heart style={{ width: '16px', height: '16px' }} />
            <span style={{ fontSize: '14px' }}>24</span>
          </Flex>
          <Flex gap="4px" alignItems="center" style={{ cursor: 'pointer' }}>
            <MessageCircle style={{ width: '16px', height: '16px' }} />
            <span style={{ fontSize: '14px' }}>8</span>
          </Flex>
          <Flex gap="4px" alignItems="center" style={{ cursor: 'pointer' }}>
            <Share style={{ width: '16px', height: '16px' }} />
            <span style={{ fontSize: '14px' }}>Share</span>
          </Flex>
        </Flex>
      </Card>
      <Card>
        <Flex style={{ width: 240, height: 300 }} alignItems="center">
          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                backgroundColor: '#f3f4f6',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
              }}
            >
              <span style={{ fontSize: '24px' }}>📊</span>
            </div>
            <h3
              style={{
                fontSize: '18px',
                fontWeight: '600',
                marginBottom: '8px',
              }}
            >
              Analytics Dashboard
            </h3>
            <p
              style={{
                fontSize: '14px',
                color: '#6b7280',
                marginBottom: '16px',
              }}
            >
              Track your performance with detailed analytics and insights.
            </p>
            <Button
              style={{
                backgroundColor: '#3b82f6',
              }}
            >
              View Dashboard
            </Button>
          </div>
        </Flex>
      </Card>
    </Flex>
  );
};
