import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Tabs } from 'shadcn-plus';

interface ComponentItem {
  name: string;
  path: string;
  description: string;
  category: string;
}

const components: ComponentItem[] = [
  {
    name: 'Button',
    path: '/components/button',
    description: 'Displays a button or a component that looks like a button.',
    category: 'Form',
  },
  {
    name: 'Badge',
    path: '/components/badge',
    description: 'Displays a callout for user attention.',
    category: 'Data Display',
  },
  {
    name: 'Input',
    path: '/components/input',
    description:
      'Displays a form input field or a component that looks like an input field.',
    category: 'Form',
  },
  {
    name: 'Select',
    path: '/components/select',
    description:
      'Displays a list of options for the user to pick from—triggered by a button.',
    category: 'Form',
  },
  {
    name: 'Flex',
    path: '/components/flex',
    description: 'A flexible layout component for arranging elements.',
    category: 'Layout',
  },
  {
    name: 'Sidebar',
    path: '/components/sidebar',
    description: 'A collapsible sidebar component for navigation.',
    category: 'Navigation',
  },
  {
    name: 'Dropdown Menu',
    path: '/components/dropdown-menu',
    description:
      'Displays a menu to the user—such as a set of actions or functions—triggered by a button.',
    category: 'Navigation',
  },
  {
    name: 'Popover',
    path: '/components/popover',
    description: 'Displays rich content in a portal, triggered by a button.',
    category: 'Overlay',
  },
  {
    name: 'Tooltip',
    path: '/components/tooltip',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
    category: 'Overlay',
  },
  {
    name: 'Sheet',
    path: '/components/sheet',
    description:
      'Extends the Dialog component to display content that complements the main content of the screen.',
    category: 'Overlay',
  },
  {
    name: 'Collapsible',
    path: '/components/collapsible',
    description: 'An interactive component which expands/collapses a panel.',
    category: 'Layout',
  },
  {
    name: 'Separator',
    path: '/components/separator',
    description: 'Visually or semantically separates content.',
    category: 'Layout',
  },
  {
    name: 'Card',
    path: '/components/card',
    description: 'Displays a card with header, content, and footer.',
    category: 'Data Display',
  },
  {
    name: 'Hover Card',
    path: '/components/hover-card',
    description:
      'For sighted users to preview content available behind a link.',
    category: 'Data Display',
  },
  {
    name: 'Accordion',
    path: '/components/accordion',
    description:
      'A vertically stacked set of interactive headings that each reveal a section of content.',
    category: 'Data Display',
  },
  {
    name: 'Skeleton',
    path: '/components/skeleton',
    description: 'Use to show a placeholder while content is loading.',
    category: 'Feedback',
  },
  {
    name: 'Alert',
    path: '/components/alert',
    description: 'Displays a callout for user attention.',
    category: 'Feedback',
  },
  {
    name: 'Dialog',
    path: '/components/dialog',
    description: 'A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.',
    category: 'Feedback',
  },
];

const categories = [
  'All',
  'Form',
  'Layout',
  'Navigation',
  'Overlay',
  'Data Display',
  'Feedback',
];

export const ComponentsPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleComponentClick = (path: string) => {
    navigate(path);
  };

  return (
    <div style={{ minHeight: '100vh' }}>
      <div style={{ width: '100%', margin: '0 auto', padding: '32px 16px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h1
            style={{
              fontSize: '36px',
              fontWeight: 'bold',
              color: '#111827',
              marginBottom: '16px',
            }}
          >
            Component Overview
          </h1>
          <p
            style={{
              fontSize: '20px',
              color: '#4b5563',
              width: '100%',
              margin: '0 auto',
            }}
          >
            Discover and explore our comprehensive collection of reusable UI
            components
          </p>
        </div>

        {/* Search and Filter */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{ width: '64%', margin: '0 auto 24px auto' }}>
            <Input
              placeholder="Search components..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ width: '100%' }}
            />
          </div>
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '32px',
            }}
          >
            <Tabs
              items={categories.map((category) => ({
                key: category,
                label: category,
                content: (
                  <div
                    style={{
                      width: 'calc(100vw - 400px)',
                    }}
                  >
                    {/* Components Grid */}
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns:
                          'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '24px',
                        marginTop: 24,
                      }}
                    >
                      {components
                        .filter((component) => {
                          const matchesCategory =
                            category === 'All' ||
                            component.category === category;
                          const matchesSearch =
                            component.name
                              .toLowerCase()
                              .includes(searchTerm.toLowerCase()) ||
                            component.description
                              .toLowerCase()
                              .includes(searchTerm.toLowerCase());
                          return matchesCategory && matchesSearch;
                        })
                        .map((component) => (
                          <div
                            key={component.name}
                            onClick={() => handleComponentClick(component.path)}
                            style={{
                              backgroundColor: 'white',
                              borderRadius: '8px',
                              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                              cursor: 'pointer',
                              padding: '24px',
                              border: '1px solid #e5e7eb',
                              transition: 'box-shadow 0.2s',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.boxShadow =
                                '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.boxShadow =
                                '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                            }}
                          >
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                justifyContent: 'space-between',
                                marginBottom: '12px',
                              }}
                            >
                              <h3
                                style={{
                                  fontSize: '18px',
                                  fontWeight: '600',
                                  color: '#111827',
                                }}
                              >
                                {component.name}
                              </h3>
                              <span
                                style={{
                                  fontSize: '12px',
                                  backgroundColor: '#f3f4f6',
                                  color: '#4b5563',
                                  padding: '4px 8px',
                                  borderRadius: '9999px',
                                }}
                              >
                                {component.category}
                              </span>
                            </div>
                            <p
                              style={{
                                color: '#4b5563',
                                fontSize: '14px',
                                lineHeight: '1.6',
                              }}
                            >
                              {component.description}
                            </p>
                            <div
                              style={{
                                marginTop: '16px',
                                display: 'flex',
                                alignItems: 'center',
                                color: '#2563eb',
                                fontSize: '14px',
                                fontWeight: '500',
                              }}
                            >
                              View Component
                              <svg
                                style={{
                                  marginLeft: '4px',
                                  width: '16px',
                                  height: '16px',
                                }}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </div>
                          </div>
                        ))}
                    </div>

                    {/* No Results */}
                    {components.filter((component) => {
                      const matchesCategory =
                        category === 'All' || component.category === category;
                      const matchesSearch =
                        component.name
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase()) ||
                        component.description
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase());
                      return matchesCategory && matchesSearch;
                    }).length === 0 && (
                      <div style={{ textAlign: 'center', padding: '48px 0' }}>
                        <div style={{ color: '#9ca3af', marginBottom: '16px' }}>
                          <svg
                            style={{
                              margin: '0 auto',
                              width: '64px',
                              height: '64px',
                            }}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1}
                              d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33"
                            />
                          </svg>
                        </div>
                        <h3
                          style={{
                            fontSize: '18px',
                            fontWeight: '500',
                            color: '#111827',
                            marginBottom: '8px',
                          }}
                        >
                          No components found
                        </h3>
                        <p style={{ color: '#4b5563' }}>
                          Try adjusting your search or filter criteria
                        </p>
                      </div>
                    )}
                  </div>
                ),
              }))}
              style={{ width: '100%' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
