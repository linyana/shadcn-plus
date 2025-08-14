import { ThemeContext } from '@/components';
import { IThemeConfigType, IThemeContextType } from '@/types';
import { useContext } from 'react';

export const useTheme = (): IThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    return {
      config: {},
      getComponentTheme: () => undefined,
    };
  }
  return context;
};

export const useComponentTheme = <K extends keyof IThemeConfigType>(
  componentName: K,
): NonNullable<IThemeConfigType[K]> => {
  const { getComponentTheme } = useTheme();
  const componentTheme = getComponentTheme(componentName);

  return {
    style: componentTheme?.style || {},
    className: componentTheme?.className || '',
  } as NonNullable<IThemeConfigType[K]>;
};
