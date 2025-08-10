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
import Link from 'next/link';

const buttonStyles = `px-3 rounded cursor-pointer hover:bg-secondary py-2`;

const NavBar = () => {
  const [show, setShow] = useState(false);

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
        <Link href={'/'}>
          <Image
            className="invert"
            src={'/next.svg'}
            alt={'Logo'}
            width={120}
            height={15}
            priority
          />
        </Link>
        <ChooseGameButton
          onClick={() => {
            setShow(true);
          }}
        />
        <div className="flex items-center gap-1">
          <Dot className="text-green-400" />
          <p className="text-sm font-semibold">788 PROs online</p>
        </div>
      </div>

      {/* Small screen: Center */}
      <div className="md:hidden">
        <Link href={'/'}>
          <Image
            className="invert"
            src={'/next.svg'}
            alt={'Logo'}
            width={120}
            height={15}
            priority
          />
        </Link>
      </div>

      {/* Medium+ screen: Right section */}
      <div className="hidden md:flex items-center gap-4">
        <div className={buttonStyles} onClick={() => setShow(true)}>
          <Search />
        </div>
        <div className={buttonStyles}>
          <Heart />
        </div>
        <div className={'flex items-center ' + buttonStyles}>
          <DollarSign />
          <ChevronDown />
        </div>
        <div className={buttonStyles}>
          <User />
        </div>
        <div className={buttonStyles}>
          <LayoutGrid />
        </div>
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
            className="fixed top-14 md:top-0 left-0 right-0 z-40 bg-black"
          >
            <div
              onClick={() => {
                setShow(false);
              }}
              className="absolute w-full h-screen backdrop-blur-md bg-black/30"
            ></div>
            <NavContent setShow={setShow} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBar;
