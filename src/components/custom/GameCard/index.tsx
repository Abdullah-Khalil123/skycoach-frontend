import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Service } from '@/types/services';
import { getImageUrl } from '@/utils/getImageUrl';

const GameCard = ({
  service,
  changeColors = true,
}: {
  service: Service;
  changeColors?: boolean;
}) => {
  const price = service.start_price?.toFixed(2);
  return (
    <div
      className={cn(
        `bg-secondary h-full rounded-xl overflow-hidden flex flex-col justify-between cursor-pointer`,
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
          <Image
            src={getImageUrl(service.icon) ?? null}
            alt="icon"
            width={40}
            height={40}
          />
        </div>
        {/* Main image or placeholder */}
        <div className="relative text-white text-xl w-full h-full">
          {service.name}
          <Image
            alt="game-image"
            src={getImageUrl(service.image) ?? '/bg.jpg'}
            fill
            objectFit="cover"
          />
        </div>
      </div>
      <div className="px-4 pb-4 min-h-1/2 flex flex-col justify-between">
        <h2 className="text-2xl tracking-tighter mb-1">{service.name}</h2>
        <ul className="text-xs text-white space-y-1">
          {service.features.map((f, idx) => (
            <li key={idx} className="flex items-start gap-2 text-green-400">
              <span>•</span>
              <span className="text-white">{f}</span>
            </li>
          ))}
          {service.features.length === 0 && (
            <>
              <li className="flex items-start gap-2 text-green-400">
                <span>•</span>
                <span className="text-white">Quick Delivery</span>
              </li>
              <li className="flex items-start gap-2 text-green-400">
                <span>•</span>
                <span className="text-white">24/7 Customer Support</span>
              </li>
            </>
          )}
        </ul>

        <div className="mt-4 flex justify-between items-center">
          <div>
            <div className="text-xl font-semibold">
              {price?.split('.')[0]}
              <sup>{price?.split('.')[1]}</sup>
            </div>
          </div>
          <button className="mb-1 bg-primary hover:bg-[#7f60ff] text-white rounded-md px-4 py-1.5 text-sm font-medium">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
