import React from 'react';

const plans = [
  {
    name: 'Free',
    price: '$0',
    features: ['Basic Tracking', 'Limited Recommendations', 'Community Access'],
  },
  {
    name: 'Pro',
    price: '$19/mo',
    features: ['Advanced Tracking', 'Personalized Plans', 'Priority Support'],
  },
  {
    name: 'Enterprise',
    price: 'Contact Us',
    features: ['Custom Solutions', 'Dedicated Manager', 'Full Analytics'],
  },
];

const Pricing = () => {
  return (
    <section className="bg-[#01052F] py-20 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-white">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition">
              <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-3xl font-bold text-indigo-600 mb-6">{plan.price}</p>
              <ul className="text-gray-700 mb-6 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i}>• {feature}</li>
                ))}
              </ul>
              <button className="bg-indigo-600 text-white py-2 px-6 rounded-full hover:bg-indigo-700 transition cursor-pointer">
                {plan.name === 'Enterprise' ? 'Contact Us' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
