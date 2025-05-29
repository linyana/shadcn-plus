import { SidebarProvider } from 'shadcn-plus';
import { LeftMenu } from './LeftMenu';

type IPropsType = {
  children: React.ReactNode;
};

export const LayoutProvider = ({ children }: IPropsType) => (
  <>
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
