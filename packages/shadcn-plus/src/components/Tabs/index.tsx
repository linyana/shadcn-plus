import {
  Tabs as ShadcnTabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import { ITabsProps } from "./types";
import { nanoid } from "nanoid";
import { useMemo, useState } from "react";
import { AnimatedHeightWrapper, TabContentTransition } from "../Custom";

export const Tabs = ({
  items: externalItems,
  defaultValue,
  onValueChange: externalOnValueChange,
  value: externalValue,
  ...props
}: ITabsProps) => {
  const items = useMemo(() => {
    return externalItems.map(item => ({
      ...item,
      key: item.key || nanoid(),
    }));
  }, [externalItems]);

  const initial = defaultValue || items[0]?.key;

  const [internalValue, setInternalValue] = useState(initial);
  const value = externalValue || internalValue;
  const onValueChange = externalOnValueChange || setInternalValue;

  return (
    
    <AnimatedHeightWrapper activeKey={value}>
      <ShadcnTabs
        value={value}
        onValueChange={onValueChange}
        {...props}
      >
        <TabsList className="grid w-full grid-cols-2">
          {items.map(item => (
            <TabsTrigger key={item.key} value={item.key}>
              {item.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {items.map(item => (
          <TabsContent key={item.key} value={item.key}>
            <TabContentTransition tabKey={item.key}>
              {item.content}
            </TabContentTransition>
          </TabsContent>
        ))}
      </ShadcnTabs>
    </AnimatedHeightWrapper>
  );
};
