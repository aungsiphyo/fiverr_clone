import React from 'react'
import Card from './Card'
import { FaRegCompass } from "react-icons/fa6";
import Profile from "../img/profile.jpg";

const CardsRow = () => {
  const card_datas = [
    {
        video : "https://www.youtube.com/embed/gyc28Bz6yK8?si=iWMz485DDFhAlYox",
        profile : Profile,
        instructor : "Ko Aung Si Phyo",
        description : "I will create studio quality ugo videos and ads with a",
        rating : 4.9,
        rating_qty : 195,
        price : 179
    },
    {
      video : "https://www.youtube.com/embed/SjkcA2ZCmDU?si=yhc3oALGiUouTGhF",
      profile : Profile,
      instructor : "Allie Madison",
      description : "I will create a natural ugc selfie style video",
      rating : "5.0",
      rating_qty : 375,
      price : 145
    },
    {
      video : "https://www.youtube.com/embed/WR0W2L4TLsM?si=tKS-iAeyFwdPi7ZY",
      profile : Profile,
      instructor : "MJ Gorden",
      description : "I will create a fun, catchy ugc style spokesperson video",
      rating : "5.0",
      rating_qty : 352,
      price : 34
    }
  ]
  return (
    <div className='mt-20 mx-10'>
        <p className='text-2xl font-semibold'>Explore popular categories on Fiverr</p>
        <div className='mt-5 flex items-start gap-3'>
            <a className='mt-5 w-1/4 border border-black p-3 flex items-center justify-start gap-3 cursor-pointer rounded-lg'>
                <FaRegCompass className='text-3xl'/>
                <p className='text-xl font-semibold'>Keep exploring</p>
            </a>
            {
              card_datas.map((card_data,index)=>{
                return <Card card_data={card_data} key={index}/>
              })
            }
        </div>
    </div>
  )
}

export default CardsRow