import React from 'react'
import Container from './Container'
import Image from 'next/image'
import fooeter from "../../../public/images/footer.png"
import face from "../../../public/images/face.svg"
import Tw from "../../../public/images/Tw.svg"
import Ld from "../../../public/images/Ld.svg"
import ins from "../../../public/images/ins.svg"
import con00 from "../../../public/images/con00.svg"
import Category from '@/data/category'

const Footer = () => {
  return (
    <>
    <footer className='pt-12 pb-12 border-b border-[#E0E0E0]'>
        <Container>
            <div className="flex items-start gap-x-25">
                <div className="w-[35%]">
                    <Image className="mb-9" src={fooeter} alt="logo" width={150} height={50} />
                    <p className="text-[18px] font-normal font-poppins text-[#757575]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="flex items-center gap-x-5 mt-6.5">
                        <Image className=" cursor-pointer" src={face} alt="logo" width={40} height={40} />
                        <Image className=" cursor-pointer" src={Tw} alt="logo" width={40} height={40} />
                        <Image className=" cursor-pointer" src={Ld} alt="logo" width={40} height={40} />
                        <Image className=" cursor-pointer" src={ins} alt="logo" width={40} height={40} />
                    </div>
                </div>
                <div className="w-[65%]">
                   <div className="flex justify-between">
                     <div className="w-30.5">
                        <h3 className="text-[20px] text-secondary font-medium font-poppins uppercase mb-7.5">QUICK LINKS</h3>
                        <ul className='flex flex-col gap-y-4 '>
                            {Category?.quickLinks?.map((link) => (
                                <li key={link.id} className="text-[18px] font-normal font-poppins text-[#757575]  cursor-pointer">{link.name}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-42">
                        <h3 className="text-[20px] text-secondary font-medium font-poppins uppercase mb-7.5">CUSTOMER AREA</h3>
                        <ul className='flex flex-col gap-y-4 '>
                            {Category?.customerData?.map((link) => (
                                <li key={link.id} className="text-[18px] font-normal font-poppins text-[#757575]  cursor-pointer">{link.name}</li>
                            ))}
                        </ul>
                    </div>
                    
                    <div className="w-82.5">
                         <h3 className="text-[20px] text-secondary font-medium font-poppins uppercase mb-7.5">CONTACT</h3>
                         <p className="text-[16px] font-normal font-poppins text-[#757575]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                         <div className="flex items-center gap-x-6.25 mt-8">
                            <Image className=" cursor-pointer" src={con00} alt="logo" width={50} height={50} />
                            <div className="">
                                <h4 className='text-[18px] text-secondary font-normal font-poppins'>Have any question?</h4>
                                <h3 className='text-[28px] text-tertiary font-semibold font-poppins'>099 456 789</h3>
                            </div>
                         </div>
                    </div>
                   </div>
                </div>
            </div>
        </Container>
    </footer>
    </>
  )
}

export default Footer