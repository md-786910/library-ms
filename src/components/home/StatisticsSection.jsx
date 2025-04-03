import React from 'react';
import { motion } from 'framer-motion';

const StatItem = ({ number, label, delay }) => {
  return (
    <motion.div 
      className="flex flex-col relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
    >
      <motion.div
        className="absolute -inset-4 bg-indigo-400 rounded-lg opacity-20"
        animate={{ 
          scale: [1, 1.05, 1],
        }}
        transition={{ 
          repeat: Infinity,
          duration: 3 + delay * 2,
          ease: "easeInOut" 
        }}
      />
      <motion.dd 
        className="order-1 text-5xl font-extrabold text-white relative"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: delay + 0.2 }}
        viewport={{ once: true }}
      >
        {number}
      </motion.dd>
      <motion.dt 
        className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: delay + 0.4 }}
        viewport={{ once: true }}
      >
        {label}
      </motion.dt>
    </motion.div>
  );
};

const StatisticsSection = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-800 to-indigo-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 -right-20 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{ 
            x: [0, 30, 0],
            y: [0, 40, 0],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 15,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute -bottom-40 left-20 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{ 
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 18,
            ease: "easeInOut" 
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl font-extrabold text-white sm:text-4xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Trusted by students across campus
          </motion.h2>
          
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="h-1 w-24 bg-gradient-to-r from-pink-500 to-indigo-300 mt-6 mx-auto"
          />
          
          <motion.p 
            className="mt-3 text-xl text-indigo-200 sm:mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Our library booking system has transformed how students utilize study spaces
          </motion.p>
        </motion.div>
        
        <dl className="mt-16 text-center grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-3">
          <StatItem number="500+" label="Daily Bookings" delay={0.1} />
          <StatItem number="100+" label="Study Spaces" delay={0.2} />
          <StatItem number="98%" label="Student Satisfaction" delay={0.3} />
        </dl>
        
        <motion.div 
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex rounded-full p-1 bg-indigo-700 bg-opacity-30"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <button className="px-6 py-3 text-base font-medium rounded-full text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400 focus:ring-offset-indigo-800">
              View all statistics
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default StatisticsSection;