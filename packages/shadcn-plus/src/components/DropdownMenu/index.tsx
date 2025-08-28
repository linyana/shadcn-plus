import {
  DropdownMenu as ShadcnDropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuICheckboxItemType,
} from '@/components/ui/dropdown-menu';
import { IDropdownMenuPropsType, IDropdownMenuItemType } from './types';
import { nanoid } from 'nanoid';
import { Show } from '../Show';
import { useComponentTheme } from '@/hooks';
import { cn, sn } from '@/lib/utils';

export const MenuItem = ({ item }: { item: IDropdownMenuItemType }) => {
  if ('type' in item) {
    if (item.type === 'group') {
      return (
        <>
          <Show hideWhen={null} condition={item.label || item.separator}>
            <DropdownMenuGroup>
              <Show hideWhen={null} condition={item.label}>
                <DropdownMenuLabel>{item.label}</DropdownMenuLabel>
              </Show>
              <Show hideWhen={null} condition={item.separator}>
                <DropdownMenuSeparator />
              </Show>
            </DropdownMenuGroup>
          </Show>
          <DropdownMenuGroup>
            {(item.children || []).map((item) => {
              const key = item.key || nanoid();
              return <MenuItem key={key} item={item} />;
            })}
          </DropdownMenuGroup>
        </>
      );
    } else if (item.type === 'custom') {
      return <DropdownMenuGroup>{item.content}</DropdownMenuGroup>;
    } else if (item.type === 'checkbox') {
      return (
        <DropdownMenuICheckboxItemType
          checked={item.checked}
          onCheckedChange={item.onCheckedChange}
          disabled={item.disabled}
          onSelect={(e) => e.preventDefault()}
        >
          {item.label}
        </DropdownMenuICheckboxItemType>
      );
    } else if (item.type === 'radioGroup') {
      return (
        <DropdownMenuRadioGroup
          value={item.value}
          onValueChange={item.onValueChange}
        >
          {item.items.map((radioItem, i) => (
            <DropdownMenuRadioItem
              key={`radio-${i}`}
              value={radioItem.value}
              disabled={radioItem.disabled}
              onSelect={(e) => e.preventDefault()}
            >
              {radioItem.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      );
    }
  }

  if ('children' in item) {
    return (
      <DropdownMenuSub>
        <DropdownMenuSubTrigger className="gap-2">
          {item.icon && (
            <item.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{item.label}</span>
        </DropdownMenuSubTrigger>
        <DropdownMenuPortal>
          <DropdownMenuSubContent>
            {(item.children || []).map((item) => {
              const key = item.key || nanoid();
              return <MenuItem key={key} item={item} />;
            })}
          </DropdownMenuSubContent>
        </DropdownMenuPortal>
      </DropdownMenuSub>
    );
  }

  return (
    <DropdownMenuItem disabled={item.disabled}>
      {item.icon && (
        <item.icon className="mr-2 h-4 w-4 text-muted-foreground" />
      )}
      <span>{item.label}</span>
      {item.shortcut && (
        <DropdownMenuShortcut>{item.shortcut}</DropdownMenuShortcut>
      )}
    </DropdownMenuItem>
  );
};

export const DropdownMenu = ({
  children,
  items,
  ...props
}: IDropdownMenuPropsType) => {
  const theme = useComponentTheme('DropdownMenu');

  return (
    <ShadcnDropdownMenu {...props}>
      <DropdownMenuTrigger
        asChild
        {...props.triggerProps}
        style={sn(theme.Trigger?.style, props.triggerProps?.style)}
        className={cn(theme.Trigger?.className, props.triggerProps?.className)}
      >
        {children}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        {...props.contentProps}
        style={sn(theme.Content?.style, props.contentProps?.style)}
        className={cn(theme.Content?.className, props.contentProps?.className)}
      >
        {items.map((item) => {
          const key = item.key || nanoid();
          return <MenuItem key={key} item={item} />;
        })}
      </DropdownMenuContent>
    </ShadcnDropdownMenu>
  );
};
