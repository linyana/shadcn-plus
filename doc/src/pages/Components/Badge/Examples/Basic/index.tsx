import { Component } from '@/components';
import { BasicBadgeComponent } from './component';

export const BasicBadgeExample = () => {
  return (
    <>
      <Component
        title="Basic"
        description="A collection of basic alert examples showcasing default, warning, success, info, and header-only variations, each demonstrating optional custom icons and flexible content usage."
        previewContent={<BasicBadgeComponent />}
        codeContent={`import { Flex, Badge, Button } from 'shadcn-plus';

export const BasicBadgeComponent = () => {
  return (
    <Flex gap="16px" flexDirection="column">
      {/* Default badge */}
      <Badge>Default</Badge>

      {/* Variant: secondary */}
      <Badge variant="secondary">Secondary</Badge>

      {/* Variant: destructive */}
      <Badge variant="destructive">Destructive</Badge>

      {/* Variant: outline */}
      <Badge variant="outline">Outline</Badge>

      {/* Badge asChild */}
      <Badge asChild>
        <Button size="sm" variant="ghost">
          With Button
        </Button>
      </Badge>

      {/* Badge with custom className & style */}
      <Badge
        className="uppercase tracking-wide"
        style={{ backgroundColor: '#0ea5e9', color: '#fff' }}
      >
        Custom
      </Badge>
    </Flex>
  );
};
`}
      />
    </>
  );
};
