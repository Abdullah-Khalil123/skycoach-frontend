import Image from 'next/image';
import Link from 'next/link';

const games = [
  'Wow',
  'Destiny 2',
  'Apex Legends',
  'League of Legends',
  'Valorant',
  'FIFA 23',
  'Call of Duty',
  'Genshin Impact',

  'Wow',
  'Destiny 2',
  'Apex Legends',
  'League of Legends',
  'Valorant',
  'FIFA 23',
  'Call of Duty',
  'Genshin Impact',
  'Wow',
  'Destiny 2',
  'Apex Legends',
  'League of Legends',
  'Valorant',
  'FIFA 23',
  'Call of Duty',
  'Genshin Impact',
  'Wow',
  'Destiny 2',
  'Apex Legends',
  'League of Legends',
  'Valorant',
  'FIFA 23',
  'Call of Duty',
  'Genshin Impact',
  'Wow',
  'Destiny 2',
  'Apex Legends',
  'League of Legends',
  'Valorant',
  'FIFA 23',
  'Call of Duty',
  'Genshin Impact',
  'Wow',
  'Destiny 2',
  'Apex Legends',
  'League of Legends',
  'Valorant',
  'FIFA 23',
  'Call of Duty',
  'Genshin Impact',
  'Wow',
  'Destiny 2',
  'Apex Legends',
  'League of Legends',
  'Valorant',
  'FIFA 23',
  'Call of Duty',
  'Genshin Impact',
];

export default function AllGames({ showAll }: { showAll: boolean }) {
  const visibleGames = showAll
    ? games
    : games.slice(0, Math.max(games.length / 2, 40));

  return (
    <div>
      <h1 className="text-4xl font-semibold mb-4">
        Discover all {games.length} games on Skycoach
      </h1>

      <div className="relative">
        {!showAll && (
          <div className="absolute bottom-0 left-0 right-0 h-50 bg-gradient-to-t from-secondary to-transparent pointer-events-none z-10" />
        )}

        <div className="flex flex-wrap gap-4 mt-4 relative z-0">
          {visibleGames.map((game, index) => (
            <Link
              href={`${game.toLowerCase().replace(/\s+/g, '-')}`}
              key={index}
              className="flex gap-2 bg-secondary-foreground px-4 py-2 rounded-md
              hover:bg-secondary-foreground transition-colors
              cursor-pointer font-semibold"
            >
              <Image src="/globe.svg" alt="game-logo" width={20} height={20} />
              {game}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
