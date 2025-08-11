'use client';

import { motion } from 'framer-motion';
import {
  Check,
  ArrowRight,
  Star,
  Shield,
  Users,
  Layers,
  Code,
  Palette,
  Smartphone,
} from 'lucide-react';
import { Accordion } from 'shadcn-plus';
import { useNavigate } from 'react-router-dom';

export const Dashboard = () => {
  const navigate = useNavigate();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const features = [
    {
      title: 'Modern Components',
      description:
        'High-quality React components built on the latest design systems, ready to use out of the box.',
      icon: <Code style={{ width: '20px', height: '20px' }} />,
    },
    {
      title: 'Fully Customizable',
      description:
        'Flexible theming system and style configuration to easily adapt to your brand design.',
      icon: <Palette style={{ width: '20px', height: '20px' }} />,
    },
    {
      title: 'TypeScript Support',
      description:
        'Complete TypeScript type definitions for better development experience and code hints.',
      icon: <Shield style={{ width: '20px', height: '20px' }} />,
    },
    {
      title: 'Responsive Design',
      description:
        'All components are carefully designed to perfectly adapt to various screen sizes and devices.',
      icon: <Smartphone style={{ width: '20px', height: '20px' }} />,
    },
    {
      title: 'Rich Component Library',
      description:
        'Includes buttons, forms, navigation, data display and other common components.',
      icon: <Layers style={{ width: '20px', height: '20px' }} />,
    },
    {
      title: 'Active Community',
      description:
        'Continuously updated and maintained with an active developer community and comprehensive documentation.',
      icon: <Users style={{ width: '20px', height: '20px' }} />,
    },
  ];

  const testimonials = [
    {
      name: 'John Smith',
      role: 'Frontend Developer',
      company: 'Tech Company',
      content:
        'shadcn-plus has greatly improved our development efficiency. The component quality is excellent and the documentation is comprehensive.',
      avatar: '',
    },
    {
      name: 'Sarah Johnson',
      role: 'UI/UX Designer',
      company: 'Design Studio',
      content:
        'This component library has a very modern design style and strong customizability, perfectly meeting our needs.',
      avatar: '',
    },
    {
      name: 'Emily Chen',
      role: 'Product Manager',
      company: 'Internet Company',
      content:
        'After using shadcn-plus, our product development cycle has been shortened by 30%, and team collaboration has become smoother.',
      avatar: '',
    },
  ];

  const faqs = [
    {
      question: 'Is shadcn-plus free to use?',
      answer:
        'Yes, shadcn-plus is an open source project and completely free to use. You can view the source code and contribute on GitHub.',
    },
    {
      question: 'How do I get started with shadcn-plus?',
      answer:
        'You can install shadcn-plus via npm or yarn, then follow our documentation for configuration and usage. We provide detailed installation guides and example code.',
    },
    {
      question: 'Which frameworks does shadcn-plus support?',
      answer:
        'shadcn-plus is primarily designed for React applications and supports mainstream React frameworks like Next.js, Vite, Create React App, and more.',
    },
    {
      question: 'Can I customize component styles?',
      answer:
        'Absolutely! shadcn-plus provides a flexible theming system where you can easily customize colors, fonts, spacing and other style properties, or use CSS variables for deep customization.',
    },
    {
      question: 'How can I get technical support?',
      answer:
        'You can submit issues through GitHub Issues or join our community discussion groups. We also provide detailed documentation and example code to help you solve common problems.',
    },
  ];

  return (
    <div
      style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}
    >
      <main style={{ flex: 1 }}>
        {/* Hero Section */}
        <section
          style={{ width: '100%', padding: '40px 0 160px', overflow: 'hidden' }}
        >
          <div
            style={{
              maxWidth: '1200px',
              margin: '0 auto',
              padding: '0 2rem',
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                zIndex: -10,
                height: '100%',
                width: '100%',
                backgroundColor: 'white',
                backgroundImage:
                  'linear-gradient(to right, #f0f0f0 1px, transparent 1px), linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)',
                backgroundSize: '4rem 4rem',
                maskImage:
                  'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 110%)',
              }}
            ></div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                textAlign: 'center',
                maxWidth: '768px',
                margin: '0 auto 48px',
              }}
            >
              <div
                style={{
                  marginBottom: '16px',
                  borderRadius: '50px',
                  padding: '6px 16px',
                  fontSize: '14px',
                  fontWeight: '500',
                  backgroundColor: '#f3f4f6',
                  color: '#374151',
                  display: 'inline-block',
                }}
              >
                Modern React Component Library
              </div>
              <h1
                style={{
                  fontSize: '3rem',
                  fontWeight: 'bold',
                  letterSpacing: '-0.025em',
                  marginBottom: '24px',
                  background:
                    'linear-gradient(to right, #111827, rgba(17, 24, 39, 0.7))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  lineHeight: '1.1',
                }}
              >
                Build Beautiful User Interfaces with shadcn-plus
              </h1>
              <p
                style={{
                  fontSize: '1.25rem',
                  color: '#6b7280',
                  marginBottom: '32px',
                  maxWidth: '512px',
                  margin: '0 auto 32px',
                  lineHeight: '1.6',
                }}
              >
                A high-quality React component library based on modern design
                systems, helping developers quickly build beautiful and
                accessible user interfaces. Fully customizable and ready to use.
              </p>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    gap: '16px',
                    wrap: 'wrap',
                    justifyContent: 'center',
                  }}
                >
                  <button
                    style={{
                      backgroundColor: '#3b82f6',
                      color: 'white',
                      border: 'none',
                      borderRadius: '50px',
                      height: '48px',
                      padding: '0 32px',
                      fontSize: '16px',
                      fontWeight: '500',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
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
                      navigate('/components/overview');
                    }}
                  >
                    Get Started
                    <ArrowRight
                      style={{
                        marginLeft: '8px',
                        width: '16px',
                        height: '16px',
                      }}
                    />
                  </button>
                  <button
                    style={{
                      backgroundColor: 'transparent',
                      color: '#374151',
                      border: '1px solid #d1d5db',
                      borderRadius: '50px',
                      height: '48px',
                      padding: '0 32px',
                      fontSize: '16px',
                      fontWeight: '500',
                      cursor: 'pointer',
                      transition: 'background-color 0.2s',
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.backgroundColor =
                        '#f9fafb')
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.backgroundColor =
                        'transparent')
                    }
                    onClick={() => {
                      navigate('/components/overview');
                    }}
                  >
                    View Documentation
                  </button>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '16px',
                    marginTop: '24px',
                    fontSize: '14px',
                    color: '#6b7280',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    <Check
                      style={{
                        width: '16px',
                        height: '16px',
                        color: '#3b82f6',
                      }}
                    />
                    <span>Open Source</span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    <Check
                      style={{
                        width: '16px',
                        height: '16px',
                        color: '#3b82f6',
                      }}
                    />
                    <span>TypeScript Support</span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    <Check
                      style={{
                        width: '16px',
                        height: '16px',
                        color: '#3b82f6',
                      }}
                    />
                    <span>Fully Customizable</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{
                position: 'relative',
                margin: '0 auto',
                maxWidth: '1024px',
              }}
            >
              <div
                style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                  border: '1px solid rgba(229, 231, 235, 0.4)',
                  background:
                    'linear-gradient(to bottom, white, rgba(243, 244, 246, 0.2))',
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '400px',
                    backgroundColor: '#f8fafc',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '18px',
                    color: '#64748b',
                  }}
                >
                  Component Library Preview
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          style={{
            width: '100%',
            padding: '80px 0',
            backgroundColor: '#f9fafb',
          }}
        >
          <div
            style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              style={{ textAlign: 'center', marginBottom: '64px' }}
            >
              <h2
                style={{
                  fontSize: '2.25rem',
                  fontWeight: 'bold',
                  marginBottom: '16px',
                  color: '#111827',
                }}
              >
                Why Choose shadcn-plus?
              </h2>
              <p
                style={{
                  fontSize: '1.125rem',
                  color: '#6b7280',
                  maxWidth: '640px',
                  margin: '0 auto',
                }}
              >
                We provide modern, high-quality React components to help you
                quickly build excellent user interfaces
              </p>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '32px',
              }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  style={{
                    backgroundColor: 'white',
                    padding: '32px',
                    borderRadius: '12px',
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                    border: '1px solid #e5e7eb',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    const target = e.currentTarget as HTMLElement;
                    target.style.transform = 'translateY(-4px)';
                    target.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    const target = e.currentTarget as HTMLElement;
                    target.style.transform = 'translateY(0)';
                    target.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      backgroundColor: '#eff6ff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '16px',
                      color: '#3b82f6',
                    }}
                  >
                    {feature.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: '600',
                      marginBottom: '8px',
                      color: '#111827',
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" style={{ width: '100%', padding: '80px 0' }}>
          <div
            style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              style={{ textAlign: 'center', marginBottom: '64px' }}
            >
              <h2
                style={{
                  fontSize: '2.25rem',
                  fontWeight: 'bold',
                  marginBottom: '16px',
                  color: '#111827',
                }}
              >
                What Users Say
              </h2>
              <p style={{ fontSize: '1.125rem', color: '#6b7280' }}>
                Feedback from real users
              </p>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '32px',
              }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  style={{
                    backgroundColor: 'white',
                    padding: '32px',
                    borderRadius: '12px',
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                    border: '1px solid #e5e7eb',
                  }}
                >
                  <div style={{ display: 'flex', marginBottom: '16px' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        style={{
                          width: '16px',
                          height: '16px',
                          fill: '#fbbf24',
                          color: '#fbbf24',
                        }}
                      />
                    ))}
                  </div>
                  <p
                    style={{
                      color: '#374151',
                      marginBottom: '24px',
                      lineHeight: '1.6',
                    }}
                  >
                    "{testimonial.content}"
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                    }}
                  >
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: '#e5e7eb',
                        backgroundImage: `url(${testimonial.avatar})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    ></div>
                    <div>
                      <div style={{ fontWeight: '600', color: '#111827' }}>
                        {testimonial.name}
                      </div>
                      <div style={{ fontSize: '14px', color: '#6b7280' }}>
                        {testimonial.role} · {testimonial.company}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          id="faq"
          style={{
            width: '100%',
            padding: '80px 0',
            backgroundColor: '#f9fafb',
          }}
        >
          <div
            style={{ maxWidth: '768px', margin: '0 auto', padding: '0 2rem' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              style={{ textAlign: 'center', marginBottom: '64px' }}
            >
              <h2
                style={{
                  fontSize: '2.25rem',
                  fontWeight: 'bold',
                  marginBottom: '16px',
                  color: '#111827',
                }}
              >
                Frequently Asked Questions
              </h2>
              <p style={{ fontSize: '1.125rem', color: '#6b7280' }}>
                Common questions and answers about shadcn-plus
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Accordion
                type="single"
                collapsible
                style={{ width: '100%' }}
                items={faqs.map((faq, index) => ({
                  key: `item-${index}`,
                  trigger: (
                    <span
                      style={{
                        fontSize: '16px',
                        fontWeight: '500',
                        textAlign: 'left',
                        color: '#111827',
                      }}
                    >
                      {faq.question}
                    </span>
                  ),
                  content: (
                    <div
                      style={{
                        color: '#6b7280',
                        lineHeight: '1.6',
                      }}
                    >
                      {faq.answer}
                    </div>
                  ),
                }))}
              />
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{ width: '100%', padding: '80px 0' }}>
          <div
            style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              style={{
                backgroundColor: '#3b82f6',
                borderRadius: '16px',
                padding: '64px 32px',
                textAlign: 'center',
                color: 'white',
              }}
            >
              <h2
                style={{
                  fontSize: '2.25rem',
                  fontWeight: 'bold',
                  marginBottom: '16px',
                }}
              >
                Ready to Get Started?
              </h2>
              <p
                style={{
                  fontSize: '1.125rem',
                  marginBottom: '32px',
                  opacity: 0.9,
                }}
              >
                Start using shadcn-plus today and build your next amazing
                project
              </p>
              <div
                style={{
                  display: 'flex',
                  gap: '16px',
                  justifyContent: 'center',
                  wrap: 'wrap',
                }}
              >
                <button
                  style={{
                    backgroundColor: 'white',
                    color: '#3b82f6',
                    border: 'none',
                    borderRadius: '50px',
                    height: '48px',
                    padding: '0 32px',
                    fontSize: '16px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'background-color 0.2s',
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.backgroundColor =
                      '#f9fafb')
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.backgroundColor =
                      'white')
                  }
                  onClick={() => {
                    navigate('/components/overview');
                  }}
                >
                  Get Started
                  <ArrowRight
                    style={{ marginLeft: '8px', width: '16px', height: '16px' }}
                  />
                </button>
                <button
                  style={{
                    backgroundColor: 'transparent',
                    color: 'white',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '50px',
                    height: '48px',
                    padding: '0 32px',
                    fontSize: '16px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s',
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.backgroundColor =
                      'rgba(255, 255, 255, 0.1)')
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.backgroundColor =
                      'transparent')
                  }
                >
                  View GitHub
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: '#111827',
          color: 'white',
          padding: '48px 0',
        }}
      >
        <div
          style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '32px',
              marginBottom: '32px',
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '16px',
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
                    fontWeight: 'bold',
                  }}
                >
                  S+
                </div>
                <span style={{ fontWeight: 'bold', fontSize: '18px' }}>
                  shadcn-plus
                </span>
              </div>
              <p style={{ color: '#9ca3af', lineHeight: '1.6' }}>
                A modern React component library that helps developers build
                beautiful and accessible user interfaces.
              </p>
            </div>
            <div>
              <h3 style={{ fontWeight: '600', marginBottom: '16px' }}>
                Resources
              </h3>
              <div
                style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}
              >
                <a
                  href="https://linyana.github.io/shadcn-plus/#/components"
                  style={{ color: '#9ca3af', textDecoration: 'none' }}
                >
                  Documentation
                </a>
                <a
                  href="https://linyana.github.io/shadcn-plus/#/components"
                  style={{ color: '#9ca3af', textDecoration: 'none' }}
                >
                  Components
                </a>
                <a
                  href="https://linyana.github.io/shadcn-plus/#/components"
                  style={{ color: '#9ca3af', textDecoration: 'none' }}
                >
                  Examples
                </a>
              </div>
            </div>
            <div>
              <h3 style={{ fontWeight: '600', marginBottom: '16px' }}>
                Community
              </h3>
              <div
                style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}
              >
                <a
                  href="https://github.com/linyana/shadcn-plus"
                  style={{ color: '#9ca3af', textDecoration: 'none' }}
                >
                  GitHub
                </a>
                <a
                  href="https://www.npmjs.com/package/shadcn-plus"
                  style={{ color: '#9ca3af', textDecoration: 'none' }}
                >
                  NPM
                </a>
              </div>
            </div>
          </div>
          <div
            style={{
              borderTop: '1px solid #374151',
              paddingTop: '32px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              wrap: 'wrap',
              gap: '16px',
            }}
          >
            <p style={{ color: '#9ca3af' }}>
              © 2024 shadcn-plus. All rights reserved.
            </p>
            <div style={{ display: 'flex', gap: '24px' }}>
              <a
                href="#"
                style={{
                  color: '#9ca3af',
                  textDecoration: 'none',
                  fontSize: '14px',
                }}
              >
                Privacy Policy
              </a>
              <a
                href="#"
                style={{
                  color: '#9ca3af',
                  textDecoration: 'none',
                  fontSize: '14px',
                }}
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
