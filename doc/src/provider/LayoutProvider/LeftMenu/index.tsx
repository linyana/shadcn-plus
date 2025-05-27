import { leftMenu } from '@/routes/leftMenu';
import { useMemo } from 'react';
import {
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { Sidebar } from 'shadcn-plus';

export const LeftMenu = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const items = useMemo(() => {
    const addOnClick = (items: any[]): any[] => {
      return items.map((item) => {
        if (
          item.type === 'group' ||
          item.type === 'custom'
        ) {
          return {
            ...item,
            children: item.children
              ? addOnClick(item.children)
              : [],
          };
        }

        return {
          ...item,
          onClick: () => {
            navigate(item.key);
          },
        };
      });
    };

    return addOnClick(leftMenu);
  }, []);

  const activeKeys = useMemo(() => {
    const findMatch = (
      items: any[],
    ): string | null => {
      for (const item of items) {
        if (pathname.startsWith(item.key)) {
          return item.key;
        }
        if (item.children) {
          const childMatch = findMatch(
            item.children,
          );
          if (childMatch) return childMatch;
        }
      }
      return null;
    };

    const matchKey = findMatch(items);
    return matchKey ? [matchKey] : [];
  }, [pathname, items]);

  return (
    <Sidebar
      items={items}
      activeKeys={activeKeys}
    />
  );
};
