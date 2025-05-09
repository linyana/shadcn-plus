import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface TransitionProps {
  children: React.ReactNode;
  tabKey: string;
}

export const Transition = ({ children, tabKey }: TransitionProps) => {
  const [currentKey, setCurrentKey] = useState(tabKey);

  if (tabKey !== currentKey) {
    setCurrentKey(tabKey);
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentKey}
        layout
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 0 }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
        }}
        style={{ overflow: "hidden" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
