import React from 'react';
import BlogCard from './BlogCard';
import SmallBlogCard from './SmallBlogCard';
import AutoScrollRow from '@/components/custom/AutoScrollRow';
import DropDown from '@/components/custom/DropDown';
import { Search } from 'lucide-react';
import BreadCrumbs from '@/components/custom/breadcrumb';

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

const SmallLeftNav = () => {
  return (
    <div className="hidden ml-4 lg:flex flex-col bg-secondary rounded-2xl px-4 py-4 col-start-4 row-span-full">
      <div className="relative">
        <Search className="absolute top-1/2 -translate-y-1/2 left-2 " />
        <input
          type="text"
          className="block pl-10 w-60 bg-secondary-foreground rounded-lg h-fit px-4 py-3 placeholder-white"
          placeholder="Search by games"
        />
      </div>
      <ul className="mt-4">
        {Array.from({ length: 15 }).map((_, index) => (
          <li
            className="text-secondary-text hover:text-white py-2 cursor-pointer transition-colors duration-200"
            key={index}
          >
            Item {index}
          </li>
        ))}
      </ul>
    </div>
  );
};
