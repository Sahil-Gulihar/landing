import React, { useEffect, useRef } from 'react';
import { ArrowRight, Bot, Mic , Globe2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Products: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.products-title', {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });

      gsap.from('.product-card', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.products-grid',
          start: 'top center+=100',
          toggleActions: 'play none none reverse'
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="py-32" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="products-title font-display text-4xl font-medium mb-16 text-center">Our Products</h1>
          
          <div className="products-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Assamese Chatbot */}
            <div className="product-card group bg-white/50 backdrop-blur-sm border border-orange-100 rounded-lg p-5 hover:border-orange-200 transition-colors duration-300">
              <div className="flex items-center justify-between mb-6">
                <div className="bg-orange-50 p-2 rounded-md">
                  <Bot className="w-4 h-4 text-orange-500" />
                </div>
                <span className="text-[10px] font-medium uppercase tracking-wider text-green-600 bg-green-50 px-2 py-0.5 rounded-full">Live</span>
              </div>
              
              <h2 className="font-display text-lg font-medium mb-2">Assamese Chatbot</h2>
              <p className="text-gray-600 text-sm mb-4">
                Natural conversations in Assamese with our state-of-the-art language model.
              </p>

              <a 
                href="https://chat.navdyut.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-orange-500 hover:text-orange-600 transition-colors group/link"
              >
                Try it now
                <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
              </a>
            </div>

            {/* Voice Bots */}
            <div className="product-card group bg-white/50 backdrop-blur-sm border border-gray-100 rounded-lg p-5 transition-colors duration-300">
              <div className="flex items-center justify-between mb-6">
                <div className="bg-gray-50 p-2 rounded-md">
                  <Mic className="w-4 h-4 text-gray-400" />
                </div>
                <span className="text-[10px] font-medium uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">Coming Soon</span>
              </div>
              
              <h2 className="font-display text-lg font-medium mb-2">Indic Voice Bots</h2>
              <p className="text-gray-600 text-sm">
                Voice-enabled AI assistants that understand and speak Indian languages naturally.
              </p>
            </div>

            {/* Browser Automation */}
            <div className="product-card group bg-white/50 backdrop-blur-sm border border-gray-100 rounded-lg p-5 transition-colors duration-300">
              <div className="flex items-center justify-between mb-6">
                <div className="bg-gray-50 p-2 rounded-md">
                  <Globe2 className="w-4 h-4 text-gray-400" />
                </div>
                <span className="text-[10px] font-medium uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">Coming Soon</span>
              </div>
              
              <h2 className="font-display text-lg font-medium mb-2">Browser Automation</h2>
              <p className="text-gray-600 text-sm">
                Intelligent automation agents that streamline web-based workflows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Products;