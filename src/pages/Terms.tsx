import React from 'react';

const Terms = () => {
  return (
    <main className="py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-4xl font-medium mb-12">Terms and Conditions</h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-lg text-gray-600 mb-8">
              Effective Date: March 20, 2025
            </p>
            
            <p className="text-gray-600 mb-6">
              Welcome to Navdyut AI Tech & Research Labs. By accessing or using our website, products, or services, 
              you agree to comply with and be bound by these Terms and Conditions. If you do not agree with these terms, 
              please refrain from using our services.
            </p>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-medium mb-4">1. Definitions</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>"Company," "we," "our," or "us" refers to <strong>Navdyut AI Tech & Research Labs</strong>.</li>
                <li>"User," "you," or "your" refers to any individual or entity accessing our services.</li>
                <li>"Services" refers to all products, software, and research tools offered by the company.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-medium mb-4">2. Use of Services</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>You must be at least 18 years old to use our services or have the consent of a legal guardian.</li>
                <li>You agree to use our services in compliance with all applicable laws and regulations.</li>
                <li>Unauthorized use, reproduction, or modification of our content and technology is strictly prohibited.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-medium mb-4">3. Intellectual Property</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>All content, software, trademarks, and research materials provided by Navdyut AI Tech & Research Labs remain the exclusive property of the company.</li>
                <li>Users may not copy, distribute, or exploit any intellectual property without prior written consent.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-medium mb-4">4. Privacy Policy</h2>
              <p className="text-gray-600 mb-4">
                Your use of our services is also governed by our <strong>Privacy Policy</strong>, which outlines how we collect, use, and protect your data.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-medium mb-4">5. Data Ownership and Usage</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>All data provided by users and collected through our services is owned by <strong>Navdyut AI Tech & Research Labs</strong>.</li>
                <li>We reserve the right to use this data for further training of AI models without prior consent.</li>
                <li>Data usage and processing shall be managed in accordance with the laws of <strong>India</strong>.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-medium mb-4">6. User Obligations</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>You agree not to misuse, hack, or disrupt our systems and networks.</li>
                <li>You are responsible for safeguarding any account credentials used to access our services.</li>
                <li>Any content you submit should not violate legal or ethical standards.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-medium mb-4">7. Limitation of Liability</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>We do not guarantee uninterrupted or error-free services.</li>
                <li>Navdyut AI Tech & Research Labs shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-medium mb-4">8. Third-Party Links and Services</h2>
              <p className="text-gray-600 mb-4">
                Our services may include links to third-party websites or integrations. We are not responsible for their content or practices.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-medium mb-4">9. Payments and Refunds</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Subscription-based payments are <strong>non-refundable</strong>.</li>
                <li>Users are responsible for managing their subscriptions and cancellations before renewal periods.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-medium mb-4">10. Termination</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>We reserve the right to terminate or restrict your access to our services if you violate these terms.</li>
                <li>Users may discontinue the use of services at any time.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-medium mb-4">11. Changes to Terms</h2>
              <p className="text-gray-600 mb-4">
                We may update these terms from time to time. Continued use of our services after modifications signifies your acceptance of the updated terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-medium mb-4">12. Governing Law</h2>
              <p className="text-gray-600 mb-4">
                These terms shall be governed by the laws of <strong>India</strong>. Any disputes shall be resolved in the courts of <strong>India</strong>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-medium mb-4">Contact Information</h2>
              <p className="text-gray-600 mb-4">
                For any inquiries, please contact us at: 
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

export default Terms;