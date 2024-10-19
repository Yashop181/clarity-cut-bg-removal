import React, { useState } from 'react'
import { assets, plans } from '../assets/assets'

const BuyCredit = () => {

  return (
    <div className='min-h-screen text-center pt-14 mb-10 '>
      <button className='border border-gray-400 px-10 py-2 rounded-full mb-6'>Our Plans</button>

      <h1 className='bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent text-center text-2xl md:text-3xl lg:text-4xl mt-2 font-semibold mb-8'>
        Choose the plans that is right for you.
      </h1>
      <div className='flex flex-wrap justify-center gap-6 text-left'>
        {
          plans.map((item, index) => (
            <div className='bg-white drop-shadow-lg border rounded-lg py-12 px-8  text-gray-700 hover:scale-105 duration-700 transition-all w-[250px]'>
              <img width={40} src={assets.logo_icon} alt="" />
              <p className='mt-3  font-semibold'>{item.id}</p>
              <p className='text-sm'>
                {item.desc}
              </p>
              <p className='mt-6'>
                <span className='text-2xl font-medium '>{item.price}/{item.credits} credits</span>
              </p>
              <button className='w-full bg-gray-800 text-white mt-8 text-sm rounded-md py-2.5'>Purchase</button>
            </div>

          ))
        }
      </div>
    </div>
  )
}

export default BuyCredit