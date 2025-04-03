import React from 'react';
import { motion } from 'framer-motion';

const TermsPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Terms and Conditions</h1>
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
                These terms and conditions ("Terms") govern your use of the LibrarySpace website and services 
                (the "Service") operated by LibrarySpace Inc. ("us", "we", or "our"). Please read these Terms 
                carefully before using the Service.
              </p>
              <p>
                By accessing or using the Service, you agree to be bound by these Terms. If you disagree with 
                any part of the Terms, then you may not access the Service.
              </p>

              <h2>Accounts</h2>
              <p>
                When you create an account with us, you must provide information that is accurate, complete, 
                and current at all times. Failure to do so constitutes a breach of the Terms, which may result 
                in immediate termination of your account on our Service.
              </p>
              <p>
                You are responsible for safeguarding the password that you use to access the Service and for 
                any activities or actions under your password, whether your password is with our Service or a 
                third-party service.
              </p>
              <p>
                You agree not to disclose your password to any third party. You must notify us immediately upon 
                becoming aware of any breach of security or unauthorized use of your account.
              </p>

              <h2>Library Materials and Resources</h2>
              <p>
                Users are responsible for all library materials borrowed under their account. This includes 
                returning items on time, paying any applicable late fees, and compensating the library for 
                lost or damaged materials.
              </p>
              <p>
                Library materials and resources are provided for personal, educational, or research purposes 
                only. Users agree not to reproduce, distribute, modify, or create derivative works from 
                copyrighted materials except as permitted by law.
              </p>

              <h2>Intellectual Property</h2>
              <p>
                The Service and its original content, features, and functionality are and will remain the 
                exclusive property of LibrarySpace Inc. and its licensors. The Service is protected by 
                copyright, trademark, and other laws of both the United States and foreign countries.
              </p>
              <p>
                Our trademarks and trade dress may not be used in connection with any product or service 
                without the prior written consent of LibrarySpace Inc.
              </p>

              <h2>Links To Other Web Sites</h2>
              <p>
                Our Service may contain links to third-party websites or services that are not owned or 
                controlled by LibrarySpace Inc.
              </p>
              <p>
                LibrarySpace Inc. has no control over, and assumes no responsibility for, the content, 
                privacy policies, or practices of any third-party websites or services. You further acknowledge 
                and agree that LibrarySpace Inc. shall not be responsible or liable, directly or indirectly, 
                for any damage or loss caused or alleged to be caused by or in connection with the use of or 
                reliance on any such content, goods, or services available on or through any such websites or 
                services.
              </p>

              <h2>Termination</h2>
              <p>
                We may terminate or suspend your account immediately, without prior notice or liability, for 
                any reason whatsoever, including without limitation if you breach the Terms.
              </p>
              <p>
                Upon termination, your right to use the Service will immediately cease. If you wish to terminate 
                your account, you may simply discontinue using the Service.
              </p>

              <h2>Limitation of Liability</h2>
              <p>
                In no event shall LibrarySpace Inc., nor its directors, employees, partners, agents, suppliers, 
                or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, 
                including without limitation, loss of profits, data, use, goodwill, or other intangible losses, 
                resulting from your access to or use of or inability to access or use the Service.
              </p>

              <h2>Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws of the United States, 
                without regard to its conflict of law provisions.
              </p>
              <p>
                Our failure to enforce any right or provision of these Terms will not be considered a waiver of 
                those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, 
                the remaining provisions of these Terms will remain in effect.
              </p>

              <h2>Changes</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a 
                revision is material, we will try to provide at least 30 days' notice prior to any new terms 
                taking effect.
              </p>
              <p>
                By continuing to access or use our Service after those revisions become effective, you agree to 
                be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <p>
                Email: legal@libraryspace.com<br />
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

export default TermsPage;