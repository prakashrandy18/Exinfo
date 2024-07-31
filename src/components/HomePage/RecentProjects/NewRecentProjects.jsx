'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from './NewRecentProjects.module.css';
import Section from '@/components/Section/Section';

const sliders = [
  {
    src: 'image5.jpeg',
    title: 'Zoho',
    des: `oho Corporation offers a comprehensive suite of cloud-based software solutions. Their applications are designed for seamless access and integration across devices, with high customization options to meet diverse business needs. Zoho’s solutions are known for their affordability and serve a global customer base, providing support and services worldwide. The company focuses on empowering businesses with integrated and scalable tools to enhance productivity and streamline operations.`,
    buttons: [{ name: 'SEE MORE', link: '#' }],
  },
  {
    src: 'image4.jpeg',
    title: 'TN Aerial Vehicle Corporation',
    des: `Aerial Vehicle Corporation specializes in developing advanced aerial vehicles, including drones and unmanned aerial systems. They offer innovative designs with cutting-edge technology for various sectors such as defense, agriculture, and surveillance. The company provides customized solutions to meet specific industry needs and invests in research and development for continuous innovation. Their goal is to deliver high-performance, reliable, and technologically advanced aerial solutions.`,
    buttons: [{ name: 'SEE MORE', link: '#' }],
  },
  {
    src: 'image2.jpeg',
    title: 'Rupay Credit',
    des: 'RuPay, launched by NPCI in 2012, is India’s domestic payment card network designed to offer an alternative to international networks like Visa and MasterCard. It provides a range of cards, including debit, credit, and prepaid, with lower transaction fees and a focus on affordability.  RuPay ensures secure and efficient transactions. It plays a significant role in government subsidies and welfare schemes and is expanding its global reach through international partnerships.',
    buttons: [{ name: 'SEE MORE', link: '#' }],
  },
  {
    src: 'image1.jpeg',
    title: 'Tamil Nadu Startup ',
    des: 'The Tamil Nadu Startups Exhibition, organized by Exinfo Solutions, successfully highlighted the region’s vibrant entrepreneurial ecosystem. The event featured a wide range of startups with interactive booths and live product demonstrations. Attendees benefited from insightful panel discussions and workshops on scaling and funding, while the startup pitch competition showcased innovative ideas. The exhibition also included tech demos and immersive VR/AR experiences.',
    buttons: [{ name: 'SEE MORE', link: '#' }],
  },
];

const thumbnails = [
  { src: 'image5.jpeg', title: 'Zoho' },
  {
    src: 'image4.jpeg',
    title: 'TN Aerial Vehicle',
  },
  { src: 'image2.jpeg', title: 'Rupay Credit' },
  {
    src: 'image1.jpeg',
    title: 'Tamil Nadu Startup',
  },
];

function NewRecentProjects() {
  const nextRef = useRef(null);
  const prevRef = useRef(null);
  const carouselRef = useRef(null);
  const sliderRef = useRef(null);
  const thumbnailBorderRef = useRef(null);
  const timeRef = useRef(null);

  const [autoNextTimeout, setAutoNextTimeout] = useState(null);
  useEffect(() => {
    const nextDom = nextRef.current;
    const prevDom = prevRef.current;
    const carouselDom = carouselRef.current;
    const sliderDom = sliderRef.current;
    const thumbnailBorderDom = thumbnailBorderRef.current;

    const timeRunning = 2000;
    const timeAutoNext = 5000;

    const showSlider = (type) => {
      const sliderItemsDom = sliderDom.querySelectorAll(` .${styles.item}`);
      const thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(
        ` .${styles.thumbnail_item}`,
      );

      if (type === 'next') {
        sliderDom.appendChild(sliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add(styles.next);
      } else {
        sliderDom.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(
          thumbnailItemsDom[thumbnailItemsDom.length - 1],
        );
        carouselDom.classList.add(styles.prev);
      }

      setTimeout(() => {
        carouselDom.classList.remove(styles.next);
        carouselDom.classList.remove(styles.prev);
      }, timeRunning);

      if (autoNextTimeout) {
        clearTimeout(autoNextTimeout);
      }

      setAutoNextTimeout(
        setTimeout(() => {
          nextDom.click();
        }, timeAutoNext),
      );
    };

    if (nextDom && prevDom) {
      nextDom.onclick = () => showSlider('next');
      prevDom.onclick = () => showSlider('prev');
    }

    // Cleanup on unmount
    return () => {
      if (autoNextTimeout) {
        clearTimeout(autoNextTimeout);
      }
    };
  }, [autoNextTimeout]);

  return (
    <div className={'bg-white'}>
      <h2
        className={
          'text-4xl font-bold text-center ml-14 mb-8 z-50 text-[#1f2937]'
        }
      >
        {'Recent Projects'}
      </h2>
      <div className={styles.container}>
        <div className={styles.carousel} ref={carouselRef}>
          <div className={styles.list} ref={sliderRef}>
            <h2 className={'text-4xl font-bold text-center ml-14 mb-8 z-50'}>
              {'Recent Projects'}
            </h2>
            {sliders?.map((list, index) => (
              <div key={index} className={styles.item}>
                <img src={`/images/recent-projects/${list?.src}`} />
                <div className={styles.content}>
                  {list?.author && (
                    <div className={styles.author}>{list?.author}</div>
                  )}
                  {list?.title && (
                    <div className={styles.title}>{list?.title}</div>
                  )}
                  {list?.topic && (
                    <div className={styles.topic}>{list.topic}</div>
                  )}
                  {list?.des && <div className={styles.des}>{list.des}</div>}
                  <div className={styles.buttons}>
                    {list.buttons?.map((btn, index) => (
                      <button
                        key={index}
                        className="mt-8 px-6 py-2 border border-white text-white font-semibold rounded hover:bg-white hover:text-black transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
                      >
                        {btn.name}
                      </button>
                      // <button key={index}></button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.thumbnail} ref={thumbnailBorderRef}>
            {thumbnails?.map((item, index) => (
              <div key={index} className={styles.thumbnail_item}>
                <img src={`/images/recent-projects/${item.src}`} />
                <div className={styles.thumbnail_content}>
                  {item?.title && (
                    <div className={styles.thumbnail_title}>{item?.title}</div>
                  )}
                  {item?.description && (
                    <div className={styles.thumbnail_description}>
                      {item.description}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className={styles.arrows}>
            <button id="prev" ref={prevRef}>
              {'<'}
            </button>
            <button id="next" ref={nextRef}>
              {'>'}
            </button>
          </div>
          <div className={styles.time} ref={timeRef}></div>
        </div>
      </div>
    </div>
  );
}

export default NewRecentProjects;
