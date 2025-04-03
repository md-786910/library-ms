import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Privacy Policy</h1>
            <p className="mt-4 text-lg text-gray-500">
              Last updated: January 1, 2023
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 bg-white overflow-hidden shadow rounded-lg"
        >
          <div className="px-4 py-5 sm:p-6">
            <div className="prose max-w-none">
              <h2>Introduction</h2>
              <p>
                At LibrarySpace, we respect your privacy and are committed to protecting your personal data. 
                This privacy policy will inform you about how we look after your personal data when you visit 
                our website and tell you about your privacy rights and how the law protects you.
              </p>

              <h2>The Data We Collect About You</h2>
              <p>
                Personal data, or personal information, means any information about an individual from which 
                that person can be identified. We may collect, use, store and transfer different kinds of 
                personal data about you which we have grouped together as follows:
              </p>
              <ul>
                <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                <li><strong>Contact Data</strong> includes email address, telephone numbers, and physical address.</li>
                <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, 
                time zone setting and location, browser plug-in types and versions, operating system and platform, 
                and other technology on the devices you use to access this website.</li>
                <li><strong>Usage Data</strong> includes information about how you use our website and services.</li>
                <li><strong>Library Activity Data</strong> includes information about books borrowed, returned, 
                reserved, and other library-related activities.</li>
              </ul>

              <h2>How We Use Your Personal Data</h2>
              <p>
                We will only use your personal data when the law allows us to. Most commonly, we will use your 
                personal data in the following circumstances:
              </p>
              <ul>
                <li>To register you as a new user</li>
                <li>To provide and manage your library account</li>
                <li>To notify you about changes to our service</li>
                <li>To administer and protect our business and this website</li>
                <li>To deliver relevant website content to you</li>
                <li>To improve our website, products/services, marketing, and user relationships</li>
              </ul>

              <h2>Data Security</h2>
              <p>
                We have put in place appropriate security measures to prevent your personal data from being 
                accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, 
                we limit access to your personal data to those employees, agents, contractors, and other third 
                parties who have a business need to know.
              </p>

              <h2>Data Retention</h2>
              <p>
                We will only retain your personal data for as long as necessary to fulfill the purposes we 
                collected it for, including for the purposes of satisfying any legal, accounting, or reporting 
                requirements.
              </p>

              <h2>Your Legal Rights</h2>
              <p>
                Under certain circumstances, you have rights under data protection laws in relation to your 
                personal data, including the right to:
              </p>
              <ul>
                <li>Request access to your personal data</li>
                <li>Request correction of your personal data</li>
                <li>Request erasure of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Request restriction of processing your personal data</li>
                <li>Request transfer of your personal data</li>
                <li>Right to withdraw consent</li>
              </ul>

              <h2>Changes to This Privacy Policy</h2>
              <p>
                We may update our privacy policy from time to time. We will notify you of any changes by 
                posting the new privacy policy on this page and updating the "last updated" date at the top 
                of this privacy policy.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have any questions about this privacy policy or our privacy practices, please contact us at:
              </p>
              <p>
                Email: privacy@libraryspace.com<br />
                Phone: +1 (555) 123-4567<br />
                Address: 123 Library Street, Booktown, BK 12345
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPage;