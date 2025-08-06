'use client';
import GameCard from '@/components/custom/GameCard';

const cards = [
  {
    title: 'Divine Orbs',
    icon: '/poe.svg',
    features: ['Lowest Price', 'Quick Delivery', 'Safe Trading'],
    price: '$1.49',
    button: 'Buy now',
  },
  {
    title: 'Diablo 4 Powerleveling',
    icon: '/diablo.svg',
    features: ['Season 9 Available', 'Fastest Leveling', 'Complete Safety'],
    price: '$4.98',
    button: 'Buy now',
  },
  {
    title: 'Diablo 4 Gold Coins',
    icon: '/diablo.svg',
    features: ['Complete Safety', 'Quick Delivery', 'Fair Price'],
    price: '$5.80',
    button: 'Buy now',
  },
  {
    title: 'R6 Siege Rank Boost',
    icon: '/r6.svg',
    features: ['Any Rank', 'Fast Completion', 'Fair Price'],
    price: '$2.19',
    button: 'Buy now',
  },
];

export default function HotNowSection() {
  return (
    <div className="md:rounded-[32px] mt-8 md:p-8 text-white relative overflow-hidden">
      <div
        className="absolute -bottom-64 -left-64 w-[800px] h-[800px] rounded-full 
               bg-[radial-gradient(circle,_rgba(91,53,252,0.4)_50%,_transparent_100%)]
               blur-3xl pointer-events-none -z-10 hidden md:block"
      />
      <div className="md:bg-secondary absolute w-full h-full top-0 left-0 -z-20" />
      <div className="flex tracking-tighter justify-between items-center mb-6">
        <h2 className="text-4xl">Hot right now</h2>
        <button className="text-sm flex items-center gap-1 bg-[#2a2b38] px-4 py-1.5 rounded-md">
          Shuffle <span className="rotate-180">↻</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card, idx) => (
          <GameCard card={card} key={idx} />
        ))}
      </div>
    </div>
  );
}
