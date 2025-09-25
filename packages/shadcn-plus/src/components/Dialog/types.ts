import * as React from "react"
import * as ShadcnDialog from "@/components/ui/dialog"
import { IThemeComponentConfigType } from "../types"

export interface IDialogPropsType
  extends React.ComponentPropsWithoutRef<typeof ShadcnDialog.Dialog> {
  header?: React.ReactNode
  description?: React.ReactNode
  footer?: React.ReactNode
  children?: React.ReactNode
  closeButton?: React.ReactNode
  overlay?: React.ReactNode

  headerProps?: Omit<React.ComponentPropsWithoutRef<typeof ShadcnDialog.DialogHeader>, "children"> & {
    titleProps?: React.ComponentPropsWithoutRef<typeof ShadcnDialog.DialogTitle>
    descriptionProps?: React.ComponentPropsWithoutRef<typeof ShadcnDialog.DialogDescription>
  }

  footerProps?: Omit<React.ComponentPropsWithoutRef<typeof ShadcnDialog.DialogFooter>, "children">

  contentProps?: Omit<React.ComponentPropsWithoutRef<typeof ShadcnDialog.DialogContentOnly>, "children">
}

export interface IDialogThemeType {
  Root?: IThemeComponentConfigType
  Overlay?: IThemeComponentConfigType
  Content?: IThemeComponentConfigType
  Header?: IThemeComponentConfigType & {
    Title?: IThemeComponentConfigType
    Description?: IThemeComponentConfigType
  }
  Footer?: IThemeComponentConfigType
}
