import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <main className="min-h-[calc(100vh-4rem)] flex items-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display text-6xl font-medium mb-6">404</h1>
          <h2 className="font-display text-2xl font-medium mb-8">Page Not Found</h2>
          
          <p className="text-gray-600 mb-12 max-w-xl mx-auto">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>

          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 transition-colors group"
          >
            <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
            Return to Homepage
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;