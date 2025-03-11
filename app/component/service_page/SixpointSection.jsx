"use client";
import React from 'react'
import { sixpoints } from '../../component/data/services_sixpoints';
import { GoArrowUpRight } from "react-icons/go";
import { useState } from 'react';

const SixpointSection = () => {
    const [hoveredItem, setHoveredItem] = useState(null);
    return (
        <div className='bg-[#efefe9]'>
            <div className="relative px-6 lg:px-12 xl:px-40 py-6 lg:py-16">
                <div className='flex flex-col md:flex-row md:flex-wrap lg:flex-row'>
                    {sixpoints.map((item, index) => (
                        <div
                            key={item.id}
                            className={`
                                flex flex-col space-y-5 p-3
                                w-full md:w-1/3 lg:w-1/6
                                ${index % 2 === 1 ? 'lg:mt-32' : ''}
                                ${index >= 3 ? 'md:mt-8' : ''}
                            `}
                            onMouseEnter={() => setHoveredItem(item.id)}
                            onMouseLeave={() => setHoveredItem(null)} >
                            <span className="text-slate-800 transition-transform duration-300">
                                {hoveredItem === item.id ? (
                                    <GoArrowUpRight className='w-10 h-10 p-2 border rounded-full border-[#d3d3d3] text-[#7f7f7f] rotate-45' />
                                ) : (
                                    <GoArrowUpRight className='w-10 h-10 p-2 border rounded-full border-[#d3d3d3]  text-[#7f7f7f] rotate-[-45]' />
                                )}
                            </span>
                            <h3 className='text-[25px] text-[#3b3a3a] font-normal capitalize'>{item.tag}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SixpointSection