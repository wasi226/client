import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#01052F] text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold text-white">GoGetWell</h1>
          <p className="mt-2 text-sm">Empowering Cross-Border Healthcare</p>
        </div>

        <div className="flex justify-center space-x-8">
          <a href="/" className="hover:text-white transition">Home</a>
          <a href="/about" className="hover:text-white transition">About</a>
          <a href="/pricing" className="hover:text-white transition">Pricing</a>
          <a href="/contact" className="hover:text-white transition">Contact</a>
        </div>

        <div className="flex justify-center md:justify-end space-x-4">
          <a href="https://www.facebook.com/gogetwellai" className="hover:text-white transition">
            <FaFacebookF size={18} />
          </a>
          <a href="https://x.com/gogetwellai" className="hover:text-white transition">
            <FaTwitter size={18} />
          </a>
          <a href="https://www.instagram.com/gogetwellai/" className="hover:text-white transition">
            <FaInstagram size={18} />
          </a>
          <a href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A104781615&keywords=gogetwell%20ai&origin=RICH_QUERY_SUGGESTION&position=0&searchId=6c4ef0e5-b4f5-47e3-946f-d5eb07ae88f7&sid=iNH&spellCorrectionEnabled=false" className="hover:text-white transition">
            <FaLinkedinIn size={18} />
          </a>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs text-gray-500 flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-6">
        <p>© {new Date().getFullYear()} GoGetWell. All rights reserved.</p>
        <a href="#" className="hover:text-white transition">Privacy Policy</a>
        <a href="#" className="hover:text-white transition">Terms of Service</a>
        <span>Built with ❤️ in India</span>
      </div>
    </footer>
  );
};

export default Footer;

