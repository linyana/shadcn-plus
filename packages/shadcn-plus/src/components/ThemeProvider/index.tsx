import React, { createContext } from 'react';
import {
  IThemeProviderPropsType,
  IThemeContextType,
  IThemeConfigType,
  IThemeComponentConfigType,
} from './types';

export const ThemeContext = createContext<IThemeContextType | undefined>(
  undefined,
);

export const ThemeProvider: React.FC<IThemeProviderPropsType> = ({
  children,
  theme = {},
}) => {
  const getComponentTheme = (
    componentName: keyof IThemeConfigType,
  ): IThemeComponentConfigType | undefined => {
    return theme[componentName];
  };

  const contextValue: IThemeContextType = {
    theme,
    getComponentTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
