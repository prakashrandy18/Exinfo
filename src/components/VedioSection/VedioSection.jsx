'use client';
import { useRef } from 'react';
import styles from './page.module.scss';

export default function VedioSection() {
  const stickyMask = useRef(null);

  return (
    <main>
      <div className={styles.container}>
        <div ref={stickyMask} className={styles.stickyMask}>
          <video autoPlay muted loop>
            <source src="/medias/eventVedio.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </main>
  );
}
