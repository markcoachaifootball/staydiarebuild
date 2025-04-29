
import React, { useState, useEffect } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  club: string;
  logo: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Staydia's AI camera system has completely transformed how we broadcast our matches. The quality is exceptional and our fans love it.",
    author: "Thomas Wilson",
    role: "Club Chairman",
    club: "Whitehawk FC",
    logo: "/lovable-uploads/40ee1851-41aa-41d7-946b-7eb893affa64.png"
  },
  {
    quote: "The revenue sharing model has created a new income stream for our club while giving our supporters amazing value. It's been a win-win partnership.",
    author: "Emma Roberts",
    role: "Commercial Director",
    club: "Edinburgh City FC",
    logo: "/lovable-uploads/6b3c9981-9edc-4128-aff8-2a80a160e1c9.png"
  },
  {
    quote: "Our technical staff loves the tactical clipping tool. It's made analysis so much easier and more efficient for our coaching team.",
    author: "Michael Chambers",
    role: "Head Coach",
    club: "Bromley FC",
    logo: "/lovable-uploads/8f4bbea6-85fc-451e-93da-15416813d362.png"
  },
  {
    quote: "The system was incredibly easy to set up, and the support from the Staydia team has been outstanding throughout the entire process.",
    author: "Laura Davidson",
    role: "Club Secretary",
    club: "Dulwich Hamlet FC",
    logo: "/lovable-uploads/6fc52893-fca3-47e1-b26d-64bca2a37a8b.png"
  }
];

const ClubTestimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (autoplay) {
      interval = setInterval(() => {
        setActiveIndex((current) => (current + 1) % testimonials.length);
      }, 5000);
    }

    return () => clearInterval(interval);
  }, [autoplay]);

  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);

  return (
    <div className="py-12 border-t border-staydia-lightgray">
      <h3 className="text-2xl font-semibold text-staydia-gold mb-8">Trusted Partners</h3>
      
      <Carousel 
        className="w-full"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index}>
              <Card className="bg-staydia-black border border-staydia-lightgray">
                <CardContent className="pt-8 pb-8">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/3 flex justify-center">
                      <img 
                        src={testimonial.logo} 
                        alt={`${testimonial.club} logo`}
                        className="h-24 object-contain filter brightness-90"
                      />
                    </div>
                    <div className="md:w-2/3">
                      <blockquote className="text-xl italic text-gray-300 mb-4">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="flex flex-col">
                        <strong className="text-staydia-gold">{testimonial.author}</strong>
                        <span className="text-gray-400">{testimonial.role}</span>
                        <span className="text-gray-400">{testimonial.club}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-3 md:-left-5 bg-staydia-darkgray text-white border-staydia-lightgray hover:bg-staydia-lightgray">
          <ChevronLeft className="h-5 w-5" />
        </CarouselPrevious>
        <CarouselNext className="-right-3 md:-right-5 bg-staydia-darkgray text-white border-staydia-lightgray hover:bg-staydia-lightgray">
          <ChevronRight className="h-5 w-5" />
        </CarouselNext>
      </Carousel>
      
      <div className="flex justify-center mt-4 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === activeIndex % testimonials.length ? "bg-staydia-gold w-4" : "bg-staydia-lightgray"
            }`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ClubTestimonials;
