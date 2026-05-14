import React from 'react'
import Container from '../common/Container'
import { IoIosArrowForward } from "react-icons/io";
import cate01 from "../../../public/images/cate01.png"
import cate02 from "../../../public/images/cate02.png"
import cate03 from "../../../public/images/cate03.png"
import cate04 from "../../../public/images/cate04.png"
import link from "../../../public/images/link.svg"
import x00 from "../../../public/images/x00.svg"
import facebook from "../../../public/images/facebook.svg"
import what from "../../../public/images/what.svg"
import copy00 from "../../../public/images/copy00.svg"
import mark from "../../../public/images/mark.svg"
import Image from 'next/image';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { MdOutlineStar } from "react-icons/md";
import { IoMdHeart } from "react-icons/io";





const Category_Cart = () => {
    return (
        <>
            <section className='pt-13 pb-21 bg-[#fafafa]'>
                <Container>
                    <div className="flex items-center gap-x-2 mt-6">
                        <h3 className='flex items-center gap-x-2 text-[16px] font-normal font-poppins text-[#02344F] '>Home <span><IoIosArrowForward /></span> Men’s fashion <span><IoIosArrowForward /></span> <span className='text-[#757575]'>Men's Stand Collar Leather Jacket</span> </h3>
                    </div>
                    <div className="flex items-start gap-x-27">
                        <div className="w-1/2">
                            <div className="flex items-start gap-x-10 mt-6">
                                <div className="pt-8 px-4 bg-[#F2F2F2]">
                                    <Image src={cate01} alt="logo" width={500} height={500} />
                                </div>
                                <div className="flex flex-col gap-y-2 items-center">
                                    <IoIosArrowUp className='mb-6' size={20} />
                                    <Image className='bg-[#F2F2F2]' src={cate01} alt="logo" width={92} height={92} />
                                    <Image className='bg-[#F2F2F2]' src={cate02} alt="logo" width={92} height={92} />
                                    <Image className='bg-[#F2F2F2]' src={cate03} alt="logo" width={92} height={92} />
                                    <Image className='bg-[#F2F2F2]' src={cate04} alt="logo" width={92} height={92} />
                                    <IoIosArrowDown className='mt-6' size={20} />
                                </div>
                            </div>
                            <div className="flex items-center gap-x-4 mt-11.25">
                                <h3 className='text-[20px] font-normal font-poppins text-primary'>Share</h3>
                                <div className="flex gap-x-3.5 ">
                                    <Image className=' cursor-pointer' src={link} alt="logo" width={44} height={44} />
                                    <Image className=' cursor-pointer' src={x00} alt="logo" width={44} height={44} />
                                    <Image className=' cursor-pointer' src={facebook} alt="logo" width={44} height={44} />
                                    <Image className=' cursor-pointer' src={what} alt="logo" width={44} height={44} />
                                    <Image className=' cursor-pointer' src={copy00} alt="logo" width={44} height={44} />
                                </div>

                            </div>
                        </div>
                        <div className="w-1/2">
                            <h3 className='text-[26px] font-medium font-poppins text-secondary'>Super Skinny Rib Trouser & Joggers for Men By Sowdagar Trouser</h3>
                            <div className="flex gap-x-4 mt-6">
                                <div className="flex items-center gap-x-1">
                                    <h4 className='text-[18px] text-secondary font-poppins font-medium'>4.0</h4>

                                    <div className="flex items-center gap-x-1 text-[#FFB800] text-[20px]">
                                        <MdOutlineStar />
                                        <MdOutlineStar />
                                        <MdOutlineStar />
                                        <MdOutlineStar />
                                        <MdOutlineStar />
                                    </div>
                                    <span className='text-[18px] text-[#BABABA] font-poppins font-normal'>(223)</span>
                                </div>
                                <div className="flex items-center gap-x-3 px-4.25 border-l border-r border-[#E0E0E0]">
                                    <Image className='' src={mark} alt="logo" width={21} height={15} />
                                    <h3 className='text-[18px] text-secondary font-poppins font-normal'><span className='font-bold'>4,320 </span>Sold</h3>

                                </div>
                                <div className="flex items-center gap-x-2 cursor-pointer">
                                    <IoMdHeart size={25} className='text-[#C7C7C7]' />
                                    <h3 className='text-[18px] text-tertiary font-poppins font-bold'>Add to wishlist</h3>
                                </div>
                            </div>
                            <div className="flex items-center gap-x-4.25 mt-8">
                                <h3 className='text-[36px] text-tertiary font-semibold font-poppins '>$976.33</h3>
                                <h4 className='text-[20px] text-[#8D8D8D] font-poppins font-normal ml-2'><del>$1,020.99</del></h4>
                                  <div className=" bg-linear-65 from-[#FF7A00] to-[#FFB800] text-white text-[14px] font-semibold font-poppins  px-3 py-1 rounded-sm">
                                20%
                            </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Category_Cart