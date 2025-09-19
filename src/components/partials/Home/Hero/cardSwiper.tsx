'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { Banner } from '@/types/banner';
// import Image from 'next/image';
import Link from 'next/link';

const CardSwiper = ({ banners }: { banners: Banner[] }) => {
  return (
    <div className="rounded-4xl overflow-hidden">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="relative h-64 lg:h-86 w-full">
              {/* Background image */}
              {/* <Image
                src={banner.image}
                alt={banner.name}
                fill
                className="object-cover"
              /> */}
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white p-4">
                <h3 className="text-2xl font-bold mb-2">{banner.name}</h3>
                {banner.description && (
                  <p className="text-sm text-center mb-4">
                    {banner.description}
                  </p>
                )}
                {banner.link && (
                  <Link
                    href={banner.link}
                    className="px-4 py-2 bg-primary rounded-lg text-sm font-medium hover:opacity-80 transition"
                  >
                    Learn More
                  </Link>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSwiper;
