import React from 'react'
import Card from './Card'
import { FaRegCompass } from "react-icons/fa6";
import Profile from "../img/profile.jpg";

const Gigs = () => {
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
        <div className='mt-8'>
            <p className='text-2xl ms-10 font-semibold'>Gigs you may like </p>
            <div className='mt-5 flex items-start gap-4 mx-10'>
                {
                  card_datas.map((card_data,index)=>{
                    return <Card card_data={card_data} key={index}/>
                  })
                }
            </div>
        </div>
      )
}

export default Gigs