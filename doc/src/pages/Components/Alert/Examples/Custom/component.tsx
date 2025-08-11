import { Alert, Flex, Button } from 'shadcn-plus';
import { Lightbulb, Download, Settings } from 'lucide-react';

export const CustomAlertComponent = () => {
  return (
    <Flex flexDirection="column" gap="16px" style={{ width: '500px' }}>
      {/* Alert with custom header content */}
      <Alert
        icon={Lightbulb}
        header={
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            Pro Tip
            <span
              style={{
                fontSize: '10px',
                backgroundColor: '#3b82f6',
                color: 'white',
                padding: '2px 6px',
                borderRadius: '4px',
              }}
            >
              NEW
            </span>
          </span>
        }
        description="You can use custom React components in both header and description props."
      />

      {/* Alert with action buttons in description */}
      <Alert
        icon={Download}
        header="Update Available"
        description={
          <div>
            <p style={{ margin: '0 0 12px 0' }}>
              A new version of the application is available. Would you like to
              download it now?
            </p>
            <Flex gap="8px">
              <Button size="sm" variant="outline">
                Download Now
              </Button>
              <Button size="sm" variant="ghost">
                Remind Later
              </Button>
            </Flex>
          </div>
        }
      />

      {/* Alert with rich content */}
      <Alert
        icon={Settings}
        header="Configuration Required"
        description={
          <div>
            <p style={{ margin: '0 0 8px 0' }}>
              Please configure the following settings:
            </p>
            <ul style={{ margin: '0', paddingLeft: '16px', fontSize: '14px' }}>
              <li>API endpoint URL</li>
              <li>Authentication credentials</li>
              <li>Default timeout settings</li>
            </ul>
            <div style={{ marginTop: '12px' }}>
              <Button size="sm">Open Settings</Button>
            </div>
          </div>
        }
      />

      {/* Alert without icon */}
      <Alert
        header="Simple Alert"
        description="This alert doesn't have an icon, showing a clean minimal design."
        style={{
          paddingLeft: '16px',
          display: 'grid',
          gridTemplateColumns: '0 1fr',
        }}
      />
    </Flex>
  );
};
