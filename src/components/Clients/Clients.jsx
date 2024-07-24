'use client';
import React, { useEffect, useRef, useState } from 'react';
import Section from '../Section/Section';
import { useScroll, useTransform, motion } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import Image from 'next/image';
import styles from './page.module.scss';
import { isMobile } from 'react-device-detect';

const images = [
  'allure.jpg',
  'apple1.jpg',
  'benz.jpg',
  'coke.jpg',
  'colin.jpg',
  'google.jpg',
  'krish.jpg',
  'mcd.jpg',
  'meta.jpg',
  'redbull.jpg',
  'skechers.jpg',
  'tesla.jpg',
];

export default function Clients() {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start'],
  });
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);
  return (
    <Section title="Our Clients">
      <main>
        <div className={styles.spacer}></div>
        <div ref={gallery} className={styles.gallery}>
          <Column images={[images[0], images[1], images[2]]} y={y} />
          <Column images={[images[3], images[4], images[5]]} y={y2} />

          {!isMobile && (
            <Column images={[images[6], images[7], images[8]]} y={y3} />
          )}
          {!isMobile && (
            <Column images={[images[9], images[10], images[11]]} y={y4} />
          )}
        </div>
        <div className={styles.spacer}></div>
      </main>
    </Section>
  );
}

const Column = ({ images, y }) => {
  return (
    <motion.div className={styles.column} style={{ y }}>
      {images.map((src, i) => {
        return (
          <div key={i} className={styles.imageContainer}>
            <Image src={`/images/clients/${src}`} alt="image" fill />
          </div>
        );
      })}
    </motion.div>
  );
};
