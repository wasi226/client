import React from 'react';

const Contact = () => {
  return (
    <section className="bg-[#01052F] py-20 px-4 min-h-screen">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-white">Contact Us</h2>
        <form className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
            />
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-indigo-600 text-white py-3 px-6 rounded-full hover:bg-indigo-700 transition cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
