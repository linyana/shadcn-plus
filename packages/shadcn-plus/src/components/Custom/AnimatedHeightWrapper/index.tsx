import { useRef, useEffect, useState } from 'react';

export const AnimatedHeightWrapper = ({
  children,
  activeKey,
}: {
  children: React.ReactNode;
  activeKey: string;
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const [height, setHeight] = useState<number | 'auto'>('auto');
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const wrapperEl = wrapperRef.current;
    const innerEl = innerRef.current;
    if (!wrapperEl || !innerEl) return;

    const currentHeight = wrapperEl.getBoundingClientRect().height;
    setHeight(currentHeight);
    setShouldAnimate(true);

    requestAnimationFrame(() => {
      if (!innerEl) return;

      const newHeight = innerEl.scrollHeight;
      setHeight(newHeight);

      const timeout = setTimeout(() => {
        setHeight('auto');
        setShouldAnimate(false);
      }, 300);

      return () => clearTimeout(timeout);
    });
  }, [activeKey]);

  return (
    <div
      ref={wrapperRef}
      style={{
        height: typeof height === 'number' ? `${height}px` : height,
        overflow: 'hidden',
        transition: shouldAnimate
          ? 'height var(--transition-duration-default) var(--transition-easing-default)'
          : 'none',
      }}
    >
      <div ref={innerRef}>{children}</div>
    </div>
  );
};
