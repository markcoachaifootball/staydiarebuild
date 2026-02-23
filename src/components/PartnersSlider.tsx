import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from 'embla-carousel-autoplay';
import { useTranslation } from 'react-i18next';

// Updated partners array with all the uploaded logos
const partners = [
  {
    name: "RTB Ebbw Vale FC",
    logo: "/lovable-uploads/f7bd9d48-c789-440e-8797-22d31896ac18.png",
  },
  {
    name: "Lucan United",
    logo: "/lovable-uploads/81e756a2-1938-43d7-b605-5b572ff68d75.png"
  },
  {
    name: "Leinster Senior Football League",
    logo: "/lovable-uploads/0975187a-7933-434a-8bb2-7fc430f6e000.png"
  },
  {
    name: "Galway Football Association",
    logo: "/lovable-uploads/3ef43494-2740-46b6-8dfd-ff89f10a7b84.png"
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
    name: "Abergarged Buds FC",
    logo: "/lovable-uploads/5477dbae-b8c5-4fb4-b460-bbdbb3f4c128.png"
  },
  {
    name: "McKelvey Celtic FC",
    logo: "/lovable-uploads/4d785061-9b46-4fce-b2f1-b346925299e6.png"
  },
  {
    name: "Caldicot RFC",
    logo: "/lovable-uploads/959508f5-8205-4ad1-a4e5-bad562ee0184.png"
  },
  {
    name: "Maesteg R.F.C.",
    logo: "/lovable-uploads/bd143dbe-2e67-451b-9e04-79914ca4c3b4.png"
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
    logo: "/lovable-uploads/aa8e4b2d-bfab-42e1-98a5-c75d2c03e5e9.png"
  },
  {
    name: "Ferrybank AFC",
    logo: "/lovable-uploads/a7f28b75-e4a1-473a-b30d-786dae367a54.png"
  },
  {
    name: "Mervue United AFC",
    logo: "/lovable-uploads/ee38630e-844b-4e99-b0a6-f227511e1b12.png"
  },
  {
    name: "Clane United AFC",
    logo: "/lovable-uploads/0d37ae5a-3f19-4ad6-97aa-9a0b9b772df2.png"
  },
  {
    name: "Salthill Devon F.C.",
    logo: "/lovable-uploads/2eac8192-a868-4a2f-8027-4a8b21470132.png"
  },
  {
    name: "Bohemians F.C. Waterford",
    logo: "/lovable-uploads/dea99527-f642-4ea5-9915-5e41701c4de9.png"
  },
  {
    name: "Newport Saints",
    logo: "/lovable-uploads/f372f177-c5c6-4f6f-9dfb-9fda50f3e204.png"
  },
  {
    name: "Colchester R.F.C",
    logo: "/lovable-uploads/2a4ca23a-29a3-4bc6-aa07-74fb5443ed40.png"
  },
  {
    name: "Belfast Harlequins Hockey Club",
    logo: "/lovable-uploads/belfast-harlequins-hockey.jpg"
  },
  {
    name: "Peamount United",
    logo: "/lovable-uploads/peamount-utd.webp",
    large: true
  },
  {
    name: "Quorn Football Club",
    logo: "/lovable-uploads/quorn-fc.webp"
  },
  {
    name: "Raphoe Town F.C.",
    logo: "/lovable-uploads/raphoe-town-fc.webp"
  },
  {
    name: "Berkhamsted F.C.",
    logo: "/lovable-uploads/berkhamsted-fc.webp"
  },
  {
    name: "St. Mary's AFC Cork",
    logo: "/lovable-uploads/st-marys-afc-cork.webp"
  },
  {
    name: "Ringmahon Rangers F.C.",
    logo: "/lovable-uploads/ringmahon-rangers-fc.webp"
  }
];

const PartnersSlider: React.FC = () => {
  const { t } = useTranslation();
  
  // Split partners into 3 rows
  const rowSize = Math.ceil(partners.length / 3);
  const row1 = [...partners.slice(0, rowSize), ...partners.slice(0, rowSize)];
  const row2 = [...partners.slice(rowSize, rowSize * 2), ...partners.slice(rowSize, rowSize * 2)];
  const row3 = [...partners.slice(rowSize * 2), ...partners.slice(rowSize * 2)];

  const renderCarousel = (items: typeof partners, delay: number) => (
    <Carousel 
      opts={{
        align: "start",
        loop: true,
        dragFree: true,
        slidesToScroll: 1,
        duration: 20000
      }}
      plugins={[
        Autoplay({ 
          delay: delay,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
          playOnInit: true,
          stopOnFocusIn: false
        })
      ]}
      className="w-full"
    >
      <CarouselContent className="py-2">
        {items.map((partner, index) => (
          <CarouselItem key={index} className="basis-1/3 md:basis-1/5 lg:basis-1/6 pl-4 flex items-center justify-center">
            <div className={`${partner.large ? 'h-28' : 'h-20'} w-full flex items-center justify-center p-2 bg-white/5 rounded-lg border border-staydia-lightgray hover:border-staydia-gold transition-all`}>
              <img 
                src={partner.logo} 
                alt={`${partner.name} logo`} 
                className={`${partner.large ? 'h-24' : 'h-14'} w-auto object-contain`}
                loading="lazy"
                decoding="async"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );

  return (
    <section className="py-12 bg-staydia-black overflow-hidden">
      <div className="staydia-container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-white">{t('partners.title')}</h2>
        <h3 className="text-lg md:text-xl font-medium text-center mb-6 text-staydia-gold uppercase tracking-wider">{t('partners.subtitle')}</h3>
        
        <div className="relative w-full space-y-2">
          {renderCarousel(row1, 40)}
          {renderCarousel(row2, 60)}
          {renderCarousel(row3, 50)}
        </div>
      </div>
    </section>
  );
};

export default PartnersSlider;
