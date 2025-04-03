import React, { useState, useEffect } from 'react';
import { Outlet, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBook, FaCalendarAlt, FaHistory, FaBell, FaCog, FaChevronRight } from 'react-icons/fa';

const Dashboard = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Mock user data
  const user = {
    name: 'Alex Johnson',
    id: '12345678',
    email: 'alex.johnson@example.com'
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getActiveTabName = () => {
    const path = location.pathname.split('/').pop();
    switch(path) {
      case 'bookings':
      case '':
        return 'Upcoming Bookings';
      case 'history':
        return 'Booking History';
      case 'notifications':
        return 'Notifications';
      case 'settings':
        return 'Settings';
      default:
        return 'Dashboard';
    }
  };

  const navItems = [
    { name: 'Upcoming Bookings', path: '/dashboard/bookings', icon: <FaCalendarAlt /> },
    { name: 'Booking History', path: '/dashboard/history', icon: <FaHistory /> },
    { name: 'Notifications', path: '/dashboard/notifications', icon: <FaBell /> },
    { name: 'Settings', path: '/dashboard/settings', icon: <FaCog /> }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <motion.div 
          className="flex items-center justify-between mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-sm text-gray-500">Welcome back, {user.name}</p>
          </div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <NavLink
              to="/booking"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700"
            >
              <FaCalendarAlt className="mr-2 h-4 w-4" />
              New Booking
            </NavLink>
          </motion.div>
        </motion.div>

        {/* Mobile view - Tab selector dropdown */}
        {isMobile && (
          <div className="mb-6">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-full flex items-center justify-between px-4 py-3 bg-white rounded-lg shadow text-left"
            >
              <div className="flex items-center">
                {navItems.find(item => 
                  item.path === location.pathname || 
                  (item.path === '/dashboard/bookings' && location.pathname === '/dashboard'))?.icon}
                <span className="ml-2 font-medium">{getActiveTabName()}</span>
              </div>
              <FaChevronRight className={`transition-transform duration-200 ${mobileMenuOpen ? 'transform rotate-90' : ''}`} />
            </button>
            
            {mobileMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-2 py-1 bg-white rounded-lg shadow-lg z-10 relative"
              >
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) => 
                      `block px-4 py-2 text-sm ${isActive ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700 hover:bg-gray-50'}`
                    }
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="flex items-center">
                      <span className="mr-2">{item.icon}</span>
                      {item.name}
                    </div>
                  </NavLink>
                ))}
              </motion.div>
            )}
          </div>
        )}

        {/* Desktop view - Horizontal tabs */}
        {!isMobile && (
          <div className="bg-white shadow rounded-lg mb-6">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8 px-6" aria-label="Tabs">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) => 
                      `whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center ${
                        isActive
                          ? 'border-indigo-500 text-indigo-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`
                    }
                  >
                    <span className="mr-2">{item.icon}</span>
                    {item.name}
                  </NavLink>
                ))}
              </nav>
            </div>
          </div>
        )}

        {/* Dashboard content - will be replaced by the appropriate component */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow rounded-lg overflow-hidden"
        >
          <Outlet context={{ user }} />
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;