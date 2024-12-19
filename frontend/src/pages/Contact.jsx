import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col justify-content md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px] rounded-lg' src={assets.contact_image} alt="" />

        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-gray-600'>Our Office</p>
          <p className='text-gray-500'>54709 Willms Station Suite 350,Washington,USA</p>
          <p className='text-gray-500'>Tel: +91 73053 23443 <br /> Email: manoj.balasubramaniyan.12@gmail.com</p>
          <p className='font-semibold text-lg text-gray-600' >CAREERS AT PRESCRIPTO</p>
          <p className='text-gray-500'>Learn more about our team and job openings </p>
          <button className='border border-black px-8 py-4 text-sm rounded-md hover:bg-black hover:text-white transition-all duration-1000'>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact