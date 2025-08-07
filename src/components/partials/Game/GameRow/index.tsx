import ServiceCard from '@/components/custom/ServiceCard';
import ViewMore from './viewMore';
import React from 'react';

type GameRowProps = {
  title: string;
  category: string;
  features: string[];
  price: number | null;
};

const GameRow = ({ data, title }: { data: GameRowProps[]; title: string }) => {
  const hasMore = data.length > 5;

  return (
    <div className="mb-8">
      <h2 className="font-semibold text-2xl my-4">{title}</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {/* Mobile: show all items and ViewMore */}
        <div className="md:hidden space-y-4">
          {data.slice(0, 4).map((item, index) => (
            <ServiceCard key={index} item={item} />
          ))}
          {hasMore && <ViewMore />}
        </div>

        {/* Desktop: only show 1 row based on breakpoint */}
        {/* 1st item always */}
        {data[0] && (
          <div className="hidden md:block">
            <ServiceCard item={data[0]} />
          </div>
        )}

        {/* 2nd on md+ */}
        {data[1] && (
          <div className="hidden md:block">
            <ServiceCard item={data[1]} />
          </div>
        )}

        {/* 3rd on xl+ */}
        {data[2] && (
          <div className="hidden xl:block">
            <ServiceCard item={data[2]} />
          </div>
        )}

        {/* 4th on 2xl+ */}
        {data[3] && (
          <div className="hidden 2xl:block">
            <ServiceCard item={data[3]} />
          </div>
        )}

        {/* ViewMore on md+ if more items */}
        {hasMore && (
          <div className="hidden md:block">
            <ViewMore />
          </div>
        )}

        {/* Show 5th item on 2xl+ only if not showing ViewMore */}
        {!hasMore && data[4] && (
          <div className="hidden 2xl:block">
            <ServiceCard item={data[4]} />
          </div>
        )}
      </div>
    </div>
  );
};

export default GameRow;
