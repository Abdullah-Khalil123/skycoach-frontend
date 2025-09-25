import React from 'react';
import Image from 'next/image';
import NavBar from '@/components/layouts/NavBar';
import Footer from '@/components/layouts/Footer';

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="pt-18 md:pt-0">
      <NavBar />
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
      <Footer />
    </div>
  );
};

export default layout;
