import React from 'react';
import Hero from '@/components/partials/Home/Hero';
import HotNowSection from './Hot';
import AllGames from './AllGames';
// import MostWantedOffers from './MostWanted';
import GiveAwaySection from './GiveAway';
import ReviewSection from './Reviews';
import CountsSection from './Counts';
import BoostYouSection from './Boost';
import { getAllActiveGames, getHomePageGames } from '@/actions/games';
import { Game } from '@/types/games';
import { getBanners } from '@/actions/banner';
import { Banner } from '@/types/banner';
import { getHotServices } from '@/actions/services';
import { Service } from '@/types/services';
import { getReviews } from '@/actions/review';
import { Review } from '@/types/review';

const HomePage = async () => {
  const [bannerData, gameData, seviceData, hotGamesData, reviewData] =
    await Promise.all([
      getBanners(),
      getAllActiveGames(),
      getHotServices(),
      getHomePageGames(),
      getReviews({
        limit: '10',
      }),
    ]);

  const banners: Banner[] = bannerData.data || [];
  const games: Game[] = gameData.data.games || [];
  const services: Service[] = seviceData.data.all_services || [];
  const hotGames: Game[] = hotGamesData.data || [];
  const reviews: Review[] = reviewData.data || [];

  return (
    <div>
      <Hero banners={banners} games={hotGames} />
      <HotNowSection services={services} />
      <BoostYouSection />
      <CountsSection />
      <ReviewSection reviews={reviews} />
      <AllGames games={games} />
      {/* <MostWantedOffers /> */}
      <GiveAwaySection />
    </div>
  );
};

export default HomePage;
