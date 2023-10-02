import React from 'react'
import Typed from 'react-typed';
import {FaShieldDog} from 'react-icons/fa6';

const Savelives = () => {

  function scrollToContact() {
    const contactSection = document.getElementById('contactSection');
  
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth', // Add smooth scrolling effect
      });
    }
  }

  return (
    <div>
    {/* Hero banner */}
    <div className='text-white bg-savelivesdog1-img bg-cover bg-center'>
        <div className='max-w w-full h-screen mx-auto text-start flex flex-col justify-end bg-white bg-opacity-10 pb-10 pl-20 pr-20'>
            <p className='text-[#00df9a]  md:w-3/5 font-bold bg-gray-600 bg-opacity-50 rounded-t pl-2 pt-2'>Save Lives With Us</p>
            <div className='flex flex-col justify-center bg-gray-600 bg-opacity-50  md:w-3/5 pl-2'>
                <p className='md:text-3xl sm:text-2xl text-xl font-bold py-4'>Give love. Get love. Save a life.</p>
            <Typed 
            className='md:text-3xl sm:text-2xl text-xl font-bold text-gray-300'
            strings={['Rescues.','Adoptions.', 'Fostering.']} 
            typeSpeed={100} 
            backSpeed={50} 
            loop

            />
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-300 py-2 rounded bg-gray-600 bg-opacity-50  md:w-3/5 pl-2'>Adopting a rescued animal is an act of <a href='/' class="underline decoration-[#00df9a]">kindness</a>.</p>
            <button className='bg-transparent text-white text-bold border-2 w-[200px] rounded-md font-medium my-3 py-3 hover:text-[#00df9a] hover:border-[#00df9a] hover:scale-110 duration-300' onClick={scrollToContact}>Adopt</button>
        </div>
  </div>

    {/* Adopt one, save another */}
    <div className='bg-gradient-to-b from-black to-gray-800 w-full py-16 text-white px-4 pl-20 pr-20'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Adopt One, Save Another.</h1>
            </div>
            <div className='my-4'>
                <p>When you adopt a rescued animal, you are opening up a space for
                    the next animal in need to receive life-saving care and a <span className='underline decoration-[#00df9a]'>second chance.</span></p>
            </div>
        </div>
    </div>

{/* Link to instagram page for dogs list */}
<div className='w-full flex justify-center pt-20 pb-20'>
    <div className='text-black bg-adoptlinkimg-img bg-cover bg-center object-bottom w-4/5 rounded-md'>
        <div className='max-w w-full h-screen mx-auto text-start flex flex-col justify-end pl-10 bg-white bg-opacity-10 pb-10'>
            <p className='text-white w-4/5 md:w-3/5 md:text-2xl text-xl font-bold bg-gray-600 bg-opacity-50 rounded-t pl-2 pt-2'>Find your furever friend.</p>
            <button className='bg-transparent text-white text-bold border-2 w-[200px] rounded-md font-medium my-3 py-3 hover:text-[#00df9a] hover:border-[#00df9a] hover:scale-110 duration-300'><a href="https://www.instagram.com" target="_blank" rel="noreferrer">ADOPT NOW</a></button>
        </div>
    </div>
</div>

{/* Love animals, But not ready to adopt? */}
<div className='bg-gradient-to-b from-black to-gray-800 w-full py-5 text-white px-4 pl-20 pr-20'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4 flex justify-center items-center'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'><span className='underline decoration-[#00df9a]'>Love animals</span>, But not ready to adopt?</h1>
            </div>
            <div className='my-4 flex justify-center items-center'>
               <FaShieldDog className='w-[200px] h-[200px]'/>
            </div>
        </div>
</div>

{/* Two weeks of your life can
change the course of theirs. */}
<div className='w-full flex justify-center pt-20 pb-20'>
    <div className=' bg-changecourseimg-img bg-cover object-bottom rounded-md bg-center w-4/5'>
        <div className='max-w w-full h-screen mx-auto text-start flex flex-col justify-end bg-white bg-opacity-10 pb-10 md:pl-20 md:pr-20'>
            <p className='text-white md:w-3/5 bg-gray-600 bg-opacity-50 rounded-t pl-2 pt-2 font-thin'>Foster</p>
            <div className='flex flex-col justify-center bg-gray-600 bg-opacity-50  md:w-3/5 pl-2'>
                <p className='md:text-3xl sm:text-2xl text-xl font-bold text-white py-4'>Two weeks of your life can
                change the course of theirs.</p>
            </div>
            <p className=' text-white py-2 rounded bg-gray-600 bg-opacity-50  md:w-3/5 pl-2'>Fostering gives you the chance to make a difference in the life of a rescued animal, without any of the long-term commitments.</p>
            <button className='bg-transparent text-white text-bold border-2 w-[200px] rounded-md font-medium my-3 py-3 hover:text-[#00df9a] hover:border-[#00df9a] hover:scale-110 duration-300' onClick={scrollToContact} >Apply to foster</button>
        </div>
    </div>
</div>

{/* Saving one animal  */}
<div className='bg-gradient-to-b from-black to-gray-800 w-full py-5 text-white px-4 pl-20 pr-20'>
        <div className='max-w-[1240px] flex justify-center items-center'>
            <div className='flex justify-center items-center pt-10 pb-10'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-center'>"<span className='underline decoration-[#00df9a]'>Saving</span> one animal won’t change the world, but for that <span className='underline decoration-[#00df9a]'>one animal</span>, the world will change <span className='underline decoration-[#00df9a]'>forever."</span></h1>
            </div>
        </div>
</div>
    
{/* Fostering information */}
<div className='w-full flex justify-center items-center pt-20 pb-20'>
    <div className='bg-puppycare-img bg-cover bg-right rounded-md box-content w-4/5'>
        <div className='max-w w-full h-screen mx-auto text-start flex flex-col justify-end bg-white bg-opacity-10 pb-10 md:pl-20 md:pr-20'>
            <p className='text-white py-2 rounded-md text-left pt-10 pb-10 pl-5 pr-5 bg-gray-600 bg-opacity-50 md:w-3/5 '> On average, animals undergoing rehabilitation in a shelter environment take several months to be fully healed and ready for adoption.
              <br></br><br></br>In a foster home, all that extra one-on-one love and attention, good food, special care, and a stress-free environment really help to speed up the recovery process.</p>
        </div>
    </div>
</div>

{/* Adopt & Foster form */}
<div id="contactSection" name="contact" className="w-full flex justify-center bg-gradient-to-b from-black to-gray-800 p-4 text-white"  >
      <div className="flex flex-col lg:flex-row md:flex-row w-full pl-20 pr-20 pt-40  justify-between items-center mx-auto m-0">
        <div className="pb-8">
          <p className="text-3xl font-bold inline border-b-4 border-[#00df9a] ">
            Adoption or Foster requests
          </p>
          <p className="py-6">Please use the form below to get in touch with me.</p>
        </div>

        <div className=" flex justify-center items-center w-full" name="applyfoster">
          <form
            action="https://getform.io/f/19890081-7383-4319-832f-c7a6294b1408"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="5"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            ></textarea>

            <button className="text-black bg-[#00df9a] cursor-pointer px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Savelives;