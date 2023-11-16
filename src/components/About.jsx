import React from 'react'
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
            <p className='text-[#54426B] md:w-3/5 bg-[#E7DFC6] bg-opacity-50 rounded-t pt-2 px-4 font-normal uppercase text-xl tracking-wider'>About</p>
            <div className='flex flex-col justify-center bg-[#E7DFC6] bg-opacity-50  md:w-3/5 px-4'>
            <p className='md:text-3xl sm:text-2xl text-xl font-bold py-4 uppercase'>'[Inspiring.','Compassion.', 'Creating change.]'</p>
            </div>
            <p className='md:text-2xl text-xl font-thin rounded-b bg-[#E7DFC6] bg-opacity-50  md:w-3/5 pb-2 px-4 text-[#54426B] '>Inspiring compassion;
            <span className='underline decoration-[#623CEA]'>creating change.</span></p>
            <button className='ml-10 w-[200px] my-3 py-3 bg-[#54426B] text-[#E7DFC6] tracking-widest  font-bold hover:bg-[#E7DFC6] hover:text-[#54426B] border-2 border-[#54426B] uppercase'>
            <Link to="/savelives#contactSection">Adoption request</Link>
            </button>

        </div>
    </div>
{/* Creating change */}
    <div className='bg-[#E7DFC6]  w-full py-16 text-[#54426B] px-4 md:px-20 tracking-wider'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-2'>
            <div className='my-4 border-l border-[#623CEA] pl-10'>
                <h1 className='font-normal text-4xl uppercase '>Our mission</h1>
                <p className='py-2 font-thin '>To put compassion into action and create <span className='underline decoration-[#623CEA]'>sustainable change for Bali’s animals.</span></p>
            </div>
            <div className='my-4 border-l border-[#623CEA] pl-10'>
                <h1 className='font-normal text-4xl uppercase '>Our Vision</h1>
                <p className='py-2 font-thin '>We envision a Bali in which each village is its own natural sanctuary for animals; where all animals are routinely vaccinated, healthy, cared for, and treated with <span className='underline decoration-[#623CEA]'>compassion and respect</span>, and the population is controlled at a manageable and sustainable level.</p>
            </div>
        </div>
    </div>

    {/* who is dian? */}
    <div className='bg-gradient-to-b from-[#E7DFC6] to-[#E9F1F7] w-full py-16 text-[#54426B] px-4 md:px-20 tracking-wider'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-2 px-4'>
            <div className='my-4'>
                <h1 className='font-normal text-4xl uppercase'>Who is Dharmawangsa?</h1>
            </div>
            <div className='my-4 '>
                <p className='py-2 font-thin '>"Ibu's Sanctuary" emerges as a beacon of hope amidst the lush landscapes of Bali, a sanctuary born from the boundless dedication of its founder, Alejandro Martinez. In 2010, Alejandro, a passionate wildlife advocate from Mexico, embarked on a transformative journey to Bali, captivated by its enchanting beauty and diverse fauna.
<br></br><br></br>
Determined to make a difference, he laid the foundation for "Ibu's Sanctuary," a non-profit organization rooted in the spirit of compassion and driven by the desire to protect Bali's precious creatures. In the local language, "Ibu" signifies both "mother" and "nurturer," embodying the organization's nurturing approach towards safeguarding the island's ecological wonders.</p>
            </div>
        </div>
    </div>

    {/* Donation Hero */}
    <div className='text-black bg-puppycare-img bg-cover bg-right md:bg-center lg:bg-top object-top-rigth'>
        <div className='max-w w-full h-screen mx-auto text-start flex flex-col justify-end bg-white bg-opacity-10 pb-10 md:pl-20 md:pr-20'>
            <p className='text-[#54426B] md:w-1/2 bg-[#E7DFC6] bg-opacity-50 rounded-t pt-2 px-4 uppercase tracking-wider text-xl'>Save Lives With Us</p>
            <div className='flex flex-col justify-center bg-[#E7DFC6] bg-opacity-50 md:w-1/2 p-4 '>
                <p className='md:text-3xl sm:text-2xl text-2xl font-bold py-4 text-[#E9F1F7] tracking-wider'>Their future is in </p>
            <p className='md:text-3xl sm:text-2xl text-xl font-bold text-[#54426B] uppercase tracking-wider'>['Our','Your']</p>
      
            <p className='md:text-3xl sm:text-2xl text-2xl font-bold py-4 text-[#E9F1F7] tracking-wider'>hands.</p>
            </div>
            <p className='text-[#54426B] py-2 rounded-b bg-[#E7DFC6] bg-opacity-50 md:w-1/2 pb-2 px-4 font-thin tracking-wider text-xl'>Support us to change the lives of animals, by
                changing the world they live in. Make a monthly
                pledge today..</p>
            <button className='ml-10 w-[200px] my-3 py-3 bg-[#54426B] text-[#E7DFC6] tracking-widest  font-bold hover:bg-[#E7DFC6] hover:text-[#54426B] border-2 border-[#54426B] uppercase'>
                <Link to="/donate" onClick={scrollToTop}>DONATE</Link>
            </button>
        </div>
    </div>
    </div>
  )
}

export default About