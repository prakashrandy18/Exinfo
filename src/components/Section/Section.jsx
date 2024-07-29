'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function Section({
  title,
  children,
  className,
  titleClassName,
}) {
  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className={cn('py-8 alternateColor', className)}>
      {title && (
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={titleVariants}
          className={cn(
            'text-4xl font-bold text-center ml-14 mb-8',
            titleClassName,
          )}
        >
          {title}
        </motion.h2>
      )}
      {children}
    </div>
  );
}
