import React from 'react'
import Container from '../common/Container'
import { IoArrowForwardSharp } from "react-icons/io5";
import Image from 'next/image';
import image from "../../../public/images/image.png"
import { IoStar } from "react-icons/io5";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { CiHeart  } from "react-icons/ci";
import Link from 'next/link';




const Flash = () => {
  return (
    <>
    <section className='pb-12.5 bg-[#fafafa]'>
        <Container>
            <div className="">
                <div className="flex justify-between items-center ">
                    <h3 className='text-[26px] font-medium font-poppins  text-secondary '>Flash Deals</h3>
                    <div className="flex items-center gap-x-2 cursor-pointer">
                        <h3 className='text-[16px] font-medium font-poppins  text-[#757575] '>View more</h3>
                        <IoArrowForwardSharp className='text-[#757575] ' />

                    </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-6 mt-4 ">
                      <Link href="/addToCart">
                      
                    <div className="p-2.25 border border-[#E0E0E0] shadow-md rounded-md cursor-pointer">
                        <div className=" relative">
                            <Image className="" src={image} alt="Flash Deals" />
                            <div className="absolute top-0 left-0 bg-linear-65 from-[#FF7A00] to-[#FFB800] text-white text-[14px] font-medium font-poppins  px-3 py-1 rounded-tl-md">
                                -25% OFF
                            </div>
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
                        <p className='text-[18px] font-medium font-poppins  text-secondary mt-2.5 '>Headrest Executive Mesh Office Chair set</p>
                        <div className="flex justify-between items-center mt-2.5">
                        <h4 className='text-[22px] font-medium font-poppins  text-primary'>৳10500</h4>
                        <RiShoppingBasket2Line size={20} className='text-primary' />

                        </div>

                    </div>
                    </Link>
                      <Link href="/addToCart">
                    <div className="p-2.25 border border-[#E0E0E0] shadow-md rounded-md cursor-pointer">
                        <div className=" relative">
                            <Image className="" src={image} alt="Flash Deals" />
                            <div className="absolute top-0 left-0 bg-linear-65 from-[#FF7A00] to-[#FFB800] text-white text-[14px] font-medium font-poppins  px-3 py-1 rounded-tl-md">
                                -25% OFF
                            </div>
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
                        <p className='text-[18px] font-medium font-poppins  text-secondary mt-2.5 '>Women black dress and red hat collections</p>
                        <div className="flex justify-between items-center mt-2.5">
                        <h4 className='text-[22px] font-medium font-poppins  text-primary'>৳1000</h4>
                        <RiShoppingBasket2Line size={20} className='text-primary' />

                        </div>

                    </div>
                    </Link>
                      <Link href="/addToCart">
                    <div className="p-2.25 border border-[#E0E0E0] shadow-md rounded-md cursor-pointer">
                        <div className=" relative">
                            <Image className="" src={image} alt="Flash Deals" />
                            <div className="absolute top-0 left-0 bg-linear-65 from-[#FF7A00] to-[#FFB800] text-white text-[14px] font-medium font-poppins  px-3 py-1 rounded-tl-md">
                                -25% OFF
                            </div>
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
                        <p className='text-[18px] font-medium font-poppins  text-secondary mt-2.5 '>Headrest Executive Mesh Office Chair set</p>
                        <div className="flex justify-between items-center mt-2.5">
                        <h4 className='text-[22px] font-medium font-poppins  text-primary'>৳5000</h4>
                        <RiShoppingBasket2Line size={20} className='text-primary' />

                        </div>

                    </div>
                    </Link>
                      <Link href="/addToCart">
                    <div className="p-2.25 border border-[#E0E0E0] shadow-md rounded-md cursor-pointer">
                        <div className=" relative">
                            <Image className="" src={image} alt="Flash Deals" />
                            <div className="absolute top-0 left-0 bg-linear-65 from-[#FF7A00] to-[#FFB800] text-white text-[14px] font-medium font-poppins  px-3 py-1 rounded-tl-md">
                                -25% OFF
                            </div>
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
                        <p className='text-[18px] font-medium font-poppins  text-secondary mt-2.5 '>Women black dress and red hat collections</p>
                        <div className="flex justify-between items-center mt-2.5">
                        <h4 className='text-[22px] font-medium font-poppins  text-primary'>৳1000.00</h4>
                        <RiShoppingBasket2Line size={20} className='text-primary' />

                        </div>

                    </div>
                    </Link>
                </div>
            </div>
        </Container>
    </section>
    </>
  )
}

export default Flash