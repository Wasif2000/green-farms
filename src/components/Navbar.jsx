import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#34ad54]">
      <div className="w-full h-16 sm:h-20 flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-0">
          <span className="text-white">Farm</span>
          <span className="text-[#f93]">Fresh</span>
        </h1>
        <ul className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 text-sm sm:text-lg text-white font-bold">
          <li className='hover:underline hover:text-blue-800'>
            <Link to="/FirstPage">First</Link>
          </li>
          <li className='hover:underline hover:text-blue-800'>
            <Link to="/SecondPage">Second</Link>
          </li>
          <li className='hover:underline hover:text-blue-800'>
            <Link to="/ThirdPage">Third</Link>
          </li>
          <li className='hover:underline hover:text-blue-800'>
            <Link to="/FourthPage">Fourth</Link>
          </li>
          <li className='hover:underline hover:text-blue-800'>
            <Link to="/FifthPage">Fifth</Link>
          </li>
          <li className='hover:underline hover:text-blue-800'>
            <Link to="/SixthPage">Sixth</Link> 
          </li>
          <li className='hover:underline hover:text-blue-800'>
            <Link to="/SeventhPage">Seventh</Link>
          </li>
          <li className='hover:underline hover:text-blue-800'>
            <Link to="/EighthPage">Eighth</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
