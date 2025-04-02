import React from 'react'
import Image from 'next/image'
import building1 from '../../public/images/building1.webp'
import building2 from '../../public/images/building2.webp'
import { RxSlash } from "react-icons/rx";
import Breadcrumbs from '../component/breadcrumbs/Breadcrumbs';
import { IoIosArrowRoundDown } from "react-icons/io";
import OurServicesSection from '../component/service_page/OurServicesSection';
import HowWorksSection from '../component/landing_page/worksandtestimonials/HowWorksSection';
import Testimonials from '../component/landing_page/worksandtestimonials/Testimonials';
import SixpointSection from '../component/service_page/SixpointSection';

const page = () => {

  return (
    <div className='pt-20'>
      <Breadcrumbs />
      <div className="relative w-full px-6 lg:px-12 xl:px-40   pb-32 lg:pb-40">
        <div className="flex flex-col relative justify-between  ">
          {/* hero section */}
          <div className='flex   md:flex-row flex-col-reverse md:justify-center  lg:justify-between md:gap-6'>
            <div className='w-full md:max-w-80 lg:max-w-full'>
              <Image src={building2} alt='building image' width={200} height={200} className='object-cover  inline-block w-full h-10/12' />
            </div>
            <div className='flex flex-col align-middle  space-y-10 '>
              <div className='lg:pl-10 xl:pl-20 md:mt-10 lg:mt-0 relative'>
                <span className='text-[#a39d9d] text-[14px] lg:text-[16px] absolute top-0 lg:top-[95px]'>Since 2000 <br /> Architecture & Interior</span>
                <div className='text-[36px] lg:text-[70px] xl:text-[80px] font-medium leading-12 lg:leading-28 mt-16'><h3 className='md:pl-20 lg:pl-40'>Transform</h3><span className='md:pr-10'>Your Space </span><br /><div className='flex items-center md:pl-3 '><span className='md:inline-block hidden '><RxSlash className='text-[#d0d0cf]' /></span> with Haven</div></div>
              </div>
              <div className='md:flex justify-between items-end hidden'>
                <Image src={building1} alt='building image' width={200} height={200} className='object-cover min-w-1/2 max-h-80 max-w-60' />
                <div className='hidden lg:flex flex-col place-items-end'>
                  <span><IoIosArrowRoundDown size={60} className='text-[#ddd]' /></span>
                  <h3 className='text-[#171717] font-normal text-[26px]'>Haven Builders</h3>
                  <p className='text-[#7f7f7f] font-normal'>Design Your Dream House</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <OurServicesSection />
      <SixpointSection />
      <HowWorksSection />
      <Testimonials />
    </div>

  )
}

export default page
