'use client';
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './styles.module.scss';
import React, { useRef } from 'react';
import Picture1 from '../../../public/images/recent-projects/image-3.jpeg';
import Picture2 from '../../../public/images/recent-projects/image-4.jpeg';
import Picture3 from '../../../public/images/recent-projects/image-5.jpeg';
import Picture4 from '../../../public/images/recent-projects/image-6.jpeg';
import Picture5 from '../../../public/images/recent-projects/image-7.jpeg';
import Picture6 from '../../../public/images/recent-projects/image-8.jpeg';
import Picture7 from '../../../public/images/recent-projects/image-10.jpeg';
import Picture8 from '../../../public/images/recent-projects/image-10.jpeg';
import Picture9 from '../../../public/images/recent-projects/image-10.jpeg';
import Image from 'next/image';

export default function ZoomParallax() {
  const container = useRef(null);
  const mainImage = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: Picture1,
      scale: scale4,
      callToAction: true,
    },
    {
      src: Picture2,
      scale: scale5,
    },
    {
      src: Picture3,
      scale: scale6,
    },
    {
      src: Picture4,
      scale: scale5,
    },
    {
      src: Picture5,
      scale: scale6,
    },
    {
      src: Picture6,
      scale: scale8,
    },
    {
      src: Picture7,
      scale: scale9,
    },
    {
      src: Picture8,
      scale: scale5, // Added new image
    },
    {
      src: Picture9,
      scale: scale6, // Added new image
    },
  ];

  return (
    <div ref={container} className={styles.container}>
      <div className={styles.sticky}>
        {pictures.map(({ src, scale, callToAction }, index) => {
          return (
            <div
              key={index}
              className={styles.el}
              ref={callToAction ? mainImage : null}
            >
              <motion.div style={{ scale }}>
                <div className={styles.imageContainer}>
                  <Image src={src} fill alt="image" placeholder="blur" />
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
