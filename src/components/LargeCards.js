import React from 'react'
import Image from 'next/image'

const LargeCards = ({img, title, description, buttonText}) => {
  return (
    <section className='py-10  relative'>
        <div className='relative h-96'>
            <Image src={img} layout='fill' objectFit='cover' className='rounded-lg'/>
        </div>

        <div className='absolute flex flex-col items-start top-28 left-16 gap-2'>
            <h1 className='text-2xl font-bold md:text-5xl sm:text-3xl'>
                {title}
            </h1>
            <h2 className='text-md'>
                {description}
            </h2>
            <button className='bg-red-400 text-slate-50 py-2 px-5 rounded-full mt-4 cursor-pointer hover:shadow-lg hover:scale-105 transition transform ease-out duration-200'>
                {buttonText}
            </button>
        </div>

    </section>
  )
}

export default LargeCards