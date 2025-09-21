import React from 'react';
import Image from 'next/image';
import { Article } from '@/types/articles';
import { getImageUrl } from '@/utils/getImageUrl';

const SmallBlogCard = ({ article }: { article: Article }) => {
  return (
    <div className="relative mr-4 rounded-3xl overflow-hidden h-52 min-w-48 border border-secondary-text">
      <div className="relative h-2/3 w-full">
        <Image
          alt={article.name}
          src={getImageUrl(article.image)}
          fill
          className="object-cover"
        />
        <div className="absolute w-full bottom-0 h-30 bg-gradient-to-t from-black to-50%" />
      </div>
      <div className="absolute top-0 h-full flex flex-col gap-2 justify-end px-4 pb-4 text-xs text-white">
        <p className="font-bold">{article.name}</p>
        <p className="line-clamp-2">{article.description}</p>
      </div>
    </div>
  );
};

export default SmallBlogCard;
