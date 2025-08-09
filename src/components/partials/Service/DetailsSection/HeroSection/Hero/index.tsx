import React from 'react';
import { Star } from 'lucide-react';

const features = ['Current Season', 'Fast Leveling', 'Fair Price'];

const ServiceHero = () => {
  return (
    <div>
      <div className="mb-16">
        {features.map((feature, index) => (
          <FeatuesList key={index} feature={feature} />
        ))}
      </div>
      <div className="pl-margin flex items-center lg:hidden">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star size={16} key={index} fill="green" stroke="green" />
        ))}
        <p className="text-xs ml-2 text-nowrap">1672 reviews</p>
      </div>
    </div>
  );
};

const FeatuesList = ({ feature }: { feature: string }) => {
  return (
    <p className="pl-margin text-nowrap py-1 text-xs mb-2 bg-gradient-to-r from-primary via-primary/90 to-transparent w-fit">
      {feature}
    </p>
  );
};

export default ServiceHero;
