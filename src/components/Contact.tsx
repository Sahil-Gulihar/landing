import React from 'react';
import { ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-medium mb-12">Contact</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-xl font-medium mb-4">General Inquiries</h3>
              <a 
                href="mailto:support@navdyut.com" 
                className="text-orange-500 hover:text-orange-600 transition-colors"
              >
                support@navdyut.com
              </a>
            </div>

            <div>
              <h3 className="font-display text-xl font-medium mb-4">Business & Partnerships</h3>
              <a 
                href="mailto:dicom@navdyut.com" 
                className="text-orange-500 hover:text-orange-600 transition-colors"
              >
                dicom@navdyut.com
              </a>
            </div>

            <div className="pt-8">
              <a 
                href="https://chat.navdyut.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-orange-600 gap-2 group"
              >
                Try Our Assamese AI
                <ArrowRight size={18} className="text-orange-500 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;