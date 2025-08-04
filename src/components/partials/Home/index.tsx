import React from 'react';
import Hero from '@/components/partials/Home/Hero';
import HotNowSection from './Hot';
import AllGames from './AllGames';
import MostWantedOffers from './MostWanted';
import GiveAwaySection from './GiveAway';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <HotNowSection />
      <AllGames />
      <GiveAwaySection />
      <MostWantedOffers />
    </div>
  );
};

export default HomePage;
