"use client";
import React from 'react'
import Image from 'next/image'
import building from '../../../public/images/carousel-1.webp'
import { services_tags } from '../data/services_data'
import { useState } from 'react'
import { IoAddSharp } from "react-icons/io5";
import { HiOutlineMinus } from "react-icons/hi2";

const ServiceTypeSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <div className=' w-full px-6 lg:px-12 xl:px-40 py-28'>
            <div className="flex flex-col relative justify-between  ">
                <h3 className="text-[40px] lg:text-[85px] mb-10 font-medium leading-10 lg:leading-[96px] text-end">Service Type</h3>
                <div className='flex  w-full px-4 md:px-0 lg:space-x-8'>
                    <div className='flex flex-col flex-3'>
                        {services_tags.map((item) => (
                            <div key={item.id} onClick={() => toggleAccordion(item.id)} className="border-b border-slate-200 py-4">
                                <button className="w-full flex justify-between items-center text-[#171717]" >
                                    <span className='flex items-center space-x-3'>
                                        <span><p className='text-[14px] text-[#7f7f7f]'>0{item.id}</p></span>
                                        <span><h3 className='text-[20px] md:text-[28px] font-normal text-[#171717]'>{item.tag}</h3></span>
                                    </span>
                                    <span className="text-slate-800 transition-transform duration-300">
                                        {openIndex === item.id ? (
                                            <HiOutlineMinus className='w-10 h-10 p-2 border rounded-full border-[#d3d3d3] text-[#7f7f7f] '/>
                                        ) : (
                                            <IoAddSharp className='w-10 h-10 p-2 border rounded-full border-[#d3d3d3]  text-[#7f7f7f] ' />
                                        )}
                                    </span>
                                </button>
                                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === item.id ? "max-h-[450px] md:max-h-80" : "max-h-0"}`} >
                                    <div className="flex items-center py-1">
                                        <div className=" p-5 md:mr-28 tracking-wider text-[14px] md:text-[15px] leading-6 w-full text-[#7f7f7f]">
                                            {item.desc}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                    <div className='hidden w-full h-[550px] lg:flex flex-2'>
                        <Image src={building} alt='building-image' width={500} height={500} className='object-cover' />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ServiceTypeSection
