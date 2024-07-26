// components/AnimatedCounter.js
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const AnimatedCounter = ({ endValue, duration = 1 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const controls = useAnimation();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });

      const increment = endValue / ((duration * 1000) / 16); // calculate increment for 60fps

      let currentValue = 0;
      const interval = setInterval(() => {
        currentValue += increment;
        if (currentValue >= endValue) {
          clearInterval(interval);
          currentValue = endValue;
        }
        setValue(Math.round(currentValue));
      }, 16); // approx 60fps
    }
  }, [isInView, endValue, duration, controls]);
  return (
    <motion.div
      ref={ref}
      className="text-3xl font-bold text-blue-600"
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      <span className="counter">{value.toLocaleString()}</span>
    </motion.div>
  );
};

export default AnimatedCounter;
