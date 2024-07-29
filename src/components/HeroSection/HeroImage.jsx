'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Box } from '@mui/material';
import { Hero_sub_text, Hero_text } from '@/contents/HeroImage';
import { CarouselPlugin } from './CarouselPlugin';

const textVariant = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const imageVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 2 } },
};

const images = [
  { src: 'hero1.jpg' },
  { src: 'hero2.jpg' },
  { src: 'hero3.jpg' },
  { src: 'hero4.jpg' },
  { src: 'hero5.jpg' },
];
export default function HeroImage() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        position: 'relative',
      }}
    >
      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'flex-start'}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariant}
          style={{
            position: 'absolute',
            top: '30%',
            left: '8%',
            // transform: 'translate(-50%, -50%)',
            zIndex: 1,
          }}
        >
          <div>
            <h3 className="text-white text-6xl font-semibold font-sans">
              {Hero_text}
            </h3>
            <p className="mt-6 text-xs text-white font-sans">{Hero_sub_text}</p>
          </div>
          <button className="mt-8 px-6 py-2 border border-white text-white font-semibold rounded hover:bg-white hover:text-black transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center">
            Book Now{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="ml-2 w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        </motion.div>
      </Box>
      <div className="w-full h-screen relative">
        <CarouselPlugin data={images} />
      </div>

      {/* <motion.div
        initial="hidden"
        animate="visible"
        variants={imageVariant}
        style={{
          position: 'relative',
          width: '100%',
          height: '100vh',
          zIndex: 0,
        }}
      > */}
      {/* </motion.div> */}
    </Box>
  );
}
