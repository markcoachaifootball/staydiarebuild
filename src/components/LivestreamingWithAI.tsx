
import React from 'react';

const LivestreamingWithAI: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-staydia-darkgray/30 to-staydia-black">
      <div className="staydia-container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Livestreaming with AI
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience seamless multi-device streaming powered by our AI camera technology. 
              Watch matches live on any device with professional-quality footage captured automatically.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <div className="relative">
              <img 
                src="/lovable-uploads/95af3674-ceca-4ff9-a6f3-dca8cc00bcad.png"
                alt="Multi-device livestreaming setup showing AI-powered camera and streaming on laptop and tablet"
                className="w-full h-auto rounded-lg"
              />
              
              {/* Overlay badge */}
              <div className="absolute top-4 right-4 bg-staydia-gold text-staydia-black px-3 py-2 rounded-lg text-sm font-semibold">
                AI Powered
              </div>
            </div>

            {/* Right side - Features */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-staydia-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-staydia-black text-lg">📹</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Automatic Camera Tracking</h3>
                    <p className="text-gray-300">Our AI cameras automatically follow the action, ensuring you never miss a moment of the game.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-staydia-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-staydia-black text-lg">📱</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Multi-Device Streaming</h3>
                    <p className="text-gray-300">Stream simultaneously to laptops, tablets, and mobile devices for maximum reach and engagement.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-staydia-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-staydia-black text-lg">⚡</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Real-Time Analytics</h3>
                    <p className="text-gray-300">Get instant insights on viewership, engagement, and performance metrics during live streams.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button className="bg-staydia-gold text-staydia-black font-semibold px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all">
                  See Live Demo →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LivestreamingWithAI;
