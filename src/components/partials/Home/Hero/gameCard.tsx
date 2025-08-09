import React from 'react';
import Image from 'next/image';
import { Sun } from 'lucide-react';

const GameCard = () => {
  return (
    <div className="relative rounded-4xl overflow-hidden lg:h-40">
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />

      <h3 className="z-10 flex flex-col absolute top-1/2 -translate-y-1/2 px-4 font-medium">
        World of Warcraft
        <Badge />
      </h3>
      <Badge />

      {/*  */}
      <div className="hidden lg:block z-10 absolute right-5 bottom-5">
        <p className="text-xs bg-black rounded px-2 py-1">235 offers</p>
      </div>
      {/*  */}

      <Image
        src={'/bg.jpg'}
        alt="Game Image"
        fill
        objectFit="cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
};

const Badge = () => {
  return (
    <span className="flex items-center gap-2 bg-secondary/40 text-white text-xs px-1 py-1 rounded-full">
      <div className="flex justify-center items-center size-6 rounded-full bg-secondary/20">
        <Sun size={15} />
      </div>{' '}
      <p>Summer Sale</p>
    </span>
  );
};

export default GameCard;
