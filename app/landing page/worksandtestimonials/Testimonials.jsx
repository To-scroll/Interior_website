"use client";
import React, { useState, useEffect } from 'react'
import { IoIosArrowRoundDown } from "react-icons/io";
import Image from 'next/image';
import { ImQuotesLeft } from "react-icons/im";
import avatar1 from '../../../public/images/avatar1.webp'
import avatar2 from '../../../public/images/avatar2.webp'
import avatar3 from '../../../public/images/avatar3.webp'
import architecture from '../../../public/images/architecture.webp'

const TestimonialData = [
    {
        id: 1,
        image: avatar1,
        name: 'Mathew Roy ',
        location: "New York, USA",
        desc: "I hired Archipix to design and build my dream home, and I could be happier with the result. From the initial consultation to the final walk-through, the Archipix team was professional.",
    },
    {
        id: 2,
        image: avatar2,
        name: 'Lisa PK',
        location: "New York, USA",
        desc: "I hired Archipix to design and build my dream home, and I could be happier with the result. From the initial consultation to the final walk-through, the Archipix team was professional.",
    },
    {
        id: 3,
        image: avatar3,
        name: 'Elwin Micheal',
        location: "New York, USA",
        desc: "I hired Archipix to design and build my dream home, and I could be happier with the result. From the initial consultation to the final walk-through, the Archipix team was professional.",
    },
];

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
                    <div className='grid grid-cols-1 lg:grid-cols-2 h-[400px] md:h-[450px] lg:h-[560px] xl:h-[550px]  w-full'>
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
                                className='  p-10 ' 
                                width={500} 
                                height={500} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials