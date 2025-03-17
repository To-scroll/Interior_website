import React from 'react'
import Image from 'next/image'
import toscrolllogo from '../../../public/images/toscroll_logo_white.png'

const BottomFooter = () => {
    return (
        <div className='relative w-full px-6 lg:px-12 xl:px-44   bg-[#171717]'>
            <hr className='text-[#ddd]' />
            <div className='flex flex-col gap-4 md:flex-row  w-full justify-between md:items-center font-medium text-[#eee] py-5'>
                <h3>&copy;2025 Haven Builders.<br/> All rights reserved.</h3>
                <h3 className='flex gap-2 items-center underline'>Website by<a href='https://toscroll.com/' target='_blank'><Image src={toscrolllogo} className='w-[75px] md:w-20' alt='toscroll logo' width={150} height={150} /></a></h3>
                <h3 className='md:text-end'>Privacy Policy |<br /> Terms & Conditions</h3>
            </div>
        </div>
    )
}

export default BottomFooter
