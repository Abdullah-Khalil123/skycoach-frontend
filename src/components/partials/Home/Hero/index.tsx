import React from 'react';
import HeroFilters from './filter';
import CardSwiper from './cardSwiper';
import GameCard from './gameCard';
import { getBanners } from '@/actions/banner';
import { Banner } from '@/types/banner';

const HeroPage = async () => {
  const data = await getBanners();
  const banners: Banner[] = data.data || [];
  return (
    <div>
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

        {Array.from({ length: 14 }).map((_, index) => (
          <GameCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default HeroPage;
