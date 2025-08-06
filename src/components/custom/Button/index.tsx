import React from 'react';
import { HeartIcon } from 'lucide-react';

const CustomButton = () => {
  return (
    <button className="flex text-nowrap cursor-pointer items-center gap-2 px-4 py-2 bg-secondary-foreground/50 text-white rounded-lg">
      <p>Add to my games</p>
      <HeartIcon size={20} />
    </button>
  );
};

export default CustomButton;
