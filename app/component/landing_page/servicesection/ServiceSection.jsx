"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { services_tags } from '../../data/services_data';

const ServiceSection = () => {
    const [activeService, setActiveService] = useState(services_tags[0].id);
    const [isChanging, setIsChanging] = useState(false);

    const handleMouseEnter = (id) => {
        if (activeService !== id) {
            setIsChanging(true);
            setTimeout(() => {
                setActiveService(id);
                setTimeout(() => {
                    setIsChanging(false);
                }, 50);
            }, 300);
        }
    };
    const activeServiceData = services_tags.find(item => item.id === activeService);
    return (
        <div className="relative pt-16 py-32">
            <div className="container mx-auto px-6 lg:px-12 xl:px-44">
                <div className="flex flex-col md:flex-row gap-10">
                    <div className="w-full lg:w-1/2">
                        <h3 className="text-[40px] lg:text-[85px] font-medium mb-8 lg:mb-20">Our Services</h3>
                        <div className="space-y-3">
                            {services_tags.map((item) => (
                                <div key={item.id}
                                    className="w-full"
                                    onClick={() => handleMouseEnter(item.id)}
                                >
                                    <h3 className={`font-normal text-[24px] md:text-[32px] inline-block hover:cursor-pointer border-b-2 border-transparent ${activeService === item.id ? 'text-black ' : 'text-[#979797] hover:text-[#6d6d6d] hover:border-[#6d6d6d]'} transition-all duration-300 ease-in-out pb-1`}>
                                        {item.tag}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2  self-start">
                        <div className={`relative transition-opacity lg:top-36 duration-500 ease-in-out ${isChanging ? 'opacity-0' : 'opacity-100'}`}>
                            <div className="mb-6 overflow-hidden">
                                <Image
                                    src={activeServiceData.image}
                                    alt={activeServiceData.tag}
                                    width={500}
                                    height={300}
                                    className="w-[400px] h-[450px] object-cover  transition-all duration-600 ease-in-out"
                                />
                            </div>
                            <div className="bg-[#ececec]  transition-all duration-600 ease-in-out  lg:w-[400px] flex flex-col 
                                            justify-center items-start h-[250px] px-10  py-6 md:absolute md:bottom-[-80px] md:right-10 lg:bottom-[-50px] lg:left-[-50px] xl:bottom-[-90px] xl:left-[-190px]">
                                <h3 className="text-2xl font-medium mb-3 text-[#323232] text-left">{activeServiceData.tag}</h3>
                                <p className="text-base text-[#979797] tracking-wide">{activeServiceData.desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceSection;