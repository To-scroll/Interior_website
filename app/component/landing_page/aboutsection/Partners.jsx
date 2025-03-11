"use client";
import React from 'react';
import partner1 from '../../../../public/images/partner1.webp';
import partner2 from '../../../../public/images/partner2.webp';
import partner3 from '../../../../public/images/partner3.webp';
import partner4 from '../../../../public/images/partner4.webp';
import partner5 from '../../../../public/images/partner5.webp';
import { useState, useEffect} from 'react';
import Image from 'next/image';

const partner_images = [
  { id: 1, image: partner1 },
  { id: 2, image: partner2 },
  { id: 3, image: partner3 },
  { id: 4, image: partner4 },
  { id: 5, image: partner5 },
];

const Partners = () => {
  const expandedPartners = [...partner_images, ...partner_images, ...partner_images];
  const [position, setPosition] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  // Function to move the carousel left
  const moveCarousel = () => {
    setPosition(prev => {
      // Calculate the single step (width of one item)
      const step = 100 / partner_images.length;
      const nextPosition = prev + step;
      // Reset when we've scrolled through the original set
      if (nextPosition >= 100) {
        return 0;
      }
      return nextPosition;
    });
  };
  useEffect(() => {
    // Set initial window width
    setWindowWidth(window.innerWidth);
    // Handle window resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    // Start the carousel
    const interval = setInterval(moveCarousel, 2000);
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='relative w-full px-4 md:px-12 lg:px-44 mt-[580px] md:mt-60 mb-10'>
      <div className='max-w-[340px] md:max-w-full mx-auto overflow-hidden'>
        <div
          className='flex transition-transform duration-500 ease-in-out'
          style={{ transform: `translateX(-${position}%)` }}
        >
          {expandedPartners.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className={`flex-none px-8 ${windowWidth < 768 ? 'w-1/2' : 'w-1/4'
                }`}
            >
              <div className='w-full h-auto flex justify-center items-center'>
                <Image
                  src={item.image}
                  alt={`Partner ${item.id}`}
                  className='object-contain'
                  width={windowWidth < 768 ? 100 : 130}
                  height={windowWidth < 768 ? 100 : 130}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};

export default Partners;