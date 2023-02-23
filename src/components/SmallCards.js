import React from 'react'
import Image from 'next/image'

const SmallCards = ({img,location,distance}) => {
  return (
    <div className='flex gap-2 items-center m-2 rounded-lg cursor-pointer hover:bg-white hover:drop-shadow-md hover:scale-105 transition transform duration-300'>
        <div className='relative w-14 h-14'>
            <Image className='rounded-md' src={img} layout="fill" />
        </div>

        <div>
            <h1 className='font-bold'>
                {location}
            </h1>
            <h2 className='text-slate-500'>
                {distance}

            </h2>
        </div>
    </div>
  )
}

export default SmallCards