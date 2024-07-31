'use client';
import { useRef, useState } from 'react';

import otherstyles from './style.module.css';
import Image from 'next/image';
import { useInView, motion } from 'framer-motion';
import { slideUp, opacity, combinedVariants } from './animation';

import styles from './style.module.scss';
import Section from '@/components/Section/Section';

const phrase = `At Exinfo Solutions, we pride ourselves on being a hub of innovation and creativity, delivering exceptional exhibition experiences across the globe. Our client-centric approach ensures that each project is tailored to meet unique goals, backed by our end-to-end services that cover everything from conceptualization to execution. We integrate cutting-edge technologies and sustainable practices into our designs, reflecting our commitment to both excellence and environmental responsibility. Our award-winning craftsmanship and global reach allow us to create captivating exhibits that resonate with diverse audiences. We foster strong, collaborative partnerships with clients and vendors, driven by our passionate team dedicated to continuous improvement and delivering outstanding results. Our dedication to nurturing a zealous culture of teamwork and creativity has established us as a preferred choice across Pan India and beyond, reflecting our high spirit and professionalism in every endeavor.`;

function About() {
  const [selectedProject, setSelectedProject] = useState(0);
  const container = useRef(null);
  const imageContainer = useRef(null);

  const description = useRef(null);
  const isInView = useInView(description);
  const isInViewImage = useInView(imageContainer);
  return (
    <Section title={'About Us'} className="bg-gray-100 text-gray-900">
      <div ref={container} className={otherstyles.projects}>
        <div className={otherstyles.projectDescription}>
          <motion.div
            ref={imageContainer}
            className={otherstyles.imageContainer}
            variants={combinedVariants}
            animate={isInViewImage ? 'open' : 'closed'}
          >
            <Image
              src={`/images/About/About-company.png`}
              fill={true}
              alt="project image"
              priority={true}
            />
          </motion.div>
          <div className="sm:w-auto md:w-1/2 flex flex-col">
            <div ref={description} className={styles.description}>
              <div className={styles.body}>
                <p>
                  {phrase.split(' ').map((word, index) => {
                    return (
                      <span key={index} className={styles.mask}>
                        <motion.span
                          variants={slideUp}
                          custom={index}
                          animate={isInView ? 'open' : 'closed'}
                          key={index}
                        >
                          {word}
                        </motion.span>
                      </span>
                    );
                  })}
                </p>
              </div>
            </div>
            <div className="mt-4">
              {/* <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                // className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all"
              > */}
              <button className="mt-8 px-6 py-2 border border-#1f2937 text-#1f2937 font-semibold rounded hover:bg-white hover:text-black transition duration-300 ease-in-out transform hover:scale-105 hover:bg-#1f2937 flex items-center justify-center">
                About us
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
              {/* </motion.div> */}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default About;
