import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-black bg-dogscage-img bg-cover'>
        <div className='max-w w-full h-screen mx-auto text-start flex flex-col justify-end pl-10 bg-white bg-opacity-10'>
            <p className='text-[#00df9a] w-3/5 font-bold bg-gray-600 bg-opacity-50 rounded '>Sanctuary for animals in need</p>
            <div className='flex flex-col justify-center bg-gray-600 bg-opacity-50 w-3/5'>
                <p className='md:text-3xl sm:text-2xl text-xl font-bold py-4'>Loving and caring for the unwanted.</p>
            <Typed 
            className='md:text-3xl sm:text-2xl text-xl font-bold'
            strings={['Rescues.','Adoptions.', 'Fostering.']} 
            typeSpeed={100} 
            backSpeed={50} 
            // loop

            />
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-300 py-2 rounded bg-gray-600 bg-opacity-50 w-3/5'>Adopting a rescued animal is an act of <a href='/' class="underline decoration-[#00df9a]">kindness</a>.</p>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-3 py-3'>Donate</button>
        </div>

    </div>
  )
}

export default Hero