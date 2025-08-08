import React from 'react';
import ServiceCard from '@/components/custom/ServiceCard';
import GameViewHeader from '../Game/GameTitle';
import BreadCrumbs from '@/components/custom/breadcrumb';

type ServiceCardProps = {
  title: string;
  features: string[];
  price: number | null;
};

const data: ServiceCardProps[] = [
  {
    features: ['Guaranteed Badges', 'Fast Completion', 'Fair Price'],
    price: 9.49,
    title: "4000 Damage + 20 Kills (Legend's Wake) Bundle",
  },
  {
    features: ['Guaranteed Badges', 'Fast Completion', 'Fair Price'],
    price: 9.49,
    title: "4000 Damage + 20 Kills (Legend's Wake) Bundle",
  },
  {
    features: ['Guaranteed Badges', 'Fast Completion', 'Fair Price'],
    price: 9.49,
    title: "4000 Damage + 20 Kills (Legend's Wake) Bundle",
  },
  {
    features: ['Guaranteed Badges', 'Fast Completion', 'Fair Price'],
    price: 9.49,
    title: "4000 Damage + 20 Kills (Legend's Wake) Bundle",
  },
  {
    features: ['Guaranteed Badges', 'Fast Completion', 'Fair Price'],
    price: 9.49,
    title: "4000 Damage + 20 Kills (Legend's Wake) Bundle",
  },
  {
    features: ['Guaranteed Badges', 'Fast Completion', 'Fair Price'],
    price: 9.49,
    title: "4000 Damage + 20 Kills (Legend's Wake) Bundle",
  },
  {
    features: ['Guaranteed Badges', 'Fast Completion', 'Fair Price'],
    price: 9.49,
    title: "4000 Damage + 20 Kills (Legend's Wake) Bundle",
  },
  {
    features: ['Guaranteed Badges', 'Fast Completion', 'Fair Price'],
    price: 9.49,
    title: "4000 Damage + 20 Kills (Legend's Wake) Bundle",
  },
  {
    features: ['Guaranteed Badges', 'Fast Completion', 'Fair Price'],
    price: 9.49,
    title: "4000 Damage + 20 Kills (Legend's Wake) Bundle",
  },
  {
    features: ['Guaranteed Badges', 'Fast Completion', 'Fair Price'],
    price: 9.49,
    title: "4000 Damage + 20 Kills (Legend's Wake) Bundle",
  },
  {
    features: ['Guaranteed Badges', 'Fast Completion', 'Fair Price'],
    price: 9.49,
    title: "4000 Damage + 20 Kills (Legend's Wake) Bundle",
  },
  {
    features: ['Guaranteed Badges', 'Fast Completion', 'Fair Price'],
    price: 9.49,
    title: "4000 Damage + 20 Kills (Legend's Wake) Bundle",
  },
  {
    features: ['Guaranteed Badges', 'Fast Completion', 'Fair Price'],
    price: 9.49,
    title: "4000 Damage + 20 Kills (Legend's Wake) Bundle",
  },
  {
    features: ['Guaranteed Badges', 'Fast Completion', 'Fair Price'],
    price: 9.49,
    title: "4000 Damage + 20 Kills (Legend's Wake) Bundle",
  },
  {
    features: ['Guaranteed Badges', 'Fast Completion', 'Fair Price'],
    price: 9.49,
    title: "4000 Damage + 20 Kills (Legend's Wake) Bundle",
  },
  {
    features: ['Guaranteed Badges', 'Fast Completion', 'Fair Price'],
    price: 9.49,
    title: "4000 Damage + 20 Kills (Legend's Wake) Bundle",
  },
  {
    features: ['Guaranteed Badges', 'Fast Completion', 'Fair Price'],
    price: 9.49,
    title: "4000 Damage + 20 Kills (Legend's Wake) Bundle",
  },
];

const SubGame = () => {
  return (
    <div className="px-margin">
      <div className="md:mb-4" />
      <BreadCrumbs />
      <div className="mb-4" />
      <GameViewHeader />
      <p className="text-xs my-4 text-secondary-text">
        Buy Black Ops 6 boosting and coaching services to unlock Mastery camos,
        Blueprints, Prestige rank rewards, new weapons, attachments, cosmetics,
        and more. Complete the Black Ops Zombies Mode with professional players
        on your team and unlock the rewards. Our Call of Duty Black Ops 6
        services are available 24/7 with competitive prices, best boosters, and
        guaranteed results.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {data.map((item, index) => (
          <ServiceCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default SubGame;
