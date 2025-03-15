"use client";
import React, { useState, useEffect } from 'react';
import { services_tags } from '../data/services_data';
import Image from 'next/image';

const FeaturedWorksSection = () => {
    const [activeTagIndex, setActiveTagIndex] = useState(0);
    
    const handleTagClick = (index) => {
        setActiveTagIndex(index);
    };    
    return (
        <div className='w-full px-6 lg:px-12 xl:px-40 pt-10'>
            <div className="flex flex-col relative justify-between">
                <h3 className="text-[40px] lg:text-[85px] mb-10 font-medium leading-10 lg:leading-[96px] capitalize">our featured works</h3>                
                <div className='relative'>
                    <div className='flex flex-col md:flex-row md:flex-wrap lg:flex-row md:space-x-14 items-center text-[#333]'>
                        {services_tags.map((item, index) => (
                            <div
                                key={item.id}
                                className='relative'
                                onClick={() => handleTagClick(index)}
                            >
                                <h3 className={`hover:cursor-pointer py-5 ${activeTagIndex === index ? 'font-medium border-b-[3px] border-[#777]' : ''}`}>
                                    {item.tag}
                                </h3>                              
                            </div>
                        ))}
                    </div>                    
                    <hr className="w-full border-t border-gray-300" />
                </div>                
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 h-full  justify-between">
                    <div className='w-full relative group'>
                        <Image src={services_tags[activeTagIndex].image3} alt='building image' className='h-[400px] md:h-[450px] lg:h-[400px] xl:h-[520px] w-full object-cover' />
                        <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300'></div>
                        <div className='absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                            <h3 className='text-4xl font-bold'>01</h3>
                            <h3 className='text-[32px]'>{services_tags[activeTagIndex].title1}</h3>
                        </div>
                    </div>
                    <div className='w-full relative group'>
                        <Image src={services_tags[activeTagIndex].image1} alt='building image' className='h-[400px] md:h-[450px] lg:h-[400px] xl:h-[520px] w-full object-cover' />
                        <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300'></div>
                        <div className='absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                            <h3 className='text-4xl font-bold'>02</h3>
                            <h3 className='text-[32px]'>{services_tags[activeTagIndex].title2}</h3>
                        </div>
                    </div>
                    <div className='w-full relative group'>
                        <Image src={services_tags[activeTagIndex].image2} alt='building image' className='h-[400px] md:h-[450px] lg:h-[400px] xl:h-[520px] w-full object-cover' />
                        <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300'></div>
                        <div className='absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                            <h3 className='text-4xl font-bold'>03</h3>
                            <h3 className='text-[32px]'>{services_tags[activeTagIndex].title3}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedWorksSection;