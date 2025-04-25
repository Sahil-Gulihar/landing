import React from 'react';

const testimonials = [
  {
    quote: "It feels like talking to a real person.",
    author: "Early User",
    role: "Testing Program"
  },
  {
    quote: "Talks like your girlfriend.",
    author: "Feedback from User",
    role: "Beta Tester"
  },
  {
    quote: "This isn't just programming — that's Axomiya Intelligence.",
    author: "Community Member",
    role: "Cultural Advisor"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-medium mb-12">User Feedback</h2>
          
          <div className="space-y-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="space-y-4">
                <p className="text-xl text-gray-900 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;