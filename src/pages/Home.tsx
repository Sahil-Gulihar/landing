import React from 'react';
import Hero from '../components/Hero';
import Vision from '../components/Vision';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <Vision />
      <Services />
      <Testimonials />
      <Contact />
    </main>
  );
};

export default Home;