import { useRef, useEffect, useState } from "react";

export const AnimatedHeightWrapper = ({ children, activeKey }: { children: React.ReactNode; activeKey: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (ref.current) {
      const el = ref.current;
      requestAnimationFrame(() => {
        setHeight(el.scrollHeight);
      });
    }
  }, [activeKey]);

  return (
    <div
      style={{
        height: height ? `${height}px` : "auto",
        overflow: "hidden",
        transition: "height var(--transition-duration-default) var(--transition-easing-default)",
      }}
    >
      <div ref={ref}>
        {children}
      </div>
    </div>
  );
};
