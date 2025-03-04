import React from 'react';
import Image from 'next/image';
import building from '../../../public/images/about-2.webp';
import building2 from '../../../public/images/carousel-3.webp';
import { GoArrowUpRight } from "react-icons/go";

const PicturegridSection = () => {
    return (
        <div className="relative w-full px-6 md:px-0 ">
            <div className="flex flex-col md:flex-row space-y-5  mb-7 md:mb-15">
                <div className="flex-2 relative group mr-5">
                    <Image src={building} alt="building image" width={460} height={460} className="w-full h-[460px] object-cover" />
                    <div className="absolute bottom-0 left-0 bg-[#171717] p-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className='flex space-x-10 items-center'>
                            <div>
                                <h3 className='font-medium hover:underline text-[22px]'>Mediterranian Villa</h3>
                                <p className='font-normal text-[#e7e7e7]'>Architecture</p>
                            </div>
                            <p><GoArrowUpRight size={50} className='border-white border rounded-full p-3 text-white ' /></p>
                        </div>
                    </div>
                </div>
                <div className="flex-1 relative group">
                    <Image src={building2} alt="building image" width={300} height={300} className="w-full h-[460px] object-cover" />
                    <div className="absolute bottom-0 left-0 bg-[#171717] p-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className='flex space-x-10 items-center'>
                            <div>
                                <h3 className='font-medium hover:underline text-[22px]'>Mediterranian Villa</h3>
                                <p className='font-normal text-[#e7e7e7]'>Architecture</p>
                            </div>
                            <p><GoArrowUpRight size={50} className='border-white border rounded-full p-3 text-white ' /></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row space-y-5 mb-5">
                <div className="flex-1 relative group mr-5">
                    <Image src={building2} alt="building image" width={300} height={300} className="w-full h-[460px] object-cover" />
                    <div className="absolute bottom-0 left-0 bg-[#171717] p-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className='flex space-x-10 items-center'>
                            <div>
                                <h3 className='font-medium hover:underline text-[22px]'>Mediterranian Villa</h3>
                                <p className='font-normal text-[#e7e7e7]'>Architecture</p>
                            </div>
                            <p><GoArrowUpRight size={50} className='border-white border rounded-full p-3 text-white ' /></p>
                        </div>
                    </div>
                </div>
                <div className="flex-2 relative group">
                    <Image src={building} alt="building image" width={460} height={460} className="w-full h-[460px] object-cover" />
                    <div className="absolute bottom-0 left-0 bg-[#171717] p-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className='flex space-x-10 items-center'>
                            <div>
                                <h3 className='font-medium hover:underline text-[22px]'>Mediterranian Villa</h3>
                                <p className='font-normal text-[#e7e7e7]'>Architecture</p>
                            </div>
                            <p><GoArrowUpRight size={50} className='border-white border rounded-full p-3 text-white ' /></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PicturegridSection;
