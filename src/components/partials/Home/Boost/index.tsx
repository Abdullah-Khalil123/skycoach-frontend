import React from 'react';
import Image from 'next/image';

const BoostYouSection = () => {
  return (
    <section className="relative flex flex-col-reverse lg:flex-row bg-secondary rounded-4xl mt-8 overflow-hidden">
      {/* Glow background */}
      <div
        className="absolute -bottom-64 -right-64 w-[800px] h-[800px] rounded-full 
        bg-[radial-gradient(circle,_rgba(91,53,252,0.4)_50%,_transparent_100%)]
        blur-3xl pointer-events-none z-10"
      />

      {/* Left text */}
      <div className="relative z-20 lg:w-1/2 py-4 pb-8 lg:py-8 px-8">
        <h2 className="text-4xl mb-4">
          What boosts you,
          <br />
          makes us
        </h2>
        <div className="text-xs">
          <p>
            Since 2020, Skycoach has united seasoned professionals and
            like-minded gamers to help you enjoy your games.
          </p>
          <div className="mb-2" />
          <p>
            We speak your language and know that gaming is more than just a
            hobby—it's a passion. Your success fuels our growth, and we're here
            to help you achieve more in games.
          </p>
          <div className="mb-2" />
          <p>
            What boosts you in a game shapes you as a player. Every gaming
            achievement with Skycoach unlocks your potential. We're here to help
            you grow and reach new heights.
          </p>
        </div>
      </div>

      {/* Image - absolute and under text */}
      <div className="relative lg:w-1/2 w-full scale-90 lg:scale-100 mt-4 lg:mt-0 h-64 lg:h-auto z-10">
        <Image
          src="/gamer-man.png"
          alt="gamer-man"
          fill
          className="object-cover rounded-2xl"
          priority
          sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
        />
      </div>
    </section>
  );
};

export default BoostYouSection;
