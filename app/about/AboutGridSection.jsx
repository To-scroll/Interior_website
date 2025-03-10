import React from 'react'
import Image from 'next/image'
import building1 from '../../public/images/carousel-2.webp'

const historydata = [
    {
        id: 1,
        title: "Interior Founding",
        year: "1995",
        desc: "The company is founded by John Smith, an experienced architect with a passion for sustainable design."
    },
    {
        id: 2,
        title: "Completing The First Project",
        year: "1996 - 1998",
        desc: "The company completes its first major project, a LEED-certified office building that sets a new standard."
    },
    {
        id: 3,
        title: "Expanding Services",
        year: "2001",
        desc: "The company expands its services to include interior design, and hires its first interior designer."
    },
]

const AboutGridSection = () => {
    return (
        <div className='relative w-full px-6 lg:px-12 xl:px-40 mt-10 pb-28 md:pb-40'>
            <div className='flex flex-col relative justify-between'>
                <div className='grid grid-cols-1 space-y-4 lg:space-y-0 lg:grid-cols-3 justify-between items-center relative p-3 w-full'>
                    <Image src={building1} className='w-full h-[220px]' alt='building image' height={500} width={500}  />
                    <div className='p-5 w-full flex flex-col space-y-4 items-center text-center'>
                        <h3 className='text-[20px] text-[#171717] font-normal'>{historydata[0].title}</h3>
                        <p className='text-[18px] text-[#7f7f7f] font-normal'>{historydata[0].year}</p>
                        <p className='text-[#7f7f7f] tracking-wider font-normal'>{historydata[0].desc}</p>
                    </div>
                    <Image src={building1} className='w-full h-[220px]' alt='building image' height={500} width={500}  />
                </div>
                <hr className='my-14 text-[#878787]'/>
                <div className='grid grid-cols-1 space-y-4 lg:space-y-0 lg:grid-cols-3 justify-between items-center w-full p-3'>                    
                    <div className='p-5 w-full flex flex-col space-y-4 items-center text-center'>
                        <h3 className='text-[20px] text-[#171717] font-normal'>{historydata[1].title}</h3>
                        <p className='text-[18px] text-[#7f7f7f] font-normal'>{historydata[1].year}</p>
                        <p className='text-[#7f7f7f] tracking-wider font-normal'>{historydata[1].desc}</p>
                    </div>
                    <Image src={building1} className='w-full h-[220px]' alt='building image' height={500} width={500}  />
                    <div className='p-5 w-full flex flex-col space-y-4 items-center text-center'>
                        <h3 className='text-[20px] text-[#171717] font-normal'>{historydata[2].title}</h3>
                        <p className='text-[18px] text-[#7f7f7f] font-normal'>{historydata[2].year}</p>
                        <p className='text-[#7f7f7f] tracking-wider font-normal'>{historydata[2].desc}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutGridSection
