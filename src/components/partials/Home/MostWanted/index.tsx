import Image from 'next/image';

const offers = [
  { icon: '/icons/wow.svg', title: 'Gold', price: '$5.02' },
  { icon: '/icons/wow.svg', title: 'Mythic +2-20 Dungeons...', price: '$4.99' },
  { icon: '/icons/lol.svg', title: 'LoL Accounts', price: '$0.99' },
  {
    icon: '/icons/destiny.svg',
    title: 'Flawless Trials of Osiris',
    price: '$9.99',
  },
  {
    icon: '/icons/destiny.svg',
    title: 'Power Level (Light Level)...',
    price: '$20.99',
  },
  {
    icon: '/icons/destiny.svg',
    title: 'The Desert Perpetual Raid',
    price: '$32.99',
  },
  { icon: '/icons/valorant.svg', title: 'Valorant Accounts', price: '$0.99' },
  { icon: '/icons/cod.svg', title: 'Black Ops 6 Ranked Play', price: '$16.37' },
  { icon: '/icons/cod.svg', title: 'Warzone Ranked Play...', price: '$11.78' },
  {
    icon: '/icons/diablo.svg',
    title: 'Diablo 4 Powerleveling',
    price: '$4.98',
  },
  { icon: '/icons/diablo.svg', title: 'Diablo 4 Gold Coins', price: '$5.80' },
  { icon: '/icons/r6.svg', title: 'R6 Siege Rank Boost', price: '$2.19' },
  { icon: '/icons/clash.svg', title: 'Arena Boost', price: '$2.99' },
  { icon: '/icons/poe.svg', title: 'PoE 2 Divine Orbs', price: '$1.62' },
  { icon: '/icons/poe.svg', title: 'PoE 2 Unique Items', price: '$0.50' },
  { icon: '/icons/fortnite.svg', title: 'Fortnite Accounts', price: '$0.99' },
  {
    icon: '/icons/clash.svg',
    title: 'Clash of Clans Accounts',
    price: '$0.99',
  },
  { icon: '/icons/fc.svg', title: 'FC 25 Coins', price: '$1.63' },
  {
    icon: '/icons/marvel.svg',
    title: 'Marvel Rivals Rank Boost',
    price: '$2.69',
  },
  { icon: '/icons/wow.svg', title: 'WoW Classic 20th...', price: '$2.02' },
];

export default function MostWantedOffers() {
  return (
    <section className="border-secondary-foreground border-[1px] rounded-3xl p-6 md:p-10 text-white mt-8">
      <h2 className="text-3xl font-semibold mb-6">Most-wanted offers</h2>

      <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(160px,1fr))]">
        {offers.map((offer, idx) => (
          <div
            key={idx}
            className="bg-secondary rounded-xl px-4 py-5 flex flex-col justify-between items-start hover:bg-[#232323] transition
              cursor-pointer hover:-translate-y-1"
          >
            <Image
              src={'/globe.svg'}
              alt={offer.title}
              width={24}
              height={24}
              className="mb-2"
            />
            <div className="text-sm font-medium leading-snug line-clamp-2">
              {offer.title}
            </div>
            <div className="mt-2 tracking-tighter text-xl font-bold text-secondary-text">
              {offer.price}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
