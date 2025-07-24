import { SidebarProvider } from 'shadcn-plus';
import { LeftMenu } from './LeftMenu';
import { useLocation } from 'react-router-dom';

type IPropsType = {
  children: React.ReactNode;
};

export const LayoutProvider = ({ children }: IPropsType) => {
  const { pathname } = useLocation();
  
  // Dashboard页面不显示左侧边栏
  const isDashboard = pathname === '/';
  
  if (isDashboard) {
    return <>{children}</>;
  }
  
  // Components页面显示左侧边栏
  return (
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
  );
};
