import React from 'react'
import Image from 'next/image'
import {BiSearchAlt} from 'react-icons/bi'
import {FaGlobeAfrica} from 'react-icons/fa'
import { MdPeopleAlt } from 'react-icons/md'
import { RxHamburgerMenu } from 'react-icons/rx'

const Header = () => {
  return (
    <div className='sticky top-0 z-50 grid grid-cols-3 shadow-md p-4 bg-white'>
        <div className=' relative flex items-center h-10 my-auto cursor-pointer'>
            <Image src='https://links.papareact.com/qd3' layout='fill' objectFit='contain' objectPosition='left'/>
        </div>
        <div className='flex items-center md:border-2 rounded-full pr-1'>
            <input className='outline-none pl-2 flex-grow bg-transparent' type="text" placeholder='Start your Journey here'/>
            <BiSearchAlt size={30} className='bg-red-400 text-white p-1 rounded-full hidden md:inline-flex '/>
        </div>
        <div className='flex items-center justify-end gap-3'>
            <p className='hidden md:inline-flex'>Become a Host</p>
            <FaGlobeAfrica size={15}/>

            <div className='flex items-center gap-2 px-4 py-2 rounded-full border-2'>

                <MdPeopleAlt size={15}/>
                <RxHamburgerMenu size={15}/>

            </div>

        </div>
    </div>

  )
}

export default Header