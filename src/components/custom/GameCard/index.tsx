import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const GameCard = ({
  card,
  changeColors = true,
}: {
  card: {
    icon: string;
    title: string;
    features: string[];
    price: string;
    button: string;
  };
  changeColors?: boolean;
}) => {
  return (
    <div
      className={cn(
        `bg-secondary font-semibold rounded-xl overflow-hidden flex flex-col justify-between cursor-pointer`,
        changeColors ? 'md:bg-black' : 'bg-secondary'
      )}
    >
      <div className="h-36 flex items-center justify-center relative">
        <div
          className={cn(
            `absolute inset-0 bg-gradient-to-t from-secondary to-transparent z-10`,
            changeColors ? 'md:from-black' : 'from-secondary'
          )}
        />

        {/* Game icon */}
        <div className="absolute top-0 left-0">
          <Image src={card.icon} alt="icon" width={40} height={40} />
        </div>
        {/* Main image or placeholder */}
        <div className="relative text-white text-xl w-full h-full">
          {card.title}
          <Image alt="game-image" src={'/bg.jpg'} fill objectFit="cover" />
        </div>
      </div>
      <div className="px-4 pb-4">
        <h2 className="text-2xl font-semibold tracking-tighter mb-1">
          {card.title}
        </h2>
        <ul className="text-sm text-white space-y-1">
          {card.features.map((f, idx) => (
            <li key={idx} className="flex items-start gap-2 text-green-400">
              <span>•</span>
              <span className="text-white">{f}</span>
            </li>
          ))}
        </ul>

        <div className="mt-4 flex justify-between items-center">
          <div>
            <div className="text-xl font-semibold">
              {card.price.split('.')[0]}
              <sup>{card.price.split('.')[1]}</sup>
            </div>
          </div>
          <button className="bg-primary hover:bg-[#7f60ff] text-white rounded-md px-4 py-1.5 text-sm font-medium">
            {card.button}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
