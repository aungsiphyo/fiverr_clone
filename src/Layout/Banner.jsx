import React from 'react'
import BannerImg from '../img/cover.jpg'
import BannerCard from './BannerCard'

const Banner = () => {
  return (
    <div className='relative'>
        <div className="overflow-hidden w-full h-52">
            <img src={BannerImg} alt="" />
        </div>
        <p className='text-3xl font-bold absolute top-8 left-2 text-white'>Welcome to Fiverr, Aung Si Phyo</p>
        <p className='text-lg font-semibold absolute bottom-1/2 right-5 text-white'>Made on Fiverr by <a href="" className='underline'>Nibera Visuals</a></p>
        <BannerCard/>
    </div>
  )
}

export default Banner