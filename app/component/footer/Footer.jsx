import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { PiSkypeLogoBold } from "react-icons/pi";
import Link from 'next/link';

const Footer = () => {
    return (
        <div className='relative w-full px-6 lg:px-12 xl:px-44 lg:mt-28 md:mt-36  md:pt-20  bg-[#171717]'>
            <div className='flex flex-col w-full justify-between'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-24'>
                    <div className='flex flex-col gap-5 w-full '>
                        <Link href='/'>
                        <h3 className='font-medium tracking-wider text-[30px] text-[#eee] hover:cursor-pointer'>Haven Builders.</h3>
                        </Link>
                        <p className='text-[#858585]'>Design your Dream House
                        maxime dolor voluptatibus natus</p>
                    </div>
                    <div className='flex flex-col gap-5 w-full '>
                        <h3 className='font-medium tracking-wider text-[22px] text-[#eee]'>Office</h3>
                        <p className='text-[#858585]'>NJC IT Park, Koluvally, Cherupuzha, Kerala 670511</p>
                        <div className='text-[#eee] '>
                            <a href='#' className=' underline hover:cursor-pointer'>info@havenbuilders.com</a>
                            <p className='text-[18px] pt-2'>+91 9876543210</p>
                        </div>                        
                    </div>
                    <div className='flex flex-col gap-5 w-full '>
                        <h3 className='font-medium tracking-wider text-[22px] text-[#eee]'>Links</h3>
                        <Link href='/about'><p className='text-[#858585] hover:cursor-pointer hover:text-[#585858]'>About</p></Link>
                        <Link href='/services'><p className='text-[#858585] hover:cursor-pointer hover:text-[#585858]'>Services</p></Link>
                        <Link href='/projects'><p className='text-[#858585] hover:cursor-pointer hover:text-[#585858]'>Projects</p></Link>
                        <Link href='/blog'><p className='text-[#858585] hover:cursor-pointer hover:text-[#585858]'>Blog</p></Link>
                        <Link href='/contact'><p className='text-[#858585] hover:cursor-pointer hover:text-[#585858]'>Contact</p></Link>
                    </div>
                    <div className='flex flex-col gap-5 w-full '>
                        <h3 className='font-medium tracking-wider text-[22px] text-[#eee]'>Get In Touch</h3>
                        <p className='text-[#858585] flex items-center hover:cursor-pointer hover:text-[#585858]'><span><FaFacebookF  className='mr-3 text-[#eee]'/></span> <a href='#' target='_blank'>Facebook</a></p>
                        <p className='text-[#858585] flex items-center hover:cursor-pointer hover:text-[#585858]'><span><FaLinkedinIn  className='mr-3 text-[#eee]'/></span> <a href='#' target='_blank'>LinkedIn</a></p>
                        <p className='text-[#858585] flex items-center hover:cursor-pointer hover:text-[#585858]'><span><FaInstagram  className='mr-3 text-[#eee]'/></span> <a href='#' target='_blank'>Instagram </a></p>
                        <p className='text-[#858585] flex items-center hover:cursor-pointer hover:text-[#585858]'><span><PiSkypeLogoBold  className='mr-3 text-[#eee]'/></span> <a href='#' target='_blank'>Skype</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
