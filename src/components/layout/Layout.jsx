import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children, isLoggedIn }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar isLoggedIn={isLoggedIn} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;