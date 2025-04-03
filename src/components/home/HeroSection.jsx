import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = ({ isLoggedIn }) => {
  useEffect(() => {
    // Optional: Add any initialization code for animations here
  }, []);

  return (
    <div className="relative bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-700 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-10 -right-10 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70"
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
          className="absolute top-40 -left-20 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-70"
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
        <motion.div 
          className="absolute bottom-20 right-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{ 
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 20,
            ease: "easeInOut" 
          }}
        />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left md:col-span-6"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="absolute -top-4 -left-4 md:top-10 md:-left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-50 blur-md"
            />
            
            <motion.h1 
              className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="block mb-2">Elevate Your</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-cyan-300 to-cyan-400">
                Study Experience
              </span>
            </motion.h1>
            
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="h-1 w-24 bg-gradient-to-r from-pink-500 to-indigo-500 mt-6 mx-auto md:mx-0"
            />
            
            <motion.p 
              className="mt-6 max-w-lg mx-auto md:mx-0 text-xl text-indigo-100 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Book your ideal study space and join a community of focused learners. Our library booking system helps you find the perfect environment for academic success.
            </motion.p>
            
            <motion.div 
              className="mt-10 max-w-sm mx-auto md:mx-0 sm:flex sm:justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="space-y-4 sm:space-y-0 sm:inline-grid sm:grid-cols-2 sm:gap-5">
                <Link 
                  to={isLoggedIn ? "/booking" : "/login"} 
                  className="flex items-center justify-center px-6 py-4 border border-transparent text-base font-medium rounded-full shadow-sm text-indigo-700 bg-white hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg sm:px-10"
                >
                  Book Now
                </Link>
                <Link 
                  to="/register" 
                  className="flex items-center justify-center px-6 py-4 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg sm:px-10"
                >
                  Sign Up
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-10 flex items-center justify-center md:justify-start space-x-6"
            >
              <div className="flex -space-x-2">
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
              </div>
              <span className="text-sm text-indigo-100">Join 2,500+ students</span>
            </motion.div>
          </motion.div>
          
          {/* Animated illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden md:block md:col-span-6 relative"
          >
            <div className="relative w-full h-[450px]">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-2xl shadow-2xl overflow-hidden"
                animate={{ 
                  rotateY: [0, 10, 0],
                  rotateX: [0, 5, 0],
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 10,
                  ease: "easeInOut" 
                }}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px"
                }}
              >
                <div className="absolute inset-0 bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm">
                  {/* Library elements */}
                  <div className="absolute top-10 left-10 w-24 h-32 bg-white bg-opacity-20 rounded-lg shadow-lg"></div>
                  <div className="absolute top-10 left-40 w-24 h-48 bg-white bg-opacity-20 rounded-lg shadow-lg"></div>
                  <div className="absolute top-10 left-70 w-24 h-40 bg-white bg-opacity-20 rounded-lg shadow-lg"></div>
                  
                  <div className="absolute top-48 left-10 w-80 h-12 bg-white bg-opacity-20 rounded-lg shadow-lg"></div>
                  <div className="absolute top-64 left-10 w-48 h-12 bg-white bg-opacity-20 rounded-lg shadow-lg"></div>
                  
                  {/* Desk */}
                  <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-3/4 h-4 bg-indigo-800 bg-opacity-70 rounded-lg"></div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-20 bg-indigo-900 bg-opacity-50 rounded-t-lg"></div>
                  
                  {/* Animated student */}
                  <motion.div 
                    className="absolute bottom-24 left-1/2 transform -translate-x-1/2"
                    animate={{ 
                      y: [0, -5, 0],
                    }}
                    transition={{ 
                      repeat: Infinity,
                      duration: 2,
                      ease: "easeInOut" 
                    }}
                  >
                    {/* Body */}
                    <div className="w-20 h-24 bg-blue-500 rounded-t-full relative">
                      {/* Head */}
                      <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-yellow-300 rounded-full">
                        {/* Eyes */}
                        <div className="absolute top-4 left-3 w-2 h-3 bg-black rounded-full"></div>
                        <div className="absolute top-4 right-3 w-2 h-3 bg-black rounded-full"></div>
                        {/* Smile */}
                        <motion.div 
                          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-black rounded-full"
                          animate={{
                            scaleX: [1, 1.2, 1]
                          }}
                          transition={{
                            repeat: Infinity,
                            duration: 3,
                            ease: "easeInOut"
                          }}
                        ></motion.div>
                      </div>
                      {/* Arms */}
                      <div className="absolute top-6 -left-8 w-8 h-4 bg-blue-500 rounded-full"></div>
                      <div className="absolute top-6 -right-8 w-8 h-4 bg-blue-500 rounded-full"></div>
                    </div>
                  </motion.div>
                  
                  {/* Book animation */}
                  <motion.div 
                    className="absolute top-24 right-20 w-16 h-20 bg-gradient-to-b from-red-500 to-red-700 rounded-sm shadow-lg"
                    animate={{ 
                      rotate: [0, 5, 0, -5, 0],
                      y: [0, -5, 0],
                    }}
                    transition={{ 
                      repeat: Infinity,
                      duration: 4,
                      ease: "easeInOut" 
                    }}
                  >
                    <div className="absolute inset-1 bg-white bg-opacity-20 rounded-sm"></div>
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white bg-opacity-30"></div>
                  </motion.div>
                  
                  {/* Floating particles */}
                  <motion.div
                    className="absolute top-10 right-10 w-3 h-3 bg-yellow-300 rounded-full"
                    animate={{
                      y: [0, -40, 0],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 5,
                      ease: "easeInOut"
                    }}
                  ></motion.div>
                  <motion.div
                    className="absolute top-40 right-40 w-2 h-2 bg-pink-400 rounded-full"
                    animate={{
                      y: [0, -30, 0],
                      x: [0, 20, 0],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 7,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  ></motion.div>
                  <motion.div
                    className="absolute bottom-40 left-20 w-4 h-4 bg-green-300 rounded-full"
                    animate={{
                      y: [0, -50, 0],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 6,
                      ease: "easeInOut",
                      delay: 2
                    }}
                  ></motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;