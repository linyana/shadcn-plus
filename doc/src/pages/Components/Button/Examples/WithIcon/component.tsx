import { Button, Flex } from 'shadcn-plus';
import { Download, Mail, Plus, ArrowRight, Github } from 'lucide-react';

export const WithIconButtonComponent = () => {
  return (
    <Flex gap="16px" flexDirection="column">
      {/* Icons with text */}
      <Flex gap="8px">
        <Button>
          <Download />
          Download
        </Button>
        <Button variant="secondary">
          <Mail />
          Send Email
        </Button>
        <Button variant="outline">
          <Plus />
          Add Item
        </Button>
        <Button variant="ghost">
          Learn More
          <ArrowRight />
        </Button>
      </Flex>

      {/* Icon only buttons */}
      <Flex gap="8px">
        <Button size="icon">
          <Download />
        </Button>
        <Button size="icon" variant="secondary">
          <Mail />
        </Button>
        <Button size="icon" variant="outline">
          <Plus />
        </Button>
        <Button size="icon" variant="ghost">
          <Github />
        </Button>
      </Flex>

      {/* Different sizes with icons */}
      <Flex gap="8px">
        <Button size="sm">
          <Plus />
          Small
        </Button>
        <Button>
          <Plus />
          Default
        </Button>
        <Button size="lg">
          <Plus />
          Large
        </Button>
      </Flex>
    </Flex>
  );
};