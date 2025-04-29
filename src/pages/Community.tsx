
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Linkedin, Youtube, Github, Slack } from 'lucide-react';

const Community: React.FC = () => {
  const socialLinks = [
    { 
      name: "LinkedIn", 
      url: "https://linkedin.com/company/staydia", 
      icon: <Linkedin className="h-6 w-6" />,
      description: "Follow our company updates and job opportunities"
    },
    { 
      name: "YouTube", 
      url: "https://youtube.com/staydia", 
      icon: <Youtube className="h-6 w-6" />,
      description: "Watch our tutorials, demos and event highlights"
    },
    { 
      name: "GitHub", 
      url: "https://github.com/staydia", 
      icon: <Github className="h-6 w-6" />,
      description: "Explore our open-source projects and contributions"
    },
    { 
      name: "Slack", 
      url: "https://staydia.slack.com", 
      icon: <Slack className="h-6 w-6" />,
      description: "Join our community discussions and support channels"
    },
    { 
      name: "Twitter", 
      url: "https://twitter.com/staydia", 
      icon: <span className="text-xl font-bold">X</span>,
      description: "Get the latest news and updates"
    },
    { 
      name: "Instagram", 
      url: "https://instagram.com/staydia", 
      icon: <span className="text-xl font-bold">IG</span>,
      description: "See our latest photos and stories"
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

        <div className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Share Your Moments</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Use <span className="text-staydia-gold">#StaydiaSports</span> on social media to share your game day experiences and get featured.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="aspect-square bg-staydia-lightgray rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-staydia-darkgray to-staydia-black flex items-center justify-center">
                  <span className="text-xs text-gray-500">User Image {i + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Community;
