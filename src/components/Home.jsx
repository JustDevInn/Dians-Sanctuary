import React from 'react';
import { Link } from 'react-router-dom';
import Chewy from '../assets/chewy.jpg'
import Dog1 from '../assets/dog1.jpg';
import Dog2 from '../assets/dog2.jpg';
import Dog3 from '../assets/dog3.jpg';

const Home = () => {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth', // Add smooth scrolling effect
        });
      };

  return (
    // Hero banner
    <div className='w-full'>
    <div className='text-white bg-savelivesdog1-img bg-cover bg-center'>
        <div className='max-w w-full h-screen flex flex-col justify-end md:pl-20 bg-white bg-opacity-10'>
            <p className='text-[#54426B] uppdercase tracking-wider font-normal md:w-3/5 text-xl bg-[#E7DFC6] bg-opacity-50 rounded-t px-4 pt-2 uppercase'>Sanctuary for animals in need</p>
            <div className='flex flex-col justify-center bg-[#E7DFC6] bg-opacity-50 md:w-3/5 px-4 '>
                <p className='md:text-3xl sm:text-2xl text-xl font-bold py-4 text-[#E9F1F7] tracking-wider'>Loving and caring for the unwanted.</p>
            <p className='md:text-3xl sm:text-2xl text-xl font-bold text-[#54426B] uppercase tracking-wider'>['Rescues.','Adoptions.', 'Fostering.']</p> 
           
            </div>
            <p className='md:text-2xl text-xl text-[#54426B] py-2 rounded-b bg-[rgb(231,223,198)] bg-opacity-50 md:w-3/5 px-4 font-thin tracking-wider'>Adopting a rescued animal is an act of <a href='/' class="underline decoration-[#623CEA]">kindness</a>.</p>
            <button className=' w-[150px] ml-10 my-3 py-3 p-3 bg-[#54426B] text-[#E7DFC6] tracking-widest  font-bold hover:bg-[#E7DFC6] hover:text-[#54426B] border-2 border-[#54426B] uppercase'><Link to="/donate" onClick={scrollToTop}>DONATE</Link></button>
        </div> 
    </div>

    {/* About us */}
    <div className='w-full h-screen md:px-20 flex justify-center items-center bg-gradient-to-b from-[#E7DFC6] to-[#E9F1F7] tracking-wider'>
      <div className='max-w-[1240px] grid md:grid-cols-2 '>
        <img src={Chewy} alt="Chewy-friend" className='hidden md:block w-full mx-auto md:px-2'/>
        <div className='flex flex-col justify-center align-center md:px-2 mt-10'>
          <p className='text-[#54426B] text-2xl tracking-wider font-normal  p-2 '>About us</p>
          <h1 className='md:text-4xl sm:text-3xl text-4xl font-thin py-2 text-[#623CEA]  pl-2'>A sanctuary for all animals.</h1>
          <p className='text-[#54426B] font-thin  p-2'>"When we learn to <a href='/' class="underline decoration-[#623CEA] ">respect</a> all life,<br></br>
              we learn to <a href='/' class="underline decoration-[#623CEA] ">love</a> all life."</p>
          <button className='w-[150px] my-5 py-3 ml-10 bg-[#54426B] text-[#E7DFC6] tracking-widest  font-bold hover:bg-[#E7DFC6] hover:text-[#54426B] border-2 border-[#54426B] uppercase'>
          <Link to="/about" onClick={scrollToTop}>Read more..</Link> </button>
        </div>
      </div>
    </div>

    {/* Tips & Tricks */}
    <div className='w-full  bg-gradient-to-b from-[#E9F1F7] to-[#E7DFC6] py-10 text-white px-4 md:px-10 tracking-wider'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2'>
                <h1 className='text-5xl font-bold py-2 text-[#54426B] sm:pb-10'>Tips & trick to take care of rescues?</h1>
                <p className='text-[#54426B] font-normal'>Sign up to our newsletter</p>
            </div>
            <div className='mt-10 md:my-0'>
                <div className='flex flex-col items-center justify-between w-full'>
                    <input className="p-3 flex w-full rounded-md text-black" type="email" placeholder="Enter email" required/>
                    <button className='w-[150px] ml-4 my-6 px-6 py-3 bg-[#54426B] text-[#E7DFC6] tracking-widest  font-bold hover:bg-[#E7DFC6] hover:text-[#54426B] border-2 border-[#54426B] uppercase'>Notify me</button>
                </div>
                <p className='text-[#54426B] font-thin'>We care about the protection of our rescues. Read our <a href='/' class="underline decoration-[#623CEA]">Policy.</a></p>
            </div>
        </div>
    </div>

      {/* Rescues */}
      <div className='w-full py-[10rem] px-4 md:px-20 bg-gradient-to-b from-[#E7DFC6] to-[#E9F1F7] flex flex-col items-center tracking-wider text-[#54426B]'>
      <h1 className='text-3xl font-bold mb-20 uppercase'>Our rescues</h1>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-6">
            
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'> 
                <img src={Dog1} alt="Dog" className=' object-cover h-48 w-96 mx-auto mt-[-3rem] bg-white rounded-lg'/>
                <p className='text-xl font-thin text-center py-8'>Beethoven</p>
                <p className='text-center text-4xl font-normal uppercase'>Bobby</p>
                <div className='text-left font-thin'>
                    <p className='p4-2 border-b mx-8 mt-8'>- Long hair</p>
                    <p className='p4-2 border-b mx-8'>- Fully-vaccinated</p>
                    <p className='p4-2 border-b mx-8'>- Familie dog, loves being around</p>
                </div>
            </div>
            
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'> 
                <img src={Dog2} alt="Dog" className='object-cover h-48 w-96 mx-auto mt-[-3rem] bg-white rounded-lg'/>
                <p className='text-xl font-thin text-center py-8'>Sausage dog</p>
                <p className='text-center text-4xl font-normal uppercase'>Russel</p>
                <div className='text-left font-thin'>
                    <p className='p4-2 border-b mx-8 mt-8'>- Short hair</p>
                    <p className='p4-2 border-b mx-8'>- Fully-vaccinated</p>
                    <p className='p4-2 border-b mx-8'>- Energetic and playfull</p>
                </div>
            </div>
            
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'> 
                <img src={Dog3} alt="Dog" className='object-cover h-48 w-96 mx-auto mt-[-3rem] bg-white rounded-lg'/>
                <p className='text-xl font-thin text-center py-8'>Bali dog</p>
                <p className='text-center text-4xl font-normal uppercase'>Humfrey</p>
                <div className='text-left font-thin'>
                    <p className='p4-2 border-b mx-8 mt-8'>- Short hair</p>
                    <p className='p4-2 border-b mx-8'>- Fully-vaccinated</p>
                    <p className='p4-2 border-b mx-8'>- Loves to chill and hang out</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Home