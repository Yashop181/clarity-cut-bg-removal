import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='px-4  mt-10 sm:mt-20  lg:px-44  flex justify-between items-center max-sm:flex-col-reverse gap-y-10'>
      {/* left side */}
      <div className=''>
        <h1 className='text-4xl xl:text-5xl 2xl:text-6xl font-semibold text-neutral-700 leading-tight'>
          <span className='bg'> Remove</span> the <br className='max-md:hidden' /> <span className='bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent font-bold '> Background</span> from <br className='max-md:hidden' /> images for free
        </h1>
        <p className='mt-6 text-[15px] text-gray-500 '>Lorem ipsum dolor sit amet consectetur adipisicing. <br className='max-sm:hidden' /> Rem dolores distinctio odio nobis sint amet consectetur</p>

        <div className='mt-5'>
          <input type="file" name="upload" id='upload' hidden />
          <label className='inline-flex gap-3 px-8 py-3.5 cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-full hover:scale-105 transition-all duration-700' htmlFor="upload">
            <img width={20} src={assets.upload_btn_icon} />
            <p className='text-white text-sm'>Upload Your Image</p>
          </label>
        </div>
      </div>
      {/* Right side  */}
      <div className='w-full max-w-md'>
        <img src={assets.header_img} alt="Header Image" className='' />
      </div>
    </div>
  )
}

export default Header