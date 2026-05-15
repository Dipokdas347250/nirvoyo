import React from 'react'
import Container from '../common/Container'
import { MdOutlineStar } from "react-icons/md";
import Category from '@/data/category';
import Image from 'next/image';

const Producr_details = () => {
    return (
        <>
            <section className='bg-[#fafafa] pb-12.5'>
                <Container>
                    <div className="">
                        <div className="py-5 px-12 border border-[#F1F1F1] bg-[#FCFCFC]">
                            <h3 className='text-[24px] text-tertiary font-medium font-poppins'>Producr details of LED Monitor With High Quality In The World</h3>
                        </div>
                        <div className="bg-white pb-9 border-b border-[#F1F1F1]">
                            <div className="py-6 px-12">
                                <h3 className='text-[24px] text-[#333333] font-medium font-lato'>See the best picture no matter where you sit</h3>
                                <div className="flex mt-5  ">
                                    <div className="w-1/2">
                                        <ul className='ml-5 flex flex-col gap-y-3'>
                                            <li className='product-list'>Size : M, L, XL</li>
                                            <li className='product-list'>Product Type : Jogger</li>
                                            <li className='product-list'>Main Material : Cotton</li>
                                            <li className='product-list'>Gender : Male</li>
                                            <li className='product-list'>Waist : Mid-rise</li>
                                            <li className='product-list'>Zip : Fly</li>
                                        </ul>
                                    </div>
                                    <div className="w-1/2">
                                        <ul className='ml-5 flex flex-col gap-y-3'>
                                            <li className='product-list'>Zipper : Yes</li>
                                            <li className='product-list'>Pocket : Two front and One Back Pockets.</li>
                                            <li className='product-list'>100% Authentic Product</li>
                                            <li className='product-list'>Product color may slightly vary due to our photography and Sometimes it’s vary on our devices</li>

                                        </ul></div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white">
                            <div className="py-6 px-12">
                                <h3 className='text-[24px] text-[#333333] leading-9.5 font-medium font-lato'>Powerful intelligence for perfection</h3>
                                <p className='text-[18px] text-secondary leading-9.5 font-normal font-lato mt-5.5'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                                <p className='text-[18px] text-secondary leading-9.5 font-normal font-lato mt-12'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita </p>

                            </div>
                        </div>
                        <div className="bg-white mt-7.5 border-b border-[#F1F1F1]">
                            <div className="pt-10  px-12 flex items-center gap-x-18.75">
                                <div className="">
                                    <h3 className='text-[20px] text-[#3D3D3F] font-medium font-poppins'>Customer reviews</h3>
                                    <div className="flex items-center gap-x-1 mt-3.75">
                                        <div className="flex items-center gap-x-1 text-[#FFB340]">
                                            <MdOutlineStar size={20} />
                                            <MdOutlineStar size={20} />
                                            <MdOutlineStar size={20} />
                                            <MdOutlineStar size={20} />
                                            <MdOutlineStar size={20} />
                                        </div>
                                        <h3 className='text-[15px] text-[#3D3D3F] font-normal font-poppins'>4.6 out of 5</h3>
                                    </div>
                                </div>
                                <div className="flex flex-col  gap-y-2.5">
                                    <div className="flex  items-center gap-x-2.75">
                                        <h3 className='stars'>5 Stars</h3>
                                        <div className='w-50.25 h-2 bg-[#FFB340] rounded-[5px]'></div>
                                        <h4 className='stars'>79%</h4>
                                    </div>
                                    <div className="flex  items-center gap-x-2.75">
                                        <h3 className='stars'>4 Stars</h3>
                                        <div className='w-50.25 h-2 bg-[#DBDEDF] rounded-[5px] relative after:absolute after:containt-[""] after:h-full after:w-37 after:bg-[#FFB340] after:top-0 after:left-0 after:rounded-[5px]'></div>
                                        <h4 className='stars'>12%</h4>
                                    </div>
                                    <div className="flex  items-center gap-x-2.75">
                                        <h3 className='stars'>3 Stars</h3>
                                        <div className='w-50.25 h-2 bg-[#DBDEDF] rounded-[5px] relative after:absolute after:containt-[""] after:h-full after:w-27.75 after:bg-[#FFB340] after:top-0 after:left-0 after:rounded-[5px]'></div>
                                        <h4 className='stars'>4%</h4>
                                    </div>
                                    <div className="flex  items-center gap-x-2.75">
                                        <h3 className='stars'>2 Stars</h3>
                                        <div className='w-50.25 h-2 bg-[#DBDEDF] rounded-[5px] relative after:absolute after:containt-[""] after:h-full after:w-17.5 after:bg-[#FFB340] after:top-0 after:left-0 after:rounded-[5px]'></div>
                                        <h4 className='stars'>2%</h4>
                                    </div>
                                    <div className="flex  items-center gap-x-2.75">
                                        <h3 className='stars'>1 Stars</h3>
                                        <div className='w-50.25 h-2 bg-[#DBDEDF] ml-1 rounded-[5px] relative after:absolute after:containt-[""] after:h-full after:w-11.5 after:bg-[#FFB340] after:top-0 after:left-0 after:rounded-[5px]'></div>
                                        <h4 className='stars'>4%</h4>
                                    </div>
                                </div>
                                <div className="">
                                    <button className='px-12 py-2.5 border bg-tertiary  border-tertiary rounded-[5px] text-[14px] text-white font-medium font-poppins duration-300 ease-in-out hover:bg-white hover:text-secondary cursor-pointer'>Write a Review</button>
                                </div>
                            </div>
                            <h3 className='text-[24px] text-[#333333] font-medium font-lato pt-10 pb-5 px-12'>Reviews (4)</h3>
                        </div>
                        <div className="bg-white ">
                            <div className="pt-10 pb-17.5  px-12">
                                <div className="flex flex-col gap-y-7.5">
                                    {Category?.reviews?.map((item) => (
                                        <div key={item.id} className="">
                                            <div className="flex items-center gap-x-4">
                                                <Image src={item.image} alt={item.name} />
                                                <div className="">
                                                    <h2>{item.name}</h2>

                                                    <div className="flex items-center gap-x-1 mt-2.5">
                                                        <h4 className='text-[18px] text-secondary font-poppins font-medium'>5.0</h4>
                                                        <div className="flex items-center gap-x-1 text-[#FFB800] text-[20px]">
                                                            <MdOutlineStar />
                                                            <MdOutlineStar />
                                                            <MdOutlineStar />
                                                            <MdOutlineStar />
                                                            <MdOutlineStar />
                                                        </div>
                                                        <span className='text-[18px] text-[#BABABA] font-poppins font-normal'>1 Month Ago</span>
                                                    </div>

                                                </div>
                                            </div>
                                            <p className='text-[18px] text-[#383838] font-normal font-poppins mt-6'>{item.review}</p>
                                        </div>

                                    ))}
                                </div>

                                <div className="mt-17.5">
                                    <h3 className='text-[24px] text-[#383838] font-semibold font-poppins'>Add Your Review</h3>
                                    <p className='text-[18px] text-[#A7A7A7] font-normal font-poppins mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </p>
                                    <div className="">
                                        <div className="mt-7">
                                            <h4 className='text-[18px] text-[#383838] font-normal font-poppins'>Name*</h4>
                                            <input className='w-186.25 h-15 bg-[#F1F1F1] border border-[#A7A7A7] outline-none rounded-[5px] mt-4' type="name" />
                                        </div>
                                        <div className="mt-8">
                                            <h4 className='text-[18px] text-[#383838] font-normal font-poppins'>Email*</h4>
                                            <input className='w-186.25 h-15 bg-[#F1F1F1] border border-[#A7A7A7] outline-none rounded-[5px] mt-4' type="email" />
                                        </div>
                                        <div className="mt-8">
                                            <h4 className='text-[18px] text-[#383838] font-normal font-poppins'>Review *</h4>
                                            <textarea className='w-186.25 h-30 bg-[#F1F1F1] border border-[#A7A7A7] outline-none rounded-[5px] mt-4 resize-none' name="" id=""></textarea>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-x-4 my-10">
                                        <h4 className='text-[18px] text-secondary font-poppins font-medium'>Rating</h4>
                                        <div className="flex items-center gap-x-1 text-[#FFB800] text-[20px]">
                                            <MdOutlineStar size={20} />
                                            <MdOutlineStar size={20} />
                                            <MdOutlineStar size={20} />
                                            <MdOutlineStar size={20} />
                                            <MdOutlineStar  size={20}/>
                                        </div>
                                        
                                    </div>
                                     <button className='px-14.5 py-4 border bg-tertiary  border-tertiary rounded-[5px] text-[18px] text-white font-medium font-poppins duration-300 ease-in-out hover:bg-white hover:text-secondary cursor-pointer'>Submit </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Producr_details