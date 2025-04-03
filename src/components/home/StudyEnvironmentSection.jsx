import React from 'react';
import { motion } from 'framer-motion';

const StudyEnvironmentSection = () => {
  const environmentFeatures = [
    "Quiet zones for deep concentration and focused study",
    "Collaborative areas for group projects and discussions",
    "Comfortable seating and ergonomic workstations",
    "Natural lighting to reduce eye strain and boost mood",
    "Climate-controlled spaces for year-round comfort"
  ];

  return (
    <div className="bg-white overflow-hidden py-16">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{ 
            x: [0, -30, 0],
            y: [0, 40, 0],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 20,
            ease: "easeInOut" 
          }}
        />
        
        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8 items-center">
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Optimal Study Environment
            </h2>
            
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="h-1 w-24 bg-gradient-to-r from-pink-500 to-indigo-500 mt-6"
            />
            
            <motion.div 
              className="mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.img
                src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Modern library space"
                className="w-full h-auto rounded-2xl shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="mt-10 sm:mt-0 lg:col-span-2 lg:pl-16"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="prose prose-indigo lg:max-w-none">
              <p className="text-lg text-gray-500">
                Our library spaces are designed with student success in mind. We understand that the right environment can significantly impact your ability to focus, retain information, and achieve your academic goals.
              </p>
              
              <div className="mt-8">
                <ul className="space-y-4">
                  {environmentFeatures.map((feature, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-6 w-6 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600">
                          <svg className="h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <p className="ml-3 text-base text-gray-500">{feature}</p>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <motion.p 
                className="mt-8 text-lg text-gray-500"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                Whether you're preparing for exams, working on research papers, or collaborating on group projects, our library provides the perfect setting for every academic endeavor.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default StudyEnvironmentSection;