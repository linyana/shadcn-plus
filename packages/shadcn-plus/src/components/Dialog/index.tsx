import {
  Dialog as ShadcnDialog,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogClose,
  DialogContentOnly,
} from "@/components/ui/dialog"
import { Show } from "../Show"
import { cn, sn } from "@/lib/utils"
import { useComponentTheme } from "@/hooks"
import { IDialogPropsType } from "./types"
import { XIcon } from "lucide-react"

export const Dialog = ({
  open,
  onOpenChange,
  header,
  description,
  footer,
  children,
  headerProps,
  footerProps,
  contentProps,
  closeButton,
  overlay,
  ...props
}: IDialogPropsType) => {
  const theme = useComponentTheme("Dialog")

  return (
    <ShadcnDialog open={open} onOpenChange={onOpenChange} {...props}>
      <DialogPortal>
        <Show hideWhen={null} condition={overlay}>
          { 
            overlay ? <>{overlay}</> : (
              <DialogOverlay className={cn(theme.Overlay)} style={sn(theme.Overlay)} />
            )
          }
        </Show>

        <DialogContentOnly
          {...contentProps}
          className={cn(theme.Content, contentProps)}
          style={sn(theme.Content, contentProps)}
        >

          <Show hideWhen={null} condition={header || description}>
            <DialogHeader
              {...headerProps}
              className={cn(theme.Header, headerProps)}
              style={sn(theme.Header, headerProps)}
            >
              <Show hideWhen={null} condition={header}>
                <DialogTitle
                  {...headerProps?.titleProps}
                  className={cn(
                    theme.Header?.Title,
                    headerProps?.titleProps
                  )}
                  style={sn(
                    theme.Header?.Title,
                    headerProps?.titleProps
                  )}
                >
                  {header}
                </DialogTitle>
              </Show>

              <Show hideWhen={null} condition={description}>
                <DialogDescription
                  {...headerProps?.descriptionProps}
                  className={cn(
                    theme.Header?.Description,
                    headerProps?.descriptionProps
                  )}
                  style={sn(
                    theme.Header?.Description,
                    headerProps?.descriptionProps
                  )}
                >
                  {description}
                </DialogDescription>
              </Show>

            </DialogHeader>
          </Show>
          
          <div>
            {children}
          </div>

          <Show hideWhen={null} condition={footer}>
            <div
              {...footerProps}
              data-slot="dialog-footer"
              className={cn(theme.Footer, footerProps)}
              style={sn(theme.Footer, footerProps)}
            >
              {footer}
            </div>
          </Show>

          {/* Close Button */}
          <Show hideWhen={null} condition={closeButton}>
            {closeButton ? <>{closeButton}</> : (
              <DialogClose
                data-slot="dialog-close"
                className="ring-offset-background cursor-pointer focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
              >
                <XIcon />
                <span className="sr-only">Close</span>
              </DialogClose>
            )}
          </Show>
        </DialogContentOnly>
      </DialogPortal>
    </ShadcnDialog>
  )
}
