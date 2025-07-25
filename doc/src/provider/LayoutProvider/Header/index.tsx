'use client';

import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        width: '100%',
        backdropFilter: 'blur(16px)',
        transition: 'all 0.3s',
        backgroundColor: isScrolled
          ? 'rgba(255, 255, 255, 0.8)'
          : 'transparent',
        boxShadow: isScrolled ? '0 1px 3px rgba(0, 0, 0, 0.1)' : 'none',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          height: '64px',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 2rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontWeight: 'bold',
            cursor: 'pointer',
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
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <button
            style={{
              fontSize: '14px',
              fontWeight: '500',
              color: '#6b7280',
              textDecoration: 'none',
              transition: 'color 0.2s',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = '#111827')
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = '#6b7280')
            }
            onClick={() => {
              navigate('/components');
            }}
          >
            Components
          </button>
          <button
            style={{
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '50px',
              padding: '8px 16px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.backgroundColor =
                '#2563eb')
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.backgroundColor =
                '#3b82f6')
            }
            onClick={() => {
              navigate('/components');
            }}
          >
            Get Started
            <ChevronRight
              style={{ marginLeft: '4px', width: '16px', height: '16px' }}
            />
          </button>
        </div>
      </div>
    </header>
  );
};