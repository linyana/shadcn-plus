import { Component } from '@/components';
import { Heading } from 'shadcn-plus';
import { WithIconButtonComponent } from './component';

export const WithIconButtonExample = () => {
  return (
    <>
      <Heading level={5}>With Icons</Heading>
      <Component
        previewContent={<WithIconButtonComponent />}
        codeContent={`import { Button, Flex } from 'shadcn-plus';
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
    </Flex>
  );
};`}
      />
    </>
  );
};
