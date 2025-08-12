import Blogs from '@/components/partials/Blog';
import React from 'react';

const BlogPage = () => {
  return (
    <div className="relative">
      <div className="absolute h-20 top-0 bg-gradient-to-b from-white/10 to-transparent z-20 w-full" />
      <Blogs />
    </div>
  );
};

export default BlogPage;
