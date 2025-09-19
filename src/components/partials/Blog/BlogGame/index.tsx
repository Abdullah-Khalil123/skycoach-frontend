import React from 'react';
import BlogCard from '../BlogCard';
import SmallLeftNav from '@/components/layouts/SmallLeftNav';
import BreadCrumbs from '@/components/custom/breadcrumb';
import { getArticles } from '@/actions/article';
import { Article } from '@/types/articles';

const BlogGame = async () => {
  const data = getArticles();
  const articles: Article[] = (await data).data.data || [];
  return (
    <div className="px-margin">
      <BreadCrumbs className="mb-4" />
      <h1 className="text-4xl md:text-5xl mb-6">Welcome to our blog</h1>
      <div className="flex items-start">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {articles.map((article, idx) => (
            <BlogCard key={idx} article={article} />
          ))}
        </div>
        <SmallLeftNav />
      </div>
    </div>
  );
};

export default BlogGame;
