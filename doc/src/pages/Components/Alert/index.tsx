import { Flex, Heading } from 'shadcn-plus';
import { AlertProps } from './API';
import { BasicAlertExample, VariantsAlertExample, CustomAlertExample } from './Examples';

export const AlertPage = () => {
  return (
    <Flex flexDirection="column" gap="32px">
      <Flex flexDirection="column" gap="16px">
        <Heading level={2}>Alert</Heading>
        <p>Displays a callout for user attention.</p>
      </Flex>
      
      <Flex flexDirection="column" gap="24px">
        <Heading level={3}>Examples</Heading>
        <BasicAlertExample />
        <VariantsAlertExample />
        <CustomAlertExample />
      </Flex>
      
      <Flex flexDirection="column" gap="16px">
        <Heading level={3}>API</Heading>
        <AlertProps />
      </Flex>
    </Flex>
  );
};