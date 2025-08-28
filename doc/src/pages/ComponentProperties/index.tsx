import React, { useState } from 'react';
import {
  Button,
  Input,
  Select,
  Flex,
  Badge,
  Card,
  Alert,
  Skeleton,
  Heading,
  Paragraph,
  Text,
  Tabs,
  Accordion,
  Sheet,
  Tooltip,
  Popover,
  Separator,
  HoverCard,
  Collapsible,
  DropdownMenu,
} from 'shadcn-plus';
import {
  User,
  CreditCard,
  Settings,
  Keyboard,
  Users,
  UserPlus,
  Mail,
  MessageSquare,
  PlusCircle,
  Plus,
  Github,
  LifeBuoy,
  Cloud,
  LogOut,
  AlertTriangle,
} from 'lucide-react';

export const ComponentPropertiesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [selectValue, setSelectValue] = useState('');

  const selectOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  const componentSections = [
    {
      name: 'Button',
      category: 'General',
      demos: [
        { title: 'Default Button', component: <Button>Default</Button> },
        {
          title: 'Loading Button',
          component: <Button loading>Loading</Button>,
        },
        {
          title: 'Disabled Button',
          component: <Button disabled>Disabled</Button>,
        },
      ],
    },
    {
      name: 'Typography',
      category: 'General',
      demos: [
        {
          title: 'Heading Level 1',
          component: <Heading level={1}>Heading 1</Heading>,
        },
        {
          title: 'Heading Level 3',
          component: <Heading level={3}>Heading 3</Heading>,
        },
        {
          title: 'Paragraph',
          component: (
            <Paragraph>This is a paragraph with some text content.</Paragraph>
          ),
        },
        {
          title: 'Text Component',
          component: <Text>Simple text component</Text>,
        },
      ],
    },
    {
      name: 'Flex',
      category: 'Layout',
      demos: [
        {
          title: 'Row Direction',
          component: (
            <Flex
              flexDirection="row"
              gap="8px"
              style={{
                border: '1px solid #e5e7eb',
                padding: '8px',
                borderRadius: '4px',
              }}
            >
              <div
                style={{
                  padding: '8px',
                  backgroundColor: '#f3f4f6',
                  borderRadius: '4px',
                }}
              >
                Item 1
              </div>
              <div
                style={{
                  padding: '8px',
                  backgroundColor: '#f3f4f6',
                  borderRadius: '4px',
                }}
              >
                Item 2
              </div>
              <div
                style={{
                  padding: '8px',
                  backgroundColor: '#f3f4f6',
                  borderRadius: '4px',
                }}
              >
                Item 3
              </div>
            </Flex>
          ),
        },
        {
          title: 'Column Direction',
          component: (
            <Flex
              flexDirection="column"
              gap="8px"
              style={{
                border: '1px solid #e5e7eb',
                padding: '8px',
                borderRadius: '4px',
              }}
            >
              <div
                style={{
                  padding: '8px',
                  backgroundColor: '#f3f4f6',
                  borderRadius: '4px',
                }}
              >
                Item 1
              </div>
              <div
                style={{
                  padding: '8px',
                  backgroundColor: '#f3f4f6',
                  borderRadius: '4px',
                }}
              >
                Item 2
              </div>
              <div
                style={{
                  padding: '8px',
                  backgroundColor: '#f3f4f6',
                  borderRadius: '4px',
                }}
              >
                Item 3
              </div>
            </Flex>
          ),
        },
        {
          title: 'Center Alignment',
          component: (
            <Flex
              justifyContent="center"
              alignItems="center"
              style={{
                border: '1px solid #e5e7eb',
                padding: '16px',
                borderRadius: '4px',
                height: '80px',
              }}
            >
              <div
                style={{
                  padding: '8px',
                  backgroundColor: '#f3f4f6',
                  borderRadius: '4px',
                }}
              >
                Centered Item
              </div>
            </Flex>
          ),
        },
        {
          title: 'Space Between',
          component: (
            <Flex
              justifyContent="space-between"
              style={{
                border: '1px solid #e5e7eb',
                padding: '8px',
                borderRadius: '4px',
              }}
            >
              <div
                style={{
                  padding: '8px',
                  backgroundColor: '#f3f4f6',
                  borderRadius: '4px',
                }}
              >
                Start
              </div>
              <div
                style={{
                  padding: '8px',
                  backgroundColor: '#f3f4f6',
                  borderRadius: '4px',
                }}
              >
                End
              </div>
            </Flex>
          ),
        },
      ],
    },
    {
      name: 'Input',
      category: 'Data Entry',
      demos: [
        {
          title: 'Default Input',
          component: (
            <Input
              placeholder="Enter text..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          ),
        },
        {
          title: 'Disabled Input',
          component: <Input placeholder="Disabled input" disabled />,
        },
        {
          title: 'Password Input',
          component: <Input type="password" placeholder="Enter password..." />,
        },
      ],
    },
    {
      name: 'Select',
      category: 'Data Entry',
      demos: [
        {
          title: 'Default Select',
          component: (
            <Select
              options={selectOptions}
              placeholder="Select an option..."
              value={selectValue}
              onValueChange={setSelectValue}
            />
          ),
        },
        {
          title: 'Disabled Select',
          component: (
            <Select
              options={selectOptions}
              placeholder="Disabled select"
              disabled
            />
          ),
        },
      ],
    },
    {
      name: 'Badge',
      category: 'Data Display',
      demos: [
        { title: 'Default Badge', component: <Badge>Default</Badge> },
        {
          title: 'Secondary Badge',
          component: <Badge variant="secondary">Secondary</Badge>,
        },
        {
          title: 'Destructive Badge',
          component: <Badge variant="destructive">Destructive</Badge>,
        },
        {
          title: 'Outline Badge',
          component: <Badge variant="outline">Outline</Badge>,
        },
      ],
    },
    {
      name: 'Card',
      category: 'Data Display',
      demos: [
        {
          title: 'Simple Card',
          component: (
            <Card style={{ width: '200px' }}>
              <div style={{ padding: '16px' }}>
                <h3
                  style={{
                    margin: '0 0 8px 0',
                    fontSize: '16px',
                    fontWeight: '600',
                  }}
                >
                  Card Title
                </h3>
                <p style={{ margin: 0, color: '#6b7280', fontSize: '14px' }}>
                  This is a simple card with some content.
                </p>
              </div>
            </Card>
          ),
        },
        {
          title: 'Card with Header',
          component: (
            <Card
              header="Card Header"
              description="Card description"
              style={{ width: '200px' }}
            >
              <div style={{ padding: '16px' }}>Card content goes here.</div>
            </Card>
          ),
        },
      ],
    },
    {
      name: 'Alert',
      category: 'Feedback',
      demos: [
        {
          title: 'Default Alert',
          component: (
            <Alert
              header="Information"
              description="This is an informational alert message."
            />
          ),
        },
        {
          title: 'Alert with Icon',
          component: (
            <Alert
              header="Warning"
              description="This is a warning alert with an icon."
              icon={AlertTriangle}
            />
          ),
        },
      ],
    },
    {
      name: 'Tabs',
      category: 'Navigation',
      demos: [
        {
          title: 'Basic Tabs',
          component: (
            <Tabs
              items={[
                {
                  key: 'account',
                  label: 'Account',
                  content: (
                    <div style={{ padding: '16px 0' }}>
                      <p>Manage your account settings.</p>
                    </div>
                  ),
                },
                {
                  key: 'password',
                  label: 'Password',
                  content: (
                    <div style={{ padding: '16px 0' }}>
                      <p>Change your password.</p>
                    </div>
                  ),
                },
              ]}
            />
          ),
        },
      ],
    },
    {
      name: 'Accordion',
      category: 'Data Display',
      demos: [
        {
          title: 'Basic Accordion',
          component: (
            <div style={{ width: '300px' }}>
              <Accordion
                type="single"
                collapsible
                items={[
                  {
                    trigger: 'What is shadcn-plus?',
                    content: (
                      <div style={{ color: '#6b7280', fontSize: '14px' }}>
                        <p>A collection of high-quality React components.</p>
                      </div>
                    ),
                  },
                  {
                    trigger: 'How to install?',
                    content: (
                      <div style={{ color: '#6b7280', fontSize: '14px' }}>
                        <p>npm install shadcn-plus</p>
                      </div>
                    ),
                  },
                ]}
              />
            </div>
          ),
        },
      ],
    },
    {
      name: 'Sheet',
      category: 'Overlay',
      demos: [
        {
          title: 'Basic Sheet',
          component: (
            <Sheet
              trigger={<Button variant="outline">Open Sheet</Button>}
              title="Settings"
              description="Manage your preferences."
            >
              <div style={{ padding: '16px' }}>
                <p>Sheet content goes here.</p>
              </div>
            </Sheet>
          ),
        },
      ],
    },
    {
      name: 'Tooltip',
      category: 'Data Display',
      demos: [
        {
          title: 'Basic Tooltip',
          component: (
            <Tooltip trigger={<Button variant="outline">Hover me</Button>}>
              Tooltip content here
            </Tooltip>
          ),
        },
      ],
    },
    {
      name: 'Popover',
      category: 'Data Display',
      demos: [
        {
          title: 'Basic Popover',
          component: (
            <Popover trigger={<Button variant="outline">Open Popover</Button>}>
              <div style={{ padding: '8px' }}>
                <h4 style={{ fontWeight: '600', marginBottom: '8px' }}>
                  Popover Title
                </h4>
                <p style={{ fontSize: '14px', color: '#6b7280' }}>
                  This is popover content.
                </p>
              </div>
            </Popover>
          ),
        },
      ],
    },
    {
      name: 'Separator',
      category: 'Data Display',
      demos: [
        {
          title: 'Horizontal Separator',
          component: (
            <div style={{ width: '200px' }}>
              <div style={{ padding: '8px 0' }}>
                <p style={{ margin: '0', fontSize: '14px' }}>Content above</p>
              </div>
              <Separator />
              <div style={{ padding: '8px 0' }}>
                <p style={{ margin: '0', fontSize: '14px' }}>Content below</p>
              </div>
            </div>
          ),
        },
      ],
    },
    {
      name: 'HoverCard',
      category: 'Data Display',
      demos: [
        {
          title: 'Basic HoverCard',
          component: (
            <HoverCard trigger={<Button variant="link">@username</Button>}>
              <div style={{ padding: '12px' }}>
                <h4 style={{ fontWeight: '600', marginBottom: '4px' }}>
                  User Profile
                </h4>
                <p style={{ fontSize: '14px', color: '#6b7280' }}>
                  Software Developer
                </p>
              </div>
            </HoverCard>
          ),
        },
      ],
    },
    {
      name: 'Collapsible',
      category: 'Data Display',
      demos: [
        {
          title: 'Basic Collapsible',
          component: (
            <Collapsible
              trigger={<Button variant="outline">Toggle Content</Button>}
            >
              <div
                style={{
                  padding: '16px',
                  border: '1px solid #e5e7eb',
                  borderRadius: '4px',
                  marginTop: '8px',
                }}
              >
                <p style={{ margin: '0', fontSize: '14px' }}>
                  This content can be collapsed.
                </p>
              </div>
            </Collapsible>
          ),
        },
      ],
    },
    {
      name: 'DropdownMenu',
      category: 'Navigation',
      demos: [
        {
          title: 'Basic DropdownMenu',
          component: (
            <DropdownMenu
              items={[
                {
                  label: 'My Account',
                  separator: true,
                  type: 'group',
                  children: [
                    {
                      icon: User,
                      label: 'Profile',
                      shortcut: '⇧⌘P',
                    },
                    {
                      icon: CreditCard,
                      label: 'Billing',
                      shortcut: '⌘B',
                    },
                    {
                      icon: Settings,
                      label: 'Settings',
                      shortcut: '⌘S',
                    },
                    {
                      icon: Keyboard,
                      label: 'Keyboard shortcuts',
                      shortcut: '⌘K',
                    },
                  ],
                },
                {
                  type: 'group',
                  separator: true,
                  children: [
                    {
                      icon: Users,
                      label: 'Team',
                    },
                    {
                      icon: UserPlus,
                      label: 'Invite users',
                      children: [
                        {
                          icon: Mail,
                          label: 'Email',
                        },
                        {
                          icon: MessageSquare,
                          label: 'Message',
                        },
                        {
                          type: 'group',
                          separator: true,
                          children: [
                            {
                              icon: PlusCircle,
                              label: 'More...',
                            },
                          ],
                        },
                      ],
                    },
                    {
                      icon: Plus,
                      label: 'New Team',
                      shortcut: '⌘+T',
                    },
                  ],
                },
                {
                  type: 'group',
                  separator: true,
                  children: [
                    {
                      icon: Github,
                      label: 'GitHub',
                    },
                  ],
                },
                {
                  icon: LifeBuoy,
                  label: 'Support',
                },
                {
                  icon: Cloud,
                  label: 'API',
                  disabled: true,
                },
                {
                  type: 'group',
                  separator: true,
                  children: [
                    {
                      icon: LogOut,
                      label: 'Log out',
                      shortcut: '⇧⌘Q',
                    },
                  ],
                },
              ]}
            >
              <Button variant="outline">Open Menu</Button>
            </DropdownMenu>
          ),
        },
      ],
    },
    {
      name: 'Skeleton',
      category: 'Feedback',
      demos: [
        {
          title: 'Text Skeleton',
          component: (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                width: '200px',
              }}
            >
              <Skeleton style={{ height: '20px', borderRadius: '4px' }} />
              <Skeleton
                style={{ height: '20px', borderRadius: '4px', width: '80%' }}
              />
              <Skeleton
                style={{ height: '20px', borderRadius: '4px', width: '60%' }}
              />
            </div>
          ),
        },
        {
          title: 'Avatar Skeleton',
          component: (
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Skeleton
                style={{ width: '40px', height: '40px', borderRadius: '50%' }}
              />
              <div
                style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}
              >
                <Skeleton
                  style={{
                    height: '16px',
                    width: '100px',
                    borderRadius: '4px',
                  }}
                />
                <Skeleton
                  style={{ height: '14px', width: '80px', borderRadius: '4px' }}
                />
              </div>
            </div>
          ),
        },
      ],
    },
  ];

  const filteredSections = componentSections.filter((section) => {
    if (!searchTerm) return true;
    const searchLower = searchTerm.toLowerCase();
    return (
      section.name.toLowerCase().includes(searchLower) ||
      section.category.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div
      style={{
        margin: '0 auto',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h1
            style={{
              fontSize: '36px',
              fontWeight: 'bold',
              color: '#111827',
              marginBottom: '16px',
            }}
          >
            Component Library
          </h1>
          <p
            style={{
              fontSize: '20px',
              color: '#4b5563',
              width: '100%',
              margin: '0 auto',
            }}
          >
            Interactive demonstration of all component properties and their
            visual effects
          </p>
        </div>
        <div style={{ width: '64%', margin: '0 auto 24px auto' }}>
          <Input
            placeholder="Search components..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              marginBottom: 12,
            }}
          />
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '2px 8px',
                fontSize: '12px',
                fontWeight: '500',
                border: '1px solid #d1d5db',
                borderRadius: '4px',
                backgroundColor: 'transparent',
              }}
            >
              {filteredSections.length} components
            </span>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '2px 8px',
                fontSize: '12px',
                fontWeight: '500',
                border: '1px solid #d1d5db',
                borderRadius: '4px',
                backgroundColor: 'transparent',
              }}
            >
              {filteredSections.reduce(
                (total, section) => total + section.demos.length,
                0,
              )}{' '}
              demos
            </span>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {filteredSections.map((section) => (
          <div
            key={section.name}
            style={{
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              backgroundColor: 'white',
              boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
            }}
          >
            <div
              style={{
                padding: '20px 24px 16px 24px',
                borderBottom: '1px solid #e5e7eb',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <h2 style={{ fontSize: '20px', fontWeight: '600', margin: 0 }}>
                  {section.name}
                </h2>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '2px 8px',
                    fontSize: '12px',
                    fontWeight: '500',
                    backgroundColor: '#f3f4f6',
                    color: '#374151',
                    borderRadius: '4px',
                  }}
                >
                  {section.category}
                </span>
              </div>
            </div>

            <div style={{ padding: '24px' }}>
              <div
                style={{
                  display: 'grid',
                  gap: '24px',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                }}
              >
                {section.demos.map((demo, index) => (
                  <div
                    key={index}
                    style={{
                      border: '1px solid #f3f4f6',
                      borderRadius: '6px',
                      padding: '16px',
                      backgroundColor: '#fafafa',
                    }}
                  >
                    <h4
                      style={{
                        fontSize: '14px',
                        fontWeight: '500',
                        margin: '0 0 12px 0',
                        color: '#374151',
                      }}
                    >
                      {demo.title}
                    </h4>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minHeight: '60px',
                        backgroundColor: 'white',
                        border: '1px solid #e5e7eb',
                        borderRadius: '4px',
                        padding: '16px',
                      }}
                    >
                      {demo.component}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredSections.length === 0 && (
        <div style={{ textAlign: 'center', padding: '48px 0' }}>
          <p style={{ color: '#6b7280' }}>
            No components found matching your search.
          </p>
        </div>
      )}
    </div>
  );
};
