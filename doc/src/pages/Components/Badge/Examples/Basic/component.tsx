import { Flex, Badge, Button } from 'shadcn-plus';

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
