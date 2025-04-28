
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-staydia-black border-t border-staydia-lightgray py-16">
      <div className="staydia-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div>
            <h3 className="text-staydia-gold font-bold text-lg mb-6">About Staydia</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Technology</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Team</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-staydia-gold font-bold text-lg mb-6">Products</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Streaming Platform</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">AI Camera Technology</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Club Solutions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">League Integration</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Analytics</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-staydia-gold font-bold text-lg mb-6">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Installation Guides</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Community</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-staydia-gold font-bold text-lg mb-6">Contact</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sales</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Partnerships</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-staydia-lightgray pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <svg width="120" height="30" viewBox="0 0 200 50">
              <path 
                d="M20,10 C30,5 50,5 60,10 C80,20 80,30 60,40 C50,45 30,45 20,40 C0,30 0,20 20,10 Z" 
                fill="none" 
                stroke="#F0BE5A" 
                strokeWidth="2"
              />
              <text 
                x="70" 
                y="30" 
                fill="white" 
                fontSize="20" 
                fontWeight="bold"
              >
                STAYDIA
              </text>
              <text 
                x="150" 
                y="42" 
                fill="white" 
                fontSize="14"
              >
                SPORTS
              </text>
            </svg>
          </div>
          
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} Staydia Sports. All rights reserved.
          </div>
          
          <div className="flex mt-4 md:mt-0 space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
