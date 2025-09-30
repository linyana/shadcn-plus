import { motion, AnimatePresence } from 'framer-motion';
import { IShowType } from './types';

export const Show = ({
  hideWhen,
  children,
  condition,
  strictComparison,
  animated = false,
}: IShowType) => {
  const shouldHide = strictComparison
    ? condition === hideWhen
    : condition == hideWhen;

  if (animated) {
    return (
      <AnimatePresence mode="wait">
        {!shouldHide && (
          <motion.div
            key="show-content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  return shouldHide ? null : children;
};
