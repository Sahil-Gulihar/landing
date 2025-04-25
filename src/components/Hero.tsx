import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-8 opacity-0 animate-fade-in-up">
            LLM Research for Business Innovation
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl opacity-0 animate-fade-in-up animation-delay-200">
            We specialize in LLM research and development, creating AI agents that transform business operations. Our Assamese chatbot showcases our expertise in building culturally-aware AI solutions.
          </p>
          <div className="flex gap-4 flex-wrap opacity-0 animate-fade-in-up animation-delay-400">
          <a 
              href="https://chat.navdyut.com"
              rel="noopener noreferrer" 
              className="bg-white border-2 border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600  font-medium py-3 px-6 rounded-md transition-colors flex items-center gap-2 group"
            >
              Try Our Assamese AI
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a 
              href="#services" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-md transition-colors flex items-center gap-2 group"
            >
              Explore Our Services
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;