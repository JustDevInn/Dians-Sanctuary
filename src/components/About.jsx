import React from 'react'
import Chewy from '../assets/chewy.jpg'

const About = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 p-4'>
        <img src={Chewy} alt="Chewy-friend" className=' w-[500px] mx-auto my-4 rounded-md'/>
        <div className='flex flex-col justify-center p-4'>
          <p className='text-[#00df9a] font-bold'>About us</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>A sanctuary for all animals.</h1>
          <p>"When we learn to <a href='/' class="underline decoration-[#00df9a]">respect</a> all life,<br></br>
              we learn to <a href='/' class="underline decoration-[#00df9a]">love</a> all life."</p>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-3 py-3 mx-auto md:mx-0'>Read more.. </button>
        </div>
      </div>
    </div>
  )
}

export default About