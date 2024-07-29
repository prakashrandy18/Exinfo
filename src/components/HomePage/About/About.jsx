'use client';
import { useRef, useState } from 'react';
import Section from '@/components/Section/Section';

import otherstyles from './style.module.css';
import Image from 'next/image';
import { useInView, motion } from 'framer-motion';
import { slideUp, opacity, combinedVariants } from './animation';

import styles from './style.module.scss';

const phrase = `Exinfo Solutions is an abode of creations, with a dedicated brain storming professionals
delivering an exceptional exhibition experience globally.
We endevour beyond design to facilitate our clients with the utmost solutions in every
step of the way.
We believe in nurturing a zealous culture of constant teamwork with a group of
experienced creatives who have an eye for details.
With a persistent harmony we put forth the graceful creations enabling our clients to
scale up their success.
Our high spirit and professionalism has made us to become a preferred company at Pan
India Level and that we are proud of.`;

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
