
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
    quote: "As a proud partner of Staydia Sports, RTB Ebbw Vale FC have had an exceptional experience with their live streaming camera. The quality of the video production is impressive, capturing every detail of our matches with HD clarity.",
    author: "RTB Ebbw Vale",
    role: "Football Club",
    club: "Gwent, Wales",
    logo: "/lovable-uploads/72a15165-96d8-48c8-8375-74cbbc1caa71.png"
  },
  {
    quote: "Staydia Sports has greatly enhanced the club. It is a great tool for our coaches and players to analyse games and it's grown our social media followers dramatically. It has also given our members greater access to the club and help showcase our teams.",
    author: "Lucan United",
    role: "Football Club",
    club: "Lucan United FC",
    logo: "/lovable-uploads/88531769-dac6-40e2-ba39-ef73fa774d32.png"
  },
  {
    quote: "When staydia First made contact it seemed too good to be true what was on offer. The communication and service from the team has been second to none. The quality of the stream is excellent and gives us superb match coverage not only for the general viewer but also match team coaches for analysing their games, setup and strategy. It's benefitted all age groups from juniors to seniors and with the sponsor banners and updated score options it makes for a well rounded system we at nantyglo would recommend to all clubs interested in streaming their live matches. A big thumbs up.",
    author: "Nantyglo FC",
    role: "Football Club",
    club: "Nantyglo FC",
    logo: "/lovable-uploads/495df913-0805-48dc-a436-f282ad6a9368.png"
  },
  {
    quote: "Live stream at Three Hills at Folkestone Optimist Hockey Club is watched by players, officials, parents and friends all over the UK and beyond. It has enhanced our capability to review, coach and learn and added an attractive video-on-demand asset to our facilities so people can watch the games in the bar, especially the goal scorers!!",
    author: "Folkestone Optimist Hockey Club",
    role: "Hockey Club",
    club: "Folkestone Optimist HC",
    logo: "/lovable-uploads/8c6723e0-2d13-4e2b-b14b-c8df12d4788b.png"
  },
  {
    quote: "Our partnership with Staydia Sports gives our players and coaches the opportunity to improve and develop. It also gives the club opportunity to show case the club all around the world. Our recent Robbie Keane Academy Cup was a great success with all games streamed live. With top academies from England, Scotland and Italy taking part, the coaches, players and parents were very impressed with the quality. It helped coaches to look back at games and family and friends who could not make the games were able to watch at home.",
    author: "Crumlin United",
    role: "Club Representative",
    club: "Crumlin Utd FC",
    logo: "/lovable-uploads/ab15a78c-e26b-4aa7-ba34-b715ea809f5b.png"
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
