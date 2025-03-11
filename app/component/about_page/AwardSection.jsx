import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

const awards = [
    {
        id: 1,
        award: "AIA Award",
        year: "2024"
    },
    {
        id: 2,
        award: "ASID Award",
        year: "2023"
    },
    {
        id: 3,
        award: "Leed Gold Certify",
        year: "2000"
    }
]

const AwardSection = () => {
    return (
        <div className='relative flex justify-center pt-20 pb-20 lg:pb-10 px-6 lg:px-12 xl:px-40 items-center'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10 border-y-2 border-slate-200 w-full justify-center items-center '>
                {awards.map((item) => (
                    <div key={item.id} className='py-4 lg:py-8 flex items-end space-x-8 '>
                        <p className='pb-2'><GoArrowUpRight className='w-10 h-10 p-2 border rounded-full border-[#d3d3d3] text-[#7f7f7f]'/></p>
                        <div className='flex flex-col '>
                            <p className='font-normal text-[#7f7f7f]'>{item.year}</p>
                            <h3 className='text-[#171717] text-[22px] xl:text-[35px] mt-3 font-normal tracking-wide'>{item.award}</h3>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default AwardSection
