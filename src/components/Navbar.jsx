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
    <div className="bg-[#E7DFC6] flex justify-between items-center h-24  mx-auto text-[#54426B] top-0 px-10">
      <h1 className="w-full text-xl lg:text-4xl md:text-2xl font-thin tracking-widest uppercase mr-4">
        <Link to="/" onClick={scrollToTop}>
        Dharmawangsa
        </Link>
      </h1>
      <ul className="hidden lg:flex font-normal tracking-widest uppercase">
        <li className="p-4 hover:text-[#623CEA]">
          <Link to="/compassion" onClick={scrollToTop}>
            COMPASSION
          </Link>
        </li>
        <li className="p-4 hover:text-[#623CEA]">
          <Link to="/change" onClick={scrollToTop}>
            CHANGE
          </Link>
        </li>
        <li className="p-4 hover:text-[#623CEA]">
          <Link to="/savelives" onClick={scrollToTop}>
            SAVE
          </Link>
        </li>
        <li className="p-4 hover:text-[#623CEA]">
          <Link to="/about" onClick={scrollToTop}>
            ABOUT
          </Link>
        </li>
        <button
          className="p-3 px-6 py-3 bg-[#54426B] text-[#E7DFC6] tracking-widest  font-bold hover:bg-[#E7DFC6] hover:text-[#54426B] border-2 border-[#54426B] uppercase"
          onClick={scrollToTop}
        >
          <Link to="/donate">DONATE</Link>
        </button>
      </ul>
      <div onClick={handleNav} className="block lg:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 ease-in-out duration-500 bg-[#E7DFC6]' : 'fixed left-[-100%]'}>
        <h1 className="w-full text-xl font-thin tracking-widest uppercase m-4 py-10">
          <Link to="/" onClick={() => { scrollToTop(); handleNav(); }}>
          Dharmawangsa
          </Link>
        </h1>
        <ul className="uppercase p-4 font-normal tracking-widest pt-5">
          <li className="p-5 border-b border-gray-100 w-1/2 hover:font-normal">
            <Link to="/compassion" onClick={() => { scrollToTop(); handleNav(); }}>
              Compassion
            </Link>
          </li>
          <li className="p-5 border-b border-gray-100 w-1/2 hover:font-normal">
            <Link to="/change" onClick={() => { scrollToTop(); handleNav(); }}>
              Change
            </Link>
          </li>
          <li className="p-5 border-b border-gray-100 w-1/2 hover:font-normal">
            <Link to="/savelives" onClick={() => { scrollToTop(); handleNav(); }}>
              Save lives
            </Link>
          </li>
          <li className="p-5 border-b border-gray-100 w-1/2 hover:font-normal">
            <Link to="/about" onClick={() => { scrollToTop(); handleNav(); }}>
              About
            </Link>
          </li>
          <button
            className="mt-10 px-6 py-3 bg-[#54426B] text-[#E7DFC6] tracking-widest  font-bold hover:bg-[#E7DFC6] hover:text-[#54426B] border-2 border-[#54426B] uppercase"
            onClick={() => { scrollToTop(); handleNav(); }}
          >
            <Link to="/donate">Donate</Link>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
