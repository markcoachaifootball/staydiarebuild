
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-staydia-black border-t border-staydia-lightgray py-16">
      <div className="staydia-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div>
            <h3 className="text-staydia-gold font-bold text-lg mb-6">About Staydia</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/technology#how-it-works" className="text-gray-400 hover:text-white transition-colors">Technology</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Team</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Press</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-staydia-gold font-bold text-lg mb-6">Club Solutions</h3>
            <ul className="space-y-3">
              <li><Link to="/for-clubs" className="text-gray-400 hover:text-white transition-colors">Free Camera Installation</Link></li>
              <li><Link to="/revenue-sharing" className="text-gray-400 hover:text-white transition-colors">Revenue Sharing Model</Link></li>
              <li><Link to="/sports" className="text-gray-400 hover:text-white transition-colors">Sports We Cover</Link></li>
              <li><Link to="/fan-engagement" className="text-gray-400 hover:text-white transition-colors">Fan Engagement</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-staydia-gold font-bold text-lg mb-6">Fan Experience</h3>
            <ul className="space-y-3">
              <li><a href="https://staydiasports.com" className="text-gray-400 hover:text-white transition-colors">Watch Live</a></li>
              <li><a href="https://staydiasports.com/videos" className="text-gray-400 hover:text-white transition-colors">On-Demand Library</a></li>
              <li><a href="https://staydiasports.com/dashboard/subscription" className="text-gray-400 hover:text-white transition-colors">Subscription Info</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">App Download</a></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-staydia-gold font-bold text-lg mb-6">Contact</h3>
            <ul className="space-y-3">
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Club Inquiries</a></li>
              <li><Link to="/partnerships" className="text-gray-400 hover:text-white transition-colors">Partnerships</Link></li>
              <li><div className="flex space-x-3 mt-2">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                </a>
              </div></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-staydia-lightgray pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <img 
              src="/lovable-uploads/f7690435-d61e-4b90-8008-5e6981cb119d.png" 
              alt="Staydia Sports Logo" 
              className="h-10 w-auto"
            />
          </div>
          
          <div className="flex flex-col items-center space-y-2">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Staydia Sports. All rights reserved.
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>🇮🇪</span>
              <span>Made in Ireland</span>
            </div>
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
