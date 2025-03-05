import React from 'react'
import { IoArrowForwardSharp } from "react-icons/io5";

const WorkingCards = [
    {
        id: 1,
        title: "Initial Consultation",
        desc: "Maecenas fermentum maximus dui aliquet mollis. Suspendisse leo lorem, tincidunt dictum interdum eu, fringilla non orci. Duis condimentum leo sit amet massa imperdiet.",
    },
    {
        id: 2,
        title: "Design Concept",
        desc: "Praesent eget eros eget nisl lacinia pretium. Phasellus mi ligula, luctus quis leo ac, efficitur aliquet nulla. Sed vehicula, tellus ut volutpat finibus, ex sem.",
    },
    {
        id: 3,
        title: "Construction",
        desc: "Phasellus at lobortis nisi, sed sollicitudin diam. Vivamus fringilla sit amet eros in hendrerit. Fusce cursus interdum risus, et lacinia mi ultrices ac. Morbi quis.",
    },
    {
        id: 4,
        title: "Final Work-Through",
        desc: "Vestibulum vitae consequat enim. Nam ac massa ac risus convallis fringilla eu varius nunc. Phasellus congue sodales est, ut condimentum mi efficitur id. In euismod.",
    },
    {
        id: 5,
        title: "Follow Up",
        desc: "Maecenas fermentum maximus dui aliquet mollis. Suspendisse leo lorem, tincidunt dictum interdum eu, fringilla non orci. Duis condimentum leo sit amet massa imperdiet.",
    }
]

const HowWorksSection = () => {
    return (
        <div className='relative w-full px-6 lg:px-12 xl:px-44 lg:mt-32 my-10'>
            <div className='flex flex-col w-full justify-between'>
                <h3 className='text-[40px] lg:text-[85px] font-medium leading-10 lg:leading-24 mb-10'>How it Works</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    <div className='lg:col-span-1 '>
                        <div className='p-7 border-t-[1px] border-[#ddd]'>
                            <div className='relative flex items-center'>
                                <h2 className='text-[50px] font-normal mb-2   '>0{WorkingCards[0].id}</h2>
                                <div className='bg-[#ddd] absolute w-[1px] h-[90px] top-[-28px] left-[-28px]'></div>
                                <IoArrowForwardSharp className='text-[#ddd] size-20  pl-[28px]' />
                            </div>
                            <h3 className='text-2xl  my-6 text-[#171717] font-normal'>{WorkingCards[0].title}</h3>
                            <p className='text-[#7f7f7f] leading-7 tracking-wide'>{WorkingCards[0].desc}</p>
                        </div>
                    </div>
                    <div className='lg:col-span-1 '>
                        <div className='p-7 border-t-[1px] border-[#ddd]'>
                            <div className='relative flex items-center'>
                                <h2 className='text-[50px] font-normal mb-2   '>0{WorkingCards[1].id}</h2>
                                <div className='bg-[#ddd] absolute w-[1px] h-[90px] top-[-28px] left-[-28px]'></div>
                                <IoArrowForwardSharp className='text-[#ddd] size-20  pl-[28px]' />
                            </div>
                            <h3 className='text-2xl  my-6 text-[#171717] font-normal'>{WorkingCards[1].title}</h3>
                            <p className='text-[#7f7f7f] leading-7 tracking-wide'>{WorkingCards[1].desc}</p>
                        </div>
                    </div>
                    <div className='lg:col-span-1 '>
                        <div className='p-7 border-t-[1px] border-[#ddd]'>
                            <div className='relative flex items-center'>
                                <h2 className='text-[50px] font-normal mb-2   '>0{WorkingCards[2].id}</h2>
                                <div className='bg-[#ddd] absolute w-[1px] h-[90px] top-[-28px] left-[-28px]'></div>
                                <IoArrowForwardSharp className='text-[#ddd] size-20  pl-[28px]' />
                            </div>
                            <h3 className='text-2xl  my-6 text-[#171717] font-normal'>{WorkingCards[2].title}</h3>
                            <p className='text-[#7f7f7f] leading-7 tracking-wide'>{WorkingCards[2].desc}</p>
                        </div>
                    </div>

                    <div className='lg:col-start-2 lg:col-span-1 lg:mt-6'>
                        <div className='p-7 border-t-[1px] border-[#ddd]'>
                            <div className='relative flex items-center'>
                                <h2 className='text-[50px] font-normal mb-2   '>0{WorkingCards[3].id}</h2>
                                <div className='bg-[#ddd] absolute w-[1px] h-[90px] top-[-28px] left-[-28px]'></div>
                                <IoArrowForwardSharp className='text-[#ddd] size-20  pl-[28px]' />
                            </div>
                            <h3 className='text-2xl  my-6 text-[#171717] font-normal'>{WorkingCards[3].title}</h3>
                            <p className='text-[#7f7f7f] leading-7 tracking-wide'>{WorkingCards[3].desc}</p>
                        </div>
                    </div>
                    <div className='lg:col-start-3 lg:col-span-1 lg:mt-6'>
                        <div className='p-7 border-t-[1px] border-[#ddd]'>
                            <div className='relative flex items-center'>
                                <h2 className='text-[50px] font-normal mb-2   '>0{WorkingCards[4].id}</h2>
                                <div className='bg-[#ddd] absolute w-[1px] h-[90px] top-[-28px] left-[-28px]'></div>
                                <IoArrowForwardSharp className='text-[#ddd] size-20  pl-[28px]' />
                            </div>
                            <h3 className='text-2xl  my-6 text-[#171717] font-normal'>{WorkingCards[4].title}</h3>
                            <p className='text-[#7f7f7f] leading-7 tracking-wide'>{WorkingCards[4].desc}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HowWorksSection