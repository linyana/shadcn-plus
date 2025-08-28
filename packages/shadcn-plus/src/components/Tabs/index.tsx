import {
  Tabs as ShadcnTabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '@/components/ui/tabs';
import { ITabsProps } from './types';
import { nanoid } from 'nanoid';
import { useMemo, useState } from 'react';
import { AnimatedHeightWrapper, TabContentTransition } from '../Custom';
import { useComponentTheme } from '@/hooks';
import { cn, sn } from '@/lib/utils';

export const Tabs = ({
  items: externalItems,
  defaultValue,
  onValueChange: externalOnValueChange,
  value: externalValue,
  ...props
}: ITabsProps) => {
  const theme = useComponentTheme('Tabs');

  const items = useMemo(() => {
    return externalItems.map((item) => ({
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
        style={sn(theme.style, props.style)}
        className={cn(theme.className, props.className)}
      >
        <TabsList
          className={cn(
            'grid w-full',
            theme.List?.className,
            props.listProps?.className,
          )}
          style={sn(
            {
              gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))`,
            },
            theme.List?.style,
            props.listProps?.style,
          )}
        >
          {items.map((item) => (
            <TabsTrigger
              key={item.key}
              value={item.key}
              style={sn(theme.Trigger?.style, item.triggerProps?.style)}
              className={cn(
                theme.Trigger?.className,
                item.triggerProps?.className,
              )}
            >
              {item.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {items.map((item) => (
          <TabsContent
            key={item.key}
            value={item.key}
            style={sn(theme.Trigger?.style, item.triggerProps?.style)}
            className={cn(
              theme.Content?.className,
              item.contentProps?.className,
            )}
          >
            <TabContentTransition tabKey={item.key}>
              {item.content}
            </TabContentTransition>
          </TabsContent>
        ))}
      </ShadcnTabs>
    </AnimatedHeightWrapper>
  );
};
