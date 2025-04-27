import React from 'react';
import { ShieldCheckIcon, LightningBoltIcon, ChartBarIcon } from '@heroicons/react/outline';

const features = [
  {
    name: 'Secure Health Data',
    description: 'Your medical information stays private, protected with end-to-end encryption.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Fast Performance',
    description: 'Access your health dashboard in seconds with our lightning-fast platform.',
    icon: LightningBoltIcon,
  },
  {
    name: 'Progress Tracking',
    description: 'Visualize your wellness improvements and milestones over time easily.',
    icon: ChartBarIcon,
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">Powerful Features for Your Wellness</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition">
              <feature.icon className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.name}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

FeaturesSection.jsx


