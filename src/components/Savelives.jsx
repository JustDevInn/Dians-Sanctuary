import React from 'react'
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
    <div className='text-[#E9F1F7] bg-savelivesdog1-img bg-cover bg-center'>
        <div className='max-w w-full h-screen mx-auto text-start flex flex-col justify-end bg-white bg-opacity-10 pb-10 md:pl-20 md:pr-20'>
            <p className='text-[#54426B]  md:w-3/5 text-xl font-normal bg-[#E7DFC6] bg-opacity-50 rounded-t pl-4 pt-2 tracking-wider uppercase'>Save Lives With Us</p>
            <div className='flex flex-col justify-center bg-[#E7DFC6] bg-opacity-50  md:w-3/5 px-4 '>
                <p className='md:text-3xl sm:text-2xl text-xl font-bold py-4 tracking-wider'>Give love. Get love. Save a life.</p>
            <p className='md:text-3xl sm:text-2xl text-xl uppercase font-bold text-[#54426B] tracking-wider'> ['Rescues.','Adoptions.', 'Fostering.']</p> 
            
            </div>
            <p className='md:text-2xl text-xl font-thin tracking-wider text-[#54426B] py-2 rounded-b bg-[#E7DFC6] bg-opacity-50  md:w-3/5 px-4 '>Adopting a rescued animal is an act of <a href='/' class="underline decoration-[#623CEA]">kindness</a>.</p>
            <button className='w-[150px] my-3 py-3 p-3 px-6 ml-10 bg-[#54426B] text-[#E7DFC6] tracking-widest  font-bold hover:bg-[#E7DFC6] hover:text-[#54426B] border-2 border-[#54426B] uppercase' onClick={scrollToContact}>Adopt</button>
        </div>
  </div>

    {/* Adopt one, save another */}
    <div className='h-screen flex justify-center items-center bg-gradient-to-b from-[#E7DFC6] to-[#E9F1F7] w-full py-16 text-[#54426B] p-20'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>
                <h1 className='text-5xl font-bold py-2 tracking-wider uppercase'>Adopt One, Save Another.</h1>
            </div>
            <div className='my-4 tracking-wider font-thin'>
                <p>When you adopt a rescued animal, you are opening up a space for
                    the next animal in need to receive life-saving care and a <span className='underline decoration-[#623CEA]'>second chance.</span></p>
            </div>
        </div>
    </div>

{/* Link to instagram page for dogs list */}
<div className='w-full flex justify-center bg-gradient-to-b from-[#E9F1F7] to-[#E7DFC6]'>
    <div className='w-full text-black bg-adoptlinkimg-img bg-cover bg-center object-bottom'>
        <div className='max-w w-full h-screen mx-auto flex flex-col justify-end items-left md:pl-10 bg-[white] bg-opacity-10 pb-10'>
            <p className='text-[#54426B] p-10 md:w-2/3 md:text-4xl text-2xl font-bold bg-[#E7DFC6] bg-opacity-50 rounded tracking-wider uppercase'>Find your furever friend.</p>
            <button className='ml-10  w-[150px] my-3 py-3 bg-[#54426B] text-[#E7DFC6] tracking-widest  font-bold hover:bg-[#E7DFC6] hover:text-[#54426B] border-2 border-[#54426B] uppercase'><a href="https://www.instagram.com" target="_blank" rel="noreferrer">ADOPT NOW</a></button>
        </div>
    </div>
</div>

{/* Love animals, But not ready to adopt? */}
<div className='h-screen flex justify-center items-center bg-gradient-to-b from-[#E7DFC6] to-[#E9F1F7] w-full py-5 text-[#54426B] px-4 pl-20 pr-20'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4 flex justify-center items-center align-center'>
                <h1 className='text-4xl md:text-5xl font-bold mb-10 md:mb-10 uppercase tracking-wider'><span className='underline decoration-[#623cea]'>Love animals</span>, But not ready to adopt?</h1>
            </div>
            <div className='my-4 flex justify-center items-center'>
               <FaShieldDog className='w-[200px] h-[200px]'/>
            </div>
        </div>
</div>

{/* Two weeks of your life can
change the course of theirs. */}
<div className='w-full flex justify-center bg-gradient-to-b from-[#E9F1F7] to-[#E7DFC6]'>
    <div className=' bg-changecourseimg-img bg-cover object-bottom bg-center'>
        <div className='max-w w-full h-screen mx-auto text-start flex flex-col justify-end bg-white bg-opacity-10 pb-10 md:pl-20 md:pr-20'>
            <p className='text-[#54426B] md:w-3/5 bg-[#E7DFC6] bg-opacity-50 rounded-t px-4 pt-2 font-bold text-xl tracking-wider uppercase'>Foster</p>
            <div className='flex flex-col justify-center bg-[#E7DFC6] bg-opacity-50  md:w-3/5 px-4'>
                <p className='md:text-3xl sm:text-2xl text-xl font-bold text-[#E9F1F7] py-4 tracking-wider'>Two weeks of your life can
                change the course of theirs.</p>
            </div>
            <p className=' text-[#54426B] rounded-b bg-[#E7DFC6] bg-opacity-50 font-normal md:w-3/5 px-4 py-2 tracking-widest'>Fostering gives you the chance to make a difference in the life of a rescued animal, without any of the long-term commitments.</p>
            <button className='ml-10 w-[200px] my-3 py-3 bg-[#54426B] text-[#E7DFC6] tracking-widest  font-bold hover:bg-[#E7DFC6] hover:text-[#54426B] border-2 border-[#54426B] uppercase' onClick={scrollToContact} >Apply to foster</button>
        </div>
    </div>
</div>

{/* Saving one animal  */}
<div className='h-screen flex justify-center items-center bg-gradient-to-b from-[#E7DFC6] to-[#E9F1F7] w-full md:px-10 text-[#54426B]'>
        <div className='max-w-[1240px] flex justify-center items-center'>
            <div className='flex justify-center items-center pt-10 pb-10'>
                <h1 className='text-4xl md:text-6xl font-bold px-4 text-center'>"<span className='underline decoration-[#623CEA]'>Saving</span> one animal won’t change the world, but for that <span className='underline decoration-[#623CEA]'>one animal</span>, the world will change <span className='underline decoration-[#623CEA]'>forever."</span></h1>
            </div>
        </div>
</div>
    
{/* Fostering information */}
<div className='w-full h-screen flex justify-center items-center bg-gradient-to-b from-[#E9F1F7] to-[#E7DFC6]'>
        <div className='max-w mx-auto text-start px-4 md:w-1/2 md:px-20'>
            <p className='text-[#54426B] text-2xl tracking-widest font-normal rounded-md  px-4'> "On average, animals undergoing rehabilitation in a shelter environment take several months to be fully healed and ready for adoption.
              <br></br><br></br>In a foster home, all that extra one-on-one love and attention, good food, special care, and a stress-free environment really help to speed up the recovery process."</p>
        </div>
</div>

{/* Adopt & Foster form */}
<div id="contactSection" name="contact" className="w-full h-screen flex justify-center items-center bg-gradient-to-b from-[#E7DFC6] to-[#E9F1F7] p-4 text-white"  >
      <div className="flex flex-col lg:flex-row md:flex-row w-full md:px-20 px-4  justify-between items-center mx-auto m-0">
        <div className="pb-8">
          <p className="text-4xl text-[#54426B] uppercase tracking-wider font-bold inline ">
            Adoption or Foster requests
          </p>
          <p className="py-6 text-[#54426B] tracking-wide">Please use the form to get in touch with me.</p>
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
              placeholder="Name"
              className="p-2 bg-transparent border-2 border-[#54426B]  text-[#54426B] focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="my-4 p-2 bg-transparent border-2 border-[#54426B]  text-[#54426B] focus:outline-none"
              required
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="5"
              className="p-2 bg-transparent border-2 border-[#54426B]  text-[#54426B] focus:outline-none"
              required
            ></textarea>

            <button className="px-6 py-3 my-8 w-[200px] bg-[#54426B] text-[#E7DFC6] tracking-widest  font-bold hover:bg-[#E7DFC6] hover:text-[#54426B] border-2 border-[#54426B] uppercase">
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