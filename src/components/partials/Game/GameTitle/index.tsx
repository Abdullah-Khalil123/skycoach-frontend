import CustomButton from '@/components/custom/Button';
import React from 'react';

const GameViewHeader = () => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="font-semibold text-4xl">
        Apex Legends Boosting and Coaching Services
      </h1>
      <CustomButton />
    </div>
  );
};

export default GameViewHeader;
