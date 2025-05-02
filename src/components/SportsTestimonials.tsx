
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    quote: "As a proud partner of Staydia Sports, RTB Ebbw Vale FC have had an exceptional experience with their live streaming camera. The quality of the video production is impressive, capturing every detail of our matches with HD clarity.",
    author: "RTB Ebbw Vale FC",
    role: "Football Club",
    club: "RTB Ebbw Vale FC"
  },
  {
    quote: "Staydia Sports has greatly enhanced the club. It is a great tool for our coaches and players to analyse games and it's grown our social media followers dramatically.",
    author: "Lucan United",
    role: "Football Club",
    club: "Lucan United FC"
  },
  {
    quote: "The quality of the stream is excellent and gives us superb match coverage not only for the general viewer but also match team coaches for analysing their games, setup and strategy.",
    author: "Nantyglo FC",
    role: "Football Club",
    club: "Nantyglo FC"
  },
  {
    quote: "Live stream at Three Hills at Folkestone Optimist Hockey Club is watched by players, officials, parents and friends all over the UK and beyond. It has enhanced our capability to review, coach and learn.",
    author: "Folkestone Optimist HC",
    role: "Hockey Club",
    club: "Folkestone Optimist Hockey Club"
  },
  {
    quote: "Our partnership with Staydia Sports gives our players and coaches the opportunity to improve and develop. It also gives the club opportunity to show case the club all around the world. Our recent Robbie Keane Academy Cup was a great success with all games streamed live. With top academies from England, Scotland and Italy taking part, the coaches, players and parents were very impressed with the quality.",
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
