import { Button, Flex, Card, Input } from 'shadcn-plus';
import { Search, Bell, User } from 'shadcn-plus/icons';

export const LayoutFlexComponent = () => {
  return (
    <Flex flexDirection="column" gap="16px">
      {/* Header Layout */}
      <Card style={{ padding: '16px' }}>
        <h4
          style={{ marginBottom: '12px', fontSize: '14px', fontWeight: '600' }}
        >
          Header Layout
        </h4>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          style={{
            backgroundColor: '#f3f4f6',
            padding: '12px',
            borderRadius: '4px',
          }}
        >
          <div style={{ fontSize: '18px', fontWeight: '600' }}>Logo</div>
          <Flex gap="12px" alignItems="center">
            <Button variant="ghost" size="sm">
              <Search style={{ width: '16px', height: '16px' }} />
            </Button>
            <Button variant="ghost" size="sm">
              <Bell style={{ width: '16px', height: '16px' }} />
            </Button>
            <Button variant="ghost" size="sm">
              <User style={{ width: '16px', height: '16px' }} />
            </Button>
          </Flex>
        </Flex>
      </Card>

      {/* Form Layout */}
      <Card style={{ padding: '16px' }}>
        <h4
          style={{ marginBottom: '12px', fontSize: '14px', fontWeight: '600' }}
        >
          Form Layout
        </h4>
        <Flex
          flexDirection="column"
          gap="12px"
          style={{
            backgroundColor: '#f3f4f6',
            padding: '16px',
            borderRadius: '4px',
          }}
        >
          <Flex gap="12px">
            <Input placeholder="First Name" style={{ flex: 1 }} />
            <Input placeholder="Last Name" style={{ flex: 1 }} />
          </Flex>
          <Input placeholder="Email" />
          <Flex justifyContent="flex-end" gap="8px">
            <Button variant="outline">Cancel</Button>
            <Button>Submit</Button>
          </Flex>
        </Flex>
      </Card>

      {/* Card Grid Layout */}
      <Card style={{ padding: '16px' }}>
        <h4
          style={{ marginBottom: '12px', fontSize: '14px', fontWeight: '600' }}
        >
          Card Grid Layout
        </h4>
        <Flex
          flexWrap="wrap"
          gap="12px"
          style={{
            backgroundColor: '#f3f4f6',
            padding: '16px',
            borderRadius: '4px',
          }}
        >
          {[1, 2, 3, 4].map((item) => (
            <Card
              key={item}
              style={{
                padding: '16px',
                minWidth: '150px',
                flex: '1 1 calc(50% - 6px)',
              }}
            >
              <h5
                style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  marginBottom: '8px',
                }}
              >
                Card {item}
              </h5>
              <p
                style={{
                  fontSize: '12px',
                  color: '#666',
                  marginBottom: '12px',
                }}
              >
                Some description text
              </p>
              <Button size="sm" style={{ width: '100%' }}>
                Action
              </Button>
            </Card>
          ))}
        </Flex>
      </Card>
    </Flex>
  );
};
