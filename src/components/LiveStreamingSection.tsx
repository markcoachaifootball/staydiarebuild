
import React from 'react';

const LiveStreamingSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-staydia-darkgray/50 to-staydia-black">
      <div className="staydia-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-staydia-gold rounded flex items-center justify-center">
                <span className="text-staydia-black text-lg">📹</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                STREAM
              </h2>
            </div>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Share the game while capturing valuable video with AI-powered cameras that automatically track every moment of your matches.
            </p>
            
            <div className="pt-4">
              <button className="bg-staydia-gold text-staydia-black font-semibold px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all">
                Watch Live Streaming Demo →
              </button>
            </div>
          </div>

          {/* Right side - Streaming mockup */}
          <div className="relative">
            <div className="bg-staydia-darkgray rounded-2xl p-6 border border-staydia-lightgray">
              {/* Main stream window */}
              <div className="bg-green-600 rounded-lg p-4 mb-4 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
                  alt="Live streaming interface"
                  className="w-full h-48 object-cover rounded opacity-80"
                />
                
                {/* Stream overlay UI */}
                <div className="absolute top-6 left-6 bg-red-500 text-white px-3 py-1 rounded text-sm font-semibold">
                  LIVE
                </div>
                
                <div className="absolute top-6 right-6 bg-black/70 text-white px-2 py-1 rounded text-xs">
                  1,247 viewers
                </div>
                
                {/* Score overlay */}
                <div className="absolute bottom-6 left-6 bg-black/80 text-white px-4 py-2 rounded">
                  <div className="text-sm font-semibold">Staydia FC vs United FC</div>
                  <div className="text-lg font-bold">2 - 1</div>
                </div>
              </div>

              {/* Stream controls */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-staydia-gold rounded-full flex items-center justify-center">
                    <span className="text-staydia-black text-sm">▶</span>
                  </div>
                  <span className="text-white text-sm">HD Quality</span>
                </div>
                
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <span>📊</span>
                  <span>Analytics</span>
                </div>
              </div>
            </div>

            {/* Floating stats */}
            <div className="absolute -right-4 top-8 bg-staydia-gold text-staydia-black px-4 py-2 rounded-lg text-sm font-semibold">
              AI Powered
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveStreamingSection;
