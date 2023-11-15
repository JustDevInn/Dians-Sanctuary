import React from 'react'
import { Link } from 'react-router-dom';
import {FaFacebook, FaInstagram} from 'react-icons/fa';
import {MdOutlineMail} from 'react-icons/md'

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth', // Add smooth scrolling effect
        });
      };

  return (
    <div className='bg-gradient-to-b from-[#E9F1F7] to-[#E7DFC6] max-w[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div className='w-full text-center lg:px-10'>
        <h1 className='w-full text-3xl font-thin text-[#54426B] uppercase tracking-wider md:text-4xl md:mb-8'>Dharmawangsa</h1>
        <p className='md:text-2xl text-xl font-bold tracking-wide text-[#623CEA] py-2'>Adopting a rescued animal is an act of <a href='/' class="underline decoration-[#54426B]">kindness</a>.</p>
        <div className='flex justify-around my-6'>
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className='text-[#54426B] hover:text-[#623CEA]'><FaFacebook size={30} /></a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className='text-[#54426B] hover:text-[#623CEA]'><FaInstagram size={30} /></a>
        <a href="mailto:peeters.justin@yahoo.com" className='text-[#54426B] hover:text-[#623CEA]'><MdOutlineMail size={30} /></a>
        </div>
        </div>
        <div className="lg:col-span-2 flex justify-between mt-6 lg:px-10 font-thin text-[#54426B]">
            <div>
                <h6 className="h-[20px] mb-6 text-[#623CEA] uppercase tracking-widest font-bold">Change</h6>
                <ul>
                    <li className='p-2 hover:text-[#623CEA] tracking-wide' text-sm>
                        <Link to="/change" onClick={scrollToTop}>
                          Education
                        </Link>
                    </li>
                    <li className='p-2 hover:text-[#623CEA] tracking-wide' text-sm>
                        <Link to="/change" onClick={scrollToTop}>
                          Law
                        </Link>
                    </li>
                    <li className='p-2 hover:text-[#623CEA] tracking-wide' text-sm>
                        <Link to="/compassion" onClick={scrollToTop}>
                          Stories
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <h6 className="h-[20px] mb-6 text-[#623CEA] uppercase tracking-widest font-bold">Save lives with us</h6>
                <ul>
                    <li className='p-2 hover:text-[#623CEA] tracking-wide' text-sm>
                        <Link to="/donate" onClick={scrollToTop}>
                          Donate
                        </Link>
                    </li>
                    <li className="p-2 hover:text-[#623CEA] tracking-wide">
                        <Link to="/savelives" onClick={scrollToTop}>
                          Adoption
                        </Link>
                    </li>
                    <li className="p-2 hover:text-[#623CEA] tracking-wide">
                        <Link to="/savelives" onClick={scrollToTop}>
                          Fostering
                        </Link>
                    </li>
                    <li className='p-2 hover:text-[#623CEA] tracking-wide' text-sm><a href="mailto:peeters.justin@yahoo.com">Volunteer</a></li>
                </ul>
            </div>
            <div>
                <h6 className="h-[20px] mb-6 text-[#623CEA] uppercase tracking-widest font-bold">Contact</h6>
                <ul>
                    <li className='pl-2' text-sm>Ibu Sri</li>
                    <li className='pl-2' text-sm>+20388010293</li>
                    <h6 className="font-medium text-[#623CEA]">Address</h6>
                    <li className='pl-2' text-sm>Bali 82121</li>
                    <li className='pl-2' text-sm>Tabanan, Kabupaten <br></br>Tabanan</li>
                    <li className='pl-2' text-sm>Jl. Darmawangsa No.7, <br></br>Delod Peken, Kec.</li>
                </ul>
            </div>
        </div>
        <p className='text-xs text-[#623CEA] flex justify-center'>© 2022 Ibu's sanctuary. All Rights Reserved</p>
    </div>
  )
}

export default Footer