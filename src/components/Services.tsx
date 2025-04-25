import React from "react";

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-medium mb-12">Services</h2>

          <div className="space-y-16">
            <div>
              <h3 className="font-display text-xl font-medium mb-4">
                LLM Research & Development
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We conduct cutting-edge research in language models and AI
                agents, developing solutions that push the boundaries of what's
                possible with AI.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li>• Advanced LLM architecture development</li>
                <li>• AI agent optimization</li>
                <li>• Domain-specific model training</li>
              </ul>
            </div>


            <div>
              <h3 className="font-display text-xl font-medium mb-4">
                Indic Language Models
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our expertise in Indic language models, demonstrated through our
                Assamese chatbot, enables us to create culturally-aware AI
                solutions for all of India.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li>• Regional language model development</li>
                <li>• Cultural context integration</li>
                <li>• Multilingual system design</li>
                <li>• Local language preservation and digitization</li>
              </ul>
            </div>

            <div>
              <h3 className="font-display text-xl font-medium mb-4">
                Government Sector Solutions
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We are working with APWD Assam for automating rigorous tasks
                through AI-powered solutions like chatbots and other similar
                content.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li>• AI-powered chatbot implementation</li>
                <li>• Document processing automation</li>
                <li>• Task management and workflow optimization</li>
              </ul>
            </div>

            <div>
              <h3 className="font-display text-xl font-medium mb-4">
                Enterprise Solutions
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We transform businesses through intelligent automation, using
                LLM agents to streamline operations and enhance efficiency
                across India.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li>• Custom LLM development for specific business needs</li>
                <li>• Workflow automation with AI agents</li>
                <li>• Industry-specific knowledge integration</li>
                <li>• Enterprise-scale deployment and support</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
