import React, { useEffect } from 'react';
import { X as Cross, Search, User } from 'lucide-react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import GameCard from '@/components/custom/GameCard';
import Image from 'next/image';

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

const categories = [
  {
    title: 'Gold',
    features: [],
  },
  {
    title: 'Boosting',
    features: ['Liberation of Undermine', "Nerub'ar Palace"],
  },
  {
    title: 'Coaching',
    features: [],
  },
  {
    title: 'Power Leveling',
    features: ['Manaforge Omega', 'Liberation of Undermine', "Nerub'ar Palace"],
  },
  {
    title: 'Items',
    features: [],
  },
  {
    title: 'Services',
    features: [
      'Character Leveling',
      'Reputations',
      'Gearing',
      'Achievements',
      'Professions',
      'Titles',
      'Allied Races',
    ],
  },
  {
    title: 'Guides',
    features: ['Professions', 'Titles', 'Allied Races'],
  },
];

const cards = [
  {
    title: 'Divine Orbs',
    icon: '/poe.svg',
    features: ['Lowest Price', 'Quick Delivery', 'Safe Trading'],
    price: '$1.49',
    button: 'Buy now',
  },
  {
    title: 'Diablo 4 Powerleveling',
    icon: '/diablo.svg',
    features: ['Season 9 Available', 'Fastest Leveling', 'Complete Safety'],
    price: '$4.98',
    button: 'Buy now',
  },
  {
    title: 'Diablo 4 Gold Coins',
    icon: '/diablo.svg',
    features: ['Complete Safety', 'Quick Delivery', 'Fair Price'],
    price: '$5.80',
    button: 'Buy now',
  },
  {
    title: 'R6 Siege Rank Boost',
    icon: '/r6.svg',
    features: ['Any Rank', 'Fast Completion', 'Fair Price'],
    price: '$2.19',
    button: 'Buy now',
  },
];

const NavContent = ({
  setShow,
}: {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  useEffect(() => {
    const handleBodyOverflow = () => {
      if (window.innerWidth < 768) {
        // 768px is typically the 'md' breakpoint in most frameworks
        document.body.style.overflow = 'hidden';
      }
    };

    handleBodyOverflow();
    window.addEventListener('resize', handleBodyOverflow);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('resize', handleBodyOverflow);
    };
  }, []);
  return (
    <div className="absolute top-full left-0 right-0 h-dvh md:h-[75vh] overflow-hidden w-full bg-black p-4 md:pt-0 md:px-0">
      <div className="hidden md:block">
        <div className="h-20 px-16 w-full flex items-center justify-between">
          <div />
          <Image
            alt="logo"
            className="invert"
            priority
            width={150}
            height={20}
            src="/next.svg"
          />
          <Cross
            className="cursor-pointer"
            size={20}
            onClick={() => {
              setShow(false);
            }}
          />
        </div>
      </div>
      <div className="relative mb-4 md:px-16">
        <Search className="absolute top-1/2 -translate-y-1/2 left-2 md:left-18" />
        <input
          type="text"
          placeholder="Games, offers and articles"
          className="bg-secondary pl-10 p-4 rounded w-full h-12 placeholder-white"
        />
      </div>

      {/* Items */}
      <p className="md:pl-16 text-secondary-text text-sm font-semibold ml-2 my-2">
        ALL GAMES
      </p>
      <div className="md:flex">
        {/* Left Side */}
        <div className="relative md:w-80 md:pt-4 md:pb-4 border-r border-secondary">
          <div className="pointer-events-none absolute top-0 bg-gradient-to-b from-black to-transparent w-full h-10 z-20" />
          <ul className="overflow-y-auto scrollbar-none max-h-[calc(100dvh-170px)] md:max-h-[calc(60vh-75px)] pr-2 md:pr-0">
            {/* <ul className="overflow-y-auto max-h-full"> */}
            {games.map((game, index) => (
              <li key={index}>
                <div className="flex md:pl-16 md:rounded-none items-center gap-2 p-2 hover:bg-gradient-to-r from-primary to-primary/90 rounded">
                  {game.icon}
                  <span>{game.title}</span>
                </div>
              </li>
            ))}
          </ul>
          <div className="pointer-events-none absolute bottom-0 bg-gradient-to-t from-black to-transparent w-full h-10 z-20" />
        </div>

        {/* Right Side */}
        <div className="w-full px-8 flex">
          <div className="h-90 w-full pb-16 overflow-y-scroll scrollbar-x-thin">
            <h5 className="mb-4 text-secondary-text text-sm">Categories</h5>
            <div className="grid grid-cols-3 space-y-8">
              {categories.map((category, index) => (
                <div key={index}>
                  <h4>{category.title}</h4>
                  <ul>
                    {category.features.map((feature, idx) => (
                      <li key={idx}>
                        <p className="text-xs text-secondary-text">{feature}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block w-110 h-80 px-8 overflow-y-scroll">
            <p className="text-sm text-secondary-text mb-4">Picks of the day</p>
            <Swiper
              slidesPerView={1}
              pagination={{ clickable: true }}
              modules={[Pagination, Autoplay]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
            >
              {[1, 2, 3].map((num, idx) => (
                <SwiperSlide key={num}>
                  <GameCard card={cards[idx]} key={num} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavContent;
