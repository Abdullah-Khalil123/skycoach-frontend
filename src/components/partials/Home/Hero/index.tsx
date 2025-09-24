import React from 'react';
import HeroFilters from './filter';
import CardSwiper from './cardSwiper';
import GameCard from './gameCard';
import { Banner } from '@/types/banner';
import ViewAllGamesButton from './ViewAllGamesButton';
import { Game } from '@/types/games';

const HeroPage = async ({
  banners,
  games,
}: {
  banners: Banner[];
  games: Game[];
}) => {
  console.log(games);
  return (
    <div className="relative">
      <HeroFilters />
      <div
        className="
          grid gap-6
          grid-cols-1 
          sm:grid-cols-2
          lg:grid-cols-4
          xl:grid-cols-5
          auto-rows-fr
        "
      >
        <div
          className="
            row-span-2 
            col-span-1 
            sm:col-span-2 
            lg:col-span-3
          "
        >
          <CardSwiper banners={banners} />
        </div>

        {Array.from({ length: 14 }, (_, i) => (
          <GameCard key={i} game={games[i % games.length]} />
        ))}
      </div>
      <ViewAllGamesButton />
    </div>
  );
};

export default HeroPage;
