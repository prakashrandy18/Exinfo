'use client';
// components/ScrollToTopButton.js
import { FaArrowUp } from 'react-icons/fa';
import { useEffect, useState } from 'react';

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

export default ScrollToTopButton;
