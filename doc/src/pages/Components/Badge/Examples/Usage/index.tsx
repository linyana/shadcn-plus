import { Component } from '@/components';
import { BadgeUsageExamples } from './component';

export const UsageBadgeExample = () => {
  return (
    <>
      <Component
        title="Usage"
        description="Use the Alert component to display important messages or feedback. Choose from variants such as default, warning, success, info, or a header-only alert, and optionally add custom icons for better context."
        previewContent={<BadgeUsageExamples />}
        codeContent={`import {
  Flex,
  Card,
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

      {/* 2. Badge inside Tabs */}
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
`}
      />
    </>
  );
};
