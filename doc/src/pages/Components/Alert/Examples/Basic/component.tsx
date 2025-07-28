import { Alert, Flex } from 'shadcn-plus';
import { Terminal, AlertCircle, CheckCircle, Info } from 'lucide-react';

export const BasicAlertComponent = () => {
  return (
    <Flex flexDirection="column" gap="16px" style={{ width: '500px' }}>
      {/* Default alert */}
      <Alert
        title="Heads up!"
        description="You can add components to your app using the cli."
      />
      
      {/* Alert with custom icon */}
      <Alert
        icon={AlertCircle}
        title="Warning"
        description="This action cannot be undone. Please proceed with caution."
      />
      
      {/* Success alert */}
      <Alert
        icon={CheckCircle}
        title="Success"
        description="Your changes have been saved successfully."
      />
      
      {/* Info alert */}
      <Alert
        icon={Info}
        title="Information"
        description="This is some important information you should know."
      />
      
      {/* Alert with only title */}
      <Alert
        icon={Terminal}
        title="Terminal access required"
      />
    </Flex>
  );
};