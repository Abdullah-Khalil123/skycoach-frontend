import { getServicesByGame } from '@/actions/services';
import GameViewPage from '@/components/partials/Game';
import { ServicesByGames } from '@/types/services';
import React from 'react';

const GamePage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug: gameSlug } = await params;
  const data = await getServicesByGame(gameSlug);
  const services: ServicesByGames = data?.data || {};
  return (
    <div>
      <GameViewPage gameSlug={gameSlug} services={services} />
    </div>
  );
};

export default GamePage;
