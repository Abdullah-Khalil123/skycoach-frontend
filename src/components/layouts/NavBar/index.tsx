import React from 'react';
import Image from 'next/image';
import {
  TextSearchIcon,
  User,
  Search,
  Heart,
  DollarSign,
  Dot,
  ChevronDown,
  LayoutGrid,
} from 'lucide-react';
import ChooseGameButton from './ChooseGameButton';

const NavBar = () => {
  return (
    <div className="h-24 flex items-center justify-between px-12">
      {/* Small screen: Left */}
      <div className="flex items-center md:hidden">
        <TextSearchIcon />
      </div>

      {/* Medium+ screen: Left section */}
      <div className="hidden md:flex items-center gap-4">
        <Image
          className="invert"
          src={'/next.svg'}
          alt={'Logo'}
          width={120}
          height={15}
        />
        <ChooseGameButton />
        <div className="flex items-center gap-1">
          <Dot className="text-green-400" />
          <p className="text-sm font-semibold">788 PROs online</p>
        </div>
      </div>

      {/* Small screen: Center */}
      <div className="md:hidden">
        <Image
          className="invert"
          src={'/next.svg'}
          alt={'Logo'}
          width={120}
          height={15}
        />
      </div>

      {/* Medium+ screen: Right section */}
      <div className="hidden md:flex items-center gap-4">
        <Search />
        <Heart />
        <div className="flex items-center">
          <DollarSign />
          <ChevronDown />
        </div>
        <User />
        <LayoutGrid />
      </div>

      {/* Small screen: Right */}
      <div className="md:hidden">
        <User />
      </div>
    </div>
  );
};

export default NavBar;
