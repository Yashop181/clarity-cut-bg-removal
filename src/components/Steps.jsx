import React from 'react'
import { assets } from '../assets/assets'

const Steps = () => {
    return (
        <div className=' mx-4 lg:mx-44 py-20 xl:py-40 '>
            <h1 className='bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold'>
                Steps to remove background <br className='max-md:hidden' /> image in seconds
            </h1>
            <div className='flex items-start flex-wrap gap-4 mt-16 xl:mt-24 justify-center'>
               <div className='flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded-md hover:scale-105 transition-all duration-500 '>
               <img className='max-w-9' src={assets.upload_icon} alt="Upload Icon" />
                <div>
                    <p className='text-xl font-medium'>Upload Image</p>
                    <p className='mt-1text-sm text-neutral-500'>This is a demo text. <br /> it will be removed later </p>
                </div>
               </div>
               <div className='flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded-md hover:scale-105 transition-all duration-500 '>
               <img className='max-w-9' src={assets.remove_bg_icon} alt="Upload Icon" />
                <div>
                    <p className='text-xl font-medium'>Remove Background</p>
                    <p className='mt-1text-sm text-neutral-500'>This is a demo text. <br /> it will be removed later </p>
                </div>
               </div>
               <div className='flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded-md hover:scale-105 transition-all duration-500 '>
               <img className='max-w-9' src={assets.download_icon} alt="Upload Icon" />
                <div>
                    <p className='text-xl font-medium'>Download Image</p>
                    <p className='mt-1text-sm text-neutral-500'>This is a demo text. <br /> it will be removed later </p>
                </div>
               </div>
            </div>
        </div>
    )
}

export default Steps