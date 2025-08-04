import React from 'react';
import Hero from '@/components/partials/Home/Hero';
import HotNowSection from './Hot';
import AllGames from './AllGames';
import MostWantedOffers from './MostWanted';
import GiveAwaySection from './GiveAway';
import ReviewSection from './Reviews';
import CountsSection from './Counts';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <HotNowSection />
      <CountsSection />
      <ReviewSection />
      <AllGames />
      <GiveAwaySection />
      <MostWantedOffers />
    </div>
  );
};

export default HomePage;
