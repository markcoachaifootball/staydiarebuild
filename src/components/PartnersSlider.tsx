
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

const partners = [
  {
    name: "RTB Ebbw Vale FC",
    logo: "/lovable-uploads/40ee1851-41aa-41d7-946b-7eb893affa64.png"
  },
  {
    name: "Lucan United",
    logo: "/lovable-uploads/3b03d28f-4820-40ea-8550-7ce9ffeb7ee7.png"
  },
  {
    name: "Nantyglo FC",
    logo: "/lovable-uploads/88531769-dac6-40e2-ba39-ef73fa774d32.png"
  },
  {
    name: "Folkestone Optimist HC",
    logo: "/lovable-uploads/75c4e662-1f6d-40da-b80e-d03748c43719.png"
  },
  {
    name: "Crumlin United",
    logo: "/lovable-uploads/c8798285-fc56-4f93-bcbd-5f5d7c06190d.png"
  }
];

const PartnersSlider: React.FC = () => {
  return (
    <section className="py-12 bg-staydia-black">
      <div className="staydia-container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">WHO WE WORK WITH...</h2>
        
        <Carousel 
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="py-4">
            {partners.map((partner, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 pl-4 flex items-center justify-center">
                <div className="h-32 w-full flex items-center justify-center p-4 bg-white/5 rounded-lg border border-staydia-lightgray hover:border-staydia-gold transition-all">
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} logo`} 
                    className="max-h-24 max-w-full object-contain"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-4">
            <CarouselPrevious className="relative static left-auto transform-none bg-staydia-darkgray border-staydia-lightgray hover:bg-staydia-gold hover:text-staydia-black" />
            <CarouselNext className="relative static right-auto transform-none bg-staydia-darkgray border-staydia-lightgray hover:bg-staydia-gold hover:text-staydia-black" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default PartnersSlider;
