import React from 'react';
import Image from 'next/image';

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div>
      <div className="absolute h-[70vh] inset-0 -z-10">
        <div className="relative w-full h-full">
          <Image
            alt="bg"
            src="/game-list-bg.jpg "
            fill
            className="object-cover md:hidden"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        </div>
      </div>
      {children}
    </div>
  );
};

export default layout;
