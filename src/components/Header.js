import React from 'react'
import Image from 'next/image'
import {BiSearchAlt} from 'react-icons/bi'
import {FaGlobeAfrica} from 'react-icons/fa'
import { MdPeopleAlt } from 'react-icons/md'
import { RxHamburgerMenu } from 'react-icons/rx'
import {useState} from 'react'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';

const Header = () => {

    const [searchInput, setSearchInput ] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    const selectionRange = {
        startDate:startDate,
        endDate:endDate,
        key:'selection'

    }

  return (
    <div className='sticky top-0 z-50 grid grid-cols-3 shadow-md p-4 bg-white'>
        <div className=' relative flex items-center h-10 my-auto cursor-pointer'>
            <Image src='https://links.papareact.com/qd3' layout='fill' objectFit='contain' objectPosition='left'/>
        </div>
        <div className='flex items-center md:border-2 rounded-full pr-1'>

            <input
            value={searchInput}
            onChange={(event) => setSearchInput(event.target.value)} 
            className='outline-none pl-2 flex-grow bg-transparent' type="text" 
            placeholder='Start your Journey here'/>

            <BiSearchAlt 
            size={30} 
            className='bg-red-400 text-white p-1 rounded-full hidden md:inline-flex '/>

        </div>
        <div className='flex items-center justify-end gap-3'>
            <p className='hidden md:inline-flex'>Become a Host</p>
            <FaGlobeAfrica size={15}/>

            <div className='flex items-center gap-2 px-4 py-2 rounded-full border-2'>

                <MdPeopleAlt size={15}/>
                <RxHamburgerMenu size={15}/>

            </div>

        </div>
        
        {searchInput && (
            
            <div className='flex mx-auto col-span-3 flex-col'>
            <DateRangePicker className='bg-slate-400'
            
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange = {handleSelect}
            
            />

                    <div className='flex flex-col flex-grow-0'>

                        <h1 className='text-2xl font-bold flex-grow'>
                            Add Guest
                        </h1>

                        <div className='flex justify-between mt-3'>
                            <div className='flex items-center gap-3'>

                                <MdPeopleAlt size={20}/>
                                <h2 className='text-lg'>Adults</h2>
                            </div>
                        <input type= "number" className='w-12 pl-2 outline-none border border-solid rounded-sm text-red-400'/>
                        
                            <div className='flex items-center gap-3'>

                                <MdPeopleAlt size={20}/>
                                <h2 className='text-lg'>Adults</h2>
                            </div>
                        
                        <input type= "number" className='w-12 pl-2 outline-none border border-solid rounded-sm'/>

                        </div>

                        <div className='flex mt-4 gap-2'>
                            <button className='flex-grow border border-solid border-red-400 rounded-lg py-2'>Cancel</button>
                            <button className='flex-grow bg-red-400 rounded-lg py-2 text-slate-100 '>Search</button>

                        </div>

                    </div>


            </div>
        )}

    </div>

  )
}

export default Header