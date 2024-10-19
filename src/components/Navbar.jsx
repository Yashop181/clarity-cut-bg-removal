import React from 'react'
import { assets } from '../assets/assets'
import { Link } from "react-router-dom"
import { useClerk, useUser , UserButton } from '@clerk/clerk-react'


const Navbar = () => {

    const { openSignIn } = useClerk()
    const { isSignedIn, user } = useUser()
    return (
        <div className="shadow-md border-b-2 p-2 ">
            <div className=' h-[60px] flex justify-between items-center mx-3 lg:mx-44 '>
                <Link to='/'>
                    <img className='w-32 sm:w-44' src={assets.logo} alt="Logo" />
                </Link>
                {
                    isSignedIn ? <div>
                        <UserButton/>
                    </div> :

                        <button onClick={() => { openSignIn({}) }} className='flex gap-4 items-center bg-zinc-800  shadow-sm px-4 py-2 sm:px-8 sm:py-3 text-sm rounded-full text-white '>
                            Get Started
                            <img className='w-3 sm:w-4' src={assets.arrow_icon} alt="Arrow_Icon" />
                        </button>
                }

            </div>
        </div>
    )
}

export default Navbar