import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  //smooth scrolling
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Add smooth scrolling effect
    });
  };

  return (
    <div className="bg-white flex justify-between items-center h-24  mx-auto px-4 text-black sticky top-0 pl-20 pr-20">
      <h1 className="w-full text-2xl font-bold text-[#00df9a]">
        <Link to="/" onClick={scrollToTop}>
          Ibu's Sanctuary.
        </Link>
      </h1>
      <ul className="hidden md:flex">
        <li className="p-4">
          <Link to="/compassion" onClick={scrollToTop}>
            Compassion
          </Link>
        </li>
        <li className="p-4">
          <Link to="/change" onClick={scrollToTop}>
            Change
          </Link>
        </li>
        <li className="p-4">
          <Link to="/savelives" onClick={scrollToTop}>
            Save lives
          </Link>
        </li>
        <li className="p-4">
          <Link to="/about" onClick={scrollToTop}>
            About
          </Link>
        </li>
        <button
          className="bg-[#00df9a] w-[150px] rounded-md font-medium my-3 py-3 hover:scale-110 duration-300 ml-10"
          onClick={scrollToTop}
        >
          <Link to="/donate">Donate</Link>
        </button>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 ease-in-out duration-500 bg-white' : 'fixed left-[-100%]'}>
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
          <Link to="/" onClick={scrollToTop}>
            Dian's Sanctuary.
          </Link>
        </h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600">
            <Link to="/compassion" onClick={scrollToTop}>
              Compassion
            </Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link to="/change" onClick={scrollToTop}>
              Change
            </Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link to="/savelives" onClick={scrollToTop}>
              Save lives
            </Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link to="/about" onClick={scrollToTop}>
              About
            </Link>
          </li>
          <button
            className="bg-[#00df9a] w-[200px] rounded-md font-medium my-3 py-3 hover:scale-110 duration-300"
            onClick={scrollToTop}
          >
            <Link to="/donate">Donate</Link>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
