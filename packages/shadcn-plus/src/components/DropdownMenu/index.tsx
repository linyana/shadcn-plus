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
} from '@/components/ui/dropdown-menu';
import {
  IDropdownMenuPropsType,
  IMenuItemType,
} from './types';

export const Menu = ({
  items,
}: {
  items: IMenuItemType[];
}) => {
  return items.map((item, index) => {
    if ('type' in item) {
      if (item.type === 'label') {
        return (
          <DropdownMenuLabel
            key={`label-${index}`}
          >
            {item.label}
          </DropdownMenuLabel>
        );
      }
      else if (item.type === 'separator') {
        return (
          <DropdownMenuSeparator
            key={`sep-${index}`}
          />
        );
      }
      else if (item.type === 'group') {
        return (
          <DropdownMenuGroup
            key={`group-${index}`}
          >
            <Menu items={item.items} />
          </DropdownMenuGroup>
        );
      }
    }

    if ('children' in item) {
      return (
        <DropdownMenuSub key={`submenu-${index}`}>
          <DropdownMenuSubTrigger className="gap-2">
            {item.icon && (
              <item.icon className="mr-2 h-4 w-4" />
            )}
            <span>{item.label}</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <Menu items={item.children || []} />
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
      );
    }

    return (
      <DropdownMenuItem
        key={`item-${index}`}
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
  });
};

export const DropdownMenu = ({
  children,
  items,
  ...props
}: IDropdownMenuPropsType) => {
  return (
    <ShadcnDropdownMenu {...props}>
      <DropdownMenuTrigger>
        {children}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <Menu items={items} />
      </DropdownMenuContent>
    </ShadcnDropdownMenu>
  );
};
