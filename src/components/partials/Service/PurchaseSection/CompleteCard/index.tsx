import React from 'react';
import PlatformSelection from '../BuyCard/PlatformSelection';
import { Shield } from 'lucide-react';

const platforms = [
  { name: 'Express', price: 11.23 },
  { name: 'Super Express', price: 37.43 },
];

const CompletionCard = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-[#804afc] p-4 md:p-8 rounded-2xl md:min-w-80">
      <h5>Select completion speed</h5>
      <PlatformSelection
        platforms={platforms}
        secondary="bg-secondary-foreground/30"
        color="bg-black"
        primary="bg-white"
        textColor="text-[#ae90fd]"
        borderColor="border-[#ae90fd]/50"
      />

      <h3 className="text-lg">Apply promo code</h3>
      <div className="flex items-center justify-between mt-4">
        <h3 className="textl-lg">Total</h3>
        <h1 className="text-3xl">$48.66</h1>
      </div>

      <div className="text-xs flex items-center gap-2 justify-center">
        <p className="bg-secondary-foreground/15 px-2 py-1 rounded">$2.43</p>
        <p className="text-[#ae90fd]">cashback after purchase</p>
      </div>

      <input
        type="email"
        placeholder="Your email"
        className="bg-secondary-foreground/15 placeholder-white w-full px-4 py-2 rounded-lg mt-4"
      />
      <button className="flex gap-4 bg-gradient-to-r from-[#31c41e] to-[#add625] text-white px-4 py-3 rounded-lg items-center justify-center w-full mt-4">
        Buy now
        <Shield />
      </button>
    </div>
  );
};

export default CompletionCard;
