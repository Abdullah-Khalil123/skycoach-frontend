'use client';
import React, { useState } from 'react';
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
  X as Cross,
} from 'lucide-react';
import ChooseGameButton from './ChooseGameButton';
import NavContent from './NavContent';
import { motion, AnimatePresence } from 'framer-motion';

const NavBar = () => {
  const [show, setShow] = useState(false);
  console.log(show);

  return (
    <div className="h-14 md:h-24 flex items-center justify-between px-margin fixed md:static top-0 left-0 right-0 bg-black z-50">
      {/* Small screen: Left */}
      <div
        className="flex items-center md:hidden w-10"
        onClick={() => {
          setShow((prev) => !prev);
        }}
      >
        {!show && <TextSearchIcon />}
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
        {show ? (
          <Cross
            onClick={() => {
              setShow(false);
            }}
          />
        ) : (
          <User />
        )}
      </div>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-14 left-0 right-0 z-40 bg-black"
          >
            <NavContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBar;
