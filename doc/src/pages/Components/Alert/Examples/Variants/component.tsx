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
        className="border-red-200 bg-red-50 text-red-800 [&>svg]:text-red-600"
        icon={XCircle}
        header="Error Alert"
        description="Something went wrong. Please try again later."
      />
      
      {/* Success variant */}
      <Alert
        className="border-green-200 bg-green-50 text-green-800 [&>svg]:text-green-600"
        icon={CheckCircle}
        header="Success Alert"
        description="Operation completed successfully!"
      />
      
      {/* Warning variant */}
      <Alert
        className="border-yellow-200 bg-yellow-50 text-yellow-800 [&>svg]:text-yellow-600"
        icon={AlertTriangle}
        header="Warning Alert"
        description="Please review your settings before proceeding."
      />
      
      {/* Info variant */}
      <Alert
        className="border-blue-200 bg-blue-50 text-blue-800 [&>svg]:text-blue-600"
        icon={Info}
        header="Info Alert"
        description="Here's some helpful information for you."
      />
    </Flex>
  );
};