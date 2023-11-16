import React from 'react'


const Donate = () => {
  return (
    <div>
{/* Hero 1 */}
    <div className='text-white bg-donatedog1-img bg-cover bg-center tracking-wider'>
        <div className='max-w w-full h-screen mx-auto text-start flex flex-col justify-end bg-white bg-opacity-10 pb-10 md:pl-20 '>
            <p className='text-[#54426B] w-full md:w-3/5 bg-[#E7DFC6] bg-opacity-50 rounded-t font-normal text-xl uppercase pt-2 px-4'>It's not us saving their lives,
            <span className='font-bold'> it's you.</span></p>
            <div className='flex flex-col justify-center bg-[#E7DFC6] bg-opacity-50 w-full md:w-3/5 px-4'>
            <p className='text-3xl font-bold text-[#E9F1F7] uppercase py-4'>['Save.','Lives.', 'With', 'us.']</p> 
        
            </div>
            <p className='text-[#54426B] py-2 text-xl font-bold rounded-b bg-[#E7DFC6] bg-opacity-50 w-full md:w-3/5 px-4 pb-2'>Without you, she would face a life of unchecked misery and suffering.
            Make a donation today to secure a better future for an animal in need,
            or pledge your monthly support to save countless innocent lives like hers.</p>
        </div>
    </div>

{/* Donation */}
      <div className='h-screen flex justify-center items-center bg-gradient-to-b from-[#E9F1F7] to-[#E7DFC6] w-full text-white px-4 md:px-20 tracking-wider'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center items-center text-center'>
            <div className='lg:col-span-2 my-2'>
                <h1 className=' text-4xl py-2 text-[#54426B] font-bold uppercase'>Ways to donate</h1>
            </div>
            <div className='my-2 text-[#54426B]'>
                <h5 className='text-xl border-b font-normal mb-5'>INDONESIA</h5>
                <ul className='text-left font-thin'>
                  <li >Account name: Ibu's sanctuary</li>
                  <li>Bank name: Bank Permata</li>
                  <li>Account no: 000001000</li>
                  <li>Swift code: AAAABAAA</li>
                </ul>
            </div>
        </div>
      </div>

{/* Hero 2 */}

    <div className='w-full flex justify-center bg-gradient-to-b from-[#E7DFC6] to-[#E9F1F7] '>
    <div className='text-black bg-donatedog2-img bg-cover bg-right w-full object-bottom'>
        <div className='max-w w-full h-screen mx-auto text-start flex flex-col justify-end item-center pl-10 bg-white bg-opacity-10 pb-10'>
            <p className='text-[#54426B] uppercase w-4/5 md:w-3/5 text-3xl md:text-4xl font-normal bg-[#E7DFC6] bg-opacity-50 rounded p-5'>Thank you for saving
              lives with us.</p>
        </div>
    </div>
</div>
    </div>
  )
}

export default Donate