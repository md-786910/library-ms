import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBook, FaBars, FaTimes, FaUser, FaCalendarAlt } from 'react-icons/fa';

const Navbar = ({ isLoggedIn }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleProfileClick = () => {
    navigate('/dashboard');
  };

  const handleBookingClick = () => {
    if (isLoggedIn) {
      navigate('/booking');
    } else {
      // Redirect to login page with a return URL
      navigate('/login?redirect=/booking');
    }
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <div className="h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center">
                <FaBook className="h-6 w-6 text-white" />
              </div>
              <span className="ml-3 text-xl font-bold text-gray-900">LibrarySpace</span>
            </Link>
            <nav className="hidden sm:ml-6 sm:flex sm:space-x-8">

              <Link to="/about" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                About
              </Link>
              <Link to="/contact" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Contact
              </Link>
            </nav>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <button
              onClick={handleBookingClick}
              className="mr-4 bg-indigo-100 text-indigo-700 hover:bg-indigo-200 px-4 py-2 rounded-md text-sm font-medium flex items-center"
            >
              <FaCalendarAlt className="mr-2" />
              Book Now
            </button>

            {isLoggedIn ? (
              <div
                onClick={handleProfileClick}
                className="ml-3 relative flex items-center cursor-pointer"
              >
                <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 hover:bg-indigo-200">
                  <FaUser className="h-4 w-4" />
                </div>
                <span className="ml-2 text-sm font-medium text-gray-700">My Account</span>
              </div>
            ) : (
              <div className="flex space-x-4">
                <Link to="/login" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                  Login
                </Link>
                <Link to="/register" className="bg-indigo-600 text-white hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium">
                  Register
                </Link>
              </div>
            )}
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <FaTimes className="block h-6 w-6" />
              ) : (
                <FaBars className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link to="/" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800">
              Home
            </Link>

            <Link to="/booking" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800">
              Book a Slot
            </Link>
            <Link to="/about" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800">
              About
            </Link>
            <Link to="/contact" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800">
              Contact
            </Link>
            <button
              onClick={handleBookingClick}
              className="w-full text-left pl-3 pr-4 py-2 border-l-4 border-indigo-500 bg-indigo-50 text-base font-medium text-indigo-700"
            >
              <div className="flex items-center">
                <FaCalendarAlt className="mr-2" />
                Book Now
              </div>
            </button>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            {isLoggedIn ? (
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                    <FaUser className="h-5 w-5" />
                  </div>
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">My Account</div>
                  <Link to="/dashboard" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    View Dashboard
                  </Link>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-around px-4">
                <Link to="/login" className="block text-base font-medium text-gray-500 hover:text-gray-800">
                  Login
                </Link>
                <Link to="/register" className="block text-base font-medium text-indigo-600 hover:text-indigo-800">
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;