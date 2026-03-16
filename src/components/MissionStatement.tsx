import React from 'react';

const MissionStatement: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-staydia-black border-b border-staydia-lightgray/20">
      <div className="staydia-container max-w-4xl mx-auto text-center px-6">
        <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-200">
          Grassroots and amateur sport produce millions of important moments, but most of them are{' '}
          <span className="text-staydia-gold font-semibold">never seen</span>,{' '}
          <span className="text-staydia-gold font-semibold">never monetized</span>, and{' '}
          <span className="text-staydia-gold font-semibold">never remembered</span> beyond the touchline.
        </p>
        <p className="mt-6 text-lg md:text-xl lg:text-2xl leading-relaxed text-white font-medium">
          Staydia exists to change that.
        </p>
        <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-300">
          We use AI-powered broadcasting to make every club visible — and give grassroots and amateur sport the audience, recognition, and revenue infrastructure they have never had.
        </p>
      </div>
    </section>
  );
};

export default MissionStatement;
