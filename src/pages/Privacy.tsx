import React from 'react';

const Privacy = () => {
  return (
    <main className="py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-4xl font-medium mb-12">Privacy Policy</h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-lg text-gray-600 mb-8">
              Effective Date: March 20, 2025
            </p>
            
            <p className="text-gray-600 mb-6">
              Navdyut AI Tech & Research Labs ("Company," "we," "our," or "us") values your privacy. 
              This Privacy Policy outlines how we collect, use, disclose, and protect your personal 
              and non-personal data when you use our services, website, and applications.
            </p>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-medium mb-4">1. Information We Collect</h2>
              <p className="text-gray-600 mb-4">We collect the following types of information:</p>
              
              <h3 className="font-display text-xl font-medium mb-3">1.1 Personal Information</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Name, email address, phone number, and contact details.</li>
                <li>Payment and billing information for subscription services.</li>
                <li>Account credentials and authentication data.</li>
              </ul>
              
              <h3 className="font-display text-xl font-medium mb-3">1.2 Non-Personal Information</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Device information, IP address, browser type, and operating system.</li>
                <li>Usage data, including interaction logs and analytics.</li>
                <li>Cookies and tracking technologies to enhance user experience.</li>
              </ul>
              
              <h3 className="font-display text-xl font-medium mb-3">1.3 User-Generated Data</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Any content, files, or data uploaded or shared while using our services.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-medium mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">We use your data for the following purposes:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>To provide and improve our services.</li>
                <li>To personalize user experience and enhance service functionality.</li>
                <li>To process payments and manage subscriptions.</li>
                <li>To conduct research, analysis, and AI model training.</li>
                <li>To enforce security, prevent fraud, and comply with legal obligations.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-medium mb-4">3. Data Sharing and Disclosure</h2>
              <p className="text-gray-600 mb-4">We do not sell or rent personal data. However, we may share data with:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Service providers:</strong> Third-party vendors that help in operations like payment processing, analytics, and hosting.</li>
                <li><strong>Legal authorities:</strong> When required by law or in response to valid legal processes.</li>
                <li><strong>Affiliates and research partners:</strong> For AI model improvements and research purposes.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-medium mb-4">4. Data Ownership and AI Training</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>All user data collected by Navdyut AI Tech & Research Labs is owned by us.</li>
                <li>We reserve the right to use this data for AI model training without prior user consent.</li>
                <li>Data processing and usage comply with the laws of <strong>India</strong>.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-medium mb-4">5. Data Security</h2>
              <p className="text-gray-600 mb-4">We implement security measures to protect user data, including:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Encryption and secure storage methods.</li>
                <li>Access controls to prevent unauthorized access.</li>
                <li>Regular security audits and vulnerability assessments.</li>
              </ul>
              <p className="text-gray-600">
                However, no method of data transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-medium mb-4">6. Cookies and Tracking Technologies</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>We use cookies to improve website functionality and personalize user experience.</li>
                <li>Users can manage cookie preferences through browser settings.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-medium mb-4">7. User Rights and Choices</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Access and correction:</strong> Users can request access to their data and correct inaccuracies.</li>
                <li><strong>Data deletion:</strong> Users may request the deletion of their personal data, subject to legal and business obligations.</li>
                <li><strong>Opt-out:</strong> Users can opt out of marketing communications at any time.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-medium mb-4">8. Third-Party Links</h2>
              <p className="text-gray-600">
                Our services may contain links to third-party websites. We are not responsible for their privacy policies or practices.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-medium mb-4">9. Changes to This Privacy Policy</h2>
              <p className="text-gray-600">
                We may update this policy from time to time. Users will be notified of significant changes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-medium mb-4">10. Governing Law</h2>
              <p className="text-gray-600">
                This Privacy Policy is governed by the laws of <strong>India</strong>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-medium mb-4">11. Contact Us</h2>
              <p className="text-gray-600">
                For questions or concerns, contact us at: 
                <a href="mailto:support@navdyut.com" className="text-orange-500 hover:text-orange-600 transition-colors ml-1">
                  support@navdyut.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Privacy;