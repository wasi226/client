import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import motion

const HeroSection = () => {
  return (
    <section className="bg-[#01052F] py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-24">
        
        <motion.div
          className="md:w-1/2 mb-10 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Transform Your Health Journey with{' '}
            <motion.span
              className="text-indigo-600 inline-block"
              initial={{ scale: 0, rotate: -20, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 10, delay: 0.5 }}
            >
              GoGetWell
            </motion.span>
          </h1>
          <p className="text-lg text-gray-400 mb-8">
            Your personalized wellness companion. Track, manage, and improve your health seamlessly — all in one place.
          </p>
          <Link to="/pricing">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-indigo-600 text-white px-6 py-3 rounded-md text-lg hover:bg-indigo-700 transition cursor-pointer"
            >
              Get Started
            </motion.button>
          </Link>
        </motion.div>

        <motion.div
          className="md:w-1/4 flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img 
            src="https://i.pinimg.com/736x/05/23/4d/05234d7aa66768e005a0ec0a55582aac.jpg" 
            alt="Healthcare Illustration" 
            className="rounded-lg shadow-lg w-full max-w-md"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
