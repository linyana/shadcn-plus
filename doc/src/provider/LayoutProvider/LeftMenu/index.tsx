import { leftMenu } from '@/routes/leftMenu';
import { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Sidebar } from 'shadcn-plus';
import { ISidebarItemType } from 'shadcn-plus/types';

export const LeftMenu = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const items = useMemo(() => {
    const addOnClick = (items: any[]): any[] => {
      return items.map((item) => {
        if (item.children) {
          return {
            ...item,
            children: addOnClick(item.children),
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

  const defaultActiveKeys = useMemo(() => {
    const matches: Set<string> = new Set();

    const findMatches = (items: ISidebarItemType[], parentKey?: string) => {
      for (const item of items) {
        const isMatch =
          pathname === item.key || pathname.startsWith(item.key + '/');

        if (item.children) {
          findMatches(item.children, item.key);
        }

        if (isMatch && item.key) {
          matches.add(item.key);
          if (parentKey) {
            matches.add(parentKey);
          }
        }
      }
    };

    findMatches(items);

    return Array.from(matches);
  }, [pathname, items]);

  return (
    <div
      style={{
        background: 'linear-gradient(180deg, #ffffff 0%, #f9fafb 100%)',
        borderRight: '1px solid #e5e7eb',
        height: '100vh',
        boxShadow: '4px 0 20px rgba(0, 0, 0, 0.08)',
      }}
    >
      <Sidebar
        style={{
          background: 'transparent',
          border: 'none',
        }}
        items={[
          {
            type: 'custom',
            content: (
              <div
                style={{
                  height: '80px',
                  background:
                    'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                  borderRadius: '0 0 20px 20px',
                  margin: '-8px -8px 0 -8px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Background decoration */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-50%',
                    right: '-20%',
                    width: '100px',
                    height: '100px',
                    background: 'rgba(0, 0, 0, 0.05)',
                    borderRadius: '50%',
                    filter: 'blur(20px)',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: '-30%',
                    left: '-10%',
                    width: '80px',
                    height: '80px',
                    background: 'rgba(0, 0, 0, 0.03)',
                    borderRadius: '50%',
                    filter: 'blur(15px)',
                  }}
                />

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '12px',
                    fontWeight: '700',
                    cursor: 'pointer',
                    padding: '20px 16px',
                    height: '100%',
                    color: '#1f2937',
                    position: 'relative',
                    zIndex: 1,
                    transition: 'all 0.3s ease',
                  }}
                  onClick={() => navigate('/')}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.02)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
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
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                    }}
                  >
                    <span style={{ fontSize: '18px', lineHeight: '1.2' }}>
                      shadcn-plus
                    </span>
                    <span
                      style={{
                        fontSize: '12px',
                        opacity: '0.8',
                        fontWeight: '400',
                      }}
                    >
                      Component Library
                    </span>
                  </div>
                </div>
              </div>
            ),
          },
          ...items,
        ]}
        defaultActiveKeys={defaultActiveKeys}
      />
    </div>
  );
};
