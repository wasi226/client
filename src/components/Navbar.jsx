import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-2xl font-bold text-blue-600">GoGetWell</Link>
        <div className="space-x-15">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/about" className="hover:text-blue-600">About</Link>
          <Link to="/pricing" className="hover:text-blue-600">Pricing</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
        </div>
        <Link to="/contact">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Get Started
            </button>
          </Link>
      </div>
    </nav>
  );
};

export default Navbar;

