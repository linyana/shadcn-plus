
"use client"

import { useState, useEffect } from "react"

import { motion } from "framer-motion"
import {
  Check,
  ChevronRight,
  Menu,
  X,
  ArrowRight,
  Star,
  Zap,
  Shield,
  Users,
  BarChart,
  Layers,
  Code,
  Palette,
  Smartphone,
} from "lucide-react"
import { Accordion, Tabs } from "shadcn-plus"

export const Dashboard = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const features = [
    {
      title: "现代化组件",
      description: "基于最新设计系统构建的高质量React组件，开箱即用。",
      icon: <Code style={{ width: "20px", height: "20px" }} />,
    },
    {
      title: "完全可定制",
      description: "灵活的主题系统和样式配置，轻松适配您的品牌设计。",
      icon: <Palette style={{ width: "20px", height: "20px" }} />,
    },
    {
      title: "TypeScript 支持",
      description: "完整的TypeScript类型定义，提供更好的开发体验和代码提示。",
      icon: <Shield style={{ width: "20px", height: "20px" }} />,
    },
    {
      title: "响应式设计",
      description: "所有组件都经过精心设计，完美适配各种屏幕尺寸和设备。",
      icon: <Smartphone style={{ width: "20px", height: "20px" }} />,
    },
    {
      title: "丰富的组件库",
      description: "包含按钮、表单、导航、数据展示等各类常用组件。",
      icon: <Layers style={{ width: "20px", height: "20px" }} />,
    },
    {
      title: "活跃的社区",
      description: "持续更新维护，拥有活跃的开发者社区和完善的文档。",
      icon: <Users style={{ width: "20px", height: "20px" }} />,
    },
  ]

  const testimonials = [
    {
      name: "张伟",
      role: "前端开发工程师",
      company: "科技公司",
      content: "shadcn-plus 大大提升了我们的开发效率，组件质量很高，文档也很完善。",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "李小明",
      role: "UI/UX 设计师",
      company: "设计工作室",
      content: "这个组件库的设计风格很现代，而且可定制性很强，完全符合我们的需求。",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "王芳",
      role: "产品经理",
      company: "互联网公司",
      content: "使用 shadcn-plus 后，我们的产品开发周期缩短了30%，团队协作也更加顺畅。",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    },
  ]

  const faqs = [
    {
      question: "shadcn-plus 是免费的吗？",
      answer: "是的，shadcn-plus 是一个开源项目，完全免费使用。您可以在 GitHub 上查看源代码并贡献代码。",
    },
    {
      question: "如何开始使用 shadcn-plus？",
      answer: "您可以通过 npm 或 yarn 安装 shadcn-plus，然后按照我们的文档进行配置和使用。我们提供了详细的安装指南和示例代码。",
    },
    {
      question: "shadcn-plus 支持哪些框架？",
      answer: "shadcn-plus 主要为 React 应用程序设计，支持 Next.js、Vite、Create React App 等主流 React 框架。",
    },
    {
      question: "可以自定义组件样式吗？",
      answer: "当然可以！shadcn-plus 提供了灵活的主题系统，您可以轻松自定义颜色、字体、间距等样式属性，也可以通过 CSS 变量进行深度定制。",
    },
    {
      question: "如何获得技术支持？",
      answer: "您可以通过 GitHub Issues 提交问题，或者加入我们的社区讨论群。我们也提供详细的文档和示例代码来帮助您解决常见问题。",
    },
  ]

  return (
    <div style={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          width: "100%",
          backdropFilter: "blur(16px)",
          transition: "all 0.3s",
          backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.8)" : "transparent",
          boxShadow: isScrolled ? "0 1px 3px rgba(0, 0, 0, 0.1)" : "none",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            height: "64px",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 2rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: "bold" }}>
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "8px",
                background: "linear-gradient(135deg, #3b82f6, rgba(59, 130, 246, 0.7))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
              }}
            >
              S+
            </div>
            <span>shadcn-plus</span>
          </div>
          <nav style={{ display: "none", gap: "32px" }} className="md-flex">
            <a
              href="#features"
              style={{
                fontSize: "14px",
                fontWeight: "500",
                color: "#6b7280",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#111827")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#6b7280")}
            >
              特性
            </a>
            <a
              href="#testimonials"
              style={{
                fontSize: "14px",
                fontWeight: "500",
                color: "#6b7280",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#111827")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#6b7280")}
            >
              用户评价
            </a>
            <a
              href="#faq"
              style={{
                fontSize: "14px",
                fontWeight: "500",
                color: "#6b7280",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#111827")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#6b7280")}
            >
              常见问题
            </a>
          </nav>
          <div style={{ display: "none", gap: "16px", alignItems: "center" }} className="md-flex">
            <a
               href="#"
               style={{
                 fontSize: "14px",
                 fontWeight: "500",
                 color: "#6b7280",
                 textDecoration: "none",
                 transition: "color 0.2s",
               }}
               onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#111827")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#6b7280")}
             >
               GitHub
             </a>
            <button
              style={{
                backgroundColor: "#3b82f6",
                color: "white",
                border: "none",
                borderRadius: "50px",
                padding: "8px 16px",
                fontSize: "14px",
                fontWeight: "500",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "4px",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#2563eb")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#3b82f6")}
            >
              开始使用
              <ChevronRight style={{ marginLeft: "4px", width: "16px", height: "16px" }} />
            </button>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }} className="md-hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: "transparent",
                border: "none",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              {mobileMenuOpen ? (
                <X style={{ width: "20px", height: "20px" }} />
              ) : (
                <Menu style={{ width: "20px", height: "20px" }} />
              )}
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: "absolute",
              top: "64px",
              left: 0,
              right: 0,
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(16px)",
              borderBottom: "1px solid #e5e7eb",
            }}
            className="md-hidden"
          >
            <div
              style={{
                maxWidth: "1200px",
                margin: "0 auto",
                padding: "16px 2rem",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <a
                 href="#features"
                 style={{
                   padding: "8px 0",
                   fontSize: "14px",
                   fontWeight: "500",
                   textDecoration: "none",
                   color: "#111827",
                 }}
                 onClick={() => setMobileMenuOpen(false)}
               >
                 特性
               </a>
              <a
                 href="#testimonials"
                 style={{
                   padding: "8px 0",
                   fontSize: "14px",
                   fontWeight: "500",
                   textDecoration: "none",
                   color: "#111827",
                 }}
                 onClick={() => setMobileMenuOpen(false)}
               >
                 用户评价
               </a>
              <a
                 href="#faq"
                 style={{
                   padding: "8px 0",
                   fontSize: "14px",
                   fontWeight: "500",
                   textDecoration: "none",
                   color: "#111827",
                 }}
                 onClick={() => setMobileMenuOpen(false)}
               >
                 常见问题
               </a>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  paddingTop: "8px",
                  borderTop: "1px solid #e5e7eb",
                }}
              >
                <a
                   href="#"
                   style={{
                     padding: "8px 0",
                     fontSize: "14px",
                     fontWeight: "500",
                     textDecoration: "none",
                     color: "#111827",
                   }}
                   onClick={() => setMobileMenuOpen(false)}
                 >
                   GitHub
                 </a>
                <button
                  style={{
                    backgroundColor: "#3b82f6",
                    color: "white",
                    border: "none",
                    borderRadius: "50px",
                    padding: "8px 16px",
                    fontSize: "14px",
                    fontWeight: "500",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  开始使用
                  <ChevronRight style={{ marginLeft: "4px", width: "16px", height: "16px" }} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </header>
      <main style={{ flex: 1 }}>
        {/* Hero Section */}
        <section style={{ width: "100%", padding: "80px 0 160px", overflow: "hidden" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem", position: "relative" }}>
            <div
              style={{
                position: "absolute",
                inset: 0,
                zIndex: -10,
                height: "100%",
                width: "100%",
                backgroundColor: "white",
                backgroundImage:
                  "linear-gradient(to right, #f0f0f0 1px, transparent 1px), linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)",
                backgroundSize: "4rem 4rem",
                maskImage: "radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 110%)",
              }}
            ></div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ textAlign: "center", maxWidth: "768px", margin: "0 auto 48px" }}
            >
              <div
                style={{
                  marginBottom: "16px",
                  borderRadius: "50px",
                  padding: "6px 16px",
                  fontSize: "14px",
                  fontWeight: "500",
                  backgroundColor: "#f3f4f6",
                  color: "#374151",
                  display: "inline-block",
                }}
              >
                现代化 React 组件库
              </div>
              <h1
                style={{
                  fontSize: "3rem",
                  fontWeight: "bold",
                  letterSpacing: "-0.025em",
                  marginBottom: "24px",
                  background: "linear-gradient(to right, #111827, rgba(17, 24, 39, 0.7))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  lineHeight: "1.1",
                }}
              >
                构建精美的用户界面，从 shadcn-plus 开始
              </h1>
              <p
                style={{
                  fontSize: "1.25rem",
                  color: "#6b7280",
                  marginBottom: "32px",
                  maxWidth: "512px",
                  margin: "0 auto 32px",
                  lineHeight: "1.6",
                }}
              >
                基于现代设计系统的高质量 React 组件库，帮助开发者快速构建美观、可访问的用户界面。
                完全可定制，开箱即用。
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
                  <button
                    style={{
                      backgroundColor: "#3b82f6",
                      color: "white",
                      border: "none",
                      borderRadius: "50px",
                      height: "48px",
                      padding: "0 32px",
                      fontSize: "16px",
                      fontWeight: "500",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      transition: "background-color 0.2s",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#2563eb")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#3b82f6")}
                  >
                    开始使用
                    <ArrowRight style={{ marginLeft: "8px", width: "16px", height: "16px" }} />
                  </button>
                  <button
                    style={{
                      backgroundColor: "transparent",
                      color: "#374151",
                      border: "1px solid #d1d5db",
                      borderRadius: "50px",
                      height: "48px",
                      padding: "0 32px",
                      fontSize: "16px",
                      fontWeight: "500",
                      cursor: "pointer",
                      transition: "background-color 0.2s",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#f9fafb")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "transparent")}
                  >
                    查看文档
                  </button>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "16px",
                    marginTop: "24px",
                    fontSize: "14px",
                    color: "#6b7280",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    <Check style={{ width: "16px", height: "16px", color: "#3b82f6" }} />
                    <span>开源免费</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    <Check style={{ width: "16px", height: "16px", color: "#3b82f6" }} />
                    <span>TypeScript 支持</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    <Check style={{ width: "16px", height: "16px", color: "#3b82f6" }} />
                    <span>完全可定制</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{ position: "relative", margin: "0 auto", maxWidth: "1024px" }}
            >
              <div
                style={{
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  border: "1px solid rgba(229, 231, 235, 0.4)",
                  background: "linear-gradient(to bottom, white, rgba(243, 244, 246, 0.2))",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "400px",
                    backgroundColor: "#f8fafc",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "18px",
                    color: "#64748b",
                  }}
                >
                  组件库预览图
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" style={{ width: "100%", padding: "80px 0", backgroundColor: "#f9fafb" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              style={{ textAlign: "center", marginBottom: "64px" }}
            >
              <h2
                style={{
                  fontSize: "2.25rem",
                  fontWeight: "bold",
                  marginBottom: "16px",
                  color: "#111827",
                }}
              >
                为什么选择 shadcn-plus？
              </h2>
              <p style={{ fontSize: "1.125rem", color: "#6b7280", maxWidth: "640px", margin: "0 auto" }}>
                我们提供现代化、高质量的 React 组件，帮助您快速构建出色的用户界面
              </p>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "32px",
              }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  style={{
                    backgroundColor: "white",
                    padding: "32px",
                    borderRadius: "12px",
                    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                    border: "1px solid #e5e7eb",
                    transition: "transform 0.2s, box-shadow 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    const target = e.currentTarget as HTMLElement;
                    target.style.transform = "translateY(-4px)";
                    target.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.15)";
                  }}
                  onMouseLeave={(e) => {
                    const target = e.currentTarget as HTMLElement;
                    target.style.transform = "translateY(0)";
                    target.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.1)";
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      backgroundColor: "#eff6ff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "16px",
                      color: "#3b82f6",
                    }}
                  >
                    {feature.icon}
                  </div>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "8px", color: "#111827" }}>
                    {feature.title}
                  </h3>
                  <p style={{ color: "#6b7280", lineHeight: "1.6" }}>{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" style={{ width: "100%", padding: "80px 0" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              style={{ textAlign: "center", marginBottom: "64px" }}
            >
              <h2
                style={{
                  fontSize: "2.25rem",
                  fontWeight: "bold",
                  marginBottom: "16px",
                  color: "#111827",
                }}
              >
                用户怎么说
              </h2>
              <p style={{ fontSize: "1.125rem", color: "#6b7280" }}>来自真实用户的反馈</p>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "32px",
              }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  style={{
                    backgroundColor: "white",
                    padding: "32px",
                    borderRadius: "12px",
                    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                    border: "1px solid #e5e7eb",
                  }}
                >
                  <div style={{ display: "flex", marginBottom: "16px" }}>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        style={{
                          width: "16px",
                          height: "16px",
                          fill: "#fbbf24",
                          color: "#fbbf24",
                        }}
                      />
                    ))}
                  </div>
                  <p style={{ color: "#374151", marginBottom: "24px", lineHeight: "1.6" }}>
                    "{testimonial.content}"
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: "#e5e7eb",
                        backgroundImage: `url(${testimonial.avatar})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></div>
                    <div>
                      <div style={{ fontWeight: "600", color: "#111827" }}>{testimonial.name}</div>
                      <div style={{ fontSize: "14px", color: "#6b7280" }}>
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
        <section id="faq" style={{ width: "100%", padding: "80px 0", backgroundColor: "#f9fafb" }}>
          <div style={{ maxWidth: "768px", margin: "0 auto", padding: "0 2rem" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              style={{ textAlign: "center", marginBottom: "64px" }}
            >
              <h2
                style={{
                  fontSize: "2.25rem",
                  fontWeight: "bold",
                  marginBottom: "16px",
                  color: "#111827",
                }}
              >
                常见问题
              </h2>
              <p style={{ fontSize: "1.125rem", color: "#6b7280" }}>关于 shadcn-plus 的常见问题解答</p>
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
                style={{ width: "100%" }}
                items={faqs.map((faq, index) => ({
                  key: `item-${index}`,
                  trigger: (
                    <span
                      style={{
                        fontSize: "16px",
                        fontWeight: "500",
                        textAlign: "left",
                        color: "#111827",
                      }}
                    >
                      {faq.question}
                    </span>
                  ),
                  content: (
                    <div
                      style={{
                        color: "#6b7280",
                        lineHeight: "1.6",
                      }}
                    >
                      {faq.answer}
                    </div>
                  )
                }))}
              />
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{ width: "100%", padding: "80px 0" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              style={{
                backgroundColor: "#3b82f6",
                borderRadius: "16px",
                padding: "64px 32px",
                textAlign: "center",
                color: "white",
              }}
            >
              <h2 style={{ fontSize: "2.25rem", fontWeight: "bold", marginBottom: "16px" }}>
                准备开始了吗？
              </h2>
              <p style={{ fontSize: "1.125rem", marginBottom: "32px", opacity: 0.9 }}>
                立即开始使用 shadcn-plus，构建您的下一个出色项目
              </p>
              <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
                <button
                  style={{
                    backgroundColor: "white",
                    color: "#3b82f6",
                    border: "none",
                    borderRadius: "50px",
                    height: "48px",
                    padding: "0 32px",
                    fontSize: "16px",
                    fontWeight: "500",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    transition: "background-color 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#f9fafb")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "white")}
                >
                  开始使用
                  <ArrowRight style={{ marginLeft: "8px", width: "16px", height: "16px" }} />
                </button>
                <button
                  style={{
                    backgroundColor: "transparent",
                    color: "white",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    borderRadius: "50px",
                    height: "48px",
                    padding: "0 32px",
                    fontSize: "16px",
                    fontWeight: "500",
                    cursor: "pointer",
                    transition: "background-color 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255, 255, 255, 0.1)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "transparent")}
                >
                  查看 GitHub
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: "#111827", color: "white", padding: "48px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "32px",
              marginBottom: "32px",
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    background: "linear-gradient(135deg, #3b82f6, rgba(59, 130, 246, 0.7))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  S+
                </div>
                <span style={{ fontWeight: "bold", fontSize: "18px" }}>shadcn-plus</span>
              </div>
              <p style={{ color: "#9ca3af", lineHeight: "1.6" }}>
                现代化的 React 组件库，帮助开发者构建美观、可访问的用户界面。
              </p>
            </div>
            <div>
              <h3 style={{ fontWeight: "600", marginBottom: "16px" }}>资源</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                 <a href="#" style={{ color: "#9ca3af", textDecoration: "none" }}>
                   文档
                 </a>
                 <a href="#" style={{ color: "#9ca3af", textDecoration: "none" }}>
                   组件
                 </a>
                 <a href="#" style={{ color: "#9ca3af", textDecoration: "none" }}>
                   示例
                 </a>
                 <a href="#" style={{ color: "#9ca3af", textDecoration: "none" }}>
                   更新日志
                 </a>
               </div>
            </div>
            <div>
              <h3 style={{ fontWeight: "600", marginBottom: "16px" }}>社区</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                 <a href="#" style={{ color: "#9ca3af", textDecoration: "none" }}>
                   GitHub
                 </a>
                 <a href="#" style={{ color: "#9ca3af", textDecoration: "none" }}>
                   Discord
                 </a>
                 <a href="#" style={{ color: "#9ca3af", textDecoration: "none" }}>
                   Twitter
                 </a>
                 <a href="#" style={{ color: "#9ca3af", textDecoration: "none" }}>
                   贡献指南
                 </a>
               </div>
            </div>
          </div>
          <div
            style={{
              borderTop: "1px solid #374151",
              paddingTop: "32px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <p style={{ color: "#9ca3af" }}>© 2024 shadcn-plus. 保留所有权利。</p>
            <div style={{ display: "flex", gap: "24px" }}>
               <a href="#" style={{ color: "#9ca3af", textDecoration: "none", fontSize: "14px" }}>
                 隐私政策
               </a>
               <a href="#" style={{ color: "#9ca3af", textDecoration: "none", fontSize: "14px" }}>
                 使用条款
               </a>
             </div>
          </div>
        </div>
      </footer>
    </div>
  )
}