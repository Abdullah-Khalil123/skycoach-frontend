import React from 'react';
import Image from 'next/image';

const SmallBlogCard = () => {
  return (
    <div className="relative rounded-3xl overflow-hidden h-52 min-w-48 border border-secondary-text">
      <div className="relative h-2/3 w-full">
        <Image
          alt="blog-image"
          src={'/blog-card.jpg'}
          fill
          objectFit="center"
        />
        <div className="absolute w-full bottom-0 h-30 bg-gradient-to-t from-black to-50%" />
      </div>
      <div className="absolute top-0 h-full flex flex-col gap-2 justify-end px-4 pb-4 text-xs ">
        <Image alt="logo" src={'/vercel.svg'} width={20} height={20} />
        <p>Manaforge Vandals Renown Guide - The War Within 11.2</p>
      </div>
    </div>
  );
};

export default SmallBlogCard;
