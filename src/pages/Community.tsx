import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Linkedin, Youtube, Facebook, Instagram, Twitter } from 'lucide-react';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { usePrerenderReady } from '@/hooks/usePrerenderReady';

const Community: React.FC = () => {
  useScrollToTop();
  usePrerenderReady();
  const socialLinks = [
    { 
      name: "LinkedIn", 
      url: "https://www.linkedin.com/company/staydiasports/people/", 
      icon: <Linkedin className="h-6 w-6" />,
      description: "Follow our company updates and job opportunities"
    },
    { 
      name: "YouTube", 
      url: "https://youtube.com/@staydiasports-uy7rd?feature=shared", 
      icon: <Youtube className="h-6 w-6" />,
      description: "Watch our tutorials, demos and event highlights"
    },
    { 
      name: "Twitter", 
      url: "https://x.com/staydiasports?s=21&t=Vfehwxe3dkb4DvSbxUA3Vg", 
      icon: <Twitter className="h-6 w-6" />,
      description: "Get the latest news and updates"
    },
    { 
      name: "Instagram", 
      url: "https://www.instagram.com/staydiasports/", 
      icon: <Instagram className="h-6 w-6" />,
      description: "See our latest photos and stories"
    },
    { 
      name: "Facebook", 
      url: "https://www.facebook.com/share/161h1JreRk/?mibextid=wwXIfr", 
      icon: <Facebook className="h-6 w-6" />,
      description: "Join our Facebook community"
    }
  ];

  return (
    <div className="min-h-screen bg-staydia-black text-white">
      <Header />
      <div className="staydia-container py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Community</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Connect with sports fans and stay updated with the latest news, features, and exclusive content from Staydia Sports.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {socialLinks.map((social, index) => (
            <a 
              key={index}
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-staydia-darkgray hover:bg-staydia-lightgray border border-staydia-lightgray rounded-xl p-8 transition-all duration-200 hover:border-staydia-gold group"
            >
              <div className="w-16 h-16 mb-6 bg-staydia-black rounded-full flex items-center justify-center border border-staydia-lightgray group-hover:bg-staydia-gold transition-colors">
                <div className="text-staydia-gold group-hover:text-staydia-black transition-colors">
                  {social.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">{social.name}</h3>
              <p className="text-gray-400">{social.description}</p>
            </a>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Community;
