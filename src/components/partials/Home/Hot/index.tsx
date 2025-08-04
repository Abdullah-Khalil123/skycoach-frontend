'use client';
import Image from 'next/image';

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
    <div className="rounded-[32px] mt-8 p-8 md:p-8 text-white relative overflow-hidden">
      <div
        className="absolute -bottom-64 -left-64 w-[800px] h-[800px] rounded-full 
               bg-[radial-gradient(circle,_rgba(91,53,252,0.4)_50%,_transparent_100%)]
               blur-3xl pointer-events-none -z-10 hidden md:block"
      />
      <div className="bg-secondary absolute w-full h-full top-0 left-0 -z-20" />
      <div className="flex font-semibold justify-between items-center mb-6">
        <h2 className="text-4xl">Hot right now</h2>
        <button className="text-sm flex items-center gap-1 bg-[#2a2b38] px-4 py-1.5 rounded-md">
          Shuffle <span className="rotate-180">↻</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card, i) => (
          <div
            key={i}
            className="bg-black font-semibold rounded-xl overflow-hidden flex flex-col justify-between cursor-pointer"
          >
            <div className="h-36 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />

              {/* Game icon */}
              <div className="absolute top-0 left-0">
                <Image src={card.icon} alt="icon" width={40} height={40} />
              </div>
              {/* Main image or placeholder */}
              <div className="relative text-white text-xl w-full h-full">
                {card.title}
                <Image
                  alt="game-image"
                  src={'/bg.jpg'}
                  fill
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="px-4 pb-4">
              <h2 className="text-xl font-semibold mb-1">{card.title}</h2>
              <ul className="text-sm text-white space-y-1">
                {card.features.map((f, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-green-400"
                  >
                    <span>•</span>
                    <span className="text-white">{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex justify-between items-center">
                <div>
                  <div className="text-xl font-semibold">
                    {card.price.split('.')[0]}
                    <sup>{card.price.split('.')[1]}</sup>
                  </div>
                </div>
                <button className="bg-primary hover:bg-[#7f60ff] text-white rounded-md px-4 py-1.5 text-sm font-medium">
                  {card.button}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
