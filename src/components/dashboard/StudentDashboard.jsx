import { useState } from 'react';

const StudentDashboard = () => {
    const [activeTab, setActiveTab] = useState('bookings');

    const mockBookings = [
        {
            id: 1,
            date: '2024-03-15',
            timeSlot: '09:00 AM - 11:00 AM',
            tableNumber: 'A12',
            status: 'Confirmed'
        },
        // Add more mock bookings as needed
    ];

    const mockPayments = [
        {
            id: 1,
            date: '2024-03-15',
            amount: 50,
            status: 'Paid',
            bookingId: 1
        },
        // Add more mock payments as needed
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="bg-white shadow rounded-lg">
                <div className="border-b border-gray-200">
                    <nav className="-mb-px flex">
                        <button
                            onClick={() => setActiveTab('bookings')}
                            className={`w-1/3 py-4 px-1 text-center border-b-2 font-medium text-sm ${activeTab === 'bookings' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                        >
                            My Bookings
                        </button>
                        <button
                            onClick={() => setActiveTab('payments')}
                            className={`w-1/3 py-4 px-1 text-center border-b-2 font-medium text-sm ${activeTab === 'payments' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                        >
                            Payment History
                        </button>
                        <button
                            onClick={() => setActiveTab('profile')}
                            className={`w-1/3 py-4 px-1 text-center border-b-2 font-medium text-sm ${activeTab === 'profile' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                        >
                            Profile
                        </button>
                    </nav>
                </div>

                <div className="p-4">
                    {activeTab === 'bookings' && (
                        <div className="space-y-4">
                            <h2 className="text-lg font-medium">Current Bookings</h2>
                            <div className="bg-white shadow overflow-hidden sm:rounded-md">
                                <ul className="divide-y divide-gray-200">
                                    {mockBookings.map((booking) => (
                                        <li key={booking.id} className="p-4">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="text-sm font-medium text-indigo-600">Table {booking.tableNumber}</p>
                                                    <p className="text-sm text-gray-500">{booking.date}</p>
                                                    <p className="text-sm text-gray-500">{booking.timeSlot}</p>
                                                </div>
                                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${booking.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                                    {booking.status}
                                                </span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}

                    {activeTab === 'payments' && (
                        <div className="space-y-4">
                            <h2 className="text-lg font-medium">Payment History</h2>
                            <div className="bg-white shadow overflow-hidden sm:rounded-md">
                                <ul className="divide-y divide-gray-200">
                                    {mockPayments.map((payment) => (
                                        <li key={payment.id} className="p-4">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="text-sm font-medium text-gray-900">Booking #{payment.bookingId}</p>
                                                    <p className="text-sm text-gray-500">{payment.date}</p>
                                                    <p className="text-sm text-gray-500">₹{payment.amount}</p>
                                                </div>
                                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${payment.status === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                                    {payment.status}
                                                </span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}

                    {activeTab === 'profile' && (
                        <div className="space-y-4">
                            <h2 className="text-lg font-medium">Profile Information</h2>
                            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                                <div className="px-4 py-5 sm:p-6">
                                    <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                                        <div className="sm:col-span-1">
                                            <dt className="text-sm font-medium text-gray-500">Full name</dt>
                                            <dd className="mt-1 text-sm text-gray-900">John Doe</dd>
                                        </div>
                                        <div className="sm:col-span-1">
                                            <dt className="text-sm font-medium text-gray-500">Email address</dt>
                                            <dd className="mt-1 text-sm text-gray-900">johndoe@example.com</dd>
                                        </div>
                                        <div className="sm:col-span-1">
                                            <dt className="text-sm font-medium text-gray-500">Phone number</dt>
                                            <dd className="mt-1 text-sm text-gray-900">+1 (555) 123-4567</dd>
                                        </div>
                                        <div className="sm:col-span-1">
                                            <dt className="text-sm font-medium text-gray-500">Age</dt>
                                            <dd className="mt-1 text-sm text-gray-900">22</dd>
                                        </div>
                                        <div className="sm:col-span-2">
                                            <dt className="text-sm font-medium text-gray-500">Address</dt>
                                            <dd className="mt-1 text-sm text-gray-900">123 Student Street, University Town, ST 12345</dd>
                                        </div>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default StudentDashboard;