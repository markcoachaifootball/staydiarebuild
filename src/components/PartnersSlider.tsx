import React, { useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

// Updated partners array with all the uploaded logos
const partners = [
  {
    name: "RTB Ebbw Vale FC",
    logo: "/lovable-uploads/f7bd9d48-c789-440e-8797-22d31896ac18.png"
  },
  {
    name: "Lucan United",
    logo: "/lovable-uploads/81e756a2-1938-43d7-b605-5b572ff68d75.png"
  },
  {
    name: "Nantyglo FC",
    logo: "/lovable-uploads/53f2dea1-bee0-47a9-9982-a7ce531781a3.png"
  },
  {
    name: "Folkestone Optimist HC",
    logo: "/lovable-uploads/a0ac24cf-3014-4aeb-8b0e-205b5bf09950.png"
  },
  {
    name: "Crumlin United",
    logo: "/lovable-uploads/6700ea10-eea6-4ebf-8758-381a8e979aa5.png"
  },
  {
    name: "Llanidloes Town FC",
    logo: "/lovable-uploads/84474452-6810-46b6-8f65-3626fe538fc6.png"
  },
  {
    name: "Ballymun United",
    logo: "/lovable-uploads/b178f6f1-37ec-4b93-aa1b-70ba04ffdae1.png"
  },
  {
    name: "Newbridge Town FC",
    logo: "/lovable-uploads/c24fe940-341b-400c-b6b4-deedc5365ca8.png"
  },
  {
    name: "Home Farm FC",
    logo: "/lovable-uploads/129b0fe1-a37c-4f95-845f-b00973ef0c3e.png"
  },
  {
    name: "Quigleys Point Swifts FC",
    logo: "/lovable-uploads/d449ecf2-5481-4c71-bf4e-29a274fbfb65.png"
  },
  {
    name: "Abertillery Bluebirds FC",
    logo: "/lovable-uploads/24ac0f38-f8bc-4c9e-9819-bf26c3bf340b.png"
  },
  {
    name: "Welsh Dragons FC",
    logo: "/lovable-uploads/3754273d-be54-4fdf-af67-f090d6f9ba69.png"
  },
  {
    name: "Penmaenmawr Phoenix FC",
    logo: "/lovable-uploads/da1a4e9f-fb20-4f63-bb7b-53f6f8733c4e.png"
  },
  {
    name: "Malahide RFC",
    logo: "/lovable-uploads/93a87b67-42b7-4666-8d8b-570a468d6ab9.png"
  },
  {
    name: "Distillery AFC",
    logo: "/lovable-uploads/3078d038-e59a-493f-88fa-85639835af5b.png"
  },
  {
    name: "Aileach FC",
    logo: "/lovable-uploads/4ea5c7ce-5c45-4f22-b4c3-246c692f7682.png"
  },
  {
    name: "Greystones United AFC",
    logo: "/lovable-uploads/8019936e-4b1c-40b2-bcfa-c251921fdb57.png"
  },
  {
    name: "Tolka Rovers",
    logo: "/lovable-uploads/3cac893a-957f-49c4-bb4e-4acceaa43a56.png"
  },
  {
    name: "Ferrybank AFC",
    logo: "/lovable-uploads/6955c596-a5e7-4a7a-86e2-9be8160af366.png"
  },
  {
    name: "Mervue United AFC",
    logo: "/lovable-uploads/ee38630e-844b-4e99-b0a6-f227511e1b12.png"
  }
];

const PartnersSlider: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      loop: true,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  return (
    <section className="py-12 bg-staydia-black">
      <div className="staydia-container">
        <h3 className="text-lg md:text-xl font-medium text-center mb-6 text-staydia-gold uppercase tracking-wider">Trusted Partners</h3>
        
        <Carousel 
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({ delay: 3000, stopOnInteraction: false })
          ]}
          className="w-full"
        >
          <CarouselContent className="py-4">
            {partners.map((partner, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4 xl:basis-1/5 pl-4 flex items-center justify-center">
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
