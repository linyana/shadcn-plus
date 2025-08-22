import React from 'react';
import { IThemeConfigType } from '../ThemeProvider/types';

/**
 * ThemeConfig - 通用主题配置组件
 * 提供预定义的主题配置，可以被其他模块复用
 */

// 预定义的主题配置
export const defaultThemeConfig: IThemeConfigType = {
  Accordion: {
    style: {},
    className: '',
    Trigger: {
      style: {},
      className: '',
    },
    Content: {
      style: {},
      className: '',
    },
  },
  Button: {
    style: {},
    className: '',
  },
  Card: {
    style: {},
    className: '',
    Header: {
      style: {},
      className: '',
    },
    Content: {
      style: {},
      className: '',
    },
    Footer: {
      style: {},
      className: '',
    },
  },
  Input: {
    style: {},
    className: '',
  },
};

// 深色主题配置
export const darkThemeConfig: IThemeConfigType = {
  Accordion: {
    style: {
      backgroundColor: '#1f2937',
      border: '1px solid #374151',
      borderRadius: '8px',
    },
    className: 'dark-accordion',
    Trigger: {
      style: {
        backgroundColor: '#374151',
        color: '#f9fafb',
        borderBottom: '1px solid #4b5563',
      },
      className: 'hover:bg-gray-600 transition-colors',
    },
    Content: {
      style: {
        backgroundColor: '#111827',
        color: '#d1d5db',
        padding: '16px',
      },
      className: 'dark-content',
    },
  },
  Button: {
    style: {
      backgroundColor: '#374151',
      color: '#f9fafb',
      border: '1px solid #4b5563',
    },
    className: 'hover:bg-gray-600 transition-colors',
  },
  Card: {
    style: {
      backgroundColor: '#1f2937',
      border: '1px solid #374151',
      color: '#f9fafb',
    },
    className: 'dark-card',
    Header: {
      style: {
        borderBottom: '1px solid #374151',
        backgroundColor: '#111827',
      },
      className: 'dark-card-header',
    },
    Content: {
      style: {
        backgroundColor: '#1f2937',
      },
      className: 'dark-card-content',
    },
    Footer: {
      style: {
        borderTop: '1px solid #374151',
        backgroundColor: '#111827',
      },
      className: 'dark-card-footer',
    },
  },
  Input: {
    style: {
      backgroundColor: '#374151',
      border: '1px solid #4b5563',
      color: '#f9fafb',
    },
    className: 'focus:border-blue-400 focus:ring-2 focus:ring-blue-200',
  },
};

// 彩色主题配置
export const colorfulThemeConfig: IThemeConfigType = {
  Accordion: {
    style: {
      borderRadius: '12px',
      border: '2px solid #e2e8f0',
      backgroundColor: '#f8fafc',
    },
    className: 'shadow-lg colorful-accordion',
    Trigger: {
      style: {
        backgroundColor: '#3b82f6',
        color: 'white',
        padding: '16px 20px',
        borderRadius: '8px',
        margin: '4px',
      },
      className: 'hover:bg-blue-600 transition-all duration-200 font-semibold shadow-md',
    },
    Content: {
      style: {
        backgroundColor: 'white',
        padding: '20px',
        margin: '4px 4px 8px 4px',
        borderRadius: '8px',
        border: '1px solid #e2e8f0',
      },
      className: 'shadow-sm colorful-content',
    },
  },
  Button: {
    style: {
      background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
      border: 'none',
      color: 'white',
      borderRadius: '8px',
    },
    className: 'hover:scale-105 transition-transform shadow-lg',
  },
  Card: {
    style: {
      borderRadius: '12px',
      border: '2px solid #e2e8f0',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
    },
    className: 'shadow-xl colorful-card',
  },
  Input: {
    style: {
      borderColor: '#ff6b6b',
      borderWidth: '2px',
      borderRadius: '8px',
    },
    className: 'focus:border-pink-400 focus:ring-2 focus:ring-pink-200 transition-all',
  },
};

// 主题配置工具函数
export const createThemeConfig = (
  baseConfig: IThemeConfigType,
  overrides: Partial<IThemeConfigType> = {}
): IThemeConfigType => {
  return {
    ...baseConfig,
    ...overrides,
    // 深度合并 Accordion 配置
    ...(overrides.Accordion && {
      Accordion: {
        ...baseConfig.Accordion,
        ...overrides.Accordion,
        ...(overrides.Accordion.Trigger && {
          Trigger: {
            ...baseConfig.Accordion?.Trigger,
            ...overrides.Accordion.Trigger,
          },
        }),
        ...(overrides.Accordion.Content && {
          Content: {
            ...baseConfig.Accordion?.Content,
            ...overrides.Accordion.Content,
          },
        }),
      },
    }),
    // 深度合并 Card 配置
    ...(overrides.Card && {
      Card: {
        ...baseConfig.Card,
        ...overrides.Card,
        ...(overrides.Card.Header && {
          Header: {
            ...baseConfig.Card?.Header,
            ...overrides.Card.Header,
          },
        }),
        ...(overrides.Card.Content && {
          Content: {
            ...baseConfig.Card?.Content,
            ...overrides.Card.Content,
          },
        }),
        ...(overrides.Card.Footer && {
          Footer: {
            ...baseConfig.Card?.Footer,
            ...overrides.Card.Footer,
          },
        }),
      },
    }),
  };
};

// 导出所有预定义主题
export const themePresets = {
  default: defaultThemeConfig,
  dark: darkThemeConfig,
  colorful: colorfulThemeConfig,
} as const;

export type ThemePresetName = keyof typeof themePresets;

// 获取预设主题的工具函数
export const getThemePreset = (name: ThemePresetName): IThemeConfigType => {
  return themePresets[name];
};

// 主题配置类型导出
export type { IThemeConfigType, IThemeComponentConfigType } from '../ThemeProvider/types';