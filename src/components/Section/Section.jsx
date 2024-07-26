'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function Section({ title, children }) {
  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="mt-16 mb-8">
      {title && (
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={titleVariants}
          className="text-4xl  font-bold text-center ml-14 mt-8 mb-8"
        >
          {title}
        </motion.h2>
      )}
      {children}
    </div>
  );
}
