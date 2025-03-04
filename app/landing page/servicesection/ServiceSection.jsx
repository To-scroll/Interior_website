"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import building1 from '../../../public/images/carousel-1.webp';
import building2 from '../../../public/images/carousel-2.webp';
import building3 from '../../../public/images/carousel-3.webp';
import building4 from '../../../public/images/carousel-1.webp';
import building5 from '../../../public/images/carousel-2.webp';
import building6 from '../../../public/images/carousel-3.webp';


const services_tags = [
    {
        id: 1,
        tag: "Architectural Design",
        image: building1,
        desc: "Proin imperdiet magna sit amet mollis luctus. Quisque id leo quis diam dapibus ultricies fringilla vitae neque."
    },
    {
        id: 2,
        tag: "Interior Design",
        image: building2,
        desc: "Mauris faucibus nisl eu mi egestas blandit. Quisque consectetur urna ac viverra iaculis. Ut turpis velit, consectetur ut tempus a, cursus id nulla."
    },
    {
        id: 3,
        tag: "Project Management",
        image: building3,
        desc: "Proin imperdiet magna sit amet mollis luctus. Quisque id leo quis diam dapibus ultricies fringilla vitae neque."
    },
    {
        id: 4,
        tag: "Historic Preservation",
        image: building4,
        desc: "Mauris faucibus nisl eu mi egestas blandit. Quisque consectetur urna ac viverra iaculis. Ut turpis velit, consectetur ut tempus a, cursus id nulla."
    },
    {
        id: 5,
        tag: "Landscape Design",
        image: building5,
        desc: "Mauris faucibus nisl eu mi egestas blandit. Quisque consectetur urna ac viverra iaculis. Ut turpis velit, consectetur ut tempus a, cursus id nulla."
    },
    {
        id: 6,
        tag: "Furniture Remodel",
        image: building6,
        desc: "Proin imperdiet magna sit amet mollis luctus. Quisque id leo quis diam dapibus ultricies fringilla vitae neque."
    },
];

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