'use client';
import React from 'react';
import { ChevronDown } from 'lucide-react';

const ChooseGameButton = ({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex cursor-pointer text-nowrap font-sans items-center gap-1 bg-primary px-4 py-3 text-base text-white font-medium rounded-md ${className}`}
    >
      <p>Choose your game</p>
      <ChevronDown size={20} />
    </button>
  );
};

export default ChooseGameButton;
