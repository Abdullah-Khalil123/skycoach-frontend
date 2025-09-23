import { Switch } from '@/components/ui/switch';
import React from 'react';

const filters = ['Skycoach Selection', 'Gold', 'Accounts'];

const HeroFilters = () => {
  return (
    <div className="flex md:justify-between items-center gap-2 py-2">
      <p className="max-md:hidden text-nowrap font-semibold mr-4">
        Customize your experience
      </p>
      <div className="lg:hidden flex px-4 py-2 gap-4 overflow-x-auto scrollbar-x-thin">
        {filters.map((filter, index) => (
          <button
            key={index}
            className="text-nowrap bg-[#212121] font-medium px-3 py-1 rounded"
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="hidden lg:block">
        <div className="flex items-center gap-4 font-semibold text-sm">
          {filters.map((filter, index) => (
            <div key={index} className="flex items-center gap-2">
              <p className="text-nowrap">{filter}</p>
              <Switch />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroFilters;
