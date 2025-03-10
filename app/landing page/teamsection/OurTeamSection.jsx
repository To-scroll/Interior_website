import React from 'react'
import { IoIosArrowRoundDown } from "react-icons/io";
import Image from 'next/image';
import team1 from '../../../public/images/team1.webp'
import team2 from '../../../public/images/team2.webp'
import team3 from '../../../public/images/team3.webp'
import team4 from '../../../public/images/team4.webp'
import team5 from '../../../public/images/team5.webp'
import team6 from '../../../public/images/team6.webp'

const TeamData = [
    {
        id: 1,
        name: "Mathew John",
        image: team1,
        designation: "project manager"
    },
    {
        id: 2,
        name: "Mathew B M",
        image: team2,
        designation: "project manager"
    },
    {
        id: 3,
        name: "Lisa John",
        image: team3,
        designation: "project manager"
    },
    {
        id: 4,
        name: "Prince John",
        image: team4,
        designation: "project manager"
    },
    {
        id: 5,
        name: "Abhishek John",
        image: team5,
        designation: "project manager"
    },
    {
        id: 6,
        name: "Mathew John",
        image: team6,
        designation: "project manager"
    },
]


const OurTeamSection = ({ flag }) => {
    const isAboutPage = flag === 'true';    
    const direction = isAboutPage ? 'rtl' : 'ltr';
    const bgColor = isAboutPage ? 'bg-white' : 'bg-[#efefe9]';
    const arrowColor = isAboutPage ? 'text-[#7f7f7f]' : 'text-[#fff]';
    const textAlign = isAboutPage ? 'text-left' : 'text-right';
    const titleAlign = isAboutPage ? 'text-right' : 'text-left';
    const splitted = TeamData.slice(2);
    
    return (
        <div className={`${bgColor} relative w-full`}>
            <div dir={direction} className='px-6 lg:px-12 xl:px-44 lg:pt-32 py-16'>
                <div className='grid grid-cols-1 lg:grid-cols-2 justify-between'>
                    <div className='flex flex-col flex-1 w-full'>
                        <div className={titleAlign}>
                        <h3 className='text-[40px] lg:text-[85px] font-medium leading-0 lg:leading-20 xl:leading-9 capitalize'>Our Team</h3>
                        </div>
                        <span className='inline-block box-border relative text-[80px] lg:text-[100px] top-7 lg:top-5'>
                            <IoIosArrowRoundDown className={arrowColor} />
                        </span>
                    </div>
                    <div className='grid grid-cols-1 p-5 md:grid-cols-2 gap-10 lg:gap-3 space-x-4 justify-center items-center mt-10 lg:mt-0'>
                        <div className='flex flex-col'>
                            <Image src={TeamData[0].image} alt='team image' width={500} height={500} className='w-full h-[280px] object-cover' />
                            <hr className='my-5 text-[#b1b1b1]'/>
                            <div className={textAlign}>
                            <h3 className='text-[20px] text-[#3b3a3a] font-medium capitalize'>{TeamData[0].name}</h3>
                            <p className='text-[#6b6b6b] font-normal capitalize'>{TeamData[0].designation}</p>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <Image src={TeamData[1].image} alt='team image' width={500} height={500} className='w-full h-[280px] object-cover' />
                            <hr className='my-5 text-[#b1b1b1]'/>
                            <div className={textAlign}>
                            <h3 className='text-[20px] text-[#3b3a3a] font-medium capitalize'>{TeamData[1].name}</h3>
                            <p className='text-[#6b6b6b] font-normal capitalize'>{TeamData[1].designation}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative lg:mt-12 gap-10 lg:gap-3 w-full grid grid-cols-1 p-5 md:grid-cols-2 lg:grid-cols-4 justify-between'>
                    {splitted.map((item) => (
                        <div key={item.id} className='flex flex-col'>
                            <Image src={item.image} alt='team image' width={500} height={500} className='w-full h-[280px] object-cover' />
                            <hr className='my-5 text-[#b1b1b1]'/>
                            <div className={textAlign}>
                            <h3 className='text-[20px] text-[#3b3a3a] font-medium capitalize'>{item.name}</h3>
                            <p className='text-[#6b6b6b] font-normal capitalize'>{item.designation}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OurTeamSection