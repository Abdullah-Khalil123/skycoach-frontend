'use client';
import { setNav } from '@/store/slices/navSlice';
import React from 'react';
import { useDispatch } from 'react-redux';

const ViewAllGamesButton = () => {
  const dispatch = useDispatch();
  return (
    <div className="absolute bg-gradient-to-t from-black to-transparent w-full h-24 bottom-0 left-0 flex justify-center items-end z-10">
      <div className="flex items-center gap-2">
        <p>View All Games</p>
        <button
          onClick={() => {
            dispatch(setNav(true));
          }}
          className="flex items-center gap-2 bg-secondary-foreground text-primary-foreground font-semibold px-4 py-2 rounded-md cursor-pointer hover:bg-secondary-foreground/80 transition-colors"
        >
          All Games
        </button>
      </div>
    </div>
  );
};

export default ViewAllGamesButton;
