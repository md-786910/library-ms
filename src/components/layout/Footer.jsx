import React from 'react';
import { Link } from 'react-router-dom';
import { FaBook, FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-2">
                        <Link to="/" className="flex items-center">
                            <div className="h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center">
                                <FaBook className="h-6 w-6 text-white" />
                            </div>
                            <span className="ml-3 text-xl font-bold text-white">LibrarySpace</span>
                        </Link>
                        <p className="mt-4 text-sm text-gray-300">
                            Empowering libraries and readers with innovative management solutions.
                        </p>
                        <div className="mt-6 flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white">
                                <FaTwitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <FaFacebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <FaInstagram className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <FaLinkedin className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    <div className="md:col-span-1">
                        <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Company</h3>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <Link to="/about" className="text-base text-gray-300 hover:text-white">
                                    About
                                </Link>
                            </li>
                            <li>
                                <a href="#" className="text-base text-gray-300 hover:text-white">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <Link to="/contact" className="text-base text-gray-300 hover:text-white">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <a href="#" className="text-base text-gray-300 hover:text-white">
                                    Partners
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="md:col-span-1">
                        <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Legal</h3>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <Link to="/privacy" className="text-base text-gray-300 hover:text-white">
                                    Privacy
                                </Link>
                            </li>
                            <li>
                                <Link to="/terms" className="text-base text-gray-300 hover:text-white">
                                    Terms & Conditions
                                </Link>
                            </li>
                            <li>
                                <a href="#" className="text-base text-gray-300 hover:text-white">
                                    Cookie Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-base text-gray-300 hover:text-white">
                                    Licensing
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-700 pt-8">
                    <p className="text-base text-gray-400 text-center">
                        &copy; {currentYear} LibrarySpace. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;