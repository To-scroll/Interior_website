import React from 'react'
import { RxSlash } from "react-icons/rx";
import Image from 'next/image';
import building from '../../public/images/carousel-1.webp'

const AboutHeroSection = () => {
    return (
        <div className='relative w-full px-6 lg:px-12 xl:px-40 mt-10 md:pb-10'>
            <div className='flex flex-col relative pt-20  w-full  justify-between'>
                <div className='relative w-full'>
                    <Image src={building} alt='about img' className='w-full h-[220px] md:h-[390px] lg:h-[550px]' width={1000} height={1000} />
                </div>
                <h3 className='absolute top-[-20px] text-[40px] lg:text-[65px] xl:text-[85px] z-20 font-medium leading-10 lg:leading-24 text-[#171717] capitalize'>learn about our<span className='inline-block'><RxSlash className='text-[#d0d0cf]' /></span><br /> <span className='lg:ml-35 text-[#171717] lg:text-white'> vision and values</span></h3>
                <p className='hidden lg:block mr-10 absolute right-0 top-0 text-[25px] text-[#3a3a3a] font-normal mb-24'>Our History</p>
                <div className='py-8'>
                    <p className='text-[#656565] text-[17px]  tracking-wide'>Archipix was founded in 1995 in California, USA. The company was established by Louis Skidmore and Nathaniel Owings, and later joined by John O. Merrill. <br /><br />
                        The company has designed the John Hancock Center, One World Trade Center and Burj Khalifa, which is currently the tallest building in the world. Throughout its history, Archipix has been recognized for its innovative designs and commitment to sustainability.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutHeroSection
