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
import { ChevronRight } from 'lucide-react';
import { Separator } from '../Separator';

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
      return <Separator />;
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

  if (item.children) {
    return (
      <>
        <Collapsible
          key={item.label}
          className="group/collapsible"
          defaultOpen={item.active}
        >
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
                <MenuItem item={subItem} />
              ))}
            </SidebarMenuSub>
          </CollapsibleContent>
        </Collapsible>
      </>
    );
  }

  return (
    <>
      <SidebarMenuButton disabled={item.disabled} isActive={item.active}>
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
  defaultActiveKeys = [],
  activeKeys = [],
  ...props
}: ISidebarType) => {
  return (
    <ShadcnSidebar {...props}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item: any) => {
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
