
import React from 'react';

const Community: React.FC = () => {
  const socialLinks = [
    { name: "Instagram", url: "https://instagram.com/staydia" },
    { name: "Twitter", url: "https://twitter.com/staydia" },
    { name: "Facebook", url: "https://facebook.com/staydiasports" },
    { name: "YouTube", url: "https://youtube.com/staydia" },
    { name: "LinkedIn", url: "https://linkedin.com/company/staydia" },
    { name: "TikTok", url: "https://tiktok.com/@staydia" }
  ];

  return (
    <section id="community" className="py-24">
      <div className="staydia-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Join Our Community</h2>
          <p className="section-subtitle">
            Connect with sports fans and stay updated on the latest news, features, and exclusive content.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {socialLinks.map((social, index) => (
            <a 
              key={index}
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-staydia-darkgray hover:bg-staydia-lightgray border border-staydia-lightgray rounded-xl p-6 text-center transition-all duration-200 card-hover"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-staydia-gold rounded-full flex items-center justify-center">
                <SocialIcon name={social.name} />
              </div>
              <h3 className="font-medium">{social.name}</h3>
            </a>
          ))}
        </div>
        
        <div className="mt-24 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 max-w-2xl mx-auto">
            Share your game day moments with 
            <span className="text-staydia-gold"> #StaydiaSports</span>
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="aspect-square bg-staydia-lightgray rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-staydia-lightgray to-staydia-black"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialIcon: React.FC<{ name: string }> = ({ name }) => {
  // This is a simple placeholder for social icons
  // In a real implementation, you would import specific icons for each platform
  return (
    <div className="text-staydia-black font-bold text-sm">
      {name.charAt(0)}
    </div>
  );
};

export default Community;
