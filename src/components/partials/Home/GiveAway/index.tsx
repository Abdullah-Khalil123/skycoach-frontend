import React from 'react';
import Link from 'next/link';
import { Instagram, YoutubeIcon } from 'lucide-react';
import Image from 'next/image';

const GiveAwaySection = () => {
  return (
    <div className="flex mt-8 flex-col md:flex md:flex-row items-center md:justify-between bg-secondary px-8 pt-4 rounded-3xl">
      <div className="md:w-1/2 py-6">
        <h2 className="text-2xl font-semibold tracking-tight mb-2">
          Memes, tips, Giveaways & more
        </h2>
        <p className="text-xs">Welcome to the squad</p>

        <div className="flex gap-4 mt-4">
          <Link href={'insta'}>
            <div className="p-2 bg-secondary-foreground w-fit rounded-xl flex items-center justify-center">
              <Instagram size={25} />
            </div>
          </Link>
          <Link href={'insta'}>
            <div className="p-2 bg-secondary-foreground w-fit rounded-xl flex items-center justify-center">
              <YoutubeIcon size={25} />
            </div>
          </Link>
        </div>
      </div>
      <Image
        alt="phone"
        src={'/phone.png'}
        width={400}
        height={100}
        sizes="(max-width: 768px) 100vw, 400px"
      />
    </div>
  );
};

export default GiveAwaySection;
