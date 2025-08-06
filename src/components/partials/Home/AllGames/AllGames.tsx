import Image from 'next/image';
import Link from 'next/link';

const games = [
  'Wow',
  'Destiny 2',
  'Apex Legends',
  'League of Legends',
  'Valorant',
  'FIFA 23',
  'League of Legends',
  'Destiny 2',
  'Call of Duty',
  'Genshin Impact',
  'Wow',
  'Destiny 2',
  'Apex Legends',
  'League of Legends',
  'Genshin Impact',

  'Wow',
  'Destiny 2',
  'Apex Legends',
  'Apex Legends',
  'League of Legends',
  'Wow',
  'Destiny 2',
  'FIFA 23',
  'League of Legends',
  'Valorant',
  'FIFA 23',
  'Valorant',
  'Call of Duty',
  'Wow',
  'Call of Duty',
  'Genshin Impact',
  'Valorant',
  'Call of Duty',
  'FIFA 23',
  'Wow',
  'Destiny 2',
  'Apex Legends',
  'Apex Legends',
  'League of Legends',
  'Call of Duty',
  'Genshin Impact',
  'Valorant',
  'FIFA 23',
  'Genshin Impact',
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
  const maxGamesToShow = 35;
  const visibleGames = showAll
    ? games
    : games.length > maxGamesToShow
    ? games.slice(0, maxGamesToShow)
    : games;

  return (
    <div>
      <h1 className="text-4xl mb-4">
        Discover all {games.length} games on Skycoach
      </h1>

      <div className="relative">
        {!showAll && (
          <div className="absolute bottom-0 left-0 right-0 h-50 bg-gradient-to-t from-secondary to-transparent pointer-events-none z-10" />
        )}

        <div
          className={`flex flex-wrap gap-4 mt-4 relative z-0 ${
            showAll ? 'max-h-max' : 'max-h-64'
          } md:max-h-max overflow-hidden`}
        >
          {visibleGames.map((game, index) => (
            <Link
              href={`${game.toLowerCase().replace(/\s+/g, '-')}`}
              key={index}
              className="flex gap-2 bg-secondary-foreground px-4 py-2 rounded-md
              hover:bg-secondary-foreground transition-colors
              cursor-pointer text-sm text-secondary-text"
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
