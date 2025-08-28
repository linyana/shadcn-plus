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
  config = {},
}) => {
  const getComponentTheme = <T extends keyof IThemeConfigType>(
    componentName: T,
  ): IThemeConfigType[T] | undefined => {
    return config[componentName];
  };

  const contextValue: IThemeContextType = {
    config,
    getComponentTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
