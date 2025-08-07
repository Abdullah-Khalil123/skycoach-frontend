import { ChevronRight } from 'lucide-react';
import React from 'react';

const ViewMore = () => {
  return (
    <div className="relative md:h-82 p-4 overflow-hidden bg-secondary rounded-2xl flex flex-col justify-end">
      <div
        className="absolute -bottom-40 -right-60 w-[500px] h-[500px] rounded-full 
               bg-[radial-gradient(circle,_rgba(91,53,252,0.5)_100%,_transparent_100%)]
               blur-3xl pointer-events-none"
      />
      <div className="flex items-center w-full z-10">
        <div>
          <p className="text-sm">View more</p>
          <h3 className="text-2xl">Items</h3>
        </div>
        <button className="bg-gray-400/20 w-12 h-12 rounded-xl flex items-center justify-center ml-auto">
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ViewMore;
