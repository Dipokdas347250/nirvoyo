"use client"
import React from 'react'
import { useState } from "react";
import Container from '../common/Container'
import Category from '@/data/category'
import { IoStar } from 'react-icons/io5'
import { RiShoppingBasket2Line } from 'react-icons/ri'
import Link from 'next/link'
import Image from 'next/image'
import { CiHeart } from 'react-icons/ci'
import { MdKeyboardArrowDown } from "react-icons/md";
import { Star } from "lucide-react";


const Product_category = () => {
    const [price, setPrice] = useState(1000);
    const [selected, setSelected] = useState(4);

  const ratings = [1, 2, 3, 4, 5];
    return (
        <>
            <section className='pt-10.75 pb-12.5 bg-[#fafafa]'>
                <Container>
                    <div className="flex items-start gap-x-13">
                        <div className="w-75 bg-white">
                            <div className=" py-6.25 px-4 border-b border-[#F4F4F4] ">
                                <h3 className='text-[18px] text-[#3D3D3F] font-medium font-poppins'>Related Categories</h3>
                                <div className="">
                                    {Category?.fashion?.map((item) => (
                                        <div key={item.id} className="">
                                            <h3 className='text-[16px] text-[#757575] font-normal font-poppins mb-2 mt-1 '>{item.man}</h3>
                                            <ul className='ml-2 space-x-2'>
                                                <li className='text-[16px] text-[#757575] font-normal font-poppins duration-300 ease-in-out hover:text-tertiary cursor-pointer'>{item.name}</li>
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="py-6.25 px-4 border-b border-[#F4F4F4]">
                                <div className="flex justify-between items-center">
                                    <h3 className='text-[18px] text-[#383838] font-medium font-poppins'>Filter by Price</h3>
                                    <MdKeyboardArrowDown size={20} />
                                </div>
                                <div className="w-full mt-5  ">


                                    <input
                                        type="range"
                                        min="0"
                                        max="2500"
                                        step="50"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                        className="w-full h-6 cursor-pointer"
                                    />

                                    <h2 className="text-[18px] text-[#A7A7A7]  font-normal font-poppins ">
                                        Price: <span className='text-[#383838]'>${price} - $2500</span>
                                    </h2>


                                </div>
                            </div>
                            <div className="py-6.25 px-4 border-b border-[#F4F4F4]">
                                <div className="flex justify-between items-center">
                                    <h3 className='text-[18px] text-[#383838] font-medium font-poppins'>Filter by Rating</h3>
                                    <MdKeyboardArrowDown size={20} />
                                </div>
                               <div className="mt-8 flex flex-col gap-y-4">
                                 {ratings.map((rating) => (
                                        <label
                                            key={rating}
                                            className="flex items-center gap-3 cursor-pointer"
                                        >
                                            <input
                                                type="checkbox"
                                                checked={selected === rating}
                                                onChange={() => setSelected(rating)}
                                                className="w-5 h-5 accent-sky-500"
                                            />

                                            <div className="flex items-center gap-1">
                                                {[...Array(rating)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        size={22}
                                                        fill="#F59E0B"
                                                        color="#F59E0B"
                                                    />
                                                ))}
                                            </div>
                                        </label>
                                    ))}
                               </div>

                            </div>
                        </div>
                        <div className="">
                            <div className="flex justify-between items-center">
                                <h3 className='text-[18px] text-[#424241]/50 font-medium font-poppins'>Showing  <span className='text-[#424241]'>20</span> of <span className='text-[#424241]'>160</span> product</h3>
                                <div className="flex ">
                                    <h3 className='text-[18px] text-[#424241]/50 font-normal font-poppins'>Sort by:</h3>
                                    <select className='text-[18px] text-[#424241] font-normal font-poppins' name="" id="">
                                        <option value=" Newest Items"> Newest Items</option>
                                        <option value=" Newest Items"> Newest Items</option>
                                        <option value=" Newest Items"> Newest Items</option>
                                    </select>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 mt-5.5">
                                {Category?.products?.map((item) => (
                                    <Link key={item.id} href="/addToCart">
                                        <div key={item.id} className="p-2.25 border border-[#E0E0E0] shadow-md rounded-md cursor-pointer">
                                            <div className=" relative">
                                                <Image className="w-full" src={item.image} alt={item.name} />
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
                                            <p className='text-[18px] font-medium font-poppins  text-secondary mt-2.5 '>{item.name}</p>
                                            <div className="flex justify-between items-center mt-2.5">
                                                <h4 className='text-[22px] font-medium font-poppins  text-primary'>৳{item.price}</h4>
                                                <RiShoppingBasket2Line size={20} className='text-primary' />

                                            </div>

                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Product_category