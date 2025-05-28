
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const testimonials = [
  {
    quote: "As a proud partner of Staydia Sports, RTB Ebbw Vale FC have had an exceptional experience with their live streaming camera. The quality of the video production is impressive, capturing every detail of our matches with HD clarity.",
    author: "RTB Ebbw Vale FC",
    location: "Gwent, Wales",
    logo: "/lovable-uploads/72a15165-96d8-48c8-8375-74cbbc1caa71.png"
  },
  {
    quote: "Staydia Sports has greatly enhanced the club. It is a great tool for our coaches and players to analyse games and it's grown our social media followers dramatically.",
    author: "Lucan United",
    location: "Dublin, Ireland",
    logo: "/lovable-uploads/88531769-dac6-40e2-ba39-ef73fa774d32.png"
  },
  {
    quote: "The quality of the stream is excellent and gives us superb match coverage not only for the general viewer but also match team coaches for analysing their games, setup and strategy.",
    author: "Nantyglo FC",
    location: "Gwent, Wales",
    logo: "/lovable-uploads/495df913-0805-48dc-a436-f282ad6a9368.png"
  },
  {
    quote: "Live stream at Three Hills at Folkestone Optimist Hockey Club is watched by players, officials, parents and friends all over the UK and beyond. It has enhanced our capability to review, coach and learn.",
    author: "Folkestone Optimist HC",
    location: "Kent, England",
    logo: "/lovable-uploads/8c6723e0-2d13-4e2b-b14b-c8df12d4788b.png"
  },
  {
    quote: "Our partnership with Staydia Sports gives our players and coaches the opportunity to improve and develop. It also gives the club opportunity to show case the club all around the world.",
    author: "Crumlin United",
    location: "Dublin, Ireland",
    logo: "/lovable-uploads/ab15a78c-e26b-4aa7-ba34-b715ea809f5b.png"
  },
  {
    quote: "The communication and service from the team has been second to none. The quality of the stream is excellent and gives us superb match coverage.",
    author: "Gwent County FC",
    location: "Wales",
    logo: "/lovable-uploads/72a15165-96d8-48c8-8375-74cbbc1caa71.png"
  },
  {
    quote: "It's benefitted all age groups from juniors to seniors and with the sponsor banners and updated score options it makes for a well rounded system.",
    author: "Valley United",
    location: "Wales",
    logo: "/lovable-uploads/495df913-0805-48dc-a436-f282ad6a9368.png"
  },
  {
    quote: "The technology has transformed how we broadcast our matches and engage with our community.",
    author: "Dublin Sports Club",
    location: "Dublin, Ireland",
    logo: "/lovable-uploads/88531769-dac6-40e2-ba39-ef73fa774d32.png"
  },
  {
    quote: "Our fans love being able to watch the games live online when they can't make it to the ground.",
    author: "Kent FC",
    location: "England",
    logo: "/lovable-uploads/8c6723e0-2d13-4e2b-b14b-c8df12d4788b.png"
  },
  {
    quote: "The AI-powered features have made our streaming setup incredibly easy to manage.",
    author: "Sports Club Ireland",
    location: "Ireland",
    logo: "/lovable-uploads/ab15a78c-e26b-4aa7-ba34-b715ea809f5b.png"
  },
  {
    quote: "We've seen a significant increase in online engagement since partnering with Staydia Sports.",
    author: "Celtic Rangers",
    location: "Wales",
    logo: "/lovable-uploads/72a15165-96d8-48c8-8375-74cbbc1caa71.png"
  },
  {
    quote: "The replay and analysis features have been invaluable for our coaching staff.",
    author: "Premier FC",
    location: "England",
    logo: "/lovable-uploads/495df913-0805-48dc-a436-f282ad6a9368.png"
  },
  {
    quote: "Quality streaming that allows our global fanbase to stay connected with the club.",
    author: "United Sports",
    location: "Dublin, Ireland",
    logo: "/lovable-uploads/88531769-dac6-40e2-ba39-ef73fa774d32.png"
  },
  {
    quote: "The automated camera tracking ensures we never miss the action during our matches.",
    author: "Hockey Elite",
    location: "Kent, England",
    logo: "/lovable-uploads/8c6723e0-2d13-4e2b-b14b-c8df12d4788b.png"
  },
  {
    quote: "Professional quality broadcasts that rival traditional sports media coverage.",
    author: "Championship Club",
    location: "Ireland",
    logo: "/lovable-uploads/ab15a78c-e26b-4aa7-ba34-b715ea809f5b.png"
  },
  {
    quote: "The revenue sharing model has created new income streams for our club.",
    author: "Athletic FC",
    location: "Wales",
    logo: "/lovable-uploads/72a15165-96d8-48c8-8375-74cbbc1caa71.png"
  }
];

const Testimonials = () => {
  useScrollToTop();
  
  return (
    <div className="min-h-screen bg-staydia-black text-white">
      <Header />
      
      <section className="pt-24 pb-16">
        <div className="staydia-container">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            What Our Partners Say
          </h1>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Discover how Staydia Sports has transformed clubs and leagues across Ireland, Wales, and England with our AI-powered broadcasting technology.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 border-t border-staydia-lightgray">
        <div className="staydia-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-staydia-darkgray border border-staydia-lightgray hover:border-staydia-gold transition-colors h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center justify-center mb-4">
                    <img 
                      src={testimonial.logo} 
                      alt={`${testimonial.author} logo`}
                      className="h-16 w-16 object-contain filter brightness-90"
                    />
                  </div>
                  <blockquote className="text-gray-300 text-sm mb-4 flex-grow italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <footer className="mt-auto">
                    <p className="text-staydia-gold font-semibold text-sm">{testimonial.author}</p>
                    <p className="text-gray-400 text-xs">{testimonial.location}</p>
                  </footer>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
