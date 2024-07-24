'use client';
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './styles.module.scss';
import React, { useRef } from 'react';
import Picture1 from '../../../public/images/projects/image6.jpg';
import Picture2 from '../../../public/images/projects/image2.jpg';
import Picture3 from '../../../public/images/projects/image3.jpg';
import Picture4 from '../../../public/images/projects/image4.jpg';
import Picture5 from '../../../public/images/projects/image5.jpg';
import Picture6 from '../../../public/images/projects/image1.jpg';
import Picture7 from '../../../public/images/projects/image7.jpg';
import Image from 'next/image';

export default function ZoomParallax() {
  const container = useRef(null);
  const mainImage = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  const { scrollYProgress: MainImagescrollYProgress } = useScroll({
    target: mainImage,
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
