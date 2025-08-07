import React from 'react';
import { HeartIcon } from 'lucide-react';

const CustomButton = () => {
  return (
    <button className="flex h-14 text-nowrap cursor-pointer items-center gap-2 px-4 bg-secondary-foreground/50 text-white rounded-lg">
      <p className="hidden md:block">Add to my games</p>
      <HeartIcon size={20} />
    </button>
  );
};

export default CustomButton;
