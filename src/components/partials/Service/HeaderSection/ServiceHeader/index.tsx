import BreadCrumbs from '@/components/custom/breadcrumb';
import React from 'react';
import CustomButton from '@/components/custom/Button';

const ServiceHeader = () => {
  return (
    <div className="relative">
      <div className="flex items-center justify-between">
        <BreadCrumbs />
        <CustomButton />
      </div>
    </div>
  );
};

export default ServiceHeader;
