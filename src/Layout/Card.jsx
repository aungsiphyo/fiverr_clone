import React from 'react'
import { IoIosHeartEmpty } from "react-icons/io";
import { TiStarFullOutline } from "react-icons/ti";
import { FaStar } from "react-icons/fa";
import { HiOutlineVideoCamera } from "react-icons/hi";
import Profile from "../img/profile.jpg";

const Card = (props) => {
    const {video, profile, instructor, description, rating, rating_qty, price} = props.card_data;
  return (
    <div className='w-1/4'>
        <div className="relative rounded-lg overflow-hidden">
            <iframe className='w-full' src={video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
            </iframe>
            <IoIosHeartEmpty className='absolute top-4 right-4 text-white text-2xl'/>
            <div className="flex items-center justify-between my-2">
                <div className="flex items-center gap-2">
                    <div className='relative'>
                        <div className='w-7 h-7 rounded-full overflow-hidden'>
                            <img src={profile} alt="" className='w-full object-cover object-center'/>
                        </div>
                        <div className='absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-green-600 border-2 border-white'></div>
                    </div>
                    <p className='text-sm font-bold'>{instructor}</p>
                </div>
                <div className="flex items-center gap-1 bg-orange-300 rounded-md px-2 py-0.5 my-2">
                    <p className='text-xs font-semibold'>Top Rated</p>
                    <div className="flex items-center">
                        <TiStarFullOutline className='text-sm'/>
                        <TiStarFullOutline className='text-sm'/>
                        <TiStarFullOutline className='text-sm'/>
                    </div>
                </div>
            </div>
            <a href='' className='text-wrap hover:underline'>{description}</a>
            <div className="flex items-center gap-1">
                <FaStar />
                <p className='font-bold text-lg'>{rating}</p>
                <p className='text-gray-600'>({rating_qty})</p>
            </div>
            <div className="flex items-center gap-1">
                <p className='font-bold text-lg'>From €{price}</p>
            </div>
            <div className="flex items-center gap-1">
                <HiOutlineVideoCamera className='text-xl'/>
                <p>Offers video consultations</p>
            </div>
        </div>
    </div>
  )
}

export default Card