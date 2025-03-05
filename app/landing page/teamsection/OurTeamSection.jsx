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


const OurTeamSection = () => {
    const splitted = TeamData.splice(2);
    console.log(splitted);
    return (
        <div className='bg-[#efefe9] relative w-full'>
            <div className=' px-6 lg:px-12 xl:px-44 lg:pt-32 py-16'>
                <div className='flex flex-col lg:flex-row justify-between'>
                    <div className='flex flex-col flex-1  w-full '>
                        <h3 className='text-[40px] lg:text-[85px] font-medium leading-0 lg:leading-9 text-left capitalize'>Our Team</h3>
                        <span className='inline-block box-border relative text-[80px] lg:text-[100px] top-7 lg:top-5'>
                            <IoIosArrowRoundDown className='text-[#fff]' />
                        </span>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 space-x-4 justify-center items-center '>
                        <div className='flex flex-col'>
                            <Image src={TeamData[0].image} alt='team image' width={500} height={500} className='w-[280px] h-[280px]' />
                            <hr className='my-5 text-[#b1b1b1]'/>
                            <h3  className='text-[20px] text-[#3b3a3a] font-medium capitalize'>{TeamData[0].name}</h3>
                            <p className=' text-[#6b6b6b] font-normal capitalize'>{TeamData[0].designation}</p>
                        </div>
                        <div className='flex flex-col'>
                            <Image src={TeamData[1].image} alt='team image' width={500} height={500} className='w-[280px] h-[280px]' />
                            <hr className='my-5 text-[#b1b1b1]'/>
                            <h3  className='text-[20px] text-[#3b3a3a] font-medium capitalize'>{TeamData[1].name}</h3>
                            <p className=' text-[#6b6b6b] font-normal capitalize'>{TeamData[1].designation}</p>
                        </div>
                    </div>
                </div>
                <div className='relative mt-12 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between'>
                    {splitted.map((item) => (
                        <div key={item.id} className='flex flex-col '>
                            <Image src={item.image} alt='team image' width={500} height={500} className='w-[280px] h-[280px]' />
                            <hr className='my-5 text-[#b1b1b1]'/>
                            <h3 className='text-[20px] text-[#3b3a3a] font-medium capitalize'>{item.name}</h3>
                            <p className=' text-[#6b6b6b] font-normal capitalize'>{item.designation}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default OurTeamSection
