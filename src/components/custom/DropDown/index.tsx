'use client';
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const CustomDropdown = ({ className }: { className: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const options = [
    '🍎 Apple',
    '🍌 Banana',
    '🍒 Cherry',
    '🥭 Mango',
    '🍇 Grapes',
    '🍍 Pineapple',
    '🍑 Peach',
    '🥝 Kiwi',
    '🍓 Strawberry',
  ];

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
  };

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={cn(`relative`, className)} ref={dropdownRef}>
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          `bg-secondary w-full rounded-lg overflow-hidden outline-none`,
          isOpen ? 'rounded-b-none' : ''
        )}
      >
        <div className="flex justify-between p-4">
          {selected || 'Game menu'}
          <span className="ml-2">
            {isOpen ? <ChevronUp /> : <ChevronDown />}
          </span>
        </div>
      </button>

      {/* Dropdown Menu with animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute top-[calc(100%-10px)] w-full z-10 bg-secondary rounded-b-lg px-4"
          >
            <ul
              className="h-60 overflow-y-scroll border-t-2 border-gray-600/50 rounded-b-lg
                 scrollbar-x-thin"
            >
              {options.map((option, index) => (
                <li
                  key={index}
                  onClick={() => handleSelect(option)}
                  className="px-2 py-2 text-secondary-text hover:text-white transition-colors cursor-pointer"
                >
                  {option}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomDropdown;
