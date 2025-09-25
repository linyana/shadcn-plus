import { ThemeProvider } from 'shadcn-plus';
import { IThemeConfigType } from 'shadcn-plus/types';

type IPropsType = {
  children: React.ReactNode;
};

export const TestProvider = ({ children }: IPropsType) => {
  const config: IThemeConfigType = {
    Button: {
      style: {
        // backgroundColor: 'blue',
      },
    },
  };
  return <ThemeProvider config={config}>{children}</ThemeProvider>;
};
