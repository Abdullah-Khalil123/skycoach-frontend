import React from 'react';
import ReviewSection from '../Home/Reviews';
import GameViewHeader from './GameTitle';
import GameRow from './GameRow';
import ServiceDetail from './ServiceDetail';
import { blog } from '@/utils/consts';
import GiveAway from '../Home/GiveAway';

const data = [
  {
    title: "4000 Damage + 20 Kills (Legend's Wake) Bundle",
    category: 'Badges',
    features: ['Guaranteed Badges', 'Fast Completion', 'Fair Price'],
    price: 9.49,
  },
  {
    title: 'Battle Royale Rank Boost',
    category: 'Rank Boost',
    features: ['Any Rank You Want', 'Fast Completion', 'Complete Safety'],
    price: 1.99,
  },
  {
    title: "Legend's Wake 20 Bomb Badge",
    category: 'Badges',
    features: ['20 Kills', 'Any Legend', 'Fast Completion'],
    price: 6.99,
  },

  {
    title: 'Apex Prestige Skins',
    category: 'Skins',
    features: ['Rare Mythic Skins', 'Any Tier Unlock', 'Fast & Safe Service'],
    price: 9.9,
  },
  {
    title: 'Get personalized offer',
    category: 'Custom',
    features: ['Custom Order', 'Lower Price', 'Talk to PRO'],
    price: null,
  },
  {
    title: "Legend's Wake 20 Bomb Badge",
    category: 'Badges',
    features: ['20 Kills', 'Any Legend', 'Fast Completion'],
    price: 6.99,
  },

  {
    title: 'Apex Prestige Skins',
    category: 'Skins',
    features: ['Rare Mythic Skins', 'Any Tier Unlock', 'Fast & Safe Service'],
    price: 9.9,
  },
  {
    title: 'Get personalized offer',
    category: 'Custom',
    features: ['Custom Order', 'Lower Price', 'Talk to PRO'],
    price: null,
  },
];

const data2 = [
  {
    title: 'Apex Predator RP Boost',
    category: 'RP Boost',
    features: ['Any Amount of RP', 'Climb the Ladder', 'Fast Completion'],
    price: 2.999,
  },
  {
    title: 'Legends Badges',
    category: 'Badges',
    features: ['Fair Price', 'Complete Safety'],
    price: 9.9,
  },
];

const data3 = [
  {
    title: 'Ranked Unlock',
    category: 'Unlock',
    features: ['1-20 Leveling', 'Fast & Secure'],
    price: 14.99,
  },
  {
    title: 'Battle Pass Leveling',
    category: 'Leveling',
    features: ['Unique Skins', 'Fair Price'],
    price: 11.59,
  },
];

const games = [data, data2, data3];

const headings = ['Hot Offers', 'Popular Services', 'New Arrivals'];

const GameViewPage = () => {
  return (
    <>
      <div className="relative px-margin md:mt-4">
        <GameViewHeader />
        {headings.map((heading, index) => (
          <GameRow key={index} data={games[index]} title={heading} />
        ))}
        <ReviewSection />
        <GiveAway />
      </div>
      <ServiceDetail content={blog} />
    </>
  );
};

export default GameViewPage;
