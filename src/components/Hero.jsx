import React from 'react'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import '../App.css'

function Hero() {
  return (
    <div className='bg-primaryColor'>
      <div className='overlayBg flex lg:h-[calc(100vh-30vh)] relative text-white'>
        <div className='my-auto'>
          <h1 className='font-semibold text-5xl lg:text-6xl mt-[46px] lg:mt-0 lg:w-[45%] text-center lg:mx-auto '>Dolls are more than just toys. They’re the best medicine.</h1>
          <button 
           data-aos="zoom-out-down"
          className="btn border-0 block mx-auto my-4 bg-secondaryColor hover:bg-btnColor">Get Started</button>
        </div>
        <img data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className='h-56 hidden lg:block absolute top-1/2 right-[10%]' src={img1} alt='img' />
        <img
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className='h-56 hidden lg:block absolute bottom-0' src={img3} alt='img' />
      </div>
    </div>
  )
}

export default Hero