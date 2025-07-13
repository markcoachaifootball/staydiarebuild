import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { IrishFootballFixtures } from '@/components/IrishFootballFixtures';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { useMetaTags } from '@/hooks/useMetaTags';

const IrishFootball = () => {
  useScrollToTop();
  
  useMetaTags({
    title: 'Irish Football Fixtures | Real-time League of Ireland & FAI Cup',
    description: 'Live Irish football fixtures from League of Ireland Premier Division, First Division, FAI Cup and more. Real-time updates from multiple sources.',
    tags: ['Irish football', 'League of Ireland', 'FAI Cup', 'fixtures', 'live scores', 'Shamrock Rovers', 'Bohemians', 'Cork City'],
  });

  return (
    <div className="min-h-screen bg-staydia-black text-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/20 via-background to-secondary/20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Irish Football Fixtures
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Real-time fixtures from League of Ireland, FAI Cup, and all Irish football competitions
            </p>
          </div>
        </section>

        {/* Fixtures Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <IrishFootballFixtures />
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16 bg-card/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl font-bold text-foreground">
                Comprehensive Irish Football Coverage
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-primary">League of Ireland</h3>
                  <p className="text-muted-foreground">
                    Premier Division and First Division fixtures with real-time updates
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-primary">FAI Cup</h3>
                  <p className="text-muted-foreground">
                    All rounds from preliminary to final, including replays
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-primary">Multi-Source Data</h3>
                  <p className="text-muted-foreground">
                    Aggregated from official sources, club websites, and sports platforms
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default IrishFootball;