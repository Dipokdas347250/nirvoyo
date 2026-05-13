import React from 'react'
import Container from './Container'
import Category from '@/data/category'
import Image from 'next/image';

const Shipping = () => {
  return (
    <>
    <section className='pt-13 pb-12.5 border-b border-[#E0E0E0]'>
        <Container>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
                {Category?.Shipping?.map((item)=>(
                    <div key={item.id} className="flex items-center gap-x-4.5">
                        <Image className="" src={item.icon} alt={item.name} />
                        <div className="">
                            <h3 className="text-[20px] text-secondary font-medium font-poppins uppercase">{item.name}</h3>
                        <p className="text-[16px] font-normal font-poppins text-[#757575]">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    </section>
    </>
  )
}

export default Shipping