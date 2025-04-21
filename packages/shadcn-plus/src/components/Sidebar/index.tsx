import {
  Sidebar as ShadcnSidebar,
  SidebarProvider as ShadcnSidebarProvider,
  SidebarTrigger as ShadcnSidebarTrigger,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import {
  ISidebarItemType,
  ISidebarProviderType,
  ISidebarTriggerType,
  ISidebarType,
} from './types';
import { nanoid } from 'nanoid';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../ui/collapsible';
import { ChevronRight } from '@/icons';

export const SidebarProvider = (
  props: ISidebarProviderType,
) => {
  return <ShadcnSidebarProvider {...props} />;
};

const MenuItem = ({
  item,
}: {
  item: ISidebarItemType;
}) => {
  if ('type' in item) {
    if (item.type === 'label') {
      return (
        <SidebarGroupLabel>
          {item.label}
        </SidebarGroupLabel>
      );
    } else if (item.type === 'separator') {
      return <SidebarMenuItem />;
    } else if (item.type === 'group') {
      return (
        <SidebarMenuItem>
          {item.items.map((item) => {
            const key = nanoid() || item.key;
            return (
              <MenuItem item={item} key={key} />
            );
          })}
        </SidebarMenuItem>
      );
    } else if (item.type === 'custom') {
      return (
        <SidebarMenuItem>
          {item.content}
        </SidebarMenuItem>
      );
    }
  }

  if ('children' in item) {
    return (
      <>
        <Collapsible
          key={item.label}
          asChild
          // defaultOpen={item.isActive}
          className="group/collapsible"
        >
          <SidebarMenuItem>
            <CollapsibleTrigger asChild>
              <SidebarMenuButton
                tooltip={item.label}
              >
                {item.icon && <item.icon />}
                <span>{item.label}</span>
                <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
              </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarMenuSub>
                {item.children?.map((subItem) => (
                  <>
                    <SidebarMenuSubItem
                      key={subItem.key}
                    >
                      <SidebarMenuSubButton
                        asChild
                      >
                        {item.icon && (
                          <item.icon />
                        )}
                        <span>{item.label}</span>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  </>
                ))}
              </SidebarMenuSub>
            </CollapsibleContent>
          </SidebarMenuItem>
        </Collapsible>
      </>
    );
  }

  return (
    <>
      <SidebarMenuButton disabled={item.disabled}>
        {item.icon && <item.icon />}
        <span>{item.label}</span>
      </SidebarMenuButton>
    </>
  );
};

export const SidebarTrigger = (
  props: ISidebarTriggerType,
) => {
  return <ShadcnSidebarTrigger {...props} />;
};

export const Sidebar = ({
  items,
  ...props
}: ISidebarType) => {
  return (
    <ShadcnSidebar {...props}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const key = nanoid() || item.key;
                return (
                  <MenuItem
                    item={item}
                    key={key}
                  />
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </ShadcnSidebar>
  );
};
