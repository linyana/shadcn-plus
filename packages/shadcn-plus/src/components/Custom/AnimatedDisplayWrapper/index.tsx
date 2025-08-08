import { useRef, useEffect, useState } from 'react';

export const AnimatedDisplayWrapper = ({
  children,
  activeKey,
}: {
  children: React.ReactNode;
  activeKey: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<string | number>('0px');
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (activeKey) {
      const currentHeight = el.getBoundingClientRect().height;
      setHeight(currentHeight);
      setShouldAnimate(true);

      requestAnimationFrame(() => {
        const scrollHeight = el.scrollHeight;
        setHeight(scrollHeight);

        const timeout = setTimeout(() => {
          setHeight('auto');
          setShouldAnimate(false);
        }, 300);

        return () => clearTimeout(timeout);
      });
    } else {
      const currentHeight = el.getBoundingClientRect().height;
      setHeight(currentHeight);
      setShouldAnimate(true);

      requestAnimationFrame(() => {
        setHeight(0);
      });
    }
  }, [activeKey]);

  return (
    <div
      style={{
        height: typeof height === 'number' ? `${height}px` : height,
        overflow: 'hidden',
        transition: shouldAnimate
          ? 'height var(--transition-duration-default) var(--transition-easing-default)'
          : 'none',
      }}
    >
      <div ref={ref}>{children}</div>
    </div>
  );
};
