import React from 'react';
import HeaderSection from './HeaderSection';
import DetailsSection from './DetailsSection';
import PurchaseSection from './PurchaseSection';
import Reviews from '../Home/Reviews';
import ServiceDetail from '../Game/ServiceDetail';
import { blog } from '@/utils/consts';

const Service = () => {
  return (
    <div>
      <div className="md:mb-4" />
      <HeaderSection />

      <div className="lg:flex justify-between">
        <DetailsSection />
        <PurchaseSection />
      </div>
      <div className="px-margin">
        <Reviews />
      </div>
      <ServiceDetail content={blog} />
    </div>
  );
};

export default Service;
