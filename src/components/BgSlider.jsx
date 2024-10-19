import React, { useState } from 'react'
import { assets } from '../assets/assets';

const BgSlider = () => {
    const [sliderPosition, setSliderPosition] = useState(50);

    const handleSliderChange = (e) => {
        setSliderPosition(e.target.value)
    }
    return (
        <div className='pb-10 md:py-20  mx-2  '>
            {/* Title */}
            <h1 className='mb-12 sm:mb-20  bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold'>
                Remove Background With High <br className='max-md:hidden' />  Quality and Accuracy
            </h1>

            <div className='relative w-full max-w-3xl m-auto rounded-xl overflow-hidden '>
                {/* background image */}
                <img src={assets.image_w_bg} style={{
                    clipPath: `inset(0 ${100.2 - sliderPosition}% 0 0) `
                }} alt="" />
                <img className='absolute top-0 left-0 w-full h-full' style={{
                    clipPath: `inset(0  0 0 ${sliderPosition}% ) `
                }} src={assets.image_wo_bg} />

                {/* Slider */}
                <input className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10 slider' type="range" name="slider" id="slider" min={0} max={100} value={sliderPosition} onChange={handleSliderChange} />

            </div>


        </div>
    )
}

export default BgSlider