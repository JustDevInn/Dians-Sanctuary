import React from 'react'

const Change = () => {
  return (
    <div>
    {/* top hero text */}
  <div className='bg-gradient-to-b from-black to-gray-800 w-full py-5 text-white px-4 pl-20 pr-20 mt-20'>
        <div className='max-w-[1240px] flex justify-center flex-col'>
        <h1 className='text-xl md:text-4xl sm:text-3xl font-bold text-left pt-10'>Advocacy</h1>
            <div className='flex justify-center items-center pt-2 pb-10'>
                <h3 className='md:text-4xl sm:text-3xl text-xl py-2 text-left'>"Rescuing animals from lives of suffering is a never-ending
                    task. Our ultimate goal is to find <span className='underline decoration-[#00df9a]'>long-term</span>, <span className='underline decoration-[#00df9a]'>law-backed </span>
                    solutions to prevent such neglect, mistreatment, and cruelty
                    before it occurs."</h3>
            </div>
        </div>
    </div>

{/* Chaining & Caging */}
  <div className='w-full  pl-10 pr-10 md:pl-20 md:pr-20 pb-10 pt-20'>
    <div className='border-r border-2 border-black flex flex-col md:flex-row justify-center rounded'>
      
      <div className=' bg-cagingorchaining-img bg-cover bg-center md:w-1/2'>
        <div className='max-w w-full h-screen bg-white bg-opacity-10 pb-10 pl-20 pr-20'></div>
      </div>
      <div className='flex justify-center items-center md:w-1/2 p-10'>
          <div className='flex flex-col justify-center'>
            <h1 className='font-bold text-xl mb-5'>Chaining & Caging</h1>
            <p>Many dog owners in Bali still adhere to the cruel practice of caging or chaining their pets, often without access to food, water or bedding, and at the mercy of heavy rains or blazing direct sunlight.</p>
          </div>
      </div>

    </div>
  </div>

    {/* Backyard breeders */}
  <div className='w-full  pl-10 pr-10 md:pl-20 md:pr-20 pb-10 pt-20'>
    <div className='border-r border-2 border-black flex flex-col md:flex-row justify-center rounded'>
      
      <div className='flex justify-center items-center md:w-1/2 p-10'>
          <div className='flex flex-col justify-center'>
            <h1 className='font-bold text-xl mb-5'>Backyard breeders</h1>
            <p>The hidden realm of backyard breeders is one of the darkest parts of Balinese society, and with the demand for fashionable, designer, imported dog breeds on the rise, the atrocious suffering caused by this cruel industry continues unchecked.</p>
          </div>
      </div>

      <div className=' bg-backyardbreeders-img bg-cover bg-center md:w-1/2'>
        <div className='max-w w-full h-screen bg-white bg-opacity-10 pb-10 pl-20 pr-20'></div>
      </div>

    </div>
  </div>


{/* Responsible tourism */}
  <div className='w-full  pl-10 pr-10 md:pl-20 md:pr-20 pb-10 pt-20'>
    <div className='border-r border-2 border-black flex flex-col md:flex-row justify-center rounded'>
      
      <div className=' bg-responsibletourism-img bg-cover bg-center md:w-1/2'>
        <div className='max-w w-full h-screen bg-white bg-opacity-10 pb-10 pl-20 pr-20'></div>
      </div>

      <div className='flex justify-center items-center md:w-1/2 p-10'>
          <div className='flex flex-col justify-center'>
            <h1 className='font-bold text-xl mb-5'>Responsible tourism</h1>
            <p>Many Bali businesses and attractions geared towards tourists profit from the exploitation of animals by forcing them into miserable, unnatural lives. The choices you make as a visitor in Bali have the power to prolong or prevent their suffering. </p>
          </div>
      </div>

    </div>
  </div>

     {/* Dog meat trade */}
    <div className='w-full  pl-10 pr-10 md:pl-20 md:pr-20 pb-10 pt-20'>
    <div className='border-r border-2 border-black flex flex-col md:flex-row justify-center rounded'>
      
      <div className='flex justify-center items-center md:w-1/2 p-10'>
          <div className='flex flex-col justify-center'>
            <h1 className='font-bold text-xl mb-5'>Dog meat trade</h1>
            <p>The cruel and brutal dog meat trade in Bali is one of the biggest threats to the welfare and survival of the island’s beautiful indigoes dog. As many as 100,000 street dogs AND family pets are poisoned, shot, or brutally beaten, and slaughtered for consumption each year.</p>
          </div>
      </div>

      <div className=' bg-dogmeattrade-img bg-cover bg-center md:w-1/2'>
        <div className='max-w w-full h-screen bg-white bg-opacity-10 pb-10 pl-20 pr-20'></div>
      </div>

    </div>
  </div>

    </div>
  )
}

export default Change