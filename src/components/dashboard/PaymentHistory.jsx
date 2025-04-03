import { useState, useEffect } from 'react';

const PaymentHistory = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching payment history from an API
    setTimeout(() => {
      setPayments([
        {
          id: 'pay_123456',
          date: '2023-11-15',
          amount: 150,
          status: 'Completed',
          bookingId: 'book_789',
          paymentMethod: 'Credit Card'
        },
        {
          id: 'pay_123457',
          date: '2023-11-10',
          amount: 150,
          status: 'Completed',
          bookingId: 'book_790',
          paymentMethod: 'UPI'
        },
        {
          id: 'pay_123458',
          date: '2023-11-05',
          amount: 150,
          status: 'Completed',
          bookingId: 'book_791',
          paymentMethod: 'Debit Card'
        }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Payment History</h1>
      
      {loading ? (
        <div className="flex justify-center">
          <p>Loading payment history...</p>
        </div>
      ) : (
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {payments.length > 0 ? (
              payments.map((payment) => (
                <li key={payment.id}>
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium text-indigo-600 truncate">
                        Payment ID: {payment.id}
                      </div>
                      <div className="ml-2 flex-shrink-0 flex">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          payment.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {payment.status}
                        </span>
                      </div>
                    </div>
                    <div className="mt-2 sm:flex sm:justify-between">
                      <div className="sm:flex">
                        <p className="flex items-center text-sm text-gray-500">
                          Booking ID: {payment.bookingId}
                        </p>
                        <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                          Method: {payment.paymentMethod}
                        </p>
                      </div>
                      <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                        <p>
                          Amount: ₹{payment.amount}
                        </p>
                        <p className="ml-4">
                          Date: {payment.date}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              ))
            ) : (
              <li className="px-4 py-4 sm:px-6 text-center text-gray-500">
                No payment history found.
              </li>
            )}
          </ul>
        </div>
      )}
      
      <div className="mt-6">
        <a 
          href="/dashboard" 
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
        >
          Back to Dashboard
        </a>
      </div>
    </div>
  );
};

export default PaymentHistory;