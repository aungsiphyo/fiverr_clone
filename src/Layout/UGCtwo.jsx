import React from 'react'
import Card from './Card'
import { FaRegCompass } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";
import Profile from "../img/profile.jpg";

const UGCtwo = () => {
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
        },
        {
            video : "https://www.youtube.com/embed/qlt2uPpv4xI?si=z5V7yr-bNqOZoKjT",
            profile : Profile,
            instructor : "Shw Jozz E.",
            description : "I will create a fun, catchy ugc style spokesperson video",
            rating : "4.4",
            rating_qty : 352,
            price : 34
          }
      ]
      return (
        <div className='mt-8 mx-10'>
            <p className='text-2xl font-semibold'>Most popular Gigs in UGC Videos</p>
            <div className="flex items-center justify-between">
                <p className='text-md text-gray-600'>Hand-vetted talent for all your professional needs.</p>
                <div className="flex items-center gap-1">
                    <a href="" className='text-md font-semibold hover:underline text-blue-500' >Show All</a>
                    <MdKeyboardArrowRight className='text-lg font-semibold text-blue-500' />
                </div>
            </div>
            <div className='mt-5 flex items-start gap-4'>
                {
                  card_datas.map((card_data,index)=>{
                    return <Card card_data={card_data} key={index}/>
                  })
                }
            </div>
        </div>
      )
}

export default UGCtwo