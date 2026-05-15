import React from 'react'
import Container from '../common/Container'
import Category from '@/data/category'
import { IoStar } from 'react-icons/io5'
import { RiShoppingBasket2Line } from 'react-icons/ri'
import Link from 'next/link'
import Image from 'next/image'
import { CiHeart } from 'react-icons/ci'

const Product_category = () => {
    return (
        <>
            <section className='pt-10.75 pb-12.5 bg-[#fafafa]'>
                <Container>
                    <div className="flex items-start gap-x-13">
                        <div className="w-75 bg-white py-6.25 px-4 ">
                        <h3 className='text-[18px] text-[#3D3D3F] font-medium font-poppins'>Related Categories</h3>
                        <div className="">
                            {Category?.fashion?.map((item)=>(
                                <div key={item.id} className="">
                                    <h3 className='text-[16px] text-[#757575] font-normal font-poppins mb-2 '>{item.man}</h3>
                                    <ul className='ml-2 space-x-2'>
                                        <li className='text-[16px] text-[#757575] font-normal font-poppins duration-300 ease-in-out hover:text-tertiary cursor-pointer'>{item.name}</li>
                                    </ul>
                                </div>
                            ))}
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