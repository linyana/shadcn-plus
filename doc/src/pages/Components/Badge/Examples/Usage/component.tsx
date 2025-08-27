import {
  Flex,
  Card,
  // Avatar,
  // AvatarImage,
  // AvatarFallback,
  Tabs,
  Badge,
} from 'shadcn-plus';

export const BadgeUsageExamples = () => {
  return (
    <Flex flexDirection="column" gap="24px" style={{ width: '600px' }}>
      {/* 1. Badge in a Card Header */}
      <Card
        header={
          <Flex alignItems="center" justifyContent="space-between">
            Notifications
            <Badge
              style={{
                marginLeft: 4,
                backgroundColor: '#52c41a',
                color: 'white',
                padding: '0 6px',
                fontSize: 12,
              }}
            >
              3 new
            </Badge>
          </Flex>
        }
      >
        You have unread messages and pending tasks.
      </Card>

      {/* 2. Badge on Avatar (status indicator style) */}
      {/* <div className="relative w-fit">
        <Avatar>
          <AvatarImage src="https://i.pravatar.cc/100?img=32" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <Badge
          variant="destructive"
          className="absolute -bottom-1 -right-1 rounded-full px-2 py-0 text-xs"
        >
          Busy
        </Badge>
      </div> */}

      {/* 3. Badge inside Tabs */}
      <Tabs
        defaultValue="account"
        items={[
          {
            key: 'account',
            label: 'Account',
            content: <div>Account content</div>,
          },
          {
            key: 'settings',
            label: (
              <>
                Settings
                <Badge
                  variant="secondary"
                  style={{
                    marginLeft: 4,
                  }}
                >
                  Beta
                </Badge>
              </>
            ),
            content: <div>Settings content</div>,
          },
        ]}
      />
    </Flex>
  );
};
