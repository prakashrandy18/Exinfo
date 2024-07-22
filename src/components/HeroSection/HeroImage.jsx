'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import { Hero_text } from '@/contents/HeroImage';

const textVariant = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const imageVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 0.5, transition: { duration: 2 } },
};
export default function HeroImage() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        position: 'relative',
      }}
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={textVariant}
        style={{
          position: 'absolute',
          // top: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
        }}
      >
        <Typography
          sx={{ color: '#fff' }}
          textAlign={'center'}
          variant="h4"
          fontWeight={500}
          fontFamily={'sans-serif'}
        >
          {Hero_text}
        </Typography>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={imageVariant}
        style={{
          position: 'relative',
          width: '90vw',
          height: '75vh',
          zIndex: 0,
        }}
      >
        <Image
          src="/images/hero-1.jpg"
          alt="Next.js Logo"
          layout="fill"
          objectFit="cover"
          priority
        />
      </motion.div>
    </Box>
  );
}
