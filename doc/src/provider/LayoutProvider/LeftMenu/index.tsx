import { routes } from '@/routes';
import { useMemo } from 'react';
import {
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { Sidebar } from 'shadcn-plus';
import { ISidebarItemType } from 'shadcn-plus/types';

export const LeftMenu = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const items: ISidebarItemType[] =
    useMemo(() => {
      return routes
        .filter(
          (route) =>
            route.leftMenu && route.sidebar,
        )
        .map(
          (route) =>
            ({
              onClick: route.path
                ? () => {
                    navigate(
                      route.path as string,
                    );
                  }
                : null,
              key: route.id,
              ...route.sidebar,
            } as ISidebarItemType),
        );
    }, [routes]);

  const activeKeys = useMemo(() => {
    const match = items.find((item) =>
      pathname.startsWith(item.key as string),
    );
    return match ? [match.key as string] : [];
  }, [pathname, items]);

  return (
    <Sidebar
      items={items}
      activeKeys={activeKeys}
    />
  );
};
