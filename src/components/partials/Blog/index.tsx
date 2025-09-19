import React from 'react';
import BlogCard from './BlogCard';
import SmallBlogCard from './SmallBlogCard';
import AutoScrollRow from '@/components/custom/AutoScrollRow';
import DropDown from '@/components/custom/DropDown';
import BreadCrumbs from '@/components/custom/breadcrumb';
import SmallLeftNav from '@/components/layouts/SmallLeftNav';
import { Article } from '@/types/articles';

const Blogs = ({ articles }: { articles: Article[] }) => {
  return (
    <div className="px-margin">
      <BreadCrumbs showBack={false} className="mb-4 pt-4" />

      <h1 className="text-4xl mb-4">Welcome to out Blog</h1>
      <p className="text-sm mb-4">THE MOST POPULAR ARTICLES</p>

      {/* Horizontal scroll with snap */}
      <AutoScrollRow interval={4000} className="mb-4">
        {articles
          .filter((article) => article.is_top === 1) // only top articles
          .slice(0, 8) // limit to 8
          .map((article) => (
            <SmallBlogCard key={article.id} article={article} />
          ))}
      </AutoScrollRow>

      <DropDown className="mb-4 xl:hidden" />

      {/* Vertical grid */}
      <div className="flex items-start">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {articles
            .filter((article) => article.is_top != 1) // exclude top articles
            .map((article) => (
              <BlogCard key={article.id} article={article} />
            ))}
        </div>
        <SmallLeftNav />
      </div>
    </div>
  );
};

export default Blogs;
