import { useRef, useEffect, useState } from 'react';

export const AnimatedHeightWrapper = ({
  children,
  activeKey,
}: {
  children: React.ReactNode;
  activeKey: string;
}) => {
  const innerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;

    const updateHeight = () => setHeight(el.scrollHeight);

    updateHeight();

    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(el);

    return () => resizeObserver.disconnect();
  }, [activeKey]);

  return (
    <div
      style={{
        height: height ? `${height}px` : 'auto',
        overflow: 'hidden',
        transition:
          'height var(--transition-duration-default) var(--transition-easing-default)',
      }}
    >
      <div ref={innerRef}>{children}</div>
    </div>
  );
};
