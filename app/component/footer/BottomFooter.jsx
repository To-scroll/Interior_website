import React from 'react'

const BottomFooter = () => {
    return (
        <div className='relative w-full px-6 lg:px-12 xl:px-44   bg-[#171717]'>
            <hr className='text-[#ddd]' />
            <div className='flex flex-col gap-3 md:flex-row  w-full justify-between font-medium text-[#eee] py-5'>
                <h3>&copy;2025 Interior. All rights reserved.</h3>
                <h3>Website by <span className='underline hover:cursor-pointer'><a href='https://toscroll.com/' target='_blank'>Toscroll Technologies</a></span></h3>
                <h3>Privacy Policy | Terms & Conditions</h3>
            </div>

        </div>
    )
}

export default BottomFooter
