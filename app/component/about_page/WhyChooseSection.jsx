"use client";
import React from 'react';
import building4 from '../../../public/images/interior8.webp';
import building1 from '../../../public/images/interior9.webp';
import building2 from '../../../public/images/interior10.webp';
import building3 from '../../../public/images/interior11.webp';
import Image from 'next/image';
import { useState } from 'react';

const choosedata = [
    {
        id: 1,
        title: "Innovative design",
        image: building4
    },
    {
        id: 2,
        title: "exceptional service",
        image: building1
    },
    {
        id: 3,
        title: "quality craftmanship",
        image: building2
    },
    {
        id: 4,
        title: "experienced team",
        image: building3
    },
];

const WhyChooseSection = () => {
    const [hoveredItem, setHoveredItem] = useState(null);

    return (
        <div className='relative w-full px-6 lg:px-12 xl:px-40 pb-8'>
            <div className='flex flex-col lg:flex-row w-full'>
                <h3 className="text-[40px] md:text-[50px] lg:text-[85px] mr-7 font-medium leading-10 lg:leading-[96px] capitalize">why choose Interior?</h3>
                <div className='flex flex-col mt-8 lg:mt-0 w-full relative'>
                    {choosedata.map((item) => (
                        <div
                            key={item.id}
                            className="w-full flex justify-between py-10 border-b border-slate-200"
                            onMouseEnter={() => setHoveredItem(item.id)}
                            onMouseLeave={() => setHoveredItem(null)}    >
                            <button className="w-full relative h-full flex   text-[#171717]">
                                <span className='flex items-center space-x-5'>
                                    <sup><span><p className='text-[14px] text-[#7f7f7f] mb-5'>0{item.id}</p></span></sup>
                                    <span><h3 className='text-[26px] md:text-[38px] font-normal text-[#7f7f7f] capitalize'>{item.title}</h3></span>
                                </span>
                            </button>
                            <div className={`absolute right-0 z-20 h-20 w-28  md:h-36 md:w-64 overflow-hidden transition-all duration-500 ease-in-out
                                        ${hoveredItem === item.id ? 'opacity-100 translate-x-0 pl-10' : 'opacity-0 -translate-x-full'}
                                    `} >
                                <div className="absolute h-full w-full inset-0">
                                    <Image
                                        src={item.image}
                                        alt={`${item.title} image`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhyChooseSection;