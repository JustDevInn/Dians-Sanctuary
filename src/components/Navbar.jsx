import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {

  const [nav, setNav] = useState(true)

  const handleNav = () => {
    setNav(!nav);
  }
  return (
    <div className='bg-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black sticky top-0'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Dian's Sanctuary.</h1>
        <ul className='hidden md:flex'>
            <li className='p-4'>Adopting</li>
            <li className='p-4'>Fostering</li>
            <li className='p-4'>Education</li>
            <li className='p-4'>Donate</li>
            <li className='p-4'>Stories</li>
            <li className='p-4'>Contact</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/> }
        </div>

        <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 ease-in-out duration-500 bg-white' : 'fixed left-[-100%]'}>
          <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>Dian's Sanctuary.</h1>
            <ul className='uppercase p-4'>
            <li className='p-4 border-b border-gray-600'>Adopting</li>
            <li className='p-4 border-b border-gray-600'>Fostering</li>
            <li className='p-4 border-b border-gray-600'>Education</li>
            <li className='p-4 border-b border-gray-600'>Donate</li>
            <li className='p-4 border-b border-gray-600'>Stories</li>
            <li className='p-4'>Contact</li> 
            </ul>
        </div>
    </div>
  )
}

export default Navbar