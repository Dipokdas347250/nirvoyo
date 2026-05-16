"use client";

import React from "react";
import Container from "./Container";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper CSS
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

const categories = [
  "Women's Fashion",
  "Men's Fashion",
  "Kid's Fashion",
  "Home & Lifestyle",
  "Arts & Crafts",
  "Computer & Electronics",
  "Food & Grocery",
  "Beauty & Health",
  "Sports & Outdoor",
];

const Category_Item_menu = () => {
  return (
    <nav className="pb-1 border-b border-[#E0E0E0] bg-[#fafafa] block lg:hidden">
      <Container>
        <div className="px-4">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
            breakpoints={{
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5,
              },
              1280: {
                slidesPerView: 6,
              },
            }}
          >
            {categories.map((item, index) => (
              <SwiperSlide key={index}>
              <ul className="grid grid-cols-1 text-center ">
                  <li className="list-none text-sm font-medium text-gray-700 hover:text-black cursor-pointer whitespace-nowrap">
                  {item}
                </li>
              </ul>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </nav>
  );
};

export default Category_Item_menu;