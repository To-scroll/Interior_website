import React from 'react'
import Breadcrumbs from '../component/breadcrumbs/Breadcrumbs'
import { GoArrowUpRight } from "react-icons/go";
import Image from 'next/image';
import contactimg from '../../public/images/carousel-2.webp'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { PiSkypeLogoBold } from "react-icons/pi";

const page = () => {
  return (
    <div className='pt-20'>
      <Breadcrumbs />
      {/* hero section */}
      <div className=" w-full px-6 lg:px-12 xl:px-40   pb-10 lg:pb-10">
        <div className="flex flex-col relative justify-between  ">
          <h3 className='text-[40px] lg:text-[65px] xl:text-[85px] font-medium leading-10 lg:leading-24 text-[#171717] capitalize'>contact us <span className='inline-block'><GoArrowUpRight className='text-[#d0d0cf]' /></span></h3>
          <Image src={contactimg} alt='contact building img' className='object-cover w-full mt-10' width={500} height={500} />
          <div className='flex flex-col lg:flex-row mt-14 gap-20 justify-between'>
            <div className='flex-1'>
              <p className='text-justify text-[#7f7f7f] text-[18px] leading-7'>Have a question about our services or want to get started on you design project? We are here to help! Fill out the contact form below and one of our team members will get back to you within 24 hours. Alternatively, you can reach out to us via phone or email using the contact information provided below. We can't wait to hear from you!</p>
            </div>
            <div className='flex  flex-col'>
              <h3 className='text-[40px] lg:text-[65px] xl:text-[85px] font-medium leading-10 mb-10 lg:leading-24 text-[#171717] capitalize'>submit form  <span className='inline-block'><GoArrowUpRight className='text-[#d0d0cf]' /></span></h3>
              <div className='grid grid-cols-1 space-y-10'>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className=" border-b-[1px] border-[#333] py-4 focus:placeholder-opacity-0 w-full p-4  focus:outline-none focus:ring-0 "
                  placeholder="Name"
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className=" border-b-[1px] border-[#333] py-4  w-full p-4  focus:outline-none focus:ring-0 "
                  placeholder="Email"
                />
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  required
                  className=" border-b-[1px] border-[#333] py-4  w-full p-4  focus:outline-none focus:ring-0 "
                  placeholder="Phone Number"
                />
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className=" border-b-[1px] border-[#333] py-4  w-full p-4  focus:outline-none focus:ring-0 "
                  placeholder="Message"
                />
                <input
                  className=" py-5 text-[#171717] w-full md:w-[25%] border rounded-4xl border-[#7f7f7f] hover:text-white text-sm font-semibold
                             hover:bg-black  transition-colors duration-300"
                  type="submit"
                  value="Submit"
                  required />
              </div>
            </div>
          </div>
          <div className='flex flex-col xl:flex-row gap-10 mt-24 h-850px] md:h-[900px] lg:h-[950px] xl:h-[650px]  justify-between'>
            <div className="mt-5 flex-1 ">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.5281142053163!2d75.3717779!3d12.2801803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba45d075431b203%3A0x7c393ffe7450f2cb!2sTOSCROLL%20TECHNOLOGIES%20Pvt.Ltd!5e0!3m2!1sen!2sin!4v1739959723927!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowFullScreen="" className="md:h-[400px] xl:h-full w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='flex h-full justify-between flex-col'>
              <h3 className='text-[40px] lg:text-[65px] xl:text-[85px] font-medium leading-10 mb-10 lg:leading-24 text-[#171717] capitalize'>contact info<span className='inline-block'><GoArrowUpRight className='text-[#d0d0cf]' /></span></h3>
              <div className='grid grid-cols-1 space-y-6'>
                <div>
                  <p className='text-[#7f7f7f] text-[18px]'>Email</p>
                  <h3 className='text-[24px]'>info@havenbuilders.com</h3>
                  <hr className='mt-2 text-[#7f7f7f]' />
                </div>
                <div>
                  <p className='text-[#7f7f7f] text-[18px]'>Phone</p>
                  <h3 className='text-[24px]'>+91 987654321</h3>
                  <hr className='mt-2 text-[#7f7f7f]' />
                </div>
                <div>
                  <p className='text-[#7f7f7f] text-[18px]'>Address</p>
                  <h3 className='text-[24px]'>NJC IT Park, Koluvally, Cherupuzha, Kerala 670511</h3>
                  <hr className='mt-2 text-[#7f7f7f]' />
                </div>
                <div className='flex space-x-2'>
                  <p className='p-2 bg-[#7f7f7f] hover:cursor-pointer rounded-full text-[#eee]'><FaFacebookF size={15} /></p>
                  <p className='p-2 bg-[#7f7f7f] hover:cursor-pointer rounded-full text-[#eee]'><FaLinkedinIn size={15} /></p>
                  <p className='p-2 bg-[#7f7f7f] hover:cursor-pointer rounded-full text-[#eee]'><FaInstagram size={15} /></p>
                  <p className='p-2 bg-[#7f7f7f] hover:cursor-pointer rounded-full text-[#eee]'><PiSkypeLogoBold size={15} /></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
