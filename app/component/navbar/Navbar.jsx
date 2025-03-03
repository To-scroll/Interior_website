"use client";

import React from 'react'
import { IoMdCloseCircleOutline } from "react-icons/io";
import { GoSearch } from "react-icons/go";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useState } from 'react';
import { IoCloseOutline } from "react-icons/io5";
import Image from 'next/image';
import building from '../../../public/images/offcanvas-img.webp'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { PiSkypeLogoBold } from "react-icons/pi";

const navbar_list = [
    {
        id: 1,
        name: "Home",
        icon: <MdKeyboardArrowLeft size={18} />
    },
    {
        id: 2,
        name: "About",
        icon: <MdKeyboardArrowLeft size={18} />
    },
    {
        id: 3,
        name: "Project",
        icon: <MdKeyboardArrowLeft size={18} />
    },
    {
        id: 4,
        name: "Blog",
        icon: <MdKeyboardArrowLeft size={18} />
    },
    {
        id: 5,
        name: "Contact"
    },
]
const Navbar = () => {
    const [isClick, setisClick] = useState(false);
    const [isOpen, setisOpen] = useState(false);
    const openNav = () => {
        setisClick((prev) => !prev);
    }
    const closeNav = () => {
        setisClick(false)
    }
    const openSearch = () => {
        setisOpen((prev) => !prev)
    }
    const closeSearch = () => {
        setisOpen(false)
    }
    return (
        <div className='relative'>
            {/* mobile navbar starts  */}
            <header className='grid'>
                <div className='fixed px-5 py-7 top-0 left-0 right-0 z-30 flex justify-between border-b-2 border-[#eee]  lg:hidden  w-full bg-white '>
                    <div className='grid w-full hover:cursor-pointer '>
                        <h3 className='font-medium tracking-wider text-[30px]'>Interior.</h3>
                    </div>
                    <div className='flex items-center group'>
                        <div onClick={openNav} className='grid space-y-2 hover:cursor-pointer  '>
                            <span className='w-[26px] h-[2px] bg-[#333] border-gray-600 border  '></span>
                            <span className='w-[26px] h-[2px] bg-[#333] border-gray-600 border  '></span>
                            <span className='w-[26px] h-[2px] bg-[#333] border-gray-600 border  '></span>
                        </div>
                    </div>
                </div>

                {isClick && (
                    <nav id='navlist' className='lg:hidden h-screen fixed w-[320px] transform transition-all duration-500 ease-in-out right-0  box-border bg-[#171717] z-40 p-5'>
                        <IoMdCloseCircleOutline size={30} onClick={closeNav} className='text-[#eee] mb-[60px]' />
                        {navbar_list.map((item) => (
                            <ul key={item.id} className='flex flex-col   px-4  w-full border-b-1 border-[#333]  font-semibold text-[#bcbcbc] text-[14px]'>
                                <div className='flex items-center justify-between'>
                                    <li onClick={closeNav} className='p-4  uppercase text-[12px] tracking-wider'>{item.name}</li>
                                    <p>{item.icon}</p>
                                </div>
                            </ul>
                        ))}
                        <div className='flex  pl-6 mt-[60px] space-y-4 flex-col font-medium tracking-tight text-[15px] text-[#eee]'>
                            <div className='flex items-center space-x-4'>
                                <MdMailOutline />
                                <p>info@interior.com</p>
                            </div>
                            <div className='flex items-center space-x-4'>
                                <MdOutlinePhoneInTalk />
                                <p>9876543210</p>
                            </div>
                        </div>
                        <button className='text-[#eee] hover:text-[#333] hover:bg-[#eee] font-semibold border rounded-3xl mt-[60px] ml-6 py-3 px-5'>
                            Contact Us
                        </button>
                    </nav>
                )}
            </header>

            <header className='hidden lg:flex fixed z-50 bg-white px-5 w-full justify-center items-center h-[90px] box-border border-b-2 border-[#eee]'>
                <div className='flex justify-between items-center  w-full z-50 h-full  max-w-[1200px] '>
                    <div className='flex items-center hover:cursor-pointer  pr-[30px] border-r-2 h-full border-[#eee] '>
                        <h3 className='font-medium tracking-wider text-[30px] '>Interior.</h3>
                    </div>
                    <div className='flex items-center space-x-10 text-[#777] text-[17px]  h-full  '>
                        {navbar_list.map((item) => (
                            <ul key={item.id} className='flex hover:cursor-pointer  '>
                                <li>{item.name}</li>
                            </ul>
                        ))}
                    </div>
                    <div className='flex items-center pl-[30px]  border-l-2  border-[#eee] h-full  '>
                        <h3 className='font-bold mr-6'><GoSearch size={25} onClick={openSearch} className='hover:cursor-pointer' /></h3>
                        <div onClick={openNav} className='grid gap-2 group hover:cursor-pointer'>
                            <span className='w-[30px] bg-[#333] border-gray-600 border ml-2 '></span>
                            <span className='w-[30px] bg-[#333] border-gray-600 border group-hover:ml-2 '></span>
                            <span className='w-[30px] bg-[#333] border-gray-600 border ml-2 '></span>
                        </div>
                    </div>
                </div>

                {isOpen && (
                    <div id='searchbar' className='lg:flex pl-44 pr-14 justify-between items-center h-[130px] z-50 fixed w-full transform transition-all duration-500 ease-in-out top-0  box-border bg-[#fcfcfc]  p-5'>
                        <div className='flex w-[35%] space-x-2 items-center'>
                            <input
                                type="text"
                                id="search"
                                name="fname"
                                required
                                className="border-b-2 w-full border-[#edebeb] p-2 focus:outline-none focus:ring-0 "
                                placeholder="Type your keyword"
                            />
                            <button><GoSearch size={25} className='text-[#333] hover:cursor-pointer ' /></button>
                        </div>
                        <IoCloseOutline size={40} onClick={closeSearch} className='text-[#171717]  hover:cursor-pointer' />
                    </div>
                )}

                {isClick && (
                    <div id='sidebar' className='lg:block h-screen fixed w-[400px] transform transition-all duration-500 ease-in-out top-0 right-0    bg-[#171717] z-50 py-10 px-10'>
                        <div className='flex my-5 border-b-2 border-[#333]  justify-between w-full hover:cursor-pointer '>
                            <h3 className='font-medium tracking-wider text-[#eee] text-[30px]'>Interior.</h3>
                            <IoCloseOutline size={30} onClick={closeNav} className='text-[#eee] mb-[60px]' />
                        </div>
                        <div className='text-[#eee] leading-7 pb-5'>
                            <p>Welcome to Archipix, a full service architecture and interior design firm. We specialize in creating beautiful, functional spaces that reflect your unique style.</p>
                        </div>
                        <div>
                            <Image src={building} className='w-full ' alt='building-image' width={1000} height={1000} />
                        </div>
                        <button className='text-[#eee] hover:text-[#333] hover:bg-[#eee] hover:cursor-pointer  font-semibold border rounded-4xl mt-[25px] py-4 px-9'>
                            Get In Touch
                        </button>
                        <div className='flex space-x-3 mt-[35px]'>
                            <p className='p-4 rounded-full bg-[#18222b] hover:cursor-pointer  text-[16px] hover:bg-[#171717] text-[#eee]'><FaFacebookF /></p>
                            <p className='p-4 rounded-full bg-[#18222b] hover:cursor-pointer  text-[16px] hover:bg-[#171717] text-[#eee]'><FaLinkedinIn /></p>
                            <p className='p-4 rounded-full bg-[#18222b] hover:cursor-pointer  text-[16px] hover:bg-[#171717] text-[#eee]'><FaInstagram /></p>
                            <p className='p-4 rounded-full bg-[#18222b] hover:cursor-pointer  text-[16px] hover:bg-[#171717] text-[#eee]'><PiSkypeLogoBold /></p>
                        </div>
                    </div>
                )}
            </header>
        </div>
    )
}
export default Navbar
