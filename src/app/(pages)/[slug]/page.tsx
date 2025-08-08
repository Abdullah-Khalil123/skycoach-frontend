import GameViewPage from '@/components/partials/Game';
import React, { use } from 'react';

const GamePage = ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = use(params);
  return (
    <div>
      <GameViewPage slug={slug} />
    </div>
  );
};

export default GamePage;
