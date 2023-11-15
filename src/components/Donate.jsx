import React from 'react'
import Typed from 'react-typed';


const Donate = () => {
  return (
    <div>
{/* Hero 1 */}
    <div className='text-white bg-donatedog1-img bg-cover bg-center'>
        <div className='max-w w-full h-screen mx-auto text-start flex flex-col justify-end bg-white bg-opacity-10 pb-10 pl-20 pr-20'>
            <p className='text-[#00df9a] w-4/5 md:w-3/5 bg-gray-600 bg-opacity-50 rounded-t pl-2 pt-2 border-l font-bold'>It's not us saving their lives,
            it's you.</p>
            <div className='flex flex-col justify-center bg-gray-600 bg-opacity-50 w-4/5 md:w-3/5 pl-2 border-l'>
            <Typed 
            className='md:text-3xl sm:text-2xl text-xl font-bold'
            strings={['Save.','Lives.', 'With', 'us.']} 
            typeSpeed={100} 
            backSpeed={50} 
            // loop

            />
            </div>
            <p className='text-gray-300 py-2 text-xl font-bold rounded-b bg-gray-600 bg-opacity-50 w-4/5 md:w-3/5 pl-2 border-l'>Without you, she would face a life of unchecked misery and suffering.
            Make a donation today to secure a better future for an animal in need,
            or pledge your monthly support to save countless innocent lives like hers.</p>
        </div>
    </div>

{/* Donation */}
      <div className='bg-gradient-to-b from-black to-gray-800 w-full py-16 text-white px-4 pl-20 pr-20'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center items-center text-center'>
            <div className='lg:col-span-2 my-2'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl py-2 text-[#00df9a] font-bold'>Ways to donate</h1>
            </div>
            <div className='my-2'>
                <h5 className='text-xl border-b'>INDONESIA</h5>
                <ul className='text-left'>
                  <li >Account name: Ibu's sanctuary</li>
                  <li>Bank name: Bank Permata</li>
                  <li>Account no: 000001000</li>
                  <li>Swift code: AAAABAAA</li>
                </ul>
            </div>
        </div>
      </div>

{/* Hero 2 */}

    <div className='w-full flex justify-center pt-20 pb-20'>
    <div className='text-black bg-donatedog2-img bg-cover bg-center object-bottom w-4/5 rounded-md'>
        <div className='max-w w-full h-screen mx-auto text-start flex flex-col justify-end item-center pl-10 bg-white bg-opacity-10 pb-10'>
            <p className='text-white w-4/5 md:w-3/5 md:text-2xl text-xl font-bold bg-gray-600 bg-opacity-50 rounded-t pl-2 pt-2'>Thank you for saving
              lives with us.</p>
        </div>
    </div>
</div>
    </div>
  )
}

export default Donate