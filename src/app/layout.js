'use client';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { FaArrowUp } from 'react-icons/fa';

import { Inter as FontSans } from 'next/font/google';

import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// };

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const checkScrollTop = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 20, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, []);

  return (
    <button
      onClick={scrollTop}
      className={`fixed bottom-4 left-4 p-3 bg-gray-800 text-white rounded-full shadow-lg transition-opacity duration-300 ${
        showButton ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <FaArrowUp size={24} />
    </button>
  );
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased  bg-[#070815] text-white',
          fontSans.variable,
        )}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
