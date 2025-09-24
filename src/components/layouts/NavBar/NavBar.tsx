'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import {
  TextSearchIcon,
  Search,
  Heart,
  DollarSign,
  Dot,
  EuroIcon,
  ChevronDown,
  LayoutGrid,
  X as Cross,
  BookOpen,
  Percent,
  ThumbsUp,
  Zap,
} from 'lucide-react';
import ChooseGameButton from './ChooseGameButton';
import NavContent from './NavContent';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import UserButton from './UserButton';
import { Service } from '@/types/services';
import { Navigation } from '@/types/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { setNav, toggleNav } from '@/store/slices/navSlice';

const buttonStyles = `px-3 rounded cursor-pointer hover:bg-secondary py-2`;

const NavBar = ({
  navigation,
  services,
}: {
  navigation: Navigation;
  services: Service[];
}) => {
  // const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  const show = useSelector((state: RootState) => state.navSlice.isOpen);

  return (
    <div className="h-14 md:h-24 flex items-center justify-between px-margin fixed md:static top-0 left-0 right-0 bg-black z-50">
      {/* Small screen: Left */}
      <div
        className="flex items-center md:hidden w-10"
        onClick={() => {
          dispatch(toggleNav());
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
            dispatch(setNav(true));
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
        <div className={buttonStyles} onClick={() => dispatch(setNav(true))}>
          <Search />
        </div>
        <div className={buttonStyles}>
          <Heart />
        </div>
        <CurrencyDropdown buttonStyles={buttonStyles} />

        <UserButton />
        <MoreMenuDropdown buttonStyles={buttonStyles} />
      </div>

      {/* Small screen: Right */}
      <div className="md:hidden">
        {show ? (
          <Cross
            onClick={() => {
              dispatch(setNav(false));
            }}
          />
        ) : (
          <UserButton styles={false} />
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
                dispatch(setNav(false));
              }}
              className="absolute w-full h-screen backdrop-blur-md bg-black/30"
            />
            <NavContent
              setShow={(val) => dispatch(setNav(val))}
              services={services}
              navigation={navigation}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBar;

const CurrencyDropdown = ({ buttonStyles = '' }: { buttonStyles?: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`relative flex items-center ${buttonStyles}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <DollarSign />
      <ChevronDown />

      {/* Invisible hover bridge */}
      <div className="absolute left-0 top-full w-full h-2 bg-transparent"></div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="dropdown"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute left-0 top-full mt-2 w-30 rounded-lg bg-secondary shadow-md z-20"
          >
            <ul className="py-2 text-sm text-white">
              <li className="mx-2 px-4 py-2 rounded-lg hover:bg-secondary-foreground cursor-pointer">
                <DollarSign className="inline mr-1" />
                USD
              </li>
              <li className="mx-2 px-4 py-2 rounded-lg hover:bg-secondary-foreground cursor-pointer">
                <EuroIcon className="inline mr-1" />
                EUR
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MoreMenuDropdown = ({ buttonStyles = '' }: { buttonStyles?: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`relative flex items-center ${buttonStyles}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <LayoutGrid />

      {/* Invisible hover bridge */}
      <div className="absolute left-0 top-full w-full h-2 bg-transparent"></div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="dropdown"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute right-0 top-full mt-2 w-58 rounded-lg bg-[#6439F5] text-white shadow-md z-20"
          >
            <ul className="py-2 text-sm [&_li]:mx-2 [&_li]:rounded-lg">
              <li className="flex items-center gap-2 px-4 py-2 hover:bg-white/10 cursor-pointer">
                <Zap size={16} /> About us
              </li>
              <li className="flex items-center gap-2 px-4 py-2 hover:bg-white/10 cursor-pointer">
                <Percent size={16} /> Cashback
              </li>
              <li className="flex items-center gap-2 px-4 py-2 hover:bg-white/10 cursor-pointer">
                <BookOpen size={16} /> Blog
              </li>
              <li className="flex items-center gap-2 px-4 py-2 hover:bg-white/10 cursor-pointer">
                <ThumbsUp size={16} /> Become a PRO
              </li>
              <hr className="my-2 border-white/20" />
              <li className="px-4 py-2 hover:bg-white/10 cursor-pointer">
                Trust & safety
              </li>
              <li className="px-4 py-2 hover:bg-white/10 cursor-pointer">
                Contact us
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
