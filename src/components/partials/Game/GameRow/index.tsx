import ServiceCard from '@/components/custom/ServiceCard';
import React from 'react';
import ViewMore from './viewMore';

const GameRow = ({ data, title }: { data: any[]; title: string }) => {
  const hasMore = data.length > 5;
  if (hasMore) {
    data = data.slice(0, 4); // Limit to first 4 items
  }
  return (
    <div className="mb-8">
      <h2 className="font-semibold text-2xl my-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-4">
        {data.slice(0, 4).map((item, index) => (
          <ServiceCard key={index} item={item} />
        ))}
        {hasMore && <ViewMore />}
      </div>
    </div>
  );
};

export default GameRow;
