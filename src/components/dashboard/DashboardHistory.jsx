import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHistory, FaSearch, FaFilter, FaDownload } from 'react-icons/fa';
import { Link, useOutletContext } from 'react-router-dom';

const DashboardHistory = () => {
  const { user } = useOutletContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('all');
  
  // Mock data for booking history
  const bookingHistory = [
    { id: 101, space: 'Quiet Study Room 105', date: '2023-06-01', time: '13:00 - 15:00', status: 'completed' },
    { id: 102, space: 'Group Study Room 202', date: '2023-05-28', time: '10:00 - 12:00', status: 'completed' },
    { id: 103, space: 'Media Room', date: '2023-05-25', time: '15:00 - 17:00', status: 'cancelled' },
    { id: 104, space: 'Computer Lab', date: '2023-05-20', time: '09:00 - 11:00', status: 'completed' },
    { id: 105, space: 'Research Commons', date: '2023-05-15', time: '14:00 - 16:00', status: 'cancelled' }
  ];

  // Filter bookings based on search term and status
  const filteredBookings = bookingHistory.filter(booking => {
    const matchesSearch = booking.space.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || booking.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div>
      <div className="px-4 py-5 sm:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4 sm:mb-0">Booking History</h3>
          
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 w-full sm:w-auto">
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                placeholder="Search bookings"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilterOpen(!filterOpen)}
                className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                <FaFilter className="mr-2 h-4 w-4 text-gray-500" />
                Filter
              </motion.button>
              
              {filterOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10"
                >
                  <div className="py-1 px-2" role="menu" aria-orientation="vertical">
                    <p className="text-xs font-medium text-gray-500 px-2 py-1">Status</p>
                    <button
                      onClick={() => setSelectedStatus('all')}
                      className={`block px-4 py-2 text-sm rounded-md w-full text-left ${selectedStatus === 'all' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700 hover:bg-gray-50'}`}
                    >
                      All
                    </button>
                    <button
                      onClick={() => setSelectedStatus('completed')}
                      className={`block px-4 py-2 text-sm rounded-md w-full text-left ${selectedStatus === 'completed' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700 hover:bg-gray-50'}`}
                    >
                      Completed
                    </button>
                    <button
                      onClick={() => setSelectedStatus('cancelled')}
                      className={`block px-4 py-2 text-sm rounded-md w-full text-left ${selectedStatus === 'cancelled' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700 hover:bg-gray-50'}`}
                    >
                      Cancelled
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700"
            >
              <FaDownload className="mr-2 h-4 w-4" />
              Export
            </motion.button>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-200">
        {filteredBookings.length > 0 ? (
          <div>
            <div className="hidden sm:grid grid-cols-4 gap-4 px-4 py-3 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">
              <div>Space</div>
              <div>Date & Time</div>
              <div>Status</div>
              <div>Actions</div>
            </div>
            <ul className="divide-y divide-gray-200">
              {filteredBookings.map((booking, index) => (
                <motion.li 
                  key={booking.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="px-4 py-4 sm:px-6 hover:bg-gray-50"
                >
                  <div className="sm:hidden mb-2 font-medium text-indigo-600">{booking.space}</div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div className="hidden sm:block sm:w-1/4 text-sm font-medium text-indigo-600">{booking.space}</div>
                    <div className="sm:w-1/4 text-sm text-gray-500">
                      {booking.date} <br className="sm:hidden" />{booking.time}
                    </div>
                    <div className="mt-2 sm:mt-0 sm:w-1/4">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        booking.status === 'completed' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                      </span>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:w-1/4 flex">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-sm text-indigo-600 hover:text-indigo-900 mr-4"
                      >
                        View Details
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-sm text-gray-600 hover:text-gray-900"
                      >
                        Receipt
                      </motion.button>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="py-12 text-center">
            <FaHistory className="mx-auto h-12 w-12 text-gray-300" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">No booking history found</h3>
            <p className="mt-1 text-sm text-gray-500">
              {searchTerm || selectedStatus !== 'all' 
                ? 'Try adjusting your search or filter criteria' 
                : 'Your past bookings will appear here'}
            </p>
            {(searchTerm || selectedStatus !== 'all') && (
              <div className="mt-6">
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedStatus('all');
                  }}
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        )}
      </div>
      
      <div className="px-4 py-4 sm:px-6 bg-gray-50 border-t border-gray-200 flex justify-between items-center">
        <span className="text-sm text-gray-500">
          Showing {filteredBookings.length} of {bookingHistory.length} bookings
        </span>
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/booking" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
            Make a new booking <span aria-hidden="true">→</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default DashboardHistory;