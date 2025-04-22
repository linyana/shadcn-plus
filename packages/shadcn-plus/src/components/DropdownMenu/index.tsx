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
import {
  IDropdownMenuPropsType,
  IMenuItemType,
} from './types';
import { nanoid } from 'nanoid';

export const MenuItem = ({
  item,
}: {
  item: IMenuItemType;
}) => {
  if ('type' in item) {
    if (item.type === 'label') {
      return (
        <DropdownMenuLabel>
          {item.label}
        </DropdownMenuLabel>
      );
    }
    else if (item.type === 'separator') {
      return (
        <DropdownMenuSeparator />
      );
    }
    else if (item.type === 'group') {
      return (
        <DropdownMenuGroup>
          { 
            (item.items || []).map((item) => { 
              const key = item.key || nanoid()
              return (
                <MenuItem key={key} item={item} />
              )
            })
          }
        </DropdownMenuGroup>
      );
    }
    else if (item.type === 'custom') {
      return (
        <DropdownMenuGroup>
          {item.content}
        </DropdownMenuGroup>
      );
    }
    else if (item.type === 'checkbox') {
      return (
        <DropdownMenuICheckboxItemType
          checked={item.checked}
          onCheckedChange={item.onCheckedChange}
          disabled={item.disabled}
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
            <item.icon className="mr-2 h-4 w-4" />
          )}
          <span>{item.label}</span>
        </DropdownMenuSubTrigger>
        <DropdownMenuPortal>
          <DropdownMenuSubContent>
          { 
            (item.children || []).map((item) => { 
              const key = item.key || nanoid()
              return (
                <MenuItem key={key} item={item} />
              )
            })
          }
          </DropdownMenuSubContent>
        </DropdownMenuPortal>
      </DropdownMenuSub>
    );
  }

  return (
    <DropdownMenuItem
      disabled={item.disabled}
    >
      {item.icon && (
        <item.icon className="mr-2 h-4 w-4" />
      )}
      <span>{item.label}</span>
      {item.shortcut && (
        <DropdownMenuShortcut>
          {item.shortcut}
        </DropdownMenuShortcut>
      )}
    </DropdownMenuItem>
  );
};

export const DropdownMenu = ({
  children,
  items,
  contentProps,
  ...props
}: IDropdownMenuPropsType) => {
  return (
    <ShadcnDropdownMenu {...props}>
      <DropdownMenuTrigger asChild>
        {children}
      </DropdownMenuTrigger>
      <DropdownMenuContent {...contentProps}>
        { 
          items.map((item) => { 
            const key = item.key || nanoid()
            return (
              <MenuItem key={key} item={item} />
            )
          })
        }
      </DropdownMenuContent>
    </ShadcnDropdownMenu>
  );
};
