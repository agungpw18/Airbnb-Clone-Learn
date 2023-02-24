import React from 'react'
import Image from 'next/image'

const Banner = () => {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h[600px] 2xl:h-[700px]'>
        <Image className='bg-fixed' src={'https://links.papareact.com/0fm'} layout='fill' objectFit='cover'/>

        <div className=' absolute w-full top-28 md:top-36 lg:top-52 text-center sm:top-44'>
            <p className='text-3xl md:text-6xl mb-2 font-extrabold'>
            Find Your Perfect Getaway
            </p>
            <button className='bg-red-400 px-7 py-1 rounded-full shadow-md text-slate-100 md:px-8 md:py-2 hover:shadow-lg hover:scale-105 transition transform duration-200 '>Start Here</button>
        </div>

    </div>
  )
}

export default Banner