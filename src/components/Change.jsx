import React from 'react'
import { Link } from 'react-router-dom';

const Change = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Add smooth scrolling effect
    });
  };

  return (
    <div>
    {/* top hero text */}
  <div className='bg-gradient-to-b from-[#E7DFC6] to-[#E9F1F7] w-full py-5 text-gray-300 px-4 pl-20 pr-20 md:pt-40'>
        <div className='max-w-[1240px] flex justify-center flex-col'>
        <h1 className='text-xl md:text-4xl sm:text-3xl font-bold text-left pt-10 text-[#54426B] uppercase tracking-widest'>Advocacy</h1>
            <div className='flex justify-center items-center pt-2 pb-10 '>
                <h3 className='md:text-4xl sm:text-3xl text-xl py-2 text-left text-[#54426B] tracking-wider'>"Rescuing animals from lives of suffering is a never-ending
                    task. Our ultimate goal is to find <span className='underline decoration-[#623CEA]'>long-term</span>, <span className='underline decoration-[#623CEA]'>law-backed </span>
                    solutions to prevent such neglect, mistreatment, and cruelty
                    before it occurs."</h3>
            </div>
        </div>
</div>

{/* Chaining & Caging */}
<div className='w-full  pl-10 pr-10 md:pl-20 md:pr-20 pb-10 pt-20 bg-gradient-to-b from-[#E9F1F7] to-[#E7DFC6]'>
    <div className='border-r border-2 border-[#623CEA] flex flex-col md:flex-row justify-center rounded'>
      
      <div className=' bg-cagingorchaining-img bg-cover bg-center md:w-1/2'>
        <div className='max-w w-full h-screen bg-white bg-opacity-10 pb-10 pl-20 pr-20'></div>
      </div>
      <div className='flex justify-center items-center md:w-1/2 p-10'>
          <div className='flex flex-col justify-center'>
            <h1 className='font-bold text-xl mb-5 tracking-wider uppercase text-[#54426B]'>Chaining & Caging</h1>
            <p className='tracking-wider text-[#54426B]'>Many dog owners in Bali still adhere to the cruel practice of caging or chaining their pets, often without access to food, water or bedding, and at the mercy of heavy rains or blazing direct sunlight.</p>
          </div>
      </div>

    </div>
</div>

    {/* Backyard breeders */}
<div className='w-full  pl-10 pr-10 md:pl-20 md:pr-20 pb-10 pt-20 bg-gradient-to-b from-[#E7DFC6] to-[#E9F1F7]'>
    <div className='border-r border-2 border-[#623CEA] flex flex-col md:flex-row justify-center rounded'>
      
      <div className='flex justify-center items-center md:w-1/2 p-10'>
          <div className='flex flex-col justify-center'>
            <h1 className='font-bold text-xl mb-5 tracking-wider uppercase text-[#54426B]'>Backyard breeders</h1>
            <p className='tracking-wider text-[#54426B]'>The hidden realm of backyard breeders is one of the darkest parts of Balinese society, and with the demand for fashionable, designer, imported dog breeds on the rise, the atrocious suffering caused by this cruel industry continues unchecked.</p>
          </div>
      </div>

      <div className=' bg-backyardbreeders-img bg-cover bg-center md:w-1/2'>
        <div className='max-w w-full h-screen bg-white bg-opacity-10 pb-10 pl-20 pr-20'></div>
      </div>

    </div>
</div>


{/* Responsible tourism */}
<div className='w-full  pl-10 pr-10 md:pl-20 md:pr-20 pb-10 pt-20 bg-gradient-to-b from-[#E9F1F7] to-[#E7DFC6]'>
    <div className='border-r border-2 border-[#623CEA] flex flex-col md:flex-row justify-center rounded'>
      
      <div className=' bg-responsibletourism-img bg-cover bg-center md:w-1/2'>
        <div className='max-w w-full h-screen bg-white bg-opacity-10 pb-10 pl-20 pr-20'></div>
      </div>

      <div className='flex justify-center items-center md:w-1/2 p-10'>
          <div className='flex flex-col justify-center'>
            <h1 className='font-bold text-xl mb-5 tracking-wider uppercase text-[#54426B]'>Responsible tourism</h1>
            <p className='tracking-wider text-[#54426B]'>Many Bali businesses and attractions geared towards tourists profit from the exploitation of animals by forcing them into miserable, unnatural lives. The choices you make as a visitor in Bali have the power to prolong or prevent their suffering. </p>
          </div>
      </div>

    </div>
</div>

{/* Donate */}
<div className='w-full py-16 text-white md:pl-20 md:pr-20 bg-gradient-to-b from-[#E7DFC6] to-[#E9F1F7]'>
        <div className='max-w-[1240px] flex flex-col md:flex-row'>
          <div className='flex justify-center items-center md:w-1/2'>
            <button
              className="w-[150px] py-3 md:ml-10 mb-10 md:mb-0 bg-[#54426B] text-[#E7DFC6] tracking-widest  font-bold hover:bg-[#E7DFC6] hover:text-[#54426B] border-2 border-[#54426B] uppercase"
              onClick={scrollToTop}
            >
              <Link to="/donate">Donate</Link>
            </button>
            </div>

            <div className='text-3xl md:w-1/2 pl-20 md:pl-0 text-[#54426B] font-thin'>
                <p>It's not us saving their lives, 
                <br></br>
                <span className='underline decoration-[#623CEA] font-normal'>it's you.</span>
               </p>
            </div>
        </div>
</div>

     {/* Dog meat trade */}
<div className='w-full  pl-10 pr-10 md:pl-20 md:pr-20 pb-10 pt-20 bg-gradient-to-b from-[#E9F1F7] to-[#E7DFC6]'>
    <div className='border-r border-2 border-[#623CEA] flex flex-col md:flex-row justify-center rounded'>
      
      <div className='flex justify-center items-center md:w-1/2 p-10'>
          <div className='flex flex-col justify-center'>
            <h1 className='font-bold text-xl mb-5 tracking-wider uppercase text-[#54426B]'>Dog meat trade</h1>
            <p className='tracking-wider text-[#54426B]'>The cruel and brutal dog meat trade in Bali is one of the biggest threats to the welfare and survival of the island’s beautiful indigoes dog. As many as 100,000 street dogs AND family pets are poisoned, shot, or brutally beaten, and slaughtered for consumption each year.</p>
          </div>
      </div>

      <div className=' bg-dogmeattrade-img bg-cover bg-center md:w-1/2'>
        <div className='max-w w-full h-screen bg-white bg-opacity-10 pb-10 pl-20 pr-20'></div>
      </div>

    </div>
</div>

{/* Rabies */}
  <div className='w-full  pl-10 pr-10 md:pl-20 md:pr-20 pb-10 pt-20 bg-gradient-to-b from-[#E7DFC6] to-[#E9F1F7]'>
    <div className='border-r border-2 border-[#623CEA] flex flex-col md:flex-row justify-center rounded'>
      
      <div className='flex justify-center items-center md:w-1/2 p-10'>
          <div className='flex flex-col justify-center'>
            <h1 className='font-bold text-xl mb-5 tracking-wider uppercase text-[#54426B]'>Bali's rabies crisis</h1>
            <p className='tracking-wider text-[#54426B]'>In 2008, fishermen coming from the island of Flores arrived on the Bukit peninsula in south Bali with a dog unknowingly carrying the rabies virus. The dog soon turned rabid and began infecting other animals and humans.

              <br></br><br></br>
              Without a single rabies vaccine available island-wide, the outbreak quickly engulfed Bali and ended tragically in over 100 human deaths.

              <br></br><br></br>
              Panic ensued and people began to fear dogs, resulting in indiscriminate, painful, and wide-scale culling of dogs including numerous indigenous Bali Heritage Dogs.
              </p>
              <br></br><br></br>
              <span className='text-xs text-[#623CEA] tracking-widest'>* An estimated 150,000 dogs were killed in a frantic, misguided attempt to stop the spread of rabies.</span>
          </div>
      </div>
      
      <div className=' bg-rabies-img bg-cover bg-center md:w-1/2'> 
        <div className='max-w w-full h-screen bg-white bg-opacity-10 pb-10 pl-20 pr-20'></div>
      </div>

    </div>
  </div>


</div>
  )
}

export default Change