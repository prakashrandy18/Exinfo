'use client';
import React, { useEffect } from 'react';
import ZoomParallax from '../ZoomParallax/ZoomParallax';
import Section from '../Section/Section';
import Lenis from '@studio-freight/lenis';

export default function Projects() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <main className="text-4xl w-screen">
      <Section title="Our Gallery" titleClassName="mb-0">
        <ZoomParallax />
      </Section>
    </main>
  );
}
