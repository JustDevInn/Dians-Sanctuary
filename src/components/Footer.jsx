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
    <div className='bg-gradient-to-t from-black to-gray-800 max-w[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div className='text-center px-10'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Ibu's Sanctuary.</h1>
        <p className='md:text-2xl text-xl font-bold text-gray-300 py-2'>Adopting a rescued animal is an act of <a href='/' class="underline decoration-[#00df9a]">kindness</a>.</p>
        <div className='flex justify-around my-6'>
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className='hover:text-[#00df9a]'><FaFacebook size={30} /></a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className='hover:text-[#00df9a]'><FaInstagram size={30} /></a>
        <a href="mailto:peeters.justin@yahoo.com" className='hover:text-[#00df9a]'><MdOutlineMail size={30} /></a>
        </div>
        </div>
        <div className="lg:col-span-2 flex justify-between mt-6 px-10">
            <div>
                <h6 className="font-medium text-gray-400">Change</h6>
                <ul>
                    <li className='p-2 hover:text-[#00df9a]' text-sm>
                        <Link to="/change" onClick={scrollToTop}>
                          Education
                        </Link>
                    </li>
                    <li className='p-2 hover:text-[#00df9a]' text-sm>
                        <Link to="/change" onClick={scrollToTop}>
                          Law
                        </Link>
                    </li>
                    <li className='p-2 hover:text-[#00df9a]' text-sm>
                        <Link to="/compassion" onClick={scrollToTop}>
                          Stories
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <h6 className="font-medium text-gray-400">Save lives with us</h6>
                <ul>
                    <li className='p-2 hover:text-[#00df9a]' text-sm>
                        <Link to="/donate" onClick={scrollToTop}>
                          Donate
                        </Link>
                    </li>
                    <li className="p-2 hover:text-[#00df9a]">
                        <Link to="/savelives" onClick={scrollToTop}>
                          Adoption
                        </Link>
                    </li>
                    <li className="p-2 hover:text-[#00df9a]">
                        <Link to="/savelives" onClick={scrollToTop}>
                          Fostering
                        </Link>
                    </li>
                    <li className='p-2 hover:text-[#00df9a]' text-sm><a href="mailto:peeters.justin@yahoo.com">Volunteer</a></li>
                </ul>
            </div>
            <div>
                <h6 className="font-medium text-gray-400">Contact</h6>
                <ul>
                    <li className='pl-2' text-sm>Ibu Sri</li>
                    <li className='pl-2' text-sm>+20388010293</li>
                    <h6 className="font-medium text-gray-400">Address</h6>
                    <li className='pl-2' text-sm>Bali 82121</li>
                    <li className='pl-2' text-sm>Tabanan, Kabupaten <br></br>Tabanan</li>
                    <li className='pl-2' text-sm>Jl. Darmawangsa No.7, <br></br>Delod Peken, Kec.</li>
                </ul>
            </div>
        </div>
        <p className='text-xs text-gray-600 flex justify-center'>© 2022 Ibu's sanctuary. All Rights Reserved</p>
    </div>
  )
}

export default Footer