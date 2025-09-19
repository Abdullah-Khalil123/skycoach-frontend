import React from 'react';
import Image from 'next/image';
import { Article } from '@/types/articles';

const BlogCard = ({ article }: { article: Article }) => {
  return (
    <div className="rounded-3xl overflow-hidden border border-secondary-text">
      {/* Image */}
      <div className="relative h-[340px] lg:h-[200px] w-full">
        <Image
          fill
          className="object-cover"
          alt={article.name}
          src={article.image}
        />
        <div className="absolute w-full bottom-0 h-20 bg-gradient-to-t from-black to-100%" />
      </div>

      {/* Meta section */}
      <div className="flex justify-center gap-2 items-center -translate-y-4">
        <Image alt="blog-logo" src={'/globe.svg'} width={25} height={25} />
        <div className="h-4 w-[2px] bg-secondary-text"></div>
        <p className="text-xs capitalize">
          {article.type?.toString() ?? 'Article'}
        </p>
      </div>

      {/* Content */}
      <div className="text-center px-4 pb-4">
        <h3 className="text-lg mb-4 line-clamp-2">{article.name}</h3>
        <p className="text-xs line-clamp-4">{article.description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
