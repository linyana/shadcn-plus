import { useRef, useEffect, useState } from 'react';

export const AnimatedDisplayWrapper = ({
  children,
  activeKey,
}: {
  children: React.ReactNode;
  activeKey: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>(undefined);
  const [hasMounted, setHasMounted] = useState(false); // ✅ 加这一行

  useEffect(() => {
    if (ref.current) {
      const el = ref.current;


      if (activeKey) {
        requestAnimationFrame(() => {
          setHeight(el.scrollHeight);
          setTimeout(() => setHeight(undefined), 300);
        });
      } else if (!hasMounted) {
        requestAnimationFrame(() => {
          setHeight(0);
        });
        setHasMounted(true);
      } else {
        setHeight(el.scrollHeight);
        requestAnimationFrame(() => {
          setHeight(0);
        });
      }
    }
  }, [activeKey]);

  return (
    <div
      style={{
        height: height !== undefined ? `${height}px` : 'auto',
        overflow: 'hidden',
        transition:
          'height var(--transition-duration-default) var(--transition-easing-default)',
      }}
    >
      <div ref={ref}>{children}</div>
    </div>
  );
};
