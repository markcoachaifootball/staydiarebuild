
import React from 'react';
import TestimonialCard from './TestimonialCard';

interface Testimonial {
  initials: string;
  clubName: string;
  location: string;
  quote: string;
}

interface TestimonialsSectionProps {
  title: string;
  description: string;
  testimonials: Testimonial[];
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ title, description, testimonials }) => {
  return (
    <section className="py-16 staydia-container">
      <h2 className="text-3xl font-bold mb-8">{title}</h2>
      <p className="text-xl text-gray-300 mb-10">
        {description}
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            initials={testimonial.initials}
            clubName={testimonial.clubName}
            location={testimonial.location}
            quote={testimonial.quote}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
