import React from 'react';
import Hero from '@/components/partials/Home/Hero';
import HotNowSection from './Hot';
import AllGames from './AllGames';
import MostWantedOffers from './MostWanted';
import GiveAwaySection from './GiveAway';
import ReviewSection from './Reviews';
import CountsSection from './Counts';
import BoostYouSection from './Boost';
import { getAllActiveGames } from '@/actions/games';
import { Game } from '@/types/games';
import { getBanners } from '@/actions/banner';
import { Banner } from '@/types/banner';
import { getHotServices } from '@/actions/services';
import { Service } from '@/types/services';

const HomePage = async () => {
  const [bannerData, gameData, seviceData] = await Promise.all([
    getBanners(),
    getAllActiveGames(),
    getHotServices(),
  ]);

  const banners: Banner[] = bannerData.data || [];
  const games: Game[] = gameData.data.games || [];
  const services: Service[] = seviceData.data.all_services || [];
  return (
    <div>
      <Hero banners={banners} />
      <HotNowSection services={services} />
      <BoostYouSection />
      <CountsSection />
      <ReviewSection />
      <AllGames games={games} />
      <MostWantedOffers />
      <GiveAwaySection />
    </div>
  );
};

export default HomePage;
