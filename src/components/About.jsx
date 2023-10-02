import React from 'react'
import Typed from 'react-typed';
import { Link } from 'react-router-dom';

const About = () => {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth', // Add smooth scrolling effect
        });
      };

  return (
    <div>
         {/* Hero banner */}
    <div className='text-white bg-aboutdog-img bg-cover bg-center'>
        <div className='max-w w-full h-screen mx-auto text-start flex flex-col justify-end bg-white bg-opacity-10 pb-10 md:pl-20 md:pr-20'>
            <p className='text-[#00df9a] md:w-3/5 bg-gray-600 bg-opacity-50 rounded-t pl-2 pt-2 border-l font-bold'>About</p>
            <div className='flex flex-col justify-center bg-gray-600 bg-opacity-50  md:w-3/5 pl-2 border-l'>
            <Typed 
            className='md:text-3xl sm:text-2xl text-xl font-bold'
            strings={['Inspiring.','Compassion.', 'Creating change.']} 
            typeSpeed={100} 
            backSpeed={50} 
            loop

            />
            </div>
            <p className='md:text-2xl text-xl font-bold py-2 rounded-b bg-gray-600 bg-opacity-50  md:w-3/5 pl-2 border-l text-gray-300'>Inspiring compassion;
            creating change.</p>
            <button className='bg-transparent text-white ml-10 text-bold border-2 w-[200px] rounded-md font-medium my-3 py-3 hover:scale-110 duration-300 hover:text-[#00df9a] hover:border-[#00df9a]'>
            <Link to="/savelives#contactSection">Adoption request</Link>
            </button>

        </div>
    </div>
{/* Creating change */}
    <div className='bg-gradient-to-b from-black to-gray-800 w-full py-16 text-white px-4 pl-20 pr-20'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-2'>
            <div className='my-4 border-l pl-10'>
                <h1 className='font-bold text-2xl'>Our mission</h1>
                <p className='py-2'>To put compassion into action and create <span className='underline decoration-[#00df9a]'>sustainable change for Bali’s animals.</span></p>
            </div>
            <div className='my-4 border-l pl-10'>
                <h1 className='font-bold text-2xl'>Our Vision</h1>
                <p className='py-2'>We envision a Bali in which each village is its own natural sanctuary for animals; where all animals are routinely vaccinated, healthy, cared for, and treated with <span className='underline decoration-[#00df9a]'>compassion and respect</span>, and the population is controlled at a manageable and sustainable level.</p>
            </div>
        </div>
    </div>

    {/* who is dian? */}
    <div className='bg-gradient-to-t from-black to-gray-800 w-full py-16 text-white px-4 pl-20 pr-20'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-2'>
            <div className='my-4 pl-10'>
                <h1 className='font-bold text-2xl'>Who is Ibu Sanctuary?</h1>
            </div>
            <div className='my-4 pl-10'>
                <p className='py-2'>"Ibu's Sanctuary" emerges as a beacon of hope amidst the lush landscapes of Bali, a sanctuary born from the boundless dedication of its founder, Alejandro Martinez. In 2010, Alejandro, a passionate wildlife advocate from Mexico, embarked on a transformative journey to Bali, captivated by its enchanting beauty and diverse fauna.
<br></br><br></br>
Determined to make a difference, he laid the foundation for "Ibu's Sanctuary," a non-profit organization rooted in the spirit of compassion and driven by the desire to protect Bali's precious creatures. In the local language, "Ibu" signifies both "mother" and "nurturer," embodying the organization's nurturing approach towards safeguarding the island's ecological wonders.</p>
            </div>
        </div>
    </div>

    {/* Donation Hero */}
    <div className='text-black bg-puppycare-img bg-cover bg-right md:bg-center lg:bg-top object-top-rigth'>
        <div className='max-w w-full h-screen mx-auto text-start flex flex-col justify-end bg-white bg-opacity-10 pb-10 md:pl-20 md:pr-20'>
            <p className='text-white md:w-1/2 bg-gray-600 bg-opacity-50 rounded-t pl-2 pt-2'>Save Lives With Us</p>
            <div className='flex flex-col justify-center bg-gray-600 bg-opacity-50 md:w-1/2 pl-2 border-l'>
                <p className='md:text-3xl sm:text-2xl text-xl font-bold py-4'>Their future is in </p>
            <Typed 
            className='md:text-3xl sm:text-2xl text-xl font-bold'
            strings={['Our.','Your.']} 
            typeSpeed={100} 
            backSpeed={50} 
            loop
            />
            <p className='md:text-3xl sm:text-2xl text-xl font-bold py-4'>hands.</p>
            </div>
            <p className='text-white py-2 rounded bg-gray-600 bg-opacity-50 md:w-1/2 pl-2'>Support us to change the lives of animals, by
                changing the world they live in. Make a monthly
                pledge today..</p>
            <button className='bg-transparent text-white text-bold border-2 w-[200px] rounded-md font-medium my-3 py-3 hover:scale-110 duration-300 hover:text-[#00df9a] hover:border-[#00df9a]'>
                <Link to="/donate" onClick={scrollToTop}>DONATE</Link>
            </button>
        </div>
    </div>
    </div>
  )
}

export default About