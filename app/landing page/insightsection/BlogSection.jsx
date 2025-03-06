import { BlogData } from '@/app/component/data/blog_data'
import React from 'react'
import Image from 'next/image'

const BlogSection = () => {
    return (
        <div className='relative w-full px-6 lg:px-12 xl:px-44 lg:mt-32 my-15 md:my-10'>
            <div className='flex flex-col w-full justify-between'>
                <h3 className='text-[40px] lg:text-[85px] font-medium leading-10 lg:leading-24 mb-10 capitalize'>design insight</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
                    {BlogData.map((item) => (
                        <div key={item.id} className='flex flex-col'>
                            <Image src={item.image} alt='blog image' width={1000} height={1000} className='w-full h-[400px]'/>
                            <h3 className='my-5 text-[#858585] '>{item.tag}</h3>
                            <h3 className='mb-5 text-[#4d4d4d] text-[20px] hover:underline hover:cursor-pointer'>{item.title}</h3>
                            <div className='flex justify-between w-full text-[#858585] '>
                            <h3>{item.author}</h3>
                            <h3>{item.date}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default BlogSection
