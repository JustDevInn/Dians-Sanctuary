import React from 'react'
import Typed from 'react-typed';

const Compassion = () => {
  return (
    <div>

<div className='text-white bg-compassiondog1-img bg-cover bg-center'>
        <div className='max-w w-full h-screen mx-auto text-start flex flex-col justify-end bg-white bg-opacity-10 pb-10 pl-20 pr-20'>
            <p className='text-[#00df9a] w-4/5 md:w-3/5 font-bold bg-gray-600 bg-opacity-50 rounded-t pl-2 pt-2'>We have so much to tell you</p>
            <div className='flex flex-col justify-center bg-gray-600 bg-opacity-50 w-4/5 md:w-3/5 pl-2'>
                <p className='md:text-3xl sm:text-2xl text-xl font-bold py-4'>Please visit our instagram for up to date stories.</p>
            <Typed 
            className='md:text-3xl sm:text-2xl text-xl font-bold text-gray-300'
            strings={['Rescues.','Adoptions.', 'Fostering.']} 
            typeSpeed={100} 
            backSpeed={50} 
            loop

            />
            </div>
            <button className='bg-transparent text-white text-bold border-2 w-[200px] rounded-md font-medium my-3 py-3 hover:scale-110 duration-300 hover:text-[#00df9a] hover:border-[#00df9a]'><a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a></button>
        </div>
    </div>

    </div>
  )
}

export default Compassion