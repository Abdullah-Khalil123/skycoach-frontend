import React from 'react';
import BlogCard from './BlogCard';
import SmallBlogCard from './SmallBlogCard';
import AutoScrollRow from '@/components/custom/AutoScrollRow';
import DropDown from '@/components/custom/DropDown';
import BreadCrumbs from '@/components/custom/breadcrumb';
import SmallLeftNav from '@/components/layouts/SmallLeftNav';

const Blogs = () => {
  return (
    <div className="px-margin">
      <BreadCrumbs showBack={false} className="mb-4 pt-4" />

      <h1 className="text-4xl mb-4">Welcome to out Blog</h1>
      <p className="text-sm mb-4">THE MOST POPULAR ARTICLES</p>

      {/* Horizontal scroll with snap */}
      <AutoScrollRow interval={4000} className="mb-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <SmallBlogCard key={index} />
        ))}
      </AutoScrollRow>

      <DropDown className="mb-4 xl:hidden" />

      {/* Vertical grid */}
      <div className="flex items-start">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <BlogCard key={index} />
          ))}
        </div>
        {/*  */}
        <SmallLeftNav />
      </div>
    </div>
  );
};

export default Blogs;
