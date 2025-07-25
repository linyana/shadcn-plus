import { leftMenu } from '@/routes/leftMenu';
import { div } from 'motion/react-client';
import { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Sidebar } from 'shadcn-plus';

export const LeftMenu = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const items = useMemo(() => {
    const addOnClick = (items: any[]): any[] => {
      return items.map((item) => {
        if (item.type === 'group' || item.type === 'custom') {
          return {
            ...item,
            children: item.children ? addOnClick(item.children) : [],
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
    const findMatch = (items: any[]): string | null => {
      for (const item of items) {
        if (pathname.startsWith(item.key)) {
          return item.key;
        }
        if (item.children) {
          const childMatch = findMatch(item.children);
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
      items={[
        {
          type: 'custom',
          content: (
            <div
              style={{
                height: '60px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '8px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  padding: '0 8px',
                  position: 'fixed',
                  height: '60px',
                  backgroundColor: '#FAFAFA',
                }}
                onClick={() => navigate('/')}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background:
                      'linear-gradient(135deg, #3b82f6, rgba(59, 130, 246, 0.7))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                  }}
                >
                  S+
                </div>
                <span>shadcn-plus</span>
              </div>
            </div>
          ),
        },
        ...items,
      ]}
      activeKeys={activeKeys}
    />
  );
};
