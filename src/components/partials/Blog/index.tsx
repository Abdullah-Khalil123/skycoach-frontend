import React from 'react';
import BlogCard from './BlogCard';
import SmallBlogCard from './SmallBlogCard';
import AutoScrollRow from '@/components/custom/AutoScrollRow';

const Blogs = () => {
  return (
    <div className="px-margin">
      {/* Horizontal scroll with snap */}
      <AutoScrollRow interval={4000} className="mb-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <SmallBlogCard key={index} />
        ))}
      </AutoScrollRow>

      {/* Vertical grid */}
      <div className="grid grid-cols-1 gap-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <BlogCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
