import React from 'react';
import Image from 'next/image';
import ServiceHero from './Hero';
import DeliveryDetail from '../DeliveryDetail';
import { Star, ChevronDown } from 'lucide-react';

const HeroSection = () => (
  <div className="relative md:mx-margin overflow-hidden md:rounded-2xl md:py-8">
    <Image
      alt="service-card-bg-image"
      src="/game-list-bg.jpg"
      fill
      className="-z-10 hidden md:block"
      style={{ objectFit: 'cover' }}
    />
    <div className="flex pr-margin">
      <ServiceHero />
      <div className="relative h-auto w-full">
        <Image
          alt="man"
          src="/armor-man.png"
          fill
          style={{ objectFit: 'contain' }}
          className="min-w-50 -z-10"
        />
      </div>

      {/* Review Big */}
      <div className="bg-black rounded-xl p-4 hidden lg:block">
        <div className="flex gap-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star size={16} key={index} fill="green" stroke="green" />
          ))}
        </div>
        <p className="text-xs mt-4">
          Staff is super nice and replies extremely fast. The pros are really
          nice
        </p>
        <p className="text-secondary-text text-xs mt-4">AK23, 22 mins ago</p>
        <div className="flex gap-2 items-center">
          <h3>5.0</h3>{' '}
          <p className="text-xs text-nowrap">Based on 234 ratings</p>
        </div>
        <button className="flex items-center justify-center bg-secondary-foreground/60 rounded-lg w-full py-2 px-4 text-xs mt-4">
          More reviews <ChevronDown />
        </button>
      </div>
    </div>
    <DeliveryDetail />
  </div>
);

export default HeroSection;
