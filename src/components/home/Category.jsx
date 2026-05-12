import React from 'react'
import Container from '../common/Container'
import Category from '@/data/category'
import Image from 'next/image'
import { IoIosArrowForward } from "react-icons/io";


const Category0 = () => {
  return (
    <>
    <section className='pb-12.5'>
        <Container>
            <div className="">
                <h2 className="text-[26px] font-medium font-poppins  text-secondary mb-8">Category</h2>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4 ">
                    {Category.categories.map((item) => (
                        <li key={item.id} className="flex justify-between items-center gap-y-2 cursor-pointer shadow-md p-4 rounded-md">
                            <div className="flex items-center gap-x-3">
                                <Image src={item.icon} alt={item.name} className="w-7.5 h-7.5" />
                            <span className="text-sm text-secondary">{item.name}</span>
                            </div>
                            <IoIosArrowForward className="text-gray-400" />
                        </li>
                        
                    ))}
                </ul>
            </div>
        </Container>
    </section>
    </>
  )
}

export default Category0