import { Button } from "../Button"
import {
  ICustomItemType,
  IDefaultItemType,
  ILabelItemType,
  ISeparatorItemType
} from "../types"

export type ISidebarProviderType = {
  children: React.ReactNode
}

export type ISidebarType = React.ComponentProps<"div"> & {
  side?: "left" | "right"
  variant?: "sidebar" | "floating" | "inset"
  collapsible?: "offcanvas" | "icon" | "none"
  items: ISidebarItemType[]
}

export type ISidebarTriggerType = React.ComponentProps<typeof Button>

type IGroupItemType = { type: 'group'; items: ISidebarItemType[] };

export type ISidebarItemType = ILabelItemType
| ISeparatorItemType
| IGroupItemType
| ICustomItemType
| IDefaultItemType;