import ServiceCard from '@/components/custom/ServiceCard';
import ViewMore from './viewMore';
import React from 'react';
import { Service } from '@/types/services';
import { Category } from '@/types/category';
import Link from 'next/link';

const GameRow = ({
  data,
  category,
  gameSlug,
}: {
  data: Service[];
  category?: Category;
  gameSlug: string;
}) => {
  const hasMore = data.length > 5;

  return (
    <div className="mb-8">
      <h2 className="font-semibold text-2xl my-4">{category?.name}</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {/* Mobile: show all items and ViewMore */}
        <div className="md:hidden space-y-4">
          {data.slice(0, 4).map((item, index) => (
            <ServiceCard key={index} item={item} gameSlug={gameSlug} />
          ))}
          {hasMore && <ViewMore />}
        </div>

        {/* Desktop: only show 1 row based on breakpoint */}
        {/* 1st item always */}
        {data[0] && (
          <div className="hidden md:block">
            <ServiceCard item={data[0]} gameSlug={gameSlug} />
          </div>
        )}

        {/* 2nd on md+ */}
        {data[1] && (
          <div className="hidden md:block">
            <ServiceCard item={data[1]} gameSlug={gameSlug} />
          </div>
        )}

        {/* 3rd on xl+ */}
        {data[2] && (
          <div className="hidden xl:block">
            <ServiceCard item={data[2]} gameSlug={gameSlug} />
          </div>
        )}

        {/* 4th on 2xl+ */}
        {data[3] && (
          <div className="hidden 2xl:block">
            <ServiceCard item={data[3]} gameSlug={gameSlug} />
          </div>
        )}

        {/* ViewMore on md+ if more items */}
        {hasMore && (
          <div className="hidden md:block">
            <Link href={`${category?.slug ? category?.slug : ''}`}>
              <ViewMore />
            </Link>
          </div>
        )}

        {/* Show 5th item on 2xl+ only if not showing ViewMore */}
        {!hasMore && data[4] && (
          <div className="hidden 2xl:block">
            <ServiceCard item={data[4]} gameSlug={gameSlug} />
          </div>
        )}
      </div>
    </div>
  );
};

export default GameRow;
