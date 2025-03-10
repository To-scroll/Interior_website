"use client";
import React from 'react'
import { RxSlash } from "react-icons/rx";
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Breadcrumbs = () => {
    const pathname = usePathname()
    const BreadcrumbsArray = pathname.split('/')
    BreadcrumbsArray.shift()
    return (
        <div className='bg-white  px-5 md:px-10 lg:px-16 xl:px-40 py-10 flex flex-col md:flex-row justify-between items-start md:items-center'>
            <div className='flex  justify-center items-center text-[#666] space-x-3'>
                <Link href='/'>
                    <h3 className=' hover:cursor-pointer'>Home</h3>
                </Link>

                {BreadcrumbsArray.map((item, index) => {
                    const href = '/' +
                        BreadcrumbsArray.slice(0, index + 1).join('/');
                    return (
                        <div key={index} className='flex items-center'>
                           <span className='inline-block'><RxSlash className='text-[#d0d0cf]' /></span>
                            <li className='list-none capitalize pl-3  hover:transition delay-50 duration-300 ease-in'>
                                <Link href={href}>
                                    {item}
                                </Link>
                            </li>
                        </div>
                    );
                })}
            </div>
            
        </div>
    )
}

export default Breadcrumbs
