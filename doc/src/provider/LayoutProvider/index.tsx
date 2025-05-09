import { SidebarProvider } from 'shadcn-plus';
import { LeftMenu } from './LeftMenu';

type IPropsType = {
  children: React.ReactNode;
};

export const LayoutProvider = ({
  children,
}: IPropsType) => (
  <>
    <SidebarProvider>
      <LeftMenu />
      <div style={{
        width: '100%',
        padding: 32,
      }}>
        {children}
      </div>
    </SidebarProvider>
  </>
);
