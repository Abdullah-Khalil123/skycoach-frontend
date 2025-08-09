import React, { useEffect } from 'react';
import { Search, User } from 'lucide-react';

const games = [
  {
    icon: <User />,
    title: 'My Account',
  },
  {
    icon: <Search />,
    title: 'Search',
  },
  {
    icon: <User />,
    title: 'Profile',
  },
  {
    icon: <User />,
    title: 'Settings',
  },
  {
    icon: <User />,
    title: 'My Account',
  },
  {
    icon: <Search />,
    title: 'Search',
  },
  {
    icon: <User />,
    title: 'Profile',
  },
  {
    icon: <User />,
    title: 'Settings',
  },
  {
    icon: <User />,
    title: 'My Account',
  },
  {
    icon: <Search />,
    title: 'Search',
  },
  {
    icon: <User />,
    title: 'Profile',
  },
  {
    icon: <User />,
    title: 'Settings',
  },
  {
    icon: <User />,
    title: 'My Account',
  },
  {
    icon: <Search />,
    title: 'Search',
  },
  {
    icon: <User />,
    title: 'Profile',
  },
  {
    icon: <User />,
    title: 'Settings',
  },
  {
    icon: <User />,
    title: 'My Account',
  },
  {
    icon: <Search />,
    title: 'Search',
  },
  {
    icon: <User />,
    title: 'Profile',
  },
  {
    icon: <User />,
    title: 'Settings',
  },
  {
    icon: <User />,
    title: 'My Account',
  },
  {
    icon: <Search />,
    title: 'Search',
  },
  {
    icon: <User />,
    title: 'Profile',
  },
  {
    icon: <User />,
    title: 'Settings',
  },
  {
    icon: <User />,
    title: 'My Account',
  },
  {
    icon: <Search />,
    title: 'Search',
  },
  {
    icon: <User />,
    title: 'Profile',
  },
  {
    icon: <User />,
    title: 'Settings',
  },
  {
    icon: <User />,
    title: 'My Account',
  },
  {
    icon: <Search />,
    title: 'Last4',
  },
  {
    icon: <User />,
    title: 'Last3',
  },
  {
    icon: <User />,
    title: 'Last2',
  },
  {
    icon: <User />,
    title: 'Last',
  },
];

const NavContent = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);
  return (
    <div className="absolute top-full left-0 right-0 h-dvh w-full bg-black p-4">
      <div className="relative mb-4">
        <Search className="absolute top-1/2 -translate-y-1/2 left-2" />
        <input
          type="text"
          placeholder="Games, offers and articles"
          className="bg-secondary pl-10 p-4 rounded w-full h-12 placeholder-white"
        />
      </div>

      {/* Items */}
      <p className="text-secondary-text text-sm font-semibold ml-2 my-2">
        ALL GAMES
      </p>
      <ul className="overflow-y-auto max-h-[calc(100dvh-170px)] pr-2">
        {/* <ul className="overflow-y-auto max-h-full"> */}
        {games.map((game, index) => (
          <li key={index}>
            <div className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded">
              {game.icon}
              <span>{game.title}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavContent;
