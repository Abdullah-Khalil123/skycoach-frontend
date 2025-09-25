'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ReviewCard from './reviewCard';
import SwiperCore from 'swiper';
import { getReviews } from '@/actions/review';
import { Review } from '@/types/review';

const breakpoints = {
  0: {
    slidesPerView: 1,
  },
  768: {
    slidesPerView: 2,
  },
  1024: {
    slidesPerView: 3,
  },
  1280: {
    slidesPerView: 4,
  },
};

const ReviewSection = () => {
  const swiperRef = useRef<SwiperCore | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const reviewData = await getReviews({ limit: '10' });
      setReviews(reviewData.data || []);
    };
    fetchReviews();
  }, []);

  return (
    <section className="mt-8 md:bg-secondary rounded-4xl md:p-8">
      {/* Header with Navigation */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-3xl tracking-tight">
          What our customers are saying
        </h2>
        <div className="flex gap-6">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="cursor-pointer"
          >
            <ChevronLeft size={30} />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="cursor-pointer"
          >
            <ChevronRight size={30} />
          </button>
        </div>
      </div>

      {/* Swiper */}
      <div className="rounded-xl overflow-hidden">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={2}
          spaceBetween={20}
          pagination={{
            el: '.custom-pagination',
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={breakpoints}
        >
          {reviews.map((review, idx) => (
            <SwiperSlide key={idx}>
              <ReviewCard review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* External Pagination Dots */}
      <div className="custom-pagination mt-6 text-center" />
    </section>
  );
};

export default ReviewSection;
