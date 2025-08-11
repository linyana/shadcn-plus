import { Alert, Flex } from 'shadcn-plus';
import { Terminal, AlertCircle, CheckCircle, Info } from 'lucide-react';

export const BasicAlertComponent = () => {
  return (
    <Flex flexDirection="column" gap="16px" style={{ width: '500px' }}>
      {/* Default alert */}
      <Alert
        header="Heads up!"
        description="You can add components to your app using the cli."
      />

      {/* Alert with custom icon */}
      <Alert
        icon={AlertCircle}
        header="Warning"
        description="This action cannot be undone. Please proceed with caution."
      />

      {/* Success alert */}
      <Alert
        icon={CheckCircle}
        header="Success"
        description="Your changes have been saved successfully."
      />

      {/* Info alert */}
      <Alert
        icon={Info}
        header="Information"
        description="This is some important information you should know."
      />

      {/* Alert with only header */}
      <Alert icon={Terminal} header="Terminal access required" />
    </Flex>
  );
};
