// components/MetricsSection.js
'use client';
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
const MetricsSection = () => {
  const metrics = [
    { label: 'Total Events Organized', value: 5000 },
    { label: 'Attendees Registered', value: 120000 },
    { label: 'Social Media Reach', value: 1500000 },
    { label: 'Average Event Rating', value: 4.8 },
  ];

  const [customerCount, setCustomerCount] = useState(0);
  const [eventsHandled, setEventsHandled] = useState(0);

  useEffect(() => {
    // Simulate fetching or updating data
    const updateMetrics = () => {
      setCustomerCount(1500); // Example value
      setEventsHandled(500); // Example value
    };

    updateMetrics();
  }, []);

  return (
    <section className="flex flex-col items-center py-12 bg-gray-100">
      <div className="text-center">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 m-4">
          {metrics.map((metric, index) => (
            // <div
            //   key={index}
            //   className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:shadow-lg hover:scale-105"
            // >
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              whileHover={{
                scale: 1.05,
                rotate: 1,
                boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',
              }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {metric.label}
              </h3>
              <AnimatedCounter endValue={metric.value} duration={2} />
            </motion.div>
            // </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
