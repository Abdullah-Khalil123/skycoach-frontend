import Article from '@/components/partials/Article';
import React from 'react';

const ArticalPage = () => {
  return (
    <div className="relative">
      <div className="absolute h-20 top-0 bg-gradient-to-b from-white/10 to-transparent z-20 w-full" />
      <Article />
    </div>
  );
};

export default ArticalPage;
