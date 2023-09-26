import React from 'react';
import Dog1 from '../assets/dog1.jpg';
import Dog2 from '../assets/dog2.jpg';
import Dog3 from '../assets/dog3.jpg';

const Rescues = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
            
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'> 
                <img src={Dog1} alt="Dog" className='object-cover h-48 w-96 mx-auto mt-[-3rem] bg-white rounded-lg'/>
                <h2 className='text-2xl font-bold text-center py-8'>Beethoven</h2>
                <p className='text-center text-4xl font-bold'>Bobby</p>
                <div className='text-center font-medium'>
                    <p className='p4-2 border-b mx-8 mt-8'>Long hair</p>
                    <p className='p4-2 border-b mx-8'>Fully-vaccinated</p>
                    <p className='p4-2 border-b mx-8'>Familie dog, loves being around the pack</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Read more..</button>
            </div>
            
            <div className='w-full shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'> 
                <img src={Dog2} alt="Dog" className='object-cover h-48 w-96 mx-auto mt-[-3rem] bg-white rounded-lg'/>
                <h2 className='text-2xl font-bold text-center py-8'>Sausage dog</h2>
                <p className='text-center text-4xl font-bold'>Russel</p>
                <div className='text-center font-medium'>
                    <p className='p4-2 border-b mx-8 mt-8'>Short hair</p>
                    <p className='p4-2 border-b mx-8'>Fully-vaccinated</p>
                    <p className='p4-2 border-b mx-8'>Energetic and playfull</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Read more..</button>
            </div>
            
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'> 
                <img src={Dog3} alt="Dog" className='object-cover h-48 w-96 mx-auto mt-[-3rem] bg-white rounded-lg'/>
                <h2 className='text-2xl font-bold text-center py-8'>Bali dog</h2>
                <p className='text-center text-4xl font-bold'>Humfrey</p>
                <div className='text-center font-medium'>
                    <p className='p4-2 border-b mx-8 mt-8'>Short hair</p>
                    <p className='p4-2 border-b mx-8'>Fully-vaccinated</p>
                    <p className='p4-2 border-b mx-8'>Loves to chill and hang out</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Read more..</button>
            </div>
        </div>
    </div>
  )
}

export default Rescues