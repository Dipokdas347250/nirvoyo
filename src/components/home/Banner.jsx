'use client'
import React from 'react'
import Container from '../common/Container'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import hero from "../../../public/images/hero.png"
import hero01 from "../../../public/images/hero01.png"
import hero02 from "../../../public/images/hero02.png"

const Banner = () => {
    return (
        <>
            <section className='pt-3.25 pb-12.5 bg-[#fafafa]'>

                <Container>
                    <div className="flex justify-between items-center gap-4">
                        <div className="w-231.25 cursor-pointer">
                            <Swiper
                                pagination={{
                                    dynamicBullets: true,

                                }}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                modules={[Pagination, Autoplay]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <Image className="" src={hero} alt="Hero" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image className="" src={hero} alt="Hero" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image className="" src={hero} alt="Hero" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image className="" src={hero} alt="Hero" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image className="" src={hero} alt="Hero" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image className="" src={hero} alt="Hero" />
                                </SwiperSlide>

                            </Swiper>
                        </div>
                        <div className=" flex flex-col gap-y-7">
                            <Image className="w-full h-full object-cover" src={hero01} alt="Hero" />
                            <Image className="w-full h-full object-cover" src={hero02} alt="Hero" />
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Banner