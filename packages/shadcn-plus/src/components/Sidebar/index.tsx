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
} from '@/components/ui/sidebar';
import { ISidebarItemType, ISidebarProviderType, ISidebarTriggerType, ISidebarType } from './types';
import { nanoid } from 'nanoid';

export const SidebarProvider = (props: ISidebarProviderType) => {
  return (
    <ShadcnSidebarProvider {...props} />
  );
};

const MenuItem = ({
  item,
}: {
  item: ISidebarItemType
}) => {
    if ('type' in item) {
      if (item.type === 'label') {
        return (
          <SidebarGroupLabel key={`sep-${index}`}>
            {item.label}
          </SidebarGroupLabel>
        );
      }
      else if (item.type === 'separator') {
        return (
          <SidebarMenuItem
            key={`sep-${index}`}
          />
        );
      }
      else if (item.type === 'group') {
        return (
          <SidebarMenuItem
            key={`group-${index}`}
          >
            <MenuItem items={item.items} />
          </SidebarMenuItem>
        );
      }
      else if (item.type === 'custom') {
        return (
          <SidebarMenuItem
            key={`group-${index}`}
          >
            {item.content}
          </SidebarMenuItem>
        );
      }
    }

    if ('children' in item) {
      return (
        <>
          <SidebarMenuButton asChild>
            {item.icon && (
              <item.icon className="mr-2 h-4 w-4" />
            )}
            <span>{item.label}</span>
          </SidebarMenuButton>
        </>
      );
    }

    return (
      <>
        <SidebarMenuButton disabled={item.disabled}>
          {item.icon && (
            <item.icon />
          )}
          <span>{item.label}</span>
        </SidebarMenuButton>
      </>
    );
};

export const SidebarTrigger = (props: ISidebarTriggerType) => { 
  return (
    <ShadcnSidebarTrigger {...props} />
  )
}

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
              { 
                items.map((item, index) => {
                  const key = nanoid() || item.key;
                  return <MenuItem item={item} key={key}></MenuItem>
                })
              }
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </ShadcnSidebar>
  );
};
