import React from 'react'

const Information = () => {
  return (
    <div className='bg-black w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Tips & trick to take care of rescues?</h1>
                <p>Sign up to my newsletter</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className="p-3 flex w-full rounded-md text-black" type="email" placeholder="Enter email"/>
                    <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>Notify me</button>
                </div>
                <p>We care about the protection of the our rescues. Read our <a href='/' class="underline decoration-[#00df9a]">Privacy policy</a></p>
            </div>
        </div>
    </div>
  )
}

export default Information