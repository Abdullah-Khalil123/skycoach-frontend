'use client';

import React, { useEffect, useRef, ReactNode } from 'react';

interface AutoScrollRowProps {
  children: ReactNode;
  interval?: number;
  className?: string;
}

const AutoScrollRow: React.FC<AutoScrollRowProps> = ({
  children,
  interval = 2500,
  className = '',
}) => {
  const scrollRef = useRef<HTMLDivElement>(null); // ✅ typed ref

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const firstChild = container.firstElementChild as HTMLElement | null; // ✅ typed child
    const cardWidth = firstChild?.offsetWidth || 200;

    const timer = setInterval(() => {
      scrollAmount += cardWidth;

      if (scrollAmount >= container.scrollWidth - container.clientWidth) {
        scrollAmount = 0;
      }

      container.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }, interval);

    return () => clearInterval(timer);
  }, [interval]);

  return (
    <div
      ref={scrollRef}
      className={`flex gap-4 w-full overflow-x-auto snap-x snap-mandatory scroll-smooth ${className}`}
    >
      {React.Children.map(children, (child, i) => (
        <div key={i} className="snap-start shrink-0">
          {child}
        </div>
      ))}
    </div>
  );
};

export default AutoScrollRow;
