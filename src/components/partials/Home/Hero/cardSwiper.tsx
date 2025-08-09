'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const CardSwiper = () => {
  return (
    <div className="rounded-4xl overflow-hidden">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {[1, 2, 3].map((num) => (
          <SwiperSlide key={num}>
            <div className="bg-gray-500 p-6 rounded-xl shadow-md h-64 lg:h-86 flex items-center justify-center text-xl font-semibold">
              Card {num}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSwiper;
