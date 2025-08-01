import { Button, Flex } from 'shadcn-plus';
import { Download, Mail } from 'lucide-react';

export const DisabledButtonComponent = () => {
  return (
    <Flex gap="16px" flexDirection="column">
      {/* Disabled variants */}
      <Flex gap="8px">
        <Button disabled>Button</Button>
        <Button variant="secondary" disabled>
          Button
        </Button>
        <Button variant="outline" disabled>
          Button
        </Button>
        <Button variant="ghost" disabled>
          Button
        </Button>
        <Button variant="link" disabled>
          Button
        </Button>
        <Button variant="destructive" disabled>
          Button
        </Button>
      </Flex>

      {/* Disabled with icons */}
      <Flex gap="8px">
        <Button disabled>
          <Download />
          Download
        </Button>
        <Button variant="outline" disabled>
          <Mail />
          Send Email
        </Button>
        <Button size="icon" disabled>
          <Download />
        </Button>
      </Flex>

      {/* Disabled loading state */}
      <Flex gap="8px">
        <Button loading disabled>
          Loading
        </Button>
        <Button variant="secondary" loading disabled>
          Processing
        </Button>
      </Flex>
    </Flex>
  );
};