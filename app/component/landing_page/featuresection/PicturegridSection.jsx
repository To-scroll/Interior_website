"use client";
import React from 'react';
import Image from 'next/image';
import { GoArrowUpRight } from "react-icons/go";
import { useState } from 'react';
import building from '../../../../public/images/about-2.webp';
import building2 from '../../../../public/images/carousel-3.webp';

const projectData = [
    {
        image: building,
        title: 'Mediterranian Villa',
        category: 'Architecture'
    },
    {
        image: building2,
        title: 'Industrial Chic Restaurant',
        category: 'Interior'
    },
    {
        image: building2,
        title: 'Mediterranian Villa',
        category: 'Architecture'
    },
    {
        image: building,
        title: 'New Valley Villa',
        category: 'Architecture'
    }
];

const PicturegridSection = () => {
    const [isClick, setisClick] = useState(false);

    const opendetails = () => {
        setisClick((prev => !prev));
    }
    return (
        <div className="relative w-full px-6 lg:px-0">
            <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 mb-7 md:mb-15">
                <div className="flex-2 md:flex-1 lg:flex-2 relative group md:mr-5">
                    <Image
                        src={projectData[0].image}
                        alt="building image"
                        priority
                        className="w-full h-[460px] object-cover"
                        onClick={opendetails}
                    />
                    {isClick && (
                        <div className="absolute bottom-0 left-0 bg-[#171717] p-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className='flex space-x-10 items-center'>
                                <div>
                                    <h3 className='font-medium hover:underline text-[22px]'>{projectData[0].title}</h3>
                                    <p className='font-normal text-[#e7e7e7]'>{projectData[0].category}</p>
                                </div>
                                <p>
                                    <GoArrowUpRight
                                        size={50}
                                        className='border-white border rounded-full p-3 text-white'
                                    />
                                </p>
                            </div>
                        </div>
                    )}
                </div>
                <div className="flex-1 relative group">
                    <Image
                        src={projectData[1].image}
                        alt="building image"
                        priority
                        className="w-full h-[460px] object-cover"
                        onClick={opendetails}
                    />
                    {isClick && (
                        <div className="absolute bottom-0 left-0 bg-[#171717] p-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className='flex space-x-10 items-center'>
                                <div>
                                    <h3 className='font-medium hover:underline text-[22px]'>{projectData[1].title}</h3>
                                    <p className='font-normal text-[#e7e7e7]'>{projectData[1].category}</p>
                                </div>
                                <p>
                                    <GoArrowUpRight
                                        size={50}
                                        className='border-white border rounded-full p-3 text-white'
                                    />
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 mb-5">
                <div className="flex-1 relative group md:mr-5">
                    <Image
                        src={projectData[2].image}
                        alt="building image"
                        priority
                        className="w-full h-[460px] object-cover"
                        onClick={opendetails}
                    />
                    {isClick && (
                        <div className="absolute bottom-0 left-0 bg-[#171717] p-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className='flex space-x-10 items-center'>
                                <div>
                                    <h3 className='font-medium hover:underline text-[22px]'>{projectData[2].title}</h3>
                                    <p className='font-normal text-[#e7e7e7]'>{projectData[2].category}</p>
                                </div>
                                <p>
                                    <GoArrowUpRight
                                        size={50}
                                        className='border-white border rounded-full p-3 text-white'
                                    />
                                </p>
                            </div>
                        </div>
                    )}
                </div>
                <div className="flex-2 md:flex-1 lg:flex-2 relative group">
                    <Image
                        src={projectData[3].image}
                        alt="building image"
                        priority
                        className="w-full h-[460px] object-cover"
                        onClick={opendetails}
                    />
                    {isClick && (
                        <div className="absolute bottom-0 left-0 bg-[#171717] p-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className='flex space-x-10 items-center'>
                                <div>
                                    <h3 className='font-medium hover:underline text-[22px]'>{projectData[3].title}</h3>
                                    <p className='font-normal text-[#e7e7e7]'>{projectData[3].category}</p>
                                </div>
                                <p>
                                    <GoArrowUpRight
                                        size={50}
                                        className='border-white border rounded-full p-3 text-white'
                                    />
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PicturegridSection;