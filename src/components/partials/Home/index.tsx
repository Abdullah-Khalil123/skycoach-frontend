import React from 'react';
import Hero from '@/components/partials/Home/Hero';
import HotNowSection from './Hot';
import AllGames from './AllGames';
import MostWantedOffers from './MostWanted';
import GiveAwaySection from './GiveAway';
import ReviewSection from './Reviews';
import CountsSection from './Counts';
import BoostYouSection from './Boost';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <HotNowSection />
      <BoostYouSection />
      <CountsSection />
      <ReviewSection />
      <AllGames />
      <MostWantedOffers />
      <GiveAwaySection />
    </div>
  );
};

export default HomePage;
