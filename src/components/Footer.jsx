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
        <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Ibu's Sanctuary.</h1>
        <p className='md:text-2xl text-xl font-bold text-gray-300 py-2'>Adopting a rescued animal is an act of <a href='/' class="underline decoration-[#00df9a]">kindness</a>.</p>
        <div className='flex justify-between md:w-[75%] my-6'>
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><FaFacebook size={30} /></a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><FaInstagram size={30} /></a>
        <a href="mailto:peeters.justin@yahoo.com"><MdOutlineMail size={30} /></a>
        </div>
        </div>
        <div className="lg:col-span-2 flex justify-between mt-6">
            <div>
                <h6 className="font-medium text-gray-400">Change</h6>
                <ul>
                    <li className='p-2' text-sm>Education</li>
                    <li className='p-2' text-sm>Law</li>
                    <li className='p-2' text-sm>Rabbies</li>
                    <li className='p-2' text-sm>Stories</li>
                </ul>
            </div>
            <div>
                <h6 className="font-medium text-gray-400 pl-1">Save lives with us</h6>
                <ul>
                    <li className='p-2' text-sm>Donate</li>
                    <li className="p-2">
                        <Link to="/savelives" onClick={scrollToTop}>
                          Adoption
                        </Link>
                    </li>
                    <li className="p-2">
                        <Link to="/savelives" onClick={scrollToTop}>
                          Fostering
                        </Link>
                    </li>
                    <li className='p-2' text-sm>Volunteer</li>
                </ul>
            </div>
            <div>
                <h6 className="font-medium text-gray-400 pl-1">Contact</h6>
                <ul>
                    <li className='p-1 pt-2' text-sm>Ibu Sri</li>
                    <li className='p-1 pb-2' text-sm>+20388010293</li>
                    <h6 className="font-medium text-gray-400 pl-1">Address</h6>
                    <li className='p-1' text-sm>Bali 82121</li>
                    <li className='p-1' text-sm>Tabanan, Kabupaten <br></br>Tabanan</li>
                    <li className='p-1' text-sm>Jl. Darmawangsa No.7, <br></br>Delod Peken, Kec.</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer