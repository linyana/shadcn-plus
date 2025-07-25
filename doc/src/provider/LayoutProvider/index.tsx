import { SidebarProvider } from 'shadcn-plus';
import { LeftMenu } from './LeftMenu';
import { Header } from './Header';
import { useLocation } from 'react-router-dom';

type IPropsType = {
  children: React.ReactNode;
};

export const LayoutProvider = ({ children }: IPropsType) => {
  const { pathname } = useLocation();

  const isDashboard = pathname === '/';

  if (isDashboard) {
    return (
      <>
        <Header />
        {children}
      </>
    );
  }

  return (
    <>
      {isDashboard ? <Header /> : <></>}
      <SidebarProvider>
        <LeftMenu />
        <div
          style={{
            width: 'calc(100% - 256px)',
            padding: 32,
          }}
        >
          {children}
        </div>
      </SidebarProvider>
    </>
  );
};
