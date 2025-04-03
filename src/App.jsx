import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';
import ForgotPassword from './components/auth/ForgotPassword';
import BookingCalendar from './components/booking/BookingCalendar';
import Navbar from './components/layout/Navbar';
import HomePage from './components/home/HomePage';
import Dashboard from './components/dashboard/Dashboard';
import DashboardBookings from './components/dashboard/DashboardBookings';
import DashboardHistory from './components/dashboard/DashboardHistory';
import DashboardNotifications from './components/dashboard/DashboardNotifications';
import DashboardSettings from './components/dashboard/DashboardSettings';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in (e.g., by checking localStorage or sessionStorage)
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
    // Redirect to home page or login page
    window.location.href = '/';
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />

        <Routes>
          <Route path="/" element={<HomePage isLoggedIn={isLoggedIn} />} />
          <Route path="/login" element={<LoginForm setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/booking" element={<BookingCalendar />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<DashboardBookings />} />
            <Route path="bookings" element={<DashboardBookings />} />
            <Route path="history" element={<DashboardHistory />} />
            <Route path="notifications" element={<DashboardNotifications />} />
            <Route path="settings" element={<DashboardSettings />} />
          </Route>
          {/* <Route path="/profile" element={<ProfileManagement />} /> */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
