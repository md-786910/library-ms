import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUsers, FaLaptop, FaShieldAlt } from 'react-icons/fa';

const FeatureCard = ({ icon, title, description, delay }) => {
  return (
    <motion.div 
      className="relative p-6 bg-white rounded-2xl shadow-xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
    >
      <motion.div 
        className="absolute -right-10 -bottom-10 w-40 h-40 bg-indigo-100 rounded-full opacity-50"
        animate={{ 
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut" 
        }}
      />
      <div className="relative">
        <div className="absolute flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
          {icon}
        </div>
        <div className="ml-16">
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          <p className="mt-2 text-base text-gray-500">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: <FaCalendarAlt className="h-6 w-6" />,
      title: "Easy Scheduling",
      description: "Book your study space in advance with our intuitive calendar system. Choose your preferred date, time, and location."
    },
    {
      icon: <FaUsers className="h-6 w-6" />,
      title: "Collaborative Spaces",
      description: "Reserve group study rooms for team projects or choose quiet zones for individual focus. We have spaces for every study need."
    },
    {
      icon: <FaLaptop className="h-6 w-6" />,
      title: "Tech-Enabled Spaces",
      description: "All our study spaces come equipped with high-speed Wi-Fi, power outlets, and smart boards in selected rooms."
    },
    {
      icon: <FaShieldAlt className="h-6 w-6" />,
      title: "Secure Bookings",
      description: "Your bookings are secured with our reliable system. Receive instant confirmations and reminders for your upcoming sessions."
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-white to-indigo-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{ 
            x: [0, 30, 0],
            y: [0, 40, 0],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 20,
            ease: "easeInOut" 
          }}
        />
        
        <div className="relative">
          <motion.div 
            className="lg:text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-base text-indigo-600 font-semibold tracking-wide uppercase"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Features
            </motion.h2>
            <motion.p 
              className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              A better way to study
            </motion.p>
            
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="h-1 w-24 bg-gradient-to-r from-pink-500 to-indigo-500 mt-6 mx-auto"
            />
            
            <motion.p 
              className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Our library booking system is designed to enhance your academic journey with these key features:
            </motion.p>
          </motion.div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {features.map((feature, index) => (
                <FeatureCard 
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  delay={0.2 + index * 0.1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;