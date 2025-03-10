"use client";
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import building1 from '../../public/images/building1.webp'
import building2 from '../../public/images/building1.webp'
import building3 from '../../public/images/building1.webp'
import building4 from '../../public/images/building1.webp'
import building5 from '../../public/images/building1.webp'
import building6 from '../../public/images/building1.webp'
import { GoArrowUpRight } from "react-icons/go";


const WhatWeDoSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const accordionItems = [
        {
            id: 1,
            title: "Architectural Design",
            image: building1,
            content: "Proin imperdiet magna sit amet mollis luctus. Quisque id leo quis diam dapibus ultricies fringilla vitae neque."
        },
        {
            id: 2,
            title: "Interior Design",
            image: building2,
            content: "Mauris faucibus nisl eu mi egestas blandit. Quisque consectetur urna ac viverra iaculis. Ut turpis velit, consectetur ut tempus a, cursus id nulla."
        },
        {
            id: 3,
            title: "Project Management",
            image: building3,
            content: "Proin imperdiet magna sit amet mollis luctus. Quisque id leo quis diam dapibus ultricies fringilla vitae neque."
        },
        {
            id: 4,
            title: "Historic Preservation",
            image: building4,
            content: "Mauris faucibus nisl eu mi egestas blandit. Quisque consectetur urna ac viverra iaculis. Ut turpis velit, consectetur ut tempus a, cursus id nulla."
        },
        {
            id: 5,
            title: "Landscape Design",
            image: building5,
            content: "Mauris faucibus nisl eu mi egestas blandit. Quisque consectetur urna ac viverra iaculis. Ut turpis velit, consectetur ut tempus a, cursus id nulla."
        },
        {
            id: 6,
            title: "Furniture Remodel",
            image: building6,
            content: "Proin imperdiet magna sit amet mollis luctus. Quisque id leo quis diam dapibus ultricies fringilla vitae neque."
        },
    ];

    return (
        <div className="relative w-full px-6 lg:px-12 xl:px-40  pb-32 lg:pb-40">
            <div className="flex flex-col relative justify-between">
                <h3 className="text-[40px] lg:text-[85px] mb-10 font-medium leading-10 lg:leading-[96px] text-end">What We Do</h3>
                {accordionItems.map((item) => (
                    <div key={item.id} onClick={() => toggleAccordion(item.id)} className="border-b border-slate-200 py-7">
                        <button className="w-full flex justify-between items-center text-[#171717]" >
                            <span className='flex items-center space-x-5'>
                                <span><p className='text-[14px] text-[#7f7f7f]'>0{item.id}</p></span>
                                <span><h3 className='text-[28px] font-normal text-[#171717]'>{item.title}</h3></span>
                            </span>
                            <span className="text-slate-800 transition-transform duration-300">
                                {openIndex === item.id ? (
                                   <GoArrowUpRight className='w-10 h-10 p-2 border rounded-full border-[#d3d3d3] text-[#7f7f7f] rotate-180'/>
                                ) : (
                                    <GoArrowUpRight className='w-10 h-10 p-2 border rounded-full border-[#d3d3d3]  text-[#7f7f7f] rotate-[-180]'/>
                                )}
                            </span>
                        </button>
                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === item.id ? "max-h-[450px] md:max-h-96" : "max-h-0"}`} >
                            <div className="flex flex-col md:flex-row items-center justify-between space-x-6 py-6">
                                <div className="w-full h-[300px] md:w-[40%]  xl:w-[28%] ml-3 md:h-[230px] relative">
                                    <Image
                                        src={item.image}
                                        alt='building image'
                                        fill
                                        className="w-full h-[192px] object-cover"
                                    />
                                </div>
                                <div className=" p-5 md:mr-28 tracking-wider leading-7 w-full text-[#7f7f7f]">
                                    {item.content}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default WhatWeDoSection;