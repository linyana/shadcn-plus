import {
  Sidebar as ShadcnSidebar,
  SidebarProvider as ShadcnSidebarProvider,
  SidebarTrigger as ShadcnSidebarTrigger,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
} from '@/components/ui/sidebar';
import {
  ISidebarProviderType,
  ISidebarTriggerType,
  ISidebarType,
} from './types';
import { useMemo, useState } from 'react';
import { MenuItem } from './components';
import { initializeKeys } from './utils';

export const SidebarProvider = (
  props: ISidebarProviderType,
) => {
  return <ShadcnSidebarProvider {...props} />;
};

export const SidebarTrigger = (
  props: ISidebarTriggerType,
) => {
  return <ShadcnSidebarTrigger {...props} />;
};

export const Sidebar = ({
  items,
  defaultActiveKeys = [],
  activeKeys: externalActiveKeys,
  ...props
}: ISidebarType) => {
  const [internalActiveKeys, setInternalActiveKeys] = useState(defaultActiveKeys);
  const activeKeys = externalActiveKeys || internalActiveKeys;
  const setActiveKeys = externalActiveKeys ? undefined : setInternalActiveKeys;

  const initializedItems = useMemo(() => {
    return initializeKeys(items);
  }, [items]);

  return (
    <ShadcnSidebar {...props}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {
                initializedItems.map((item) => (
                  <MenuItem
                    item={item}
                    key={item.key}
                    activeKeys={activeKeys}
                    setActiveKeys={setActiveKeys}
                  />
                ))
              }
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </ShadcnSidebar>
  );
};
