import { Separator } from "@/components";
import { CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { SidebarGroupLabel, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub } from "@/components/ui/sidebar";
import { ISidebarItemType } from "@/types";
import { Collapsible } from "@radix-ui/react-collapsible";
import { ChevronRight } from "lucide-react";

export const MenuItem = ({
  item,
  activeKeys = [],
  setActiveKeys,
  expandedKeys = [],
}: {
  item: ISidebarItemType;
  activeKeys?: string[]
  setActiveKeys?: (args: string[], close?: boolean) => void
  expandedKeys?: string[]
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
          {item.items.map((item) => (
            <MenuItem
              item={item}
              key={item.key}
              setActiveKeys={setActiveKeys}
              activeKeys={activeKeys}
              expandedKeys={[...expandedKeys, item.key as string]}
            />
          ))}
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
          open={activeKeys.includes(item.key as string)}
          onOpenChange={(open) => { 
            setActiveKeys?.([item.key as string], !open);
          }}
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
                <MenuItem
                  item={subItem}
                  key={subItem.key}
                  setActiveKeys={setActiveKeys}
                  activeKeys={activeKeys}
                  expandedKeys={[...expandedKeys, subItem.key as string]}
                />
              ))}
            </SidebarMenuSub>
          </CollapsibleContent>
        </Collapsible>
      </>
    );
  }

  return (
    <>
      <SidebarMenuButton
        disabled={item.disabled}
        isActive={activeKeys.includes(item.key as string)}
        onClick={(event) => {
          item.onClick?.(event);
          setActiveKeys?.([...expandedKeys, item.key as string]);
        }}
      >
        {item.icon && <item.icon />}
        <span>{item.label}</span>
      </SidebarMenuButton>
    </>
  );
};
