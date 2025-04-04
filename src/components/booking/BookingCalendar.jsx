import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const BookingCalendar = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [currentWeek, setCurrentWeek] = useState([]);

    // Available study rooms
    const studyRooms = [
        { id: 1, name: 'Quiet Study Room 101', capacity: 1, features: ['Quiet Zone', 'Window View'] },
        { id: 2, name: 'Group Study Room 203', capacity: 6, features: ['Whiteboard', 'TV Screen'] },
        { id: 3, name: 'Computer Lab', capacity: 20, features: ['Computers', 'Printing'] },
        { id: 4, name: 'Media Room', capacity: 4, features: ['AV Equipment', 'Soundproof'] },
    ];

    const timeSlots = [
        '09:00 AM - 11:00 AM',
        '11:00 AM - 01:00 PM',
        '02:00 PM - 04:00 PM',
        '04:00 PM - 06:00 PM',
        '06:00 PM - 08:00 PM'
    ];

    // Generate the week days based on selected date
    useEffect(() => {
        const generateWeekDays = (date) => {
            const day = date.getDay();
            const diff = date.getDate() - day + (day === 0 ? -6 : 1); // Adjust for Sunday

            const monday = new Date(date.setDate(diff));
            const weekDays = [];

            for (let i = 0; i < 7; i++) {
                const nextDay = new Date(monday);
                nextDay.setDate(monday.getDate() + i);
                weekDays.push(nextDay);
            }

            return weekDays;
        };

        setCurrentWeek(generateWeekDays(new Date(selectedDate)));
    }, [selectedDate]);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setSelectedSlot(null);
    };

    const handleSlotSelect = (slot) => {
        setSelectedSlot(slot);
    };

    const handleRoomSelect = (room) => {
        setSelectedRoom(room);
    };

    const navigateWeek = (direction) => {
        const newDate = new Date(selectedDate);
        newDate.setDate(newDate.getDate() + (direction * 7));
        setSelectedDate(newDate);
    };

    const formatDay = (date) => {
        return date.toLocaleDateString('en-US', { weekday: 'short' });
    };

    const formatDate = (date) => {
        return date.getDate();
    };

    const isToday = (date) => {
        const today = new Date();
        return date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear();
    };

    const isSelected = (date) => {
        return date.getDate() === selectedDate.getDate() &&
            date.getMonth() === selectedDate.getMonth() &&
            date.getFullYear() === selectedDate.getFullYear();
    };

    return (
        <div className="max-w-7xl mx-auto p-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
            >
                <h2 className="text-3xl font-bold text-gray-900">Book a Study Space</h2>
                <p className="mt-2 text-gray-600">Select a date, time, and room to reserve your study space</p>
            </motion.div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
                <div className="p-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
                    <div className="flex justify-between items-center">
                        <h3 className="text-xl font-semibold flex items-center">
                            <FaCalendarAlt className="mr-2" /> Select Date
                        </h3>
                        <div className="flex space-x-2">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigateWeek(-1)}
                                className="p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30"
                            >
                                <FaChevronLeft className="text-white" />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigateWeek(1)}
                                className="p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30"
                            >
                                <FaChevronRight className="text-white" />
                            </motion.button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-7 bg-gray-50">
                    {currentWeek.map((date, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleDateChange(date)}
                            className={`cursor-pointer p-4 text-center border-r last:border-r-0 border-b ${isSelected(date)
                                ? 'bg-indigo-100 border-indigo-300'
                                : 'hover:bg-gray-100'
                                }`}
                        >
                            <div className="text-sm font-medium text-gray-500">{formatDay(date)}</div>
                            <div className={`text-2xl font-bold mt-1 ${isToday(date)
                                ? 'text-indigo-600'
                                : isSelected(date)
                                    ? 'text-indigo-800'
                                    : 'text-gray-800'
                                }`}>
                                {formatDate(date)}
                            </div>
                            {isToday(date) && (
                                <div className="mt-1 text-xs font-medium text-indigo-600">Today</div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden lg:col-span-1"
                >
                    <div className="p-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
                        <h3 className="text-xl font-semibold flex items-center">
                            <FaClock className="mr-2" /> Available Time Slots
                        </h3>
                    </div>
                    <div className="p-6 space-y-3">
                        {timeSlots.map((slot) => (
                            <motion.button
                                key={slot}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => handleSlotSelect(slot)}
                                className={`w-full p-4 text-left rounded-lg transition-all ${selectedSlot === slot
                                    ? 'bg-indigo-600 text-white shadow-md'
                                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                                    }`}
                            >
                                <div className="flex items-center">
                                    <FaClock className={`mr-3 ${selectedSlot === slot ? 'text-white' : 'text-indigo-600'}`} />
                                    <span>{slot}</span>
                                </div>
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden lg:col-span-1"
                >
                    <div className="p-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
                        <h3 className="text-xl font-semibold flex items-center">
                            <FaMapMarkerAlt className="mr-2" /> Available Rooms
                        </h3>
                    </div>
                    <div className="p-6 space-y-3">
                        {studyRooms.map((room) => (
                            <motion.button
                                key={room.id}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => handleRoomSelect(room)}
                                className={`w-full p-4 text-left rounded-lg transition-all ${selectedRoom?.id === room.id
                                    ? 'bg-indigo-600 text-white shadow-md'
                                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                                    }`}
                            >
                                <div className="font-medium">{room.name}</div>
                                <div className={`text-sm mt-1 ${selectedRoom?.id === room.id ? 'text-indigo-100' : 'text-gray-600'}`}>
                                    Capacity: {room.capacity} {room.capacity === 1 ? 'person' : 'people'}
                                </div>
                                <div className="flex flex-wrap mt-2 gap-2">
                                    {room.features.map((feature, index) => (
                                        <span
                                            key={index}
                                            className={`text-xs px-2 py-1 rounded-full ${selectedRoom?.id === room.id
                                                ? 'bg-white bg-opacity-20 text-white'
                                                : 'bg-indigo-100 text-indigo-800'
                                                }`}
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden lg:col-span-1"
                >
                    <div className="p-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
                        <h3 className="text-xl font-semibold">Booking Summary</h3>
                    </div>
                    <div className="p-6">
                        {selectedSlot && selectedRoom ? (
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-sm font-medium text-gray-500">Selected Date</h4>
                                    <p className="mt-1 text-lg font-medium text-gray-900">
                                        {selectedDate.toLocaleDateString('en-US', {
                                            weekday: 'long',
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-sm font-medium text-gray-500">Selected Time</h4>
                                    <p className="mt-1 text-lg font-medium text-gray-900">{selectedSlot}</p>
                                </div>

                                <div>
                                    <h4 className="text-sm font-medium text-gray-500">Selected Room</h4>
                                    <p className="mt-1 text-lg font-medium text-gray-900">{selectedRoom.name}</p>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-purple-700 text-white font-medium rounded-lg shadow-md hover:from-indigo-700 hover:to-purple-800 transition-all"
                                    onClick={() => {
                                        // TODO: Implement booking confirmation
                                        alert('Booking confirmed!');
                                    }}
                                >
                                    Confirm Booking
                                </motion.button>
                            </div>
                        ) : (
                            <div className="text-center py-10">
                                <svg className="mx-auto h-12 w-12 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <h3 className="mt-2 text-sm font-medium text-gray-900">No selection made</h3>
                                <p className="mt-1 text-sm text-gray-500">
                                    Please select a time slot and room to continue.
                                </p>
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default BookingCalendar;