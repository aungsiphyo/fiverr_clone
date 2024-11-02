import React from 'react'
import { FaAngleRight } from "react-icons/fa6";

const Category = () => {
  return (
    <div className='hidden sm:flex items-center justify-start py-2 relative'>
      <div className='hidden sm:flex items-center justify-start px-5 gap-5 text-nowrap'>
        <a href="" className='text-gray-500 text-md after:flex after:flex-col after:content-[""] after:mt-3 after:w-full after:h-0.5 after:rounded-md hover:after:bg-green-600 hover:after:transition-all'>Graphic Design</a>
        <a href="" className='text-gray-500 text-md after:flex after:flex-col after:content-[""] after:mt-3 after:w-full after:h-0.5 after:rounded-md hover:after:bg-green-600 hover:after:transition-all'>Programming & Tech</a>
        <a href="" className='text-gray-500 text-md after:flex after:flex-col after:content-[""] after:mt-3 after:w-full after:h-0.5 after:rounded-md hover:after:bg-green-600 hover:after:transition-all'>Digital Marketing</a>
        <a href="" className='text-gray-500 text-md h-9'>Video & Animation</a>
        <a href="" className='text-gray-500 text-md h-9'>Writing & Translation</a>
        <a href="" className='text-gray-500 text-md h-9'>Music & Audio</a>
        <a href="" className='text-gray-500 text-md h-9'>Business</a>
        <a href="" className='text-gray-500 text-md h-9'>Finance</a>
        <a href="" className='text-gray-500 text-md h-9'>AI Services</a>
      </div>
      <a href="" className='text-gray-500 text-md h-9 ml-10 absolute right-0 bg-white px-5'><FaAngleRight className='h-7 text-xs'/></a>
    </div>
  )
}

export default Category