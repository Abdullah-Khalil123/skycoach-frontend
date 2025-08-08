'use client';
import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

const BreadCrumbs = () => {
  const router = useRouter();

  const params = useParams();
  const slug = (params.slug as string)
    .split('-')
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
  const sub = decodeURIComponent(params.sub as string);

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="flex items-center text-xs mb-4">
      <button
        onClick={handleBack}
        className="flex items-center gap-1 text-xs bg-secondary/30 px-2 py-1 pr-3 rounded"
      >
        <ChevronLeft size={20} className="-translate-y-px" />
        Call of Duty
      </button>
      <div className="text-xxs ml-4">
        Skycoach / {slug} / <span className="text-secondary-text">{sub}</span>
      </div>
    </div>
  );
};

export default BreadCrumbs;
