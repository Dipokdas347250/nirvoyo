import React from 'react'
import Container from './Container'
import Image from 'next/image'
import fooeter from "../../../public/images/footer.png"
import face from "../../../public/images/face.svg"
import Tw from "../../../public/images/Tw.svg"
import Ld from "../../../public/images/Ld.svg"
import ins from "../../../public/images/ins.svg"

const Footer = () => {
  return (
    <>
    <footer className='pt-12 pb-12 border-b border-[#E0E0E0]'>
        <Container>
            <div className="">
                <div className="w-[40%]">
                    <Image className="mb-4" src={fooeter} alt="logo" width={150} height={50} />
                    <p className="text-[18px] font-normal font-poppins text-[#757575]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="flex items-center gap-x-4 mt-4">
                        <Image className="" src={face} alt="logo" width={40} height={40} />
                        <Image className="" src={Tw} alt="logo" width={40} height={40} />
                        <Image className="" src={Ld} alt="logo" width={40} height={40} />
                        <Image className="" src={ins} alt="logo" width={40} height={40} />
                    </div>
                </div>
                <div className="w-[60%]"></div>
            </div>
        </Container>
    </footer>
    </>
  )
}

export default Footer