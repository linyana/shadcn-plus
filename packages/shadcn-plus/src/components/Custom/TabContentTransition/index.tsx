import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface TransitionProps {
  children: React.ReactNode;
  tabKey: string;
}

export const TabContentTransition = ({ children, tabKey }: TransitionProps) => {
  const [currentKey, setCurrentKey] = useState(tabKey);

  if (tabKey !== currentKey) {
    setCurrentKey(tabKey);
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentKey}
        layout
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 0 }}
        transition={{
          duration: 0.3,
          ease: [0.4, 0, 0.2, 1],
        }}
        style={{ overflow: "hidden" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
