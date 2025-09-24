import React from 'react';
import ReviewSection from '../Home/Reviews';
import GameViewHeader from './GameTitle';
import GameRow from './GameRow';
import ServiceDetail from './ServiceDetail';
import { blog } from '@/utils/consts';
import GiveAway from '../Home/GiveAway';
import { ServicesByGames } from '@/types/services';
import { Category } from '@/types/category';

const GameViewPage = ({
  gameSlug,
  services,
}: {
  gameSlug: string;
  services: ServicesByGames;
}) => {
  return (
    <>
      <div className="relative px-margin md:mt-4">
        <GameViewHeader />
        {services?.hot_services && (
          <GameRow
            data={services?.hot_services}
            gameSlug={gameSlug}
            category={
              { name: 'Hot Services', slug: null, id: 0 } as unknown as Category
            }
          />
        )}
        {services?.services_by_category?.map((categoryData, index) => (
          <GameRow
            key={index}
            data={categoryData.services}
            gameSlug={gameSlug}
            category={categoryData.category as Category}
          />
        ))}
        <ReviewSection />
        <GiveAway />
      </div>
      <ServiceDetail content={blog} />
    </>
  );
};

export default GameViewPage;
