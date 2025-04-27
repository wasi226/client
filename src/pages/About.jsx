import React from 'react';
import { FaHospitalSymbol, FaUserMd, FaPlane, FaRobot, FaClipboardCheck } from 'react-icons/fa';

const About = () => {
  return (
    <div className="bg-gradient-to-br from-[#01052F] to-[#63559A] min-h-screen flex items-center justify-center p-8">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        <div className="text-white space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Revolutionizing <span className="text-[#90cdf4]">Medical Tourism</span> with AI
          </h1>
          <p className="text-gray-300">
            We are an AI-driven platform designed to modernize healthcare facilitators' operations and enhance patient experiences across borders.
          </p>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <FaRobot className="text-3xl text-[#90cdf4]" />
              <p>Streamline operations with intelligent automation and AI tools.</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaHospitalSymbol className="text-3xl text-[#90cdf4]" />
              <p>Empower hospitals and clinics to attract global patients.</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaClipboardCheck className="text-3xl text-[#90cdf4]" />
              <p>Ensure regulatory compliance across different regions.</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaPlane className="text-3xl text-[#90cdf4]" />
              <p>Seamless travel integration for a stress-free experience.</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaUserMd className="text-3xl text-[#90cdf4]" />
              <p>Real-time communication and personalized post-treatment care.</p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="https://i.pinimg.com/736x/70/4c/c3/704cc33c9c2c286891cb14168d00ce4c.jpg"
            alt="Medical Tourism"
            className="rounded-2xl shadow-2xl"
          />
        </div>

      </div>
    </div>
  );
};

export default About;
