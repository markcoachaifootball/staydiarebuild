
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    quote: "The automated camera system has transformed how we analyze our games. It's been a game-changer for our club.",
    author: "John Smith",
    role: "Football Club Manager",
    club: "Manchester United Amateur FC"
  },
  {
    quote: "Our fans love being able to watch matches from anywhere. Plus, the revenue sharing model has created a new income stream for us.",
    author: "Sarah Johnson",
    role: "Rugby Club President",
    club: "Dublin Lions RFC"
  },
  {
    quote: "The quality of the AI tracking is incredible. It's like having a professional camera crew at every game.",
    author: "Michael O'Connor",
    role: "Basketball Coach",
    club: "Glasgow Hawks"
  },
  {
    quote: "Our partnership with Staydia Sports gives our players and coaches the opportunity to improve and develop. It also gives the club opportunity to show case the club all around the world.",
    author: "Martin Loughran",
    role: "Club Representative",
    club: "Crumlin Utd FC"
  }
];

export const SportsTestimonials = () => {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <div className="staydia-container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">What Clubs Say About Us</h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Hear from clubs already using Staydia's technology
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author} className="bg-staydia-black border border-staydia-lightgray">
              <CardContent className="pt-6">
                <blockquote className="text-gray-300 mb-4">"{testimonial.quote}"</blockquote>
                <footer>
                  <p className="text-staydia-gold font-semibold">{testimonial.author}</p>
                  <p className="text-gray-400">{testimonial.role}</p>
                  <p className="text-gray-400">{testimonial.club}</p>
                </footer>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
