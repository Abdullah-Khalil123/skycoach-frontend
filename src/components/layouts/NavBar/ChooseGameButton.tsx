import React from 'react';
import { ChevronDown } from 'lucide-react';

const ChooseGameButton = ({ className }: { className?: string }) => {
  return (
    <button
      className={`flex text-nowrap font-sans items-center gap-1 bg-primary px-4 py-3 text-base text-white font-medium rounded-md ${className}`}
    >
      <p>Choose you game</p>
      <ChevronDown size={20} />
    </button>
  );
};

export default ChooseGameButton;
