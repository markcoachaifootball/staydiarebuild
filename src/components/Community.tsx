
import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Youtube, Facebook, Instagram, Twitter } from 'lucide-react';

const Community: React.FC = () => {
  const socialLinks = [
    { name: "Instagram", icon: <Instagram className="h-6 w-6" />, url: "https://www.instagram.com/staydiasports/" },
    { name: "Twitter", icon: <Twitter className="h-6 w-6" />, url: "https://x.com/staydiasports?s=21&t=Vfehwxe3dkb4DvSbxUA3Vg" },
    { name: "Facebook", icon: <Facebook className="h-6 w-6" />, url: "https://www.facebook.com/share/161h1JreRk/?mibextid=wwXIfr" },
    { name: "YouTube", icon: <Youtube className="h-6 w-6" />, url: "https://youtube.com/@staydiasports-uy7rd?feature=shared" },
    { name: "LinkedIn", icon: <Linkedin className="h-6 w-6" />, url: "https://www.linkedin.com/company/staydiasports/people/" }
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
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {socialLinks.map((social, index) => (
            <a 
              key={index}
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-staydia-darkgray hover:bg-staydia-lightgray border border-staydia-lightgray rounded-xl p-6 text-center transition-all duration-200 card-hover"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-staydia-gold rounded-full flex items-center justify-center">
                <div className="text-staydia-black">
                  {social.icon}
                </div>
              </div>
              <h3 className="font-medium">{social.name}</h3>
            </a>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/community" className="inline-block px-8 py-3 bg-staydia-gold text-staydia-black rounded-full font-medium hover:bg-opacity-90 transition-colors">
            Visit our Community Page
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Community;
