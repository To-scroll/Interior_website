"use client";
import React from 'react'
import { useState } from 'react';
import { services_tags } from '../data/services_data';
import Image from 'next/image';
import { GoArrowUpRight } from "react-icons/go";

const OurServicesSection = () => {
    const [hoveredItem, setHoveredItem] = useState(null);
    const totalItems = services_tags.length;

    return (
        <div className="relative w-full px-6 lg:px-12 xl:px-40 pb-32 lg:pb-40">
            <div className="flex flex-col relative justify-between">
                <div className='flex flex-col lg:pt-32'>
                    <h3 className="text-[40px] md:text-[50px] mb-6 lg:text-[85px] mr-7 font-medium leading-10 lg:leading-[96px] capitalize text-end">our services</h3>
                    {services_tags.map((item, index) => {
                        const isLastTwo = index >= totalItems - 3;
                        return (
                            <div key={item.id}
                                className="w-full flex justify-between py-10 border-b border-slate-200"
                                onMouseEnter={() => setHoveredItem(item.id)}
                                onMouseLeave={() => setHoveredItem(null)}>
                                <button className="w-full relative h-full flex justify-between text-[#171717]">
                                    <span className='flex items-center space-x-5'>
                                        <sup><span><p className='text-[14px] text-[#7f7f7f] mb-5'>0{item.id}</p></span></sup>
                                        <span><h3 className='text-[26px] md:text-[38px] xl:text-[45px] font-normal text-[#7f7f7f] capitalize'>{item.tag}</h3></span>
                                    </span>
                                    <span className="text-slate-800 transition-transform duration-300">
                                        {hoveredItem === item.id ? (
                                            <GoArrowUpRight className='w-10 h-10 p-2 border rounded-full border-[#d3d3d3] text-[#7f7f7f] rotate-180' />
                                        ) : (
                                            <GoArrowUpRight className='w-10 h-10 p-2 border rounded-full border-[#d3d3d3] text-[#7f7f7f] rotate-[-180]' />
                                        )}
                                    </span>
                                    <div className={`absolute ${isLastTwo ? 'bottom-0 right-20' : 'right-20'} z-10 h-28 w-28 md:h-36 md:w-64 lg:w-72 lg:h-52 xl:w-96 xl:h-80 overflow-hidden transition-all duration-500 ease-in-out
                                        ${hoveredItem === item.id ? 'opacity-100 translate-x-0 pl-10' : 'opacity-0 translate-x-20'}`}>
                                        <div className="absolute h-full w-full inset-0">
                                            <Image
                                                src={item.image}
                                                alt='building image'
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                </button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default OurServicesSection