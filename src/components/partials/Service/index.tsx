import React from 'react';
import ServiceHeader from './ServiceHeader';
import ServiceHero from './Hero';
import Image from 'next/image';
import DeliveryDetail from './DeliveryDetail';
import BuyCard from './BuyCard';
import CompletionCard from './CompleteCard';
import { serviceDescription } from '@/utils/consts';
import ServiceDetail from '../Game/ServiceDetail';

const Service = () => {
  return (
    <div>
      <div className="md:mb-4" />
      <div className="px-margin">
        <ServiceHeader />
        <h2 className="text-4xl mb-4">Season Pass Leveling</h2>
      </div>

      <div className="flex justify-between">
        <div className="px-margin">
          <div className="relative md:mx-margin overflow-hidden rounded-2xl md:py-8">
            <Image
              alt="service-card-bg-image"
              objectFit="cover"
              src={'/game-list-bg.jpg'}
              fill
              className="-z-10"
            />
            {/* Hero */}
            <div className="flex">
              <ServiceHero />
              <div className="relative h-auto w-full">
                <Image
                  alt="man"
                  src={'/armor-man.png'}
                  fill
                  objectFit="contain"
                />
              </div>
            </div>

            {/* Detail */}
            <DeliveryDetail />
          </div>
          <ServiceDetail
            content={serviceDescription}
            className="bg-transparent [&_h3]:text-xl [&_h3]:mb-4 [&_li]:mb-4 md:px-0 "
          />
        </div>

        {/* User Form */}
        <div className="px-margin md:min-w-1/2">
          <div className="flex gap-4 md:gap-8 px-margin md:p-10 py-8 bg-secondary rounded-4xl mt-8 md:mt-0">
            <BuyCard />
            <CompletionCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
