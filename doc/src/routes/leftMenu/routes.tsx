import {
  ButtonPage,
  DropdownMenuPage,
  FlexPage,
  InputPage,
  PopoverPage,
  SelectPage,
  SidebarPage,
  TooltipPage,
} from '@/pages';

export const leftMenuRoutes = {
  '/components/button': <ButtonPage />,
  '/components/flex': <FlexPage />,
  '/components/dropdown-menu': <DropdownMenuPage />,
  '/components/sidebar': <SidebarPage />,
  '/components/input': <InputPage />,
  '/components/select': <SelectPage />,
  '/components/popover': <PopoverPage />,
  '/components/tooltip': <TooltipPage />,
  '/components/collapsible': <div>Collapsible Page</div>,
  '/components/sheet': <div>Sheet Page</div>,
  '/components/separator': <div>Separator Page</div>,
  '/components/card': <div>Card Page</div>,
  '/components/hover-card': <div>Hover Card Page</div>,
  '/components/accordion': <div>Accordion Page</div>,
  '/components/skeleton': <div>Skeleton Page</div>,
  '/components/alert': <div>Alert Page</div>,
};
