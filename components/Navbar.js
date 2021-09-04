import React, { useState, useEffect } from 'react'
import { FaMicrophoneAlt } from "react-icons/fa";
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link'

const Navbar = () => {

    return (


        <>

            {/* Navigation Bar on large screens */}
            <nav className='fixed top-0 w-full z-30 bg-chblack nav bordered  text-chgreen py-3 px-6 md:px-12 border-b border-chborder'>
                <Link href="/">
                    <a className='flex items-center'>
                        <div><p className='text-lg'>ChocCity</p></div>
                        <div><FaMicrophoneAlt className='text-chgreen' /></div>
                    </a>
                </Link>
            </nav>
        </>

    )
}

export default Navbar
