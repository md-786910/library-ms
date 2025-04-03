import React from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaUsers, FaLaptop, FaHandshake } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About LibrarySpace</h1>
            <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
              Empowering knowledge seekers with innovative library management solutions since 2023.
            </p>
          </div>
        </motion.div>

        <div className="mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white overflow-hidden shadow rounded-lg"
          >
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                LibrarySpace was founded with a simple mission: to make knowledge more accessible to everyone. 
                What started as a small project to help local libraries manage their collections has grown into 
                a comprehensive platform serving libraries of all sizes across the country.
              </p>
              <p className="text-gray-600 mb-4">
                Our team of dedicated librarians, developers, and designers work together to create 
                solutions that simplify library management while enhancing the experience for both 
                library staff and patrons.
              </p>
              <p className="text-gray-600">
                Today, LibrarySpace is proud to serve hundreds of libraries, helping them manage millions 
                of books and resources while connecting readers with the knowledge they seek.
              </p>
            </div>
          </motion.div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white overflow-hidden shadow rounded-lg"
              >
                <div className="px-4 py-5 sm:p-6 text-center">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <FaBook className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">Knowledge for All</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    We believe that access to information should be universal and equitable.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white overflow-hidden shadow rounded-lg"
              >
                <div className="px-4 py-5 sm:p-6 text-center">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <FaUsers className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">Community First</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Libraries are community hubs, and our solutions are designed with communities in mind.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-white overflow-hidden shadow rounded-lg"
              >
                <div className="px-4 py-5 sm:p-6 text-center">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <FaLaptop className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">Innovation</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    We continuously evolve our platform to meet the changing needs of modern libraries.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-white overflow-hidden shadow rounded-lg"
              >
                <div className="px-4 py-5 sm:p-6 text-center">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <FaHandshake className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">Partnership</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    We work alongside libraries as partners, not just as service providers.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-12 bg-white overflow-hidden shadow rounded-lg"
          >
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Team</h2>
              <p className="text-gray-600 mb-4">
                LibrarySpace is powered by a diverse team of professionals who are passionate about libraries 
                and technology. Our team includes former librarians, software engineers, UX designers, and 
                customer support specialists who work together to create the best possible experience for our users.
              </p>
              <p className="text-gray-600">
                We're always looking for talented individuals who share our passion for knowledge and innovation. 
                If you're interested in joining our team, please check our careers page for current opportunities.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;