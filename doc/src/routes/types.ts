import { ISidebarItemType } from "shadcn-plus/types";

export type IRouteType = {
  id: string;
  element?: React.ReactNode;
  path?: string;
  text?: string;
  icon?: React.ReactNode;
  leftMenu?: boolean;
  sidebar?: ISidebarItemType
};