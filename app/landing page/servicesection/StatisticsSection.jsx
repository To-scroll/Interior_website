import React from 'react'

const stats = [
    {
        id: 1,
        value: "1234",
        tag: "Project Completed",
    },
    {
        id: 2,
        value: "134",
        tag: "Qualified Team",
    },
    {
        id: 3,
        value: "90%",
        tag: "Client Satisfaction",
    },
    {
        id: 4,
        value: "20+",
        tag: "Years of Experience",
    },
]

const StatisticsSection = () => {
    return (
        <div className='relative w-full '>
            <div className='relative flex justify-center py-10 lg:py-24  items-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10  max-w-[1200px] justify-center items-center '>
                    {stats.map((item) => (
                        <div key={item.id} className='p-4 '>
                            <h3 className='font-medium text-[75px] md:pr-20 border-b-[0.5px] border-[#ddd] text-[#171717] '>{item.value}</h3>
                            <p className='text-[#7f7f7f] mt-3 font-normal tracking-wide'>{item.tag}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default StatisticsSection
