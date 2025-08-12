import React from 'react';
import Image from 'next/image';

const BlogCard = () => {
  return (
    <div className="rounded-3xl overflow-hidden border border-secondary-text">
      <div className="relative h-[340px] lg:h-[200px] w-full">
        <Image fill objectFit="cover" alt="blog-card" src={'/blog-card.jpg'} />
        <div className="absolute w-full bottom-0 h-20 bg-gradient-to-t from-black to-100%" />
      </div>
      <div className="flex justify-center gap-2 items-center -translate-y-4">
        <Image alt="blog-logo" src={'/globe.svg'} width={25} height={25} />
        <div className="h-4 w-[2px] bg-secondary-text"></div>
        <p className="text-xs">Guides</p>
      </div>
      <div className="text-center px-4 pb-4">
        <h3 className="text-lg mb-4 line-clamp-2">
          Best Battlefield 6 Loadouts
        </h3>
        <p className="text-xs line-clamp-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus,
          ipsa minus vel laborum porro facilis soluta? Corrupti, ea,
          perspiciatis adipisci similique porro, saepe voluptates facere a
          consequuntur fugit cumque deleniti?
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
