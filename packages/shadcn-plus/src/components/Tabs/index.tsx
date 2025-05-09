import {
  Tabs as ShadcnTabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import { ITabsProps } from "./types";
import { nanoid } from "nanoid";
import { useMemo } from "react";

export const Tabs = ({
  items: externalItems,
  defaultValue,
  ...props
}: ITabsProps) => {
  const items = useMemo(() => {
    return externalItems.map(item => ({
      ...item,
      key: item.key || nanoid(),
    }));
  }, [externalItems]);

  const initial = defaultValue || items[0]?.key;

  return (
    <ShadcnTabs defaultValue={initial} {...props}>
      <TabsList className="grid w-full grid-cols-2">
        {items.map(item => (
          <TabsTrigger key={item.key} value={item.key}>
            {item.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {items.map(item => (
        <TabsContent key={item.key} value={item.key}>
          {item.content}
        </TabsContent>
      ))}
    </ShadcnTabs>
  );
};
