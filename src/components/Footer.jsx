'use client';
import FooterItems from './Footer/FooterItems';
import SocialIcons from './Footer/SocialIcons';
import { Icons } from './Footer/FooterMenu';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export default async function Footer() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <div
      className="relative h-[357px]"
      style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
    >
      <div className="relative h-[calc(100vh+357px)] -top-[100vh]">
        <div className="h-[357px] sticky top-[calc(100vh-357px)]">
          <footer className="bg-gray-900 text-white">
            <FooterItems />
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 align-middle
      text-center pt-2 text-gray-400 text-sm pb-8"
            >
              <span className="flex  items-end ml-8">
                © 2020 Appy. All rights reserved.
              </span>
              <span className="flex items-end ml-8">
                Terms · Privacy Policy
              </span>
              <SocialIcons Icons={Icons} />
              {/* <SocialMediaLinks /> */}
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
