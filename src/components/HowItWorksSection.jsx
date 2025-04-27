import React from 'react';

const steps = [
  {
    title: 'Sign Up',
    description: 'Create your account in just a few clicks and get started immediately.',
    number: '01',
  },
  {
    title: 'Track Your Health',
    description: 'Log your wellness activities, symptoms, and progress easily from your dashboard.',
    number: '02',
  },
  {
    title: 'Improve Continuously',
    description: 'Receive personalized recommendations and watch your health journey transform.',
    number: '03',
  },
];

const HowItWorksSection = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-indigo-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
