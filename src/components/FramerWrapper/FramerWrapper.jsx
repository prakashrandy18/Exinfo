'use client';
import { AnimatePresence, motion } from 'framer-motion';

export default function FramerWrapper({ children }) {
  return <AnimatePresence>{children}</AnimatePresence>;
}
