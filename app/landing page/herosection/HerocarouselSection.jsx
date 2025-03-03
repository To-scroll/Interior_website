import React from 'react'
import Image from 'next/image'
import carousel1 from '../../../public/images/carousel-1.webp'

const HerocarouselSection = () => {
  return (
    <div className='relative w-full'>
        <Image src={carousel1} alt='carousel-image' className='relative w-full h-[500px] object-cover' />
        <div className='absolute bottom-[-50px] right-0 bg-[#171717] px-8 py-10'>
            <div className='grid grid-cols-3'>
                <div>
                    <h3>Lakefront Retraet</h3>
                </div>

            </div>

        </div>
      
    </div>
  )
}

export default HerocarouselSection
