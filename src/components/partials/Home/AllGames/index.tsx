'use client';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import AllGames from './AllGames';

export default function AllGamesWrapper() {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="bg-secondary p-8 rounded-4xl my-8">
      <AllGames showAll={showAll} />
      <div className="mt-6 mx-auto w-fit">
        <button
          onClick={() => setShowAll((prev) => !prev)}
          className="flex items-center gap-2 bg-secondary-foreground text-primary-foreground font-semibold px-4 py-2 rounded-md cursor-pointer hover:bg-secondary-foreground/80 transition-colors"
        >
          {showAll ? 'Show less' : 'View all games'}
          {showAll ? <ChevronUp /> : <ChevronDown />}
        </button>
      </div>
    </div>
  );
}
