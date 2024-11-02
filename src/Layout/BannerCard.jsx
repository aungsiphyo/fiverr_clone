import React from 'react'
import { HiMiniClipboardDocumentList } from "react-icons/hi2";

const BannerCard = () => {
  return (
    <div className='flex items-center justify-start absolute bottom--1/2 -translate-y-1/2 w-full ms-10 gap-4 overflow-scroll'>
        <div className="rounded-xl w-3/5 bg-white">
            <p className='text-gray-500 ms-6 my-3 font-semibold text-sm'>RECOMMENDED FOR YOU</p>
            <div className="flex items-center justify-between mx-6 my-3">
                <div className="flex gap-5 items-center">
                    <HiMiniClipboardDocumentList className='text-4xl text-gray-800'/>
                    <div>
                        <div className='flex items-center justify-start gap-3'>
                            <p className='text-lg font-semibold text-gray-700'>Post a project brief</p>
                            <a href="" className='bg-blue-600 px-2 rounded-lg text-white'>Beta</a>
                        </div>
                        <p className='text-gray-700'>Get tailored offers for your needs.</p>
                    </div>
                </div>
                <a href="" className='border border-black py-2 px-8 rounded-lg hover:bg-black hover:text-white'>Get Started</a>
            </div>
        </div>
        <div className="rounded-xl w-3/5 bg-white">
            <p className='text-gray-500 ms-6 my-3 font-semibold text-sm'>RECOMMENDED FOR YOU</p>
            <div className="flex items-center justify-between mx-6 my-3">
                <div className="flex gap-5 items-center">
                    <HiMiniClipboardDocumentList className='text-4xl text-gray-800'/>
                    <div>
                        <div className='flex items-center justify-start gap-3'>
                            <p className='text-lg font-semibold text-gray-700'>Post a project brief</p>
                            <a href="" className='bg-blue-600 px-2 rounded-lg text-white'>Beta</a>
                        </div>
                        <p className='text-gray-700'>Get tailored offers for your needs.</p>
                    </div>
                </div>
                <a href="" className='border border-black py-2 px-8 rounded-lg hover:bg-black hover:text-white'>Get Started</a>
            </div>
        </div>
    </div>
  )
}

export default BannerCard