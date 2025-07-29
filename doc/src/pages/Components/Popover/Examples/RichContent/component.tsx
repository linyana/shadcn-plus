import { Popover, Button, Input, Flex } from 'shadcn-plus';

export const RichContentPopoverComponent = () => {
  return (
    <Flex gap="8px" flexWrap="wrap">
      {/* User Profile Popover */}
      <Popover trigger={<Button>User Profile</Button>}>
        <h3
          style={{ fontWeight: '600', fontSize: '18px', marginBottom: '4px' }}
        >
          John Doe
        </h3>
        <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '16px' }}>
          Software Engineer
        </p>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            marginBottom: '16px',
          }}
        >
          <p style={{ fontSize: '14px', color: '#6b7280' }}>
            john.doe@example.com
          </p>
          <p style={{ fontSize: '14px' }}>
            Passionate about creating beautiful user interfaces and solving
            complex problems.
          </p>
        </div>
        <Button size="sm" style={{ width: '100%' }}>
          View Profile
        </Button>
      </Popover>

      {/* Contact Form Popover */}
      <Popover
        trigger={<Button variant="outline">Contact Form</Button>}
        contentProps={{ side: 'bottom', align: 'center' }}
      >
        <h3
          style={{ fontWeight: '600', fontSize: '18px', marginBottom: '4px' }}
        >
          Quick Contact
        </h3>
        <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '16px' }}>
          Send us a message
        </p>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            marginBottom: '16px',
          }}
        >
          <Input placeholder="Your name" />
          <Input placeholder="Email address" type="email" />
          <textarea
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              resize: 'none',
            }}
            rows={3}
            placeholder="Your message"
          />
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Button size="sm" style={{ flex: '1' }}>
            Send
          </Button>
          <Button size="sm" variant="outline" style={{ flex: '1' }}>
            Cancel
          </Button>
        </div>
      </Popover>
    </Flex>
  );
};
