import React from 'react'
import { FiMenu } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaRegEnvelope } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import Profile from "../img/profile.jpg";

const Navbar = () => {
  return (
        <div className='sm:flex sm:items-center sm:justify-between sm:px-3'>
            <div className='mx-3 py-5 flex items-center justify-between gap-2'>
                <FiMenu className='text-2xl lg:hidden'/>
                <p className='text-3xl font-black text-black'>fiverr<span className='text-green-600'>.</span></p>
                <span></span>
            </div>
            <div className='my-5 mx-5 flex items-center relative'>
                <input className='w-full py-2 px-5 rounded-md text-gray-600 border border-gray-400 focus:outline-none focus:border-gray-900 sm:w-96' type="text" placeholder='Find services' />
                <a href="search" className='bg-black h-10 w-12 rounded-e-md absolute right-0'><IoSearchOutline className='text-white text-3xl h-10 mx-auto'/></a>
            </div>
            <div className='py-5 hidden sm:flex relative gap-10'>
                <a href="" className='text-lg hidden lg:flex items-center gap-2 font-semibold px-4 py-2 rounded-md hover:bg-gray-100'>Fiverr Pro <FaChevronDown className='text-sm'/></a>
                <div className="py-2 hidden text-gray-500 text-2xl relative md:flex md:items-center md:justify-center md:gap-5">
                    <a href="" className='w-10 h-10 rounded-full hover:bg-gray-100'><IoNotificationsOutline className='h-10 mx-auto'/></a>
                    <div className='w-1.5 h-1.5 bg-red-700 rounded-full absolute top-3 left-8'></div>
                    <a href="" className='w-10 h-10 rounded-full hover:bg-gray-100'><FaRegEnvelope className='h-10 mx-auto'/></a>
                    <FaRegHeart className='hidden lg:block'/>
                    <a href="order" className='text-lg font-semibold hidden lg:block hover:text-green-700'>Orders</a>
                </div>
                <div className='w-10 h-10 rounded-full overflow-hidden'>
                    <img src={Profile} alt="" className='w-full object-cover object-center'/>
                </div>
                <div className='absolute bottom-8 right-1 w-3 h-3 rounded-full bg-green-600 border-2 border-white'></div>
            </div>
        </div>
  )
}

export default Navbar