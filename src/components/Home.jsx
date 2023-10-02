import React from 'react';
import { Link } from 'react-router-dom';
import Typed from 'react-typed';
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
    <div>
    <div className='text-white bg-dogscage-img bg-cover bg-center'>
        <div className='max-w w-full h-screen flex flex-col justify-end md:pl-20 bg-white bg-opacity-10'>
            <p className='text-[#00df9a] md:w-3/5 font-bold bg-gray-600 bg-opacity-50 rounded-t pl-2 pt-2'>Sanctuary for animals in need</p>
            <div className='flex flex-col justify-center bg-gray-600 bg-opacity-50 md:w-3/5 pl-2 border-l'>
                <p className='md:text-3xl sm:text-2xl text-xl font-bold py-4'>Loving and caring for the unwanted.</p>
            <Typed 
            className='md:text-3xl sm:text-2xl text-xl font-bold text-gray-300'
            strings={['Rescues.','Adoptions.', 'Fostering.']} 
            typeSpeed={100} 
            backSpeed={50} 
            loop

            />
            </div>
            <p className='md:text-2xl text-xl text-gray-300 py-2 font-bold rounded bg-gray-600 bg-opacity-50 md:w-3/5 pl-2'>Adopting a rescued animal is an act of <a href='/' class="underline decoration-[#00df9a]">kindness</a>.</p>
            <button className='bg-[#00df9a] w-[150px] ml-10 rounded-md font-medium my-3 py-3 hover:bg-black hover:text-[#00df9a] border hover:border-[#00df9a] hover:scale-110 duration-300'><Link to="/donate" onClick={scrollToTop}>DONATE</Link></button>
        </div> 
    </div>

    {/* HeroAbout */}
    <div className='w-full bg-white py-16 px-4 pl-20 pr-20'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 p-4'>
        <img src={Chewy} alt="Chewy-friend" className=' w-[500px] mx-auto my-4 rounded-md'/>
        <div className='flex flex-col justify-center p-4'>
          <p className='text-[#00df9a] font-bold'>About us</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>A sanctuary for all animals.</h1>
          <p>"When we learn to <a href='/' class="underline decoration-[#00df9a]">respect</a> all life,<br></br>
              we learn to <a href='/' class="underline decoration-[#00df9a]">love</a> all life."</p>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-3 py-3 mx-auto md:mx-0'>
          <Link to="/about" onClick={scrollToTop}>Read more..</Link> </button>
        </div>
      </div>
    </div>

    {/* Information */}
    <div className='bg-gradient-to-b from-black to-gray-800 w-full py-16 text-white px-4 pl-20 pr-20'>
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
                <p>We care about the protection of the our rescues. Read our <a href='/' class="underline decoration-[#00df9a]">Policy.</a></p>
            </div>
        </div>
    </div>

      {/* Rescues */}
      <div className='w-full py-[10rem] px-4 bg-white pl-20 pr-20 flex flex-col items-center'>
      <h1 className='text-3xl font-bold mb-20'>Our rescues</h1>
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
            
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'> 
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
    </div>
  )
}

export default Home