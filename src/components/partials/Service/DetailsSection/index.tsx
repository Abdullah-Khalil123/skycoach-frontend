import React from 'react';
import HeroSection from './HeroSection';
import ServiceDetail from '../../Game/ServiceDetail';
import { serviceDescription } from '@/utils/consts';

const DetailsSection = () => (
  <div>
    <HeroSection />
    <ServiceDetail
      content={serviceDescription}
      className="hidden lg:block bg-transparent [&_h3]:text-xl [&_h3]:mb-4 [&_li]:mb-4 md:px-0"
    />
  </div>
);

export default DetailsSection;
