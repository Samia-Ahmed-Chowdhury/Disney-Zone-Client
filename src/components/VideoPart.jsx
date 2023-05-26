import React from 'react'
import { FaCheck } from "react-icons/fa";
import vdo from '../assets/videoplayback.mp4'

function VideoPart() {
  return (
    <div className="lg:px-12 px-5 my-20 lg:my-0">
      <h2 className='text-center text-3xl font-medium my-8'>Need to know how to started !!! check it out</h2>
      <div className="grid lg:grid-cols-2 gap-8 my-10">
        <video controls width="100%" height="50%">
          <source src={vdo} type="video/mp4"
          />
          Sorry, your browser doesn't support videos.
        </video>
        
        <div className="pl-3 my-auto">
          <ul className=''>
            <li
            data-aos="fade-up"
            ><FaCheck className='inline mr-2 text-primaryColor' /> Better manage your child happy &amp; reduce costs</li>
            <li
            data-aos="fade-up"
            ><FaCheck className='inline mr-2 text-primaryColor' />Seamlessly link busyness &amp; payroll</li>
            <li
            data-aos="fade-up"
            ><FaCheck className='inline mr-2 text-primaryColor' />Ensure dolls &amp; make child stay postive</li>
            <li
            data-aos="fade-up"
            ><FaCheck className='inline mr-2 text-primaryColor' />Simplify communications with a disney zone</li>
            <li
            data-aos="fade-up"
            ><FaCheck className='inline mr-2 text-primaryColor' /> Better manage your fleet &amp; reduce costs</li>
            <li
            data-aos="fade-up"
            ><FaCheck className='inline mr-2 text-primaryColor' />Seamlessly link busyness &amp; payroll</li>
            <li
            data-aos="fade-up"
            ><FaCheck className='inline mr-2 text-primaryColor' />Ensure dolls &amp; make child stay postive</li>
            <li
            data-aos="fade-up"
            ><FaCheck className='inline mr-2 text-primaryColor' />Simplify communications with a disney zone</li>
            <li
            data-aos="fade-up"
            ><FaCheck className='inline mr-2 text-primaryColor' />Seamlessly link busyness &amp; payroll</li>
            <li
            data-aos="fade-up"
            ><FaCheck className='inline mr-2 text-primaryColor' />Ensure dolls &amp; make child stay postive</li>
            <li
            data-aos="fade-up"
            ><FaCheck className='inline mr-2 text-primaryColor' />Simplify communications with a disney zone</li>
          
          </ul>
        </div>
      </div>
    </div>
  )
}

export default VideoPart