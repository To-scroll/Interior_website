"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { services_tags } from '../data/services_data';
import { IoMdClose } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";

const FeaturedWorksSection = () => {
    const [activeTagIndex, setActiveTagIndex] = useState(0);
    const [showAll, setShowAll] = useState(false);
    const [visibleImages, setVisibleImages] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [clickedImageIndex, setClickedImageIndex] = useState(0);

    useEffect(() => {
        setShowAll(false);
        updateVisibleImages();
    }, [activeTagIndex]);

    useEffect(() => {
        updateVisibleImages();
    }, [showAll]);

    const updateVisibleImages = () => {
        const activeImages = services_tags[activeTagIndex].images;
        if (showAll) {
            setVisibleImages(activeImages);
        } else {
            setVisibleImages(activeImages.slice(0, 4));
        }
    };

    const handleTagClick = (index) => {
        setActiveTagIndex(index);
    };

    const handleLoadMore = () => {
        setShowAll(true);
    };

    const openModal = (index) => {
        setClickedImageIndex(index);
        setModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setModalOpen(false);
        document.body.style.overflow = 'auto';
    };

    const handleThumbnailClick = (index) => {
        setClickedImageIndex(index);
    };

    const allCategoryImages = services_tags[activeTagIndex].images;

    const goToNextImage = () => {
        const totalImages = allCategoryImages.length;
        setClickedImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
    };

    const goToPrevImage = () => {
        const totalImages = allCategoryImages.length;
        setClickedImageIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
    };

    const hasMoreImages = services_tags[activeTagIndex].images.length > 4;

    return (
        <div className='w-full px-6 lg:px-12 xl:px-40 pt-10'>
            <div className="flex flex-col relative justify-between">
                <h3 className="text-[40px] lg:text-[85px] mb-10 font-medium leading-10 lg:leading-[96px] capitalize">our featured works</h3>
                <div className='relative'>
                    <div className='flex flex-col md:flex-row md:flex-wrap lg:flex-row md:space-x-14 items-center text-[#333]'>
                        {services_tags.map((item, index) => (
                            <div
                                key={item.id}
                                className='relative'
                                onClick={() => handleTagClick(index)} >
                                <h3 className={`hover:cursor-pointer py-5 ${activeTagIndex === index ? 'font-medium border-b-[3px] border-[#777]' : ''}`}>
                                    {item.tag}
                                </h3>
                            </div>
                        ))}
                    </div>
                    <hr className="w-full border-t border-gray-300" />
                </div>
                {/* <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 h-full  justify-between">
                    <div className='w-full relative group'>
                        <Image src={services_tags[activeTagIndex].image3} alt='building image' className='h-[400px] md:h-[450px] lg:h-[400px] xl:h-[520px] w-full object-cover' />
                        <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300'></div>
                        <div className='absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                            <h3 className='text-4xl font-bold'>01</h3>
                            <h3 className='text-[32px]'>{services_tags[activeTagIndex].title1}</h3>
                        </div>
                    </div>
                    <div className='w-full relative group'>
                        <Image src={services_tags[activeTagIndex].image1} alt='building image' className='h-[400px] md:h-[450px] lg:h-[400px] xl:h-[520px] w-full object-cover' />
                        <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300'></div>
                        <div className='absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                            <h3 className='text-4xl font-bold'>02</h3>
                            <h3 className='text-[32px]'>{services_tags[activeTagIndex].title2}</h3>
                        </div>
                    </div>
                    <div className='w-full relative group'>
                        <Image src={services_tags[activeTagIndex].image2} alt='building image' className='h-[400px] md:h-[450px] lg:h-[400px] xl:h-[520px] w-full object-cover' />
                        <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300'></div>
                        <div className='absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                            <h3 className='text-4xl font-bold'>03</h3>
                            <h3 className='text-[32px]'>{services_tags[activeTagIndex].title3}</h3>
                        </div>
                    </div>
                </div> */}

                <div className='mt-8 grid grid-cols-1 md:grid-cols-2  gap-4'>
                    {visibleImages.map((image, index) => (
                        <div key={index} className='relative aspect-video overflow-hidden' onClick={() => openModal(index)}>
                            <Image src={image}
                                alt='architectural designs'
                                className='object-cover w-full h-full '
                            />
                        </div>
                    ))}
                </div>
                {hasMoreImages && !showAll && (
                    <div className='flex justify-center mt-8'>
                        <button
                            onClick={handleLoadMore}
                            className='px-6 py-3 bg-[#333] text-white hover:bg-[#555] transition-colors duration-300 font-medium'>
                            Load More
                        </button>
                    </div>
                )}
            </div>
            {modalOpen && (
                <div className="fixed inset-0 bg-[#0d0d0de0] z-50 flex flex-col h-screen justify-center items-center px-4">
                    <button onClick={closeModal} className="absolute top-4 right-4 text-[#e3e3e3] text-4xl hover:text-gray-400 hover:cursor-pointer focus:outline-none">
                        <IoMdClose />
                    </button>
                    <div className=" md:w-2xl lg:min-w-4xl lg:h-3/4 relative   mb-4">
                        <Image
                            src={allCategoryImages[clickedImageIndex]}
                            alt='architectural designs'
                            className="object-contain  max-h-11/12"
                        />                       
                    </div>
                    <button
                            onClick={goToPrevImage}
                            className="absolute hover:cursor-pointer left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 text-black w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center hover:bg-opacity-70 transition-all duration-200 focus:outline-none"
                            aria-label="Previous image">
                            <IoArrowBack />
                        </button>
                        <button
                            onClick={goToNextImage}
                            className="absolute hover:cursor-pointer right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 text-black w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center hover:bg-opacity-70 transition-all duration-200 focus:outline-none"
                            aria-label="Next image" >
                            <IoArrowBack className='scale-x-[-1]' />
                        </button>
                    <div className="flex  overflow-x-auto  no-scrollbar gap-2 p-2 max-w-7xl">
                        {allCategoryImages.map((image, index) => (
                            <div
                                key={index}
                                className={`relative h-22 w-32  flex-shrink-0 cursor-pointer ${clickedImageIndex === index ? 'border-2 border-black' : ''}`}
                                onClick={() => handleThumbnailClick(index)} >
                                <Image
                                    src={image}
                                    alt='bildings'
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default FeaturedWorksSection;