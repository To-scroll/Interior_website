"use client";
import React from 'react'
import Image from 'next/image'
import carousel1 from '../../../../public/images/carousel-1.webp'
import carousel2 from '../../../../public/images/carousel-2.webp'
import carousel3 from '../../../../public/images/carousel-3.webp'
import { useState, useEffect } from 'react';
import { GoArrowRight } from "react-icons/go";

const carousel_images = [
  {
    id: 1,
    image: carousel1,
    title: 'Lakefront Retreat',
    version: "Latest Project",
    year: "2023",
    location: "California, USA",
    price: "$2895",
    theme: "Residential",
    architect: "Micheal Carrick"
  },
  {
    id: 2,
    image: carousel2,
    title: 'Industrial Loft',
    version: "Latest Project",
    year: "2023",
    location: "Australia",
    price: "$895",
    theme: "Residential",
    architect: "John Carrick"
  },
  {
    id: 3,
    image: carousel3,
    title: 'Lakefront Villa',
    version: "Latest Project",
    year: "2023",
    location: "California, USA",
    price: "$1495",
    theme: "Villa",
    architect: "Micheal Carrick"
  },
];

const HerocarouselSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carousel_images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + carousel_images.length) % carousel_images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') nextSlide();
      if (event.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div className='relative w-full'>
      <div className="relative w-full h-72 md:h-96">
        <div className="lg:absolute inset-0 w-full h-[500px]">
          <Image
            src={carousel_images[currentIndex].image}
            alt={`Carousel Image ${carousel_images[currentIndex].id}`}
            fill
            className="object-cover"
            priority={currentIndex === 0}
          />
        </div>
      </div>
      <div className='lg:absolute z-20 lg:bottom-[-200px] right-0 bg-[#171717] w-full lg:w-[65%] px-10 py-8 text-white'>
        <div className='flex flex-col space-y-8 md:space-y-0 md:flex-row justify-between md:items-center'>
          <div className='grid space-y-2 md:w-[50%] items-start text-left w-full'>
            <h3 className='text-[#757575]'>{carousel_images[currentIndex].version}</h3>
            <h3 className='text-lg font-bold text-[28px]'>{carousel_images[currentIndex].title}</h3>
            <h3 className='text-[#757575]'>Completed in {carousel_images[currentIndex].year}</h3>
          </div>
          <div className='grid space-y-0.5 md:w-[30%] items-start text-left w-full'>
            <h3 className='text-[16px] text-[#757575]'>Location</h3>
            <h3 className='mb-6 text-[16px]'>{carousel_images[currentIndex].location}</h3>
            <h3 className='text-[16px] text-[#757575]'>Price</h3>
            <h3>{carousel_images[currentIndex].price}</h3>
          </div>
          <div className='grid space-y-0.5 md:w-[30%] items-start text-left w-full'>
            <h3 className='text-[16px] text-[#757575]'>Theme & Style</h3>
            <h3 className='mb-6 text-[16px]'>{carousel_images[currentIndex].theme}</h3>
            <h3 className='text-[16px] text-[#757575]'>Architect</h3>
            <h3>{carousel_images[currentIndex].architect}</h3>
          </div>
          <div className='flex flex-col w-[10%] pt-10 space-y-4 justify-center absolute bottom-12 right-10 md:right-0 md:bottom-5  items-start'>
            <button
              onClick={prevSlide}
              className=" transform hover:cursor-pointer hover:bg-[#eee] hover:text-[#333] border border-[#eee] rounded-full -translate-y-1/2  bg-black/50 p-2  text-white "
            ><GoArrowRight size={24} className='scale-x-[-1]' />
            </button>
            <button
              onClick={nextSlide}
              className=" transform hover:cursor-pointer hover:bg-[#eee] hover:text-[#333] border border-[#eee] rounded-full -translate-y-1/2 bg-black/50  p-2  text-white "
            ><GoArrowRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HerocarouselSection