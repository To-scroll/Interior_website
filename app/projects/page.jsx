import React from 'react'
import Breadcrumbs from '../component/breadcrumbs/Breadcrumbs'
import { RxSlash } from "react-icons/rx";
import Image from 'next/image';
import building from '../../public/images/carousel-3.webp'
import { TfiLayoutLineSolid } from "react-icons/tfi";
import ServiceTypeSection from '../component/projects_page/ServiceTypeSection';
import FeaturedWorksSection from '../component/projects_page/FeaturedWorksSection';
import Partners from '../component/landing_page/aboutsection/Partners';

const page = () => {
  return (
    <div className='pt-20'>
      <Breadcrumbs />
      {/* hero section */}
      <div className=" w-full px-6 lg:px-12 xl:px-40   pb-10 lg:pb-10">
        <div className="flex flex-col relative justify-between  ">
          <div className='flex flex-col lg:flex-row'>
            <h3 className="text-[40px] md:text-[60px]  lg:text-[85px] mb-10 font-medium leading-10 md:leading-[60px] lg:leading-[96px] ">Discover Our <br /> Portfolio<span className='inline-block'><RxSlash className='text-[#d0d0cf]' /></span>of Stunning <br /> Designs</h3>
            <div className='flex  flex-1/4 flex-col mt-5 lg:mt-0 text-end capitalize'>
              <p className='text-[#7f7f7f] text-[18px] mb-2 font-normal '>since 2000</p>
              <h4 className='text-[22px]'>Architecture</h4>
              <h4 className='text-[22px]'>Interior</h4>
              <h4 className='text-[22px]'>Landscape</h4>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full'>
        <Image src={building} alt='building-image' width={500} height={500} className='w-full object-cover  xl:h-[600px]' />
      </div>
      <ServiceTypeSection />
      <FeaturedWorksSection />
      <Partners />
    </div>
  )
}

export default page
