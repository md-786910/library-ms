import React from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaCalendarAlt } from 'react-icons/fa';
import { Link, useOutletContext } from 'react-router-dom';

const DashboardBookings = () => {
  const { user } = useOutletContext();
  
  // Mock data for demonstration
  const upcomingBookings = [
    { id: 1, space: 'Quiet Study Room 101', date: '2023-06-15', time: '09:00 - 11:00', status: 'confirmed' },
    { id: 2, space: 'Group Study Room 203', date: '2023-06-18', time: '14:00 - 16:00', status: 'confirmed' },
    { id: 3, space: 'Computer Lab', date: '2023-06-20', time: '10:00 - 12:00', status: 'pending' }
  ];

  return (
    <div>
      <div className="px-4 py-5 sm:px-6 flex justify-between items-center flex-wrap">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Upcoming Bookings</h3>
        <span className="mt-2 sm:mt-0 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
          {upcomingBookings.length} bookings
        </span>
      </div>
      
      <div className="border-t border-gray-200">
        {upcomingBookings.length > 0 ? (
          <ul className="divide-y divide-gray-200">
            {upcomingBookings.map((booking, index) => (
              <motion.li 
                key={booking.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="px-4 py-4 sm:px-6 hover:bg-gray-50"
              >
                <div className="flex items-center justify-between flex-wrap">
                  <div className="flex items-center mb-2 sm:mb-0">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                        <FaBook className="h-5 w-5 text-indigo-600" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-indigo-600">{booking.space}</div>
                      <div className="text-sm text-gray-500">
                        {booking.date} • {booking.time}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center flex-wrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      booking.status === 'confirmed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                    </span>
                    <div className="ml-4 flex-shrink-0 flex mt-2 sm:mt-0">
                      <button
                        type="button"
                        className="mr-2 bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="bg-white rounded-md font-medium text-red-600 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        ) : (
          <div className="py-12 text-center">
            <FaCalendarAlt className="mx-auto h-12 w-12 text-gray-300" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">No bookings</h3>
            <p className="mt-1 text-sm text-gray-500">Get started by booking a study space.</p>
            <div className="mt-6">
              <Link
                to="/booking"
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <FaCalendarAlt className="-ml-1 mr-2 h-5 w-5" />
                New Booking
              </Link>
            </div>
          </div>
        )}
      </div>
      
      <div className="px-4 py-4 sm:px-6 bg-gray-50 border-t border-gray-200">
        <Link to="/booking" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
          Book another study space <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
};

export default DashboardBookings;