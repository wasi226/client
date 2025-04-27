import React from 'react';

const testimonials = [
  {
    name: 'Aarav Sharma',
    title: 'Fitness Enthusiast',
    quote: 'GoGetWell made tracking my daily health routine super easy and motivating. Love the clean dashboard!',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Priya Verma',
    title: 'Yoga Instructor',
    quote: 'I recommend GoGetWell to all my clients. It’s intuitive and incredibly helpful for consistent progress.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Raj Patel',
    title: 'Tech Professional',
    quote: 'Managing health along with work life was hard. GoGetWell made it simple and effective!',
    image: 'https://randomuser.me/api/portraits/men/68.jpg',
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-gray-100 py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              <p className="text-indigo-600 mb-2">{testimonial.title}</p>
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
