'use client';

import React, { ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

interface AutoScrollRowProps {
  children: ReactNode;
  interval?: number;
  className?: string;
  slidesPerView?: number | 'auto';
  spaceBetween?: number;
}

const AutoScrollRow: React.FC<AutoScrollRowProps> = ({
  children,
  interval = 2500,
  className = '',
  slidesPerView = 'auto',
}) => {
  const items = React.Children.toArray(children);

  return (
    <Swiper
      className={className}
      slidesPerView={slidesPerView}
      loop
      autoplay={{
        delay: interval,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
    >
      {items.map((child, index) => (
        <SwiperSlide key={index} style={{ width: 'auto' }}>
          {child}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default AutoScrollRow;
