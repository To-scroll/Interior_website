import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { PiSkypeLogoBold } from "react-icons/pi";
import Link from 'next/link';

const Footer = () => {
    return (
        <div className='relative w-full px-6 lg:px-12 xl:px-44 lg:mt-32 mt-15 md:mt-10 bg-[#171717]'>
            <div className='flex flex-col w-full justify-between'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-24'>

                    <div className='flex flex-col gap-5 w-full '>
                        <Link href='/'>
                        <h3 className='font-medium tracking-wider text-[30px] text-[#eee] hover:cursor-pointer'>Interior.</h3>
                        </Link>
                        <p className='text-[#858585]'>Design your Dream House
                        maxime dolor voluptatibus natus</p>
                    </div>

                    <div className='flex flex-col gap-5 w-full '>
                        <h3 className='font-medium tracking-wider text-[22px] text-[#eee]'>Office</h3>
                        <p className='text-[#858585]'>Corporate Office-
                        175 24th Street, DW-1 3567 London, UK 265</p>
                        <div className='text-[#eee] '>
                            <a href='#' className=' underline hover:cursor-pointer'>info@interior.com</a>
                            <p className='text-[18px] pt-2'>+91 9876543210</p>
                        </div>                        
                    </div>

                    <div className='flex flex-col gap-5 w-full '>
                        <h3 className='font-medium tracking-wider text-[22px] text-[#eee]'>Links</h3>
                        <p className='text-[#858585] hover:cursor-pointer hover:text-[#585858]'>About</p>
                        <p className='text-[#858585] hover:cursor-pointer hover:text-[#585858]'>Services</p>
                        <p className='text-[#858585] hover:cursor-pointer hover:text-[#585858]'>Projects</p>
                        <p className='text-[#858585] hover:cursor-pointer hover:text-[#585858]'>Blog</p>
                        <p className='text-[#858585] hover:cursor-pointer hover:text-[#585858]'>Contact</p>
                    </div>
                    <div className='flex flex-col gap-5 w-full '>
                        <h3 className='font-medium tracking-wider text-[22px] text-[#eee]'>Get In Touch</h3>
                        <p className='text-[#858585] flex items-center hover:cursor-pointer hover:text-[#585858]'><span><FaFacebookF  className='mr-3 text-[#eee]'/></span> Facebook</p>
                        <p className='text-[#858585] flex items-center hover:cursor-pointer hover:text-[#585858]'><span><FaLinkedinIn  className='mr-3 text-[#eee]'/></span> LinkedinIn</p>
                        <p className='text-[#858585] flex items-center hover:cursor-pointer hover:text-[#585858]'><span><FaInstagram  className='mr-3 text-[#eee]'/></span> Instagram </p>
                        <p className='text-[#858585] flex items-center hover:cursor-pointer hover:text-[#585858]'><span><PiSkypeLogoBold  className='mr-3 text-[#eee]'/></span> Skype</p>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer
