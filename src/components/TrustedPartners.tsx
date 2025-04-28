
import React from 'react';
import { Flag } from 'lucide-react';

const TrustedPartners = () => {
  const partners = [
    { country: "Ireland", colors: ["#009A49", "#FFFFFF", "#FF8800"] },
    { country: "Wales", colors: ["#C6001F"] },
    { country: "England", colors: ["#CD212A"] }
  ];

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-staydia-black via-staydia-darkgray to-staydia-black">
      <div className="staydia-container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Trusted Partners in</h2>
        
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {partners.map((partner, index) => (
            <div key={index} className="flex flex-col items-center">
              <Flag className="w-16 h-16 text-staydia-gold mb-2" />
              <span className="text-gray-300">{partner.country}</span>
            </div>
          ))}
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 max-w-5xl mx-auto">
          With cutting-edge AI technology, Staydia Sports brings the game to everyone, anywhere!
        </h2>
        
        <p className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
          Staydia Sports harnesses cutting-edge AI technology to revolutionise sports video and media production. 
          Our fully automated platform brings live sporting events to life, focusing on elevating lower-tier leagues 
          and youth divisions with futuristic, professional-grade coverage and next-generation media solutions.
        </p>
      </div>
    </section>
  );
};

export default TrustedPartners;
