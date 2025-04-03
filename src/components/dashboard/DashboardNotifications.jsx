import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBell, FaCheck, FaTrash, FaCheckDouble } from 'react-icons/fa';
import { useOutletContext } from 'react-router-dom';

const DashboardNotifications = () => {
  const { user } = useOutletContext();
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'Your booking for Quiet Study Room 101 is confirmed', time: '2 hours ago', read: false, type: 'confirmation' },
    { id: 2, message: 'Reminder: You have a booking tomorrow at 2 PM', time: '1 day ago', read: true, type: 'reminder' },
    { id: 3, message: 'New study spaces available for booking', time: '3 days ago', read: true, type: 'announcement' },
    { id: 4, message: 'Your booking for Group Study Room 203 has been modified', time: '1 week ago', read: true, type: 'update' },
    { id: 5, message: 'Library hours extended during finals week', time: '2 weeks ago', read: true, type: 'announcement' }
  ]);

  const markAsRead = (id) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({ ...notification, read: true })));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  const getNotificationIcon = (type) => {
    switch(type) {
      case 'confirmation':
        return <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
          <FaCheck className="h-4 w-4 text-green-600" />
        </div>;
      case 'reminder':
        return <div className="h-8 w-8 rounded-full bg-yellow-100 flex items-center justify-center">
          <FaBell className="h-4 w-4 text-yellow-600" />
        </div>;
      case 'announcement':
        return <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
          <svg className="h-4 w-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
          </svg>
        </div>;
      default:
        return <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
          <FaBell className="h-4 w-4 text-indigo-600" />
        </div>;
    }
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div>
      <div className="px-4 py-5 sm:px-6 flex justify-between items-center flex-wrap">
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">Notifications</h3>
          <p className="mt-1 text-sm text-gray-500">
            Stay updated with your bookings and library announcements
          </p>
        </div>
        
        {unreadCount > 0 && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={markAllAsRead}
            className="mt-3 sm:mt-0 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          >
            <FaCheckDouble className="mr-2 h-4 w-4" />
            Mark all as read
          </motion.button>
        )}
      </div>
      
      <div className="border-t border-gray-200">
        {notifications.length > 0 ? (
          <ul className="divide-y divide-gray-200">
            {notifications.map((notification, index) => (
              <motion.li 
                key={notification.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`px-4 py-4 sm:px-6 hover:bg-gray-50 ${!notification.read ? 'bg-indigo-50' : ''}`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3">
                    {getNotificationIcon(notification.type)}
                    <div>
                      <p className={`text-sm ${!notification.read ? 'font-medium text-gray-900' : 'text-gray-700'}`}>
                        {notification.message}
                      </p>
                      <p className="mt-1 text-xs text-gray-500">{notification.time}</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    {!notification.read && (
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => markAsRead(notification.id)}
                        className="p-1 rounded-full text-indigo-600 hover:bg-indigo-100"
                        title="Mark as read"
                      >
                        <FaCheck className="h-4 w-4" />
                      </motion.button>
                    )}
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => deleteNotification(notification.id)}
                      className="p-1 rounded-full text-red-600 hover:bg-red-100"
                      title="Delete notification"
                    >
                      <FaTrash className="h-4 w-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        ) : (
          <div className="py-12 text-center">
            <FaBell className="mx-auto h-12 w-12 text-gray-300" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">No notifications</h3>
            <p className="mt-1 text-sm text-gray-500">You're all caught up!</p>
          </div>
        )}
      </div>
      
      <div className="px-4 py-4 sm:px-6 bg-gray-50 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">
            Notifications are stored for 30 days
          </span>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
            onClick={() => setNotifications([])}
          >
            Clear all notifications
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default DashboardNotifications;