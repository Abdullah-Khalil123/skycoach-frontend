import React, { useEffect, useState } from 'react';
import { X as Cross, Search, User } from 'lucide-react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import GameCard from '@/components/custom/GameCard';
import Image from 'next/image';
import { Service } from '@/types/services';
import { Navigation } from '@/types/navigation';
import { Game } from '@/types/games';

const NavContent = ({
  setShow,
  navigation,
  services,
}: {
  navigation: Navigation;
  services: Service[];
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [activeGame, setActiveGame] = useState<Game | null>(null); // State for the active game

  useEffect(() => {
    if (navigation && navigation.length > 0) {
      setActiveGame(navigation[0]);
    }

    const handleBodyOverflow = () => {
      if (window.innerWidth < 768) {
        document.body.style.overflow = 'hidden';
      }
    };

    handleBodyOverflow();
    window.addEventListener('resize', handleBodyOverflow);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('resize', handleBodyOverflow);
    };
  }, [navigation]);

  return (
    <div className="absolute top-full left-0 right-0 h-dvh md:h-[75vh] md:min-h-[500px] overflow-hidden w-full bg-black p-4 md:pt-0 md:px-0">
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
        {/* Left Side (Games List) */}
        <div className="relative md:w-80 md:pt-4 md:pb-4 md:border-r border-secondary">
          <div className="pointer-events-none absolute top-0 bg-gradient-to-b from-black to-transparent w-full h-10 z-20" />
          <ul className="overflow-y-auto scrollbar-none max-h-[calc(100dvh-170px)] md:max-h-[calc(60vh-75px)] pr-2 md:pr-0">
            {navigation.map(
              (
                game // Renamed nav to game for clarity
              ) => (
                <li key={game.id}>
                  <div
                    className={`flex md:pl-16 md:rounded-none items-center gap-2 p-2 rounded cursor-pointer ${
                      activeGame?.id === game.id
                        ? 'bg-gradient-to-r from-primary to-primary/90'
                        : 'hover:bg-gradient-to-r from-primary/20 to-primary/10'
                    }`}
                    onClick={() => setActiveGame(game)}
                  >
                    <User />
                    <span>{game.name}</span>
                  </div>
                </li>
              )
            )}
          </ul>
          <div className="pointer-events-none absolute bottom-0 bg-gradient-to-t from-black to-transparent w-full h-10 z-20" />
        </div>

        {/* Right Side (Categories and Picks of the day) */}
        <div className="hidden md:flex w-full px-8">
          {activeGame ? (
            <div className="h-90 w-full pb-16 overflow-y-scroll scrollbar-x-thin">
              <h5 className="mb-4 text-secondary-text text-sm">Categories</h5>
              <div className="grid grid-cols-3 space-y-8">
                {activeGame.categories.map((category) => (
                  <div key={category.id}>
                    <h4>{category.name}</h4>
                    <ul>
                      {category.children.map((child) => (
                        <li key={child.id}>
                          <p className="text-xs text-secondary-text">
                            {child.name}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="h-90 w-full pb-16 flex items-center justify-center text-secondary-text">
              Select a game to see its categories.
            </div>
          )}

          <div className="hidden lg:block w-110 h-80 px-8 overflow-y-scroll scrollbar-x-thin">
            <p className="text-sm text-secondary-text mb-4">Picks of the day</p>
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              pagination={{ clickable: true }}
              modules={[Pagination, Autoplay]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
            >
              {services.slice(0, 4).map((service, idx) => (
                <SwiperSlide key={idx}>
                  <GameCard service={service} key={idx} />
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
