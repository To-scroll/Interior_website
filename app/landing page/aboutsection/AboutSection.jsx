import React from 'react'
import { RxSlash } from "react-icons/rx";
import { GoArrowUpRight } from "react-icons/go";
import Image from 'next/image';
import aboutimg from '../../../public/images/about-2.webp'

const AboutSection = () => {
    return (
        <div className='relative w-full px-6 lg:px-12 xl:px-44 lg:mt-32 mb-10'>
            <div className='flex flex-col  lg:flex-row w-full lg:items-center justify-between'>
                <h3 className='text-[40px] lg:text-[85px] font-medium leading-10 lg:leading-24'>About<span className='inline-block'><RxSlash className='text-[#d0d0cf]' /></span><br /> Interior</h3>
                <p className='mr-10 text-[30px]'><GoArrowUpRight className='hover:cursor-pointer hidden lg:block' /></p>
            </div>
            <div className='flex flex-col lg:flex-row mt-10'>
                <div className='flex-2 lg:ml-10'>
                    <Image src={aboutimg}
                        alt='about-image'
                        className='w-full h-full object-cover'
                        width={800}
                        height={800} />
                </div>
                <div className='flex-1 mt-10 lg:mt-0 lg:pl-24 pr-10'>
                    <h3 className='text-[#636363] text-[20px] lg:text-[26px] font-medium tracking-wide text-left'>
                        Archipix is a team of experienced architects and interior designers
                    </h3>
                    <p className='mt-7 lg:mt-10 text-[#7f7f7f] leading-7  tracking-wide text-justify paragraph'>
                        who are passionate about creating beautiful, functional spaces. We believe that good design should be accessible to everyone, and we work hard to make sure that our client's vision become reality.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutSection
