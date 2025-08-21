"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default function HeroBanner() {
  return (
    <section className="w-full relative">
      {/* Swiper Slider */}
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="w-full h-svh"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="w-full md:h-[90vh] h-[70vh] 2xl:h-[85vh] bg-cover bg-center flex items-center justify-center text-white"
            style={{ backgroundImage: "url('/slide1.jpg')" }}>
            <div className="bg-black/50 p-6 rounded-xl text-center">
              <h1 className="text-4xl font-bold">Discover Amazing Restaurants</h1>
              <p className="mt-3 text-lg">Find and book the best places to eat with eReJa</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="w-full md:h-[90vh] h-[70vh] 2xl:h-[85vh] bg-cover bg-center flex items-center justify-center text-white"
            style={{ backgroundImage: "url('/slide2.jpg')" }}>
            <div className="bg-black/50 p-6 rounded-xl text-center">
              <h1 className="text-4xl font-bold">Taste Authentic Flavors</h1>
              <p className="mt-3 text-lg">From local favorites to global cuisines</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        {/* <SwiperSlide>
          <div className="w-full h-[500px] bg-cover bg-center flex items-center justify-center text-white"
            style={{ backgroundImage: "url('/images/slide3.jpg')" }}>
            <div className="bg-black/50 p-6 rounded-xl text-center">
              <h1 className="text-4xl font-bold">Book Instantly</h1>
              <p className="mt-3 text-lg">Reserve your table in just a few clicks</p>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </section>
  );
}
