import React from 'react'
import Container from './Container'
import Image from 'next/image'
import logo from "../../../public/images/logo.png"
import { IoSearch } from "react-icons/io5";
import { CiUser,CiHeart  } from "react-icons/ci";
import { RiShoppingBasket2Line } from "react-icons/ri";
import Link from 'next/link';




const Header_menu  = () => {
  return (
   <>
   <header className='py-8 px-2 bg-[#fafafa] lg:hidden block' >
    <Container>
        <div className="flex justify-between items-center gap-17.5">
            <div className="">
                <Link href={"/"} >
                
                <Image src={logo} alt="logo" width={120} height={50}/>
                </Link>
            </div>
            
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.75 cursor-pointer">
                    <CiUser size={24} className='text-[#9B9B9B]' />
                  
                </div>
                <div className="flex items-center gap-1.75 cursor-pointer">
                    <CiHeart size={24} className='text-[#9B9B9B]' />
                    
                </div>
                <div className="flex items-center gap-1.75 cursor-pointer">
                    <RiShoppingBasket2Line size={24} className='text-[#9B9B9B]' />
                  
                </div>
            </div>
        </div>
        <div className=" mt-2.5">
                <div className="flex items-center gap-2 bg-[#F1F1F1] rounded-md  pl-3 ">
                    <input type="text" placeholder='I m looking for...' className='w-full  outline-none border-none text-[16px] font-poppins font-normal text-[#9B9B9B]  '/>
                    <button className='py-3 px-4.5 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 transition-colors duration-300 cursor-pointer '>
                        <IoSearch size={20}/>
                    </button>

                </div>
            </div>
    </Container>
   </header>
   </>
  )
}

export default Header_menu