'use client';

import { useState } from 'react';
import GameCard from '@/components/custom/GameCard';
import { Service } from '@/types/services';
import Link from 'next/link';

export default function HotNowClient({
  initialServices,
}: {
  initialServices: Service[];
}) {
  const [services, setServices] = useState<Service[]>(initialServices);

  const shuffleServices = () => {
    setServices((prev) => [...prev].sort(() => Math.random() - 0.5));
  };

  return (
    <div className="md:rounded-[32px] mt-8 md:p-8 text-white relative overflow-hidden">
      {/* Background effects */}
      <div
        className="absolute -bottom-64 -left-64 w-[800px] h-[800px] rounded-full 
               bg-[radial-gradient(circle,_rgba(91,53,252,0.4)_50%,_transparent_100%)]
               blur-3xl pointer-events-none -z-10 hidden md:block"
      />
      <div className="md:bg-secondary absolute w-full h-full top-0 left-0 -z-20" />

      {/* Header */}
      <div className="flex tracking-tighter justify-between items-center mb-6">
        <h2 className="text-4xl">Hot right now</h2>
        <button
          onClick={shuffleServices}
          className="text-sm flex items-center gap-1 bg-[#2a2b38] px-4 py-1.5 rounded-md hover:bg-[#3a3b48] transition"
        >
          Shuffle <span className="rotate-180">↻</span>
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {services.slice(0, 5).map((service, idx) => (
          <Link
            href={`/${service.name.replaceAll(
              ' ',
              '-'
            )}/product/${service.name.replaceAll(' ', '-')}`}
            key={service.id ?? idx}
          >
            <GameCard service={service} />
          </Link>
        ))}
      </div>
    </div>
  );
}
