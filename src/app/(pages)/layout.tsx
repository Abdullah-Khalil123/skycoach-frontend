import SideNav from '@/components/layouts/SideNav';
import React from 'react';
import Image from 'next/image';

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex">
      <div className="absolute h-[50vh] inset-0 -z-10">
        <div className="relative w-full h-full">
          <Image
            alt="bg"
            src="/game-list-bg.jpg"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        </div>
      </div>
      <SideNav />
      <div className="min-w-64">{children}</div>
    </div>
  );
};

export default layout;
