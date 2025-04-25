import React from 'react';

const Vision: React.FC = () => {
  return (
    <section id="vision" className="py-24 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-medium mb-12">Our Vision</h2>
          
          <div className="space-y-12">
            <div>
              <h3 className="font-display text-xl font-medium mb-4">Advanced LLM Research</h3>
              <p className="text-gray-600 leading-relaxed">
                We're at the forefront of LLM research, developing AI agents that understand context, adapt to specific domains, and deliver meaningful business outcomes.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-medium mb-4">Business Automation</h3>
              <p className="text-gray-600 leading-relaxed">
                Our LLM solutions streamline operations, enhance customer interactions, and unlock new possibilities for businesses across sectors.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-medium mb-4">Cultural Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                Our Assamese chatbot demonstrates our ability to create culturally-aware AI solutions, showcasing the potential of localized language models.
              </p>
            </div>

            <blockquote className="border-l-2 border-orange-500 pl-6 italic text-gray-600">
              "We're not just building AI systems; we're creating intelligent solutions that understand business context and cultural nuances."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;