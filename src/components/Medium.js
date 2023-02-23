import React from 'react'
import Image from 'next/image'
const Medium = ({img,title}) => {
  return (
    <div className='cursor-pointer hover:scale-105 transition transform duration-200'>
        <div className='relative w-80 h-80 mb-2'>
            <Image className='rounded-lg' src={img} layout="fill"/>
        </div>
        <div>
            <h3 className='font-semibold md:text-xl'>{title}</h3>
        </div>
    </div>
  )
}

export default Medium