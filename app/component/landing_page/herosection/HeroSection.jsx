import React from 'react'
import Image from 'next/image'
import tagimage from '../../../../public/images/headline-img.webp'

const HeroSection = () => {
    return (
        <section className='pt-40 pb-20  lg:pt-[180px] lg:pb-[80px] relative justify-center items-center'>
            <div className='items-center justify-center text-center flex flex-col'>
                <div className='text-[40px] leading-[50px] md:text-[50px] lg:text-[70px] xl:text-[90px] relative font-medium lg:leading-[100px] tracking-tight text-[#171717]'>Transform <span className='hidden lg:inline-block'><Image src={tagimage} className='rounded-4xl w-[150px] h-[70px]' alt='tag-image' width={1000} height={1000} /></span> Spaces<br /> Into Works of Art
                </div>
                <div className='box-border relative text-[18px] font-normal leading-[27px] text-[#7f7f7f] '>
                    <p className='mt-[40px] px-3'>Our team of expert designers works closely with clients to create unique, functional and beautiful spaces <br />
                        that are tailored to their specific needs and preferences.</p>
                </div>
            </div>
        </section>
    )
}
export default HeroSection
