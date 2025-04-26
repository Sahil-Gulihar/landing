import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import './styles/animations.css';
import NotFound from './pages/NotFound';
import Products from './pages/Products';

function App() {
  return (
    <Router>
      <div className="font-sans text-gray-900">
        <div className="fixed inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-100/50 -z-10" />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/products" element={<Products/>} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;