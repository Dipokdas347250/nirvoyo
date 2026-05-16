import React from 'react'
import Container from '../common/Container'
import { IoArrowForwardSharp, IoStar } from 'react-icons/io5'
import Image from 'next/image';
import Category from '@/data/category'
import { RiShoppingBasket2Line } from 'react-icons/ri';
import { CiHeart } from 'react-icons/ci';
import { MdKeyboardArrowDown } from "react-icons/md";
import Link from 'next/link';


const Featured_Product = () => {
  return (
    <>
      <section className='pb-12.5 bg-[#fafafa]'>
        <Container>
          <div className="">
            <div className="flex justify-between items-center ">
              <h3 className='text-[26px] font-medium font-poppins  text-secondary '>Featured Product</h3>
              <div className="flex items-center gap-x-2 cursor-pointer">
                <h3 className='text-[16px] font-medium font-poppins  text-[#757575] '>View more</h3>
                <IoArrowForwardSharp className='text-[#757575] ' />

              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 lg:gap-6 gap-1 mt-4">
              {Category?.products?.map((item) => (
                  <Link key={item.id} href="/addToCart">
                <div key={item.id} className="p-2.25 border border-[#E0E0E0] shadow-md rounded-md cursor-pointer">
                  <div className=" relative">
                    <Image className="" src={item.image} alt={item.name} />
                    <CiHeart className='absolute top-2.25 right-2.25 text-[#757575] cursor-pointer' size={20} />

                  </div>
                  <div className="flex items-center gap-x-1 mt-2">
                    <IoStar className='text-[#FAC96B]' />
                    <IoStar className='text-[#FAC96B]' />
                    <IoStar className='text-[#FAC96B]' />
                    <IoStar className='text-[#FAC96B]' />
                    <IoStar className='text-[#FAC96B]' />
                    <span className='text-[14px] font-medium font-poppins  text-[#757575] '>(0)</span>
                  </div>
                  <p className='lg:text-[18px] text-[14px] font-medium font-poppins  text-secondary mt-2.5 '>{item.name}</p>
                  <div className="flex justify-between items-center mt-2.5">
                    <h4 className='text-[22px] font-medium font-poppins  text-primary'>৳{item.price}</h4>
                    <RiShoppingBasket2Line size={20} className='text-primary' />

                  </div>

                </div>
                </Link>
              ))}
            </div>
            <div className="">
              <button className='bg-tertiary font-medium font-poppins text-white py-2.5 px-6.5 rounded-full hover:bg-secondary transition-colors duration-300 mt-10 flex items-center gap-x-2 mx-auto cursor-pointer'>
                Show more <MdKeyboardArrowDown size={20} className='' />
              </button>
            </div>
          </div>
        </Container>
      </section>
    </ >
  )
}

export default Featured_Product