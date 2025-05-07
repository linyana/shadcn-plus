import { Separator } from '@/components';
import {
  SidebarGroupLabel,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
} from '@/components/ui/sidebar';
import { ISidebarItemType } from '@/types';
import { Collapsible } from '@/components';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Show } from '@/components/Show';

export const MenuItem = ({
  item,
  activeKeys = [],
  setActiveKeys,
  expandedKeys = [],
}: {
  item: ISidebarItemType;
  activeKeys?: string[];
  setActiveKeys?: (
    args: string[],
    close?: boolean,
  ) => void;
  expandedKeys?: string[];
}) => {
  const isActive = activeKeys.includes(
    item.key as string,
  );
  if ('type' in item) {
    if (item.type === 'group') {
      return (
        <>
          <Show
            hideWhen={null}
            condition={
              item.label || item.separator
            }
          >
            <SidebarMenuItem>
              <Show
                hideWhen={null}
                condition={item.label}
              >
                <SidebarGroupLabel>
                  {item.label}
                </SidebarGroupLabel>
              </Show>
              <Show
                hideWhen={null}
                condition={item.separator}
              >
                <Separator />
              </Show>
            </SidebarMenuItem>
          </Show>
          <SidebarMenuItem>
            {item.children.map((child) => (
              <MenuItem
                item={child}
                key={child.key}
                setActiveKeys={setActiveKeys}
                activeKeys={activeKeys}
                expandedKeys={[
                  ...expandedKeys,
                  child.key as string,
                ]}
              />
            ))}
          </SidebarMenuItem>
        </>
      );
    }

    if (item.type === 'custom') {
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
          key={item.key}
          open={activeKeys.includes(
            item.key as string,
          )}
          onOpenChange={(open) => {
            setActiveKeys?.(
              [item.key as string],
              !open,
            );
          }}
          trigger={
            <SidebarMenuButton
              tooltip={item.label}
            >
              {item.icon && <item.icon />}
              <span>{item.label}</span>
              <ChevronRight
                className={cn(
                  'ml-auto transition-transform duration-200',
                  isActive && 'rotate-90',
                )}
              />
            </SidebarMenuButton>
          }
        >
          <SidebarMenuSub>
            {item.children?.map((subItem) => (
              <MenuItem
                item={subItem}
                key={subItem.key}
                setActiveKeys={setActiveKeys}
                activeKeys={activeKeys}
                expandedKeys={[
                  ...expandedKeys,
                  subItem.key as string,
                ]}
              />
            ))}
          </SidebarMenuSub>
        </Collapsible>
      </>
    );
  }

  return (
    <>
      <SidebarMenuButton
        disabled={item.disabled}
        isActive={activeKeys.includes(
          item.key as string,
        )}
        onClick={(event) => {
          item.onClick?.(event);
          setActiveKeys?.([
            ...expandedKeys,
            item.key as string,
          ]);
        }}
      >
        {item.icon && <item.icon />}
        <span>{item.label}</span>
      </SidebarMenuButton>
    </>
  );
};
