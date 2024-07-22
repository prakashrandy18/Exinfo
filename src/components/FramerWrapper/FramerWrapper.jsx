'use client';
import { AnimatePresence, motion } from 'framer-motion';

export default function FramerWrapper({ children }) {
  return (
    <AnimatePresence>
      {/* <motion.div
        key={typeof window !== 'undefined' ? window.location.pathname : 'root'}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={{
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -10 },
        }}
        transition={{ duration: 0.3 }}
      > */}
      {children}
      {/* </motion.div> */}
    </AnimatePresence>
  );
}
