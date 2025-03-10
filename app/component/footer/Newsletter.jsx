import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

const Newsletter = () => {
    return (
        <div className='bg-white relative  w-full min-h-[200px]  xl:px-40 pt-10'>
            <div className='md:absolute  left-0 top-0 lg:top-10 xl:top-28  right-0 xl:mx-40 z-20 bg-[#efefe9] max-w-7xl md:px-20 md:py-5 lg:px-10 lg:py-5'>
                <div className='flex flex-col lg:flex-row items-start md:items-center justify-between lg:gap-10 '>
                    <h3 className='flex  p-6 text-[40px] md:text-[56px] text-[#333] capitalize font-medium whitespace-nowrap'>
                        stay up-To-date<br /> with Interior
                    </h3>
                    <div className='flex flex-col w-full p-5 lg:p-10 xl:p-20'>
                        <h3 className='md:text-[18px] text-[#7f7f7f]  leading-8 mb-5'>Sign up for our newsletter to stay in the know about our latest projects, design insight and industry news.</h3>
                        <div className="relative w-full">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full bg-transparent border border-gray-400 rounded-full p-4   focus:outline-none"
                                placeholder="Type your Email"
                            />
                            <button 
                                type="submit"
                                className="absolute right-0 top-0 bottom-0 border border-gray-400 rounded-3xl text-black hover:text-white hover:bg-[#171717] font-semibold m-2 px-6"
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter