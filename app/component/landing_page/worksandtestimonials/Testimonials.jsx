"use client";
import React, { useState, useEffect } from 'react'
import { IoIosArrowRoundDown } from "react-icons/io";
import Image from 'next/image';
import { ImQuotesLeft } from "react-icons/im";
import architecture from '../../../../public/images/architecture.webp'
import { TestimonialData } from '@/app/component/data/content_data';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const nextSlide = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % TestimonialData.length);
            setIsAnimating(false);
        }, 500); 
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 2000); 
        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className='relative w-full px-6 lg:px-12 xl:px-44 lg:mt-32 my-16'>
            <div className='flex flex-col w-full justify-between'>
                <div className='flex justify-end w-full pb-14 border-b-[1px] border-[#ddd]'>
                    <h3 className='text-[40px] lg:text-[85px] font-medium leading-0 lg:leading-9 text-right capitalize'>
                        What our clients<br />
                        <span className='inline-block box-border relative text-[80px] lg:text-[100px] top-7 lg:top-5'>
                            <IoIosArrowRoundDown className='text-[#ddd]' />
                        </span> are saying
                    </h3>
                </div>
                <div className='mt-12 flex flex-wrap'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 h-[450px] md:h-[450px] lg:h-[560px] xl:h-[550px]  w-full'>
                        <div className='lg:col-span-1 pt-5 relative overflow-hidden'>
                            <div key={currentIndex} 
                                className={`
                                    absolute inset-0 transition-all duration-500 ease-in-out
                                    ${isAnimating 
                                        ? 'translate-x-[-100%] opacity-0' 
                                        : 'translate-x-0 opacity-100'
                                    }
                                `} >
                                <ImQuotesLeft className='text-[#ddd] size-12 mb-10' />
                                <div>
                                    <p className='mb-10 text-[18px] md:text-[28px] font-normal leading-7 md:leading-10 lg:leading-12 tracking-wide text-[#a5a5a5]'>{TestimonialData[currentIndex].desc}</p>
                                    <div className='flex flex-col space-x-4 mb-4'>
                                        <Image
                                            src={TestimonialData[currentIndex].image}
                                            alt='Avatar image'
                                            width={60}
                                            height={60}
                                            className="rounded-full w-24 h-24"
                                        />
                                        <div>
                                            <h3 className='font-semibold'>{TestimonialData[currentIndex].name}</h3>
                                            <h4 className='text-gray-500'>{TestimonialData[currentIndex].location}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='hidden lg:block lg:col-span-1 '>
                            <Image 
                                src={architecture} 
                                alt='architecture image' 
                                className='w-full' 
                                width={200} 
                                height={200} 

                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials