import { Alert, Flex } from 'shadcn-plus';
import { AlertTriangle, CheckCircle, XCircle, Info } from 'lucide-react';

export const VariantsAlertComponent = () => {
  return (
    <Flex flexDirection="column" gap="16px" style={{ width: '500px' }}>
      {/* Default variant */}
      <Alert
        icon={Info}
        header="Default Alert"
        description="This is a default alert with standard styling."
      />

      {/* Destructive variant */}
      <Alert
        style={{
          borderColor: '#fecaca',
          backgroundColor: '#fef2f2',
          color: '#991b1b',
        }}
        icon={XCircle}
        header="Error Alert"
        description="Something went wrong. Please try again later."
      />

      {/* Success variant */}
      <Alert
        style={{
          borderColor: '#bbf7d0',
          backgroundColor: '#f0fdf4',
          color: '#166534',
        }}
        icon={CheckCircle}
        header="Success Alert"
        description="Operation completed successfully!"
      />

      {/* Warning variant */}
      <Alert
        style={{
          borderColor: '#fde68a',
          backgroundColor: '#fffbeb',
          color: '#92400e',
        }}
        icon={AlertTriangle}
        header="Warning Alert"
        description="Please review your settings before proceeding."
      />

      {/* Info variant */}
      <Alert
        style={{
          borderColor: '#bfdbfe',
          backgroundColor: '#eff6ff',
          color: '#1e40af',
        }}
        icon={Info}
        header="Info Alert"
        description="Here's some helpful information for you."
      />
    </Flex>
  );
};
