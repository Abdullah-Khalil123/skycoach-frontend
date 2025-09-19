import { getArticles } from '@/actions/article';
import Blogs from '@/components/partials/Blog';
import { Article } from '@/types/articles';
import React from 'react';

const BlogPage = async () => {
  const data = await getArticles();
  const articles: Article[] = data.data.data || [];
  return (
    <div className="relative">
      <div className="absolute h-20 top-0 bg-gradient-to-b from-white/10 to-transparent z-20 w-full" />
      <Blogs articles={articles} />
    </div>
  );
};

export default BlogPage;
