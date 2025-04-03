import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CTASection = ({ isLoggedIn }) => {
  return (
    <div className="bg-gradient-to-r from-indigo-800 to-purple-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-20 -right-20 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
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
          className="absolute bottom-0 left-1/4 w-80 h-80 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
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
      
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between relative">
        <motion.div 
          className="lg:w-0 lg:flex-1"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span className="block">Ready to boost your productivity?</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-cyan-400 mt-1">
              Start booking your ideal study space today.
            </span>
          </motion.h2>
          
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-1 w-24 bg-gradient-to-r from-pink-500 to-indigo-300 mt-6"
          />
          
          <motion.p 
            className="mt-6 max-w-lg text-xl text-indigo-100"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Join thousands of students who have already optimized their study routine with our library booking system.
          </motion.p>
        </motion.div>
        
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 space-x-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex rounded-md shadow"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Link 
                to={isLoggedIn ? "/booking" : "/login"} 
                className="inline-flex items-center justify-center px-6 py-4 border border-transparent text-base font-medium rounded-full text-indigo-700 bg-white hover:bg-gray-50 transition-all duration-300"
              >
                Get started
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex rounded-md shadow"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Link 
                to="#" 
                className="inline-flex items-center justify-center px-6 py-4 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transition-all duration-300"
              >
                Learn more
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;