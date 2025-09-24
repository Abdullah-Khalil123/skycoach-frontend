import { getGameCategories } from '@/actions/category';
import { Category } from '@/types/category';
import Link from 'next/link';
import React from 'react';

const SideNav = async ({ gameSlug }: { gameSlug: string }) => {
  const data = await getGameCategories(gameSlug);
  const categories: Category[] = data?.data?.categories || [];

  return (
    <div className="min-w-64 h-screen text-white p-4 hidden lg:block sticky top-0">
      <h3 className="text-sm mb-4 font-bold text-secondary-text">
        CALL OF DUTY
      </h3>
      <ul>
        {categories.map((category, index) => (
          <Link href={`/${gameSlug}/${category.slug}`} key={index}>
            <li
              key={index}
              className="px-2 cursor-pointer border-b border-secondary-foreground/70 py-2 hover:bg-secondary-foreground rounded"
            >
              {category.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SideNav;
