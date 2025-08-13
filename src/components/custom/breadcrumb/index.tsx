'use client';
import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const BreadCrumbs = ({
  showBack = true,
  className,
}: {
  showBack?: boolean;
  className?: string;
}) => {
  const router = useRouter();
  const pathname = usePathname();

  // Split path into segments, remove empty ones
  const segments = pathname
    .split('/')
    .filter(Boolean) // remove empty from leading slash
    .filter((seg) => seg.toLocaleLowerCase() !== 'product')
    .map((seg) =>
      seg
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    );

  const handleBack = () => {
    router.back();
  };

  return (
    <div className={cn('flex items-center text-xs', className)}>
      {/* Back Button */}
      {showBack && (
        <button
          onClick={handleBack}
          className="flex items-center gap-1 text-xs bg-secondary px-2 py-2 pr-3 rounded-lg"
        >
          <ChevronLeft size={20} className="-translate-y-px" />
          {segments[segments.length - 1] || 'Back'}
        </button>
      )}

      {/* Breadcrumb Path */}
      <div className={cn('text-xxs hidden md:block', showBack ? 'ml-4' : '')}>
        <Link href="/">SkyCoach</Link>
        {segments.map((label, index) => {
          const href =
            '/' +
            pathname
              .split('/')
              .filter(Boolean)
              .slice(0, index + 1)
              .join('/');
          const isLast = index === segments.length - 1;
          return (
            <span key={index}>
              {' / '}
              {isLast ? (
                <span className="text-secondary-text">{label}</span>
              ) : (
                <Link href={href}>{label}</Link>
              )}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default BreadCrumbs;
