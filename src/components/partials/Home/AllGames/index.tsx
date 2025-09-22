'use client';
import { useEffect, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import AllGames from './AllGames';
import { Game } from '@/types/games';

export default function AllGamesWrapper({ games }: { games: Game[] }) {
  const [showAll, setShowAll] = useState(true);
  const gamesLimit = 15;

  useEffect(() => {
    if (games.length <= gamesLimit) return;
    setShowAll(false);
  }, []);

  return (
    <div className="bg-secondary p-8 rounded-4xl my-8">
      <AllGames showAll={showAll} games={games} />
      <div className="mt-6 mx-auto w-fit">
        {games.length >= gamesLimit && (
          <button
            onClick={() =>
              setShowAll((prev) => {
                if (games.length <= gamesLimit) return prev;
                return !prev;
              })
            }
            className="flex items-center gap-2 bg-secondary-foreground text-primary-foreground font-semibold px-4 py-2 rounded-md cursor-pointer hover:bg-secondary-foreground/80 transition-colors"
          >
            {showAll ? 'Show less' : 'View all games'}
            {showAll ? <ChevronUp /> : <ChevronDown />}
          </button>
        )}
      </div>
    </div>
  );
}
